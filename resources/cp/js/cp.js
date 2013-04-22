console.log('mcp.js');

var dkvideos = {};

dkvideos.currentVideo = false;

dkvideos.preview = {
    init: function() {
        console.log('mcp.preview.init()');


        overlay = $('<div class="dkv-overlay"></div>');

        overlay.appendTo('body');

        $('.dkv-overlay, .dkv-modal .cancel').click(function() {
            dkvideos.preview.hide();

            return false;
        });
    },

    resize: function() {
        var winH = $(window).height();
        var winW = $(window).width();

        var playerTop = (winH / 2) - $('.dkv-player').outerHeight() / 2;
        var playerLeft = (winW / 2) - $('.dkv-player').outerWidth() / 2;

        $('.dkv-player').css('top', playerTop);
        $('.dkv-player').css('left', playerLeft);
    },

    play: function(video)
    {
        dkvideos.currentVideo = video;

        dkvideos.preview.show();
    },

    show : function() {
        $('.dkv-player').css('display', 'block');
        $('.dkv-overlay').css('display', 'block');
        dkvideos.preview.resize();
    },

    hide: function() {
        $('.dkv-overlay').css('display', 'none');
        $('.dkv-player .dkv-embed').html('');
        $('.dkv-player').css('display', 'none');
    }
};


// --------------------------------------------------------------------

// scroll

dkvideos.scroll = {
    init: function() {
        console.log('scroll init');

        $(window).scroll(function () {
            //console.log('scroll', $(window).scrollTop(), $(window).height(), $(document).height());
            if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
                // Works perfect for desktop browsers
                if($('.dkv-video-more').css('display') != "none")
                {
                    $('.dkv-video-more a').trigger('click');
                }
            }
        });
    }
};

// --------------------------------------------------------------------

dkvideos.preview.init();

$(document).ready(function() {
    angular.bootstrap($('.dkv-modal'), ['videos']);
});

$(window).resize(function() {
    dkvideos.preview.resize();
});


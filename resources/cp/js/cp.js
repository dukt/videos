console.log('mcp.js');

var dkvideos = {};

dkvideos.currentVideo = false;

dkvideos.preview = {
    init: function() {
        console.log('mcp.preview.init()');


        overlay = $('<div class="dv-overlay"></div>');

        overlay.appendTo('body');

        $('.dv-overlay, .dv-modal .cancel').click(function() {
            dkvideos.preview.hide();

            return false;
        });

        // $('#player .favorite').click(function() {


        //     if (!$('#player .favorite').hasClass('on')) {
        //         console.log('set favorite', dkvideos.currentVideo);
        //     } else {
        //         console.log('unset favorite', dkvideos.currentVideo);

        //         Craft.postActionRequest('videos/ajax/favoriteAdd', {videoUrl:dkvideos.currentVideo.url}, function(response) {

        //         });
        //     }

        //     return false;
        // });
    },

    resize: function() {
        var winH = $(window).height();
        var winW = $(window).width();

        var playerTop = (winH / 2) - $('#player').outerHeight() / 2;
        var playerLeft = (winW / 2) - $('#player').outerWidth() / 2;

        $('#player').css('top', playerTop);
        $('#player').css('left', playerLeft);
    },

    play: function(video)
    {
        dkvideos.currentVideo = video;

        dkvideos.preview.show();
    },

    show : function() {
        $('#player').css('display', 'block');
        $('.dv-overlay').css('display', 'block');
        dkvideos.preview.resize();
    },

    hide: function() {
        $('.dv-overlay').css('display', 'none');
        $('#player #videoDiv').html('');
        $('#player .title').html('Loading...');
        $('#player').css('display', 'none');
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
                if($('.dv-video-more').css('display') != "none")
                {
                    $('.dv-video-more a').trigger('click');
                }
            }
        });
    }
};

// --------------------------------------------------------------------

dkvideos.preview.init();

$(document).ready(function() {
    angular.bootstrap($('.dv-modal'), ['videos']);
});

$(window).resize(function() {
    dkvideos.preview.resize();
});


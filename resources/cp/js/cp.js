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

dkvideos.preview.init();

$(document).ready(function() {
    angular.bootstrap($('.dv-modal'), ['videos']);
});

$(window).resize(function() {
    dkvideos.preview.resize();
});
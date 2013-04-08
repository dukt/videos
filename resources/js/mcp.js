console.log('mcp.js');

var videos = {};

videos.preview = {
    init: function() {
        console.log('mcp.preview.init()');


        overlay = $('<div class="dv-overlay"></div>');

        overlay.appendTo('body');

        overlay.click(function() {
            videos.preview.hide();
        });

        $('#player').appendTo('body');

    },

    resize: function() {
        var winH = $(window).height();
        var winW = $(window).width();
        
        var playerTop = (winH / 2) - $('#player').outerHeight() / 2;
        var playerLeft = (winW / 2) - $('#player').outerWidth() / 2;
        $('#player').css('top', playerTop);
        $('#player').css('left', playerLeft);
    },

    show : function() {
        $('#player').css('visibility', 'visible');
        $('.dv-overlay').css('display', 'block');
    },

    hide: function() {
        $('#player').css('visibility', 'hidden');
        $('.dv-overlay').css('display', 'none');
    }
};

videos.preview.init();
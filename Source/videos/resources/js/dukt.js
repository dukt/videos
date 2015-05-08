// Utils

Dukt.Utils = {

    /**
     * positionCenter
     */
    positionCenter: function (el, container)
    {

        var top = (container.outerHeight() - el.outerHeight()) / 2;
        var left = (container.outerWidth() - el.outerWidth()) / 2;

        el.css('top', top);
        el.css('left', left);

        // console.log('center', el, container.outerHeight(), container.outerWidth(), top, left);
    }
};

// Modal

var Modal = Dukt.Base.extend({
    $container:null,
    $overlay:null,

    init: function()
    {
        var self = this;

        this.$container = $('<div class="videos-modal videos-player hidden"></div>');
        this.$inject = $('<div class="videos-modal-inject"></div>').appendTo(this.$container);
        this.$error = $('<div class="videos-modal-error error hidden"></div>').appendTo(this.$container);
        this.$container.appendTo($(document.body));
        this.$overlay = $('<div class="videos-overlay hidden"></div>').appendTo($(document.body));

        this.$overlay.click(function() {
            self.close();
        });
    },

    error: function(msg)
    {
        this.$error.html(msg);
        this.$error.removeClass('hidden');

        Dukt.Utils.positionCenter(this.$error, this.$container);
    },

    open: function()
    {
        this.onBeforeOpen();

        this.$container.removeClass('hidden');
        this.$overlay.removeClass('hidden');

        Dukt.Utils.positionCenter(this.$error, this.$container);
    },

    close: function()
    {
        this.onBeforeClose();

        this.$container.addClass('hidden');
        this.$overlay.addClass('hidden');
    },

    onBeforeOpen: function() {},
    onBeforeClose: function() {}
});

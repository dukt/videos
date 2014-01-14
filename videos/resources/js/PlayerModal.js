PlayerModal = Garnish.Modal.extend({

    video: null,
    $url:null,
    $container:null,


    play: function(url) {
        this.base();

        var data = {
            url: url
        };

        $.post(Craft.getUrl('videos/_player_modal'), data, $.proxy(function(response, textStatus, jqXHR)
        {
            if (textStatus == 'success')
            {
                if (!this.$container)
                {
                    var $container = $('<div class="modal dkv-modal">'+response+'</div>').appendTo(Garnish.$bod);
                    this.setContainer($container);
                }
                else
                {
                    this.$container.html(response);
                }

                this.show();
            }

        }, this));
    },

    onFadeOut: function()
    {
        this.$container.html('');
    }
});
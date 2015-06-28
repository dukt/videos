if (typeof Videos == 'undefined')
{
    Videos = {};
}


Videos.Player = Garnish.Modal.extend(
{
    init: function(settings)
    {
        this.setSettings(settings, Garnish.Modal.defaults);

        this.$player = $('<div class="player modal" />').appendTo(Garnish.$bod);

        this.base(this.$player, this.settings);

        this.play(this.settings);
    },

    play: function(settings)
    {
        this.setSettings(settings, this.settings);

        var data = {
            gateway: this.settings.gateway,
            videoId: this.settings.videoId
        };

        Craft.postActionRequest('videos/player', data, $.proxy(function(response, textStatus)
        {
            this.$player.html(response.html);
            this.updateSizeAndPosition();
        }, this));
    },

    hide: function()
    {
        this.base();
        this.$player.html('');
    }
});
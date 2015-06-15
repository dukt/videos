if (typeof Videos == 'undefined')
{
    Videos = {};
}

Videos.Explorer = Garnish.Base.extend({

    previewModal: null,
    previewInject: null,
    searchTimeout: null,

    init: function(explorer)
    {
        this.$explorer = explorer;
        this.$nav = $('nav', this.$explorer);
        this.$gatewaysSelect = $('.gateways select', this.$explorer);
        this.$inject = $('.inject', this.$explorer);
        this.$error = $('.error', this.$explorer);
        this.$spinner = $('.spinner', this.$explorer);
        this.$search = $('.search', this.$explorer);
        this.$links = $('a', this.$nav);

        this.addListener(this.$links, 'click', $.proxy(function(ev) {

            this.$links.filter('.sel').removeClass('sel');

            $(ev.currentTarget).addClass('sel');

            gateway = $(ev.currentTarget).data('gateway');
            method = $(ev.currentTarget).data('method');
            options = $(ev.currentTarget).data('options');

            this.getVideos(gateway, method, options);

            ev.preventDefault();
        }));


        this.addListener(this.$search, 'textchange', $.proxy(function(ev)
        {
            if (this.searchTimeout)
            {
                clearTimeout(this.searchTimeout);
            }

            this.searchTimeout = setTimeout($.proxy(this, 'search', ev), 500);
        }, this));

        this.addListener(this.$search, 'keypress', function(ev)
        {
            if (ev.keyCode == Garnish.RETURN_KEY)
            {
                ev.preventDefault();

                this.search(ev);
            }
        });

        // trigger first click

        $('div:not(.hidden) a:first', this.$nav).trigger('click');
    },

    search: function(ev)
    {
        q = $(ev.currentTarget).val();

        if(q.length > 0)
        {
            gateway = this.$gatewaysSelect.val();
            method = 'search';
            options = {
                q: q
            };

            this.getVideos(gateway, method, options);
        }
        else
        {
            this.$inject.html('');
        }
    },

    showPreview: function(ev)
    {
        var gateway = $(ev.currentTarget).data('gateway');
        var videoId = $(ev.currentTarget).data('id');

        if(!this.previewModal)
        {
            var $form = $('<form id="videos-preview-form" class="modal fitted"/>').appendTo(Garnish.$bod);
            var $body = $('<div class="body"></div>').appendTo($form);
            this.$previewInject = $('<div class="inject"/>').appendTo($body);
            var $buttons = $('<div class="buttons right"/>').appendTo($body);
            var $cancelBtn = $('<div class="btn">'+Craft.t('Cancel')+'</div>').appendTo($buttons);
            var $submitBtn = $('<input type="submit" class="btn submit" value="'+Craft.t('Continue')+'" />').appendTo($buttons);

            this.previewModal = new Garnish.Modal($form, {
                visible: false,
                resizable: true,
                onHide: $.proxy(function()
                {
                    this.$previewInject.html('');
                }, this)
            });

            this.addListener($cancelBtn, 'click', function() {
                this.previewModal.hide();
            });
        }
        else
        {
            this.previewModal.show();
        }

        var data = {
            gateway: gateway,
            videoId: videoId
        };

        Craft.postActionRequest('videos/preview', data, $.proxy(function(response, textStatus)
        {
            this.$previewInject.html(response.html);
            this.previewModal.updateSizeAndPosition();
        }, this));
    },

    getVideos: function(gateway, method, options)
    {
        data = {
            gateway: gateway,
            method: method,
            options: options
        };

        console.log('Videos.Explorer.getVideos() request', data);

        this.$error.addClass('hidden');
        this.$spinner.removeClass('hidden');

        Craft.postActionRequest('videos/getVideos', data, $.proxy(function(response, textStatus)
        {
            this.$spinner.addClass('hidden');
            this.$inject.html('');
            this.$error.html('');

            if(textStatus == 'success')
            {
                if(typeof(response.error) == 'undefined')
                {
                    this.$inject.html(response.html);
                }
                else
                {
                    this.$error.html(response.error);
                    this.$error.removeClass('hidden');
                }

                this.$videos = $('.video', this.$explorer);
                this.$playBtns = $('.play', this.$videos);
                this.addListener(this.$playBtns, 'click', 'showPreview');

                console.log('Videos.Explorer.getVideos() response', response);
            }

        }, this));
    }
});


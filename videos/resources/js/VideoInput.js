/**
 * Tweet field input class
 */

VideoInput = Garnish.Base.extend({

    $input: null,
    $spinner: null,
    $preview: null,

    lookupVideoTimeout: null,

    init: function(inputId)
    {
        this.$input = $('#'+inputId);
        this.$spinner = this.$input.next();
        this.$preview = this.$spinner.next();

        this.addListener(this.$input, 'textchange', 'lookupVideo');
    },

    lookupVideo: function()
    {
        var val = this.$input.val();

        if (val)
        {
            this.$spinner.removeClass('hidden');

            Craft.postActionRequest('videos/lookupVideo', { url: val }, $.proxy(function(response, textStatus)
            {
                this.$spinner.addClass('hidden');

                if (response && textStatus == 'success')
                {
                    if (!response.hasOwnProperty('error'))
                    {
                        if (!this.$preview.length)
                        {
                            this.$preview = $('<div class="dkv-video-preview"/>').insertAfter(this.$spinner);
                        }
                        else
                        {
                            this.$preview.show();
                        }

                        this.$preview.html(
                        '<div class="dkv-video-preview">' +

                        '    <img src="' + response.thumbnail + '" />' +

                        '    <div class="dkv-text">' +
                        '        <p class="dkv-title"><strong>' + response.title + '</strong></p>' +

                        '        <ul class="light">' +
                        '            <li><strong>Duration:</strong> ' + response.duration + '</li>' +
                        '            <li><strong>By</strong> <a href="' + response.authorUrl + '">' + response.authorName + '</a></li>' +
                        '            <li>' + response.plays + ' views</li>' +
                        '        </ul>' +
                        '    </div>' +
                        '</div>'
                        );
                    }
                    else
                    {
                        this.$preview.hide();
                    }

                } else {
                    this.$preview.hide();
                }
            }, this));
        }
        else
        {
            this.$preview.hide();
        }
    }
})
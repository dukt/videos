DkvEndpoint = {
    url: function(method, options) {
        return Craft.getActionUrl('videos/ajax/'+method, options);
    }
};
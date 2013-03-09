var data = {
    // ...
};

Craft.postActionRequest('duktvideos/ajax/hello', data, function(response) {
    $('.dukt-videos-inject').html(response);
});
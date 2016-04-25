LiKy.createComponent({
    fetch: function () {
        result.remoteRead(function (data) {
            
        }, {
            imgUrls: 2
        });
    }
}).bindElement('#form', {
});

var result = LiKy.createComponent({
    $remoteUrl: '/grabImage'
}).bindElement('#result');
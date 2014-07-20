(function(module) {
    "use strict";
    var Video = {},
        embed = '<div class="video-container"><video class="video-js vjs-default-skin" controls preload="auto" autoplay width="100%" height="100%">' +
            '<source src="$1" type="video/mp4" /></video></div>';

    Video.parse = function(postContent, callback) {
        var re = /<a.*(http:\/\/.*?mp4).*?\/a>/gm;
        if (re.test(postContent) !== false) {
            postContent = postContent.replace(re, embed);
        }
        callback(null, postContent);
    };

    module.exports = Video;
}(module));
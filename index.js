(function(module) {
    "use strict";
    var Video = {},
        embed = '<div id="player" config="$1"></div>';

    Video.parse = function(postContent, callback) {
        var re = /<a.*(http:\/\/.*?(m3u8|mp4)).*?\/a>/gm;
        if (re.test(postContent) !== false) {
            postContent = postContent.replace(re, embed);
        }
        callback(null, postContent);
    };

    module.exports = Video;
}(module));
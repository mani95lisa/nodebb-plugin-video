/**
 * Created by mani on 14-6-29.
 */
$(document).ready(function() {
    $(window).on('action:topic.loaded', function () {
        var player = $("#player");
        var config = '';
        try{
            config = player.attr('config');
        }catch(e){
            console.log(e);
        }
        if(config){
            jwplayer("player").setup({
                playlist: [{
                    sources: [{
                        file: config
                    }]
                }],
                flashplayer:'/plugins/nodebb-plugin-video/files/jwplayer.flash.swf',
                html5player: '/plugins/nodebb-plugin-video/files/jwplayer.html5.js',
                autostart:true,
                width: 640,
                height: 480,
                primary: "html5"
            });
        }
    });

    $(window).on('action:post.edit', function (){
        var player = $("#player");
        var config = '';
        try{
            config = player.attr('config');
        }catch(e){
            console.log(e);
        }
        if(config){
            jwplayer("player").setup({
                playlist: [{
                    sources: [{
                        file: config
                    }]
                }],
                flashplayer:'/plugins/nodebb-plugin-video/files/jwplayer.flash.swf',
                html5player: '/plugins/nodebb-plugin-video/files/jwplayer.html5.js',
                autostart:true,
                width: 640,
                height: 480,
                primary: "html5"
            });
        }
    });
});

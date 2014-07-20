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
                flashplayer:'/plugins/nodebb-plugin-video/swf/jwplayer.flash.swf',
                playlist: [{
                    file:config,
                    provider:'/plugins/nodebb-plugin-video/swf/HLSProvider6.swf',
                    type:'hls',
                }],
                autostart:true,
                width: 640,
                height: 480,
                primary: "flash"
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
                flashplayer:'/plugins/nodebb-plugin-video/swf/jwplayer.flash.swf',
                playlist: [{
                    file:config,
                    provider:'/plugins/nodebb-plugin-video/swf/HLSProvider6.swf',
                    type:'hls',
                }],
                autostart:true,
                width: 640,
                height: 480,
                primary: "flash"
            });
        }
    });
});

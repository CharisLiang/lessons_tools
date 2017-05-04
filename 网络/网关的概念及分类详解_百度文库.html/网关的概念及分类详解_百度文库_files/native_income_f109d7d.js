define("wkview:widget/raw_income/native_income/native_income.js",function(i,o,t){var n=i("wkcommon:widget/ui/lib/jquery/jquery.js"),a=i("wkcommon:widget/lib/tangram/base/base.js"),e=i("wkcommon:widget/ui/js_core/_dialog/_dialog.js"),s=i("wkcommon:widget/lib/doT/doT.min.js"),l=i("wkview:widget/raw_income/raw_income.js"),c=i("wkcommon:widget/ui/js_core/log/log.js"),d=(i("wkview:widget/html_view/html_reader/js/page.js").page,function(i){this.option=i,this.cacheList="",this.video="",this.cacheData=i,this.downloadTpl=s.template('{{? it.list == 1 }}\n<div class="ads-doc-list">\n    <div class="header">\n        <div class="myclose"></div>\n        <div class="close list-close-btn"></div>\n        <h2>{{= it.option.docTitle}}</h2>\n        <p>\u5171<span class="counter">{{= it.option.total}}</span>\u7bc7\u6587\u6863&nbsp;&nbsp;{{= it.option.downloadCount}}\u4eba\u5df2\u4e0b\u8f7d</p>\n        </div>\n    <div class="cont" id="cont">\n        <ul class="list dialog-list">\n            {{if (it.data && it.data.docs.length >0) {}}\n            {{for(var i=0;i< it.data.docs.length;i++) {}}\n            <li><span class="number">{{=i+1}}</span> <span class="ic ic-{{=it.data.docs[i].type}}"></span>{{=it.data.docs[i].title}}</li>\n            {{}}}\n            {{ } }}\n        </ul>\n        <a href="###" class="ui-bz-btn-senior native-ads-download-btn">\n            <b class="ui-bz-btn-p-40 ui-bz-btc ">\u514d\u8d39\u4e0b\u8f7d</b>\n            </a>\n        </div>\n    <div class="public-tip">{{= it.data.advertiser}} <span class="private">\u9690\u79c1\u4fdd\u969c<div class="hover-tip-hujiang"><span class="arrow-icon"></span>{{= it.data.privacy_policy}}</div></span></div>\n    </div>\n{{?? it.list == 0}}\n<div class="download-success-dialog">\n    <div class="myclose"></div>\n    <div class="close success-close-btn"></div>\n    <div class="dialog-left-greenbar"></div>\n    <div class="dialog-top">\n        <p class="doc-title" rel="new-dialog" alt="dialog_tit">{{=it.tmpdata.docTitle}}</p>\n        </div>\n    <div class="dialog-inner tac">\n        <img class="ui-bz-avatar ui-bz-avatar-60-60" src="{{=it.tmpdata.download_image}}" alt="" />\n        {{=it.tmpdata.download_tips}}\n        </div>\n    <div class="public-tip">{{=it.tmpdata.advertiser}} <span class="private">\u9690\u79c1\u4fdd\u969c<div class="hover-tip-hujiang"><span class="arrow-icon"></span>{{=it.tmpdata.privacy_policy}}</div></span>\n        </div>\n    </div>\n{{?? it.list == 2}}\n    <div class="video-con">\n        <span class="myclose"></span>\n        <span class="video-close"></span>\n        <div class="header clearfix">\n            <span class="green-icon"></span><p class="video-title">{{= it.options.title}}</p><span class="video-size">&nbsp;(\u8bd5\u770b3\u5206\u949f)</span>\n        </div>\n        <div class="video" id="video">\n            \n        </div>\n        <div class="temp" style="display: none;">\n            <div class="video-wrap">\n\n            </div>\n            <p class="wenan">\u9884\u89c8\u7ed3\u675f</p>\n            <a href="{{= it.options.button_url}}" class="wrap-button" target="_blank">\u67e5\u770b\u5b8c\u6574\u89c6\u9891</a>\n        </div>\n        <div class="foot">\n            <img src="{{= it.options.video_img}}" alt="" class="video-jigou-icon">\n            <div class="content">\n                <div class="content-title">\n                    <span class="jigou-name">{{= it.options.release_user}}</span>&nbsp;\u63d0\u4f9b\u672c\u89c6\u9891\n                </div>\n                <p class="jigou-miaosu">{{= it.options.abstract}}</p>\n                <div class="video-tail-info">\n                    <span class="people-num">{{= it.options.view_count}}</span>\u4eba\u5df2\u89c2\u770b&nbsp;&nbsp;{{= it.options.section}}\n                </div>\n            </div>\n            <a href="{{= it.options.button_url}}"  target="_blank" title="" class="video-button">\u67e5\u770b\u5b8c\u6574\u89c6\u9891</a>\n        </div>\n    </div>\n{{?}}'),this.cacheData.downloadTpl=this.downloadTpl,this.init()});d.prototype={init:function(){var i=(n("head"),document.createElement("script"));i.src="http://bosstatic.tob.bdimg.com/v1/pc/jwplayernew.js",i.charset="utf-8",n("head").append(i);var o=this;o.bindEvent(),window.oRawIncome=new l(o.cacheData)},initVideo:function(i){var o=this;n("#video").show(),jwplayer("video").setup({flashplayer:"http://webkk.chuanke.com/player/player_enc.swf",anthology:!0,playlist:[{file:i.video_file,provider:"enc",type:"flv",key:i.video_key}],uid:"0",seekheader:!0,quickseek:!0,icons:!0,bufferlength:"10",type:"http",streamer:"start",autostart:!0,width:894,height:504,events:{onError:function(){console.log("onError"),c.xsend(1,100929,{ac_id:o.tempOptions.ad_id})},onReady:function(){console.log("onReady")},onTime:function(i){console.log("onTime:",i.position,i.duration),i.position>180?(jwplayer("video").getFullscreen&&jwplayer("video").setFullscreen("false"),this.pause(),n(".temp").show()):n(".temp").hide()},onPlay:function(){console.log("onplay")},onPause:function(){console.log("onPause")},onComplete:function(){console.log("onComplete")},onPlaylistItem:function(){console.log("onPlaylistItem")},onPlaylistComplete:function(){console.log("onPlaylistComplete")},onBufferFull:function(){console.log("onbufferfull")}}})},showDialog:function(i,o){this.tempOptions=o;var t=this;if(1==i){var s=this.getData();if(s){var l=e.customDialog;n(".ys-ads-mask").show(),new l({width:464,height:564,content:t.downloadTpl({list:1,data:t.cacheList,option:t.option}),closeSelector:".myclose",mask:{bgColor:"transparent"}})}}else if(2==i){t.tempTime=Date.parse(new Date);var l=e.customDialog;n(".ys-ads-mask").show(),a.event.un(document,"keydown"),new l({width:896,height:703,content:t.downloadTpl({list:2,options:o}),closeSelector:".myclose",mask:{bgColor:"transparent"}}),t.initVideo(o)}},bindEvent:function(){var i=this;n("body").on("click",".success-close-btn, .list-close-btn",function(){n(".myclose").trigger("click"),n(".ys-ads-mask").hide()}),n("body").on("click",".video-close",function(){c.xsend(1,100912,{ac_id:i.tempOptions.ad_id,res_time:Date.parse(new Date)-i.tempTime}),n(".myclose").trigger("click"),n(".ys-ads-mask").hide(),n(window).trigger("videoClose")}),n("body").on("click",".native-ads-download-btn",function(){n(".myclose").trigger("click"),window.oRawIncome.showDialog(),c.xsend(1,100895)}),n("body").on("click",".video-button",function(){c.xsend(1,100913,{ac_id:i.tempOptions.ad_id,res_time:Date.parse(new Date)-i.tempTime})}),n("body").on("click",".wrap-button",function(){c.xsend(1,100914,{ac_id:i.tempOptions.ad_id,res_time:Date.parse(new Date)-i.tempTime})}),n("body").on("keyup",function(i){27==i.keyCode&&(n(".myclose").trigger("click"),n(".ys-ads-mask").hide(),n(window).trigger("videoClose"))})},getData:function(){var i=this;return i.cacheList?!0:(n.ajax({url:"/browse/interface/getgiftdocs?ad_id="+i.option.ad_id+"&t="+Math.random(),type:"get",success:function(o){i.cacheData.downloadUrl=o.download_url,i.cacheData.advertiser=o.advertiser,i.cacheData.privacy_policy=o.privacy_policy,i.cacheData.download_image=o.download_image,i.cacheData.download_tips=o.download_tips,i.cacheList=o;var t=e.customDialog;n(".ys-ads-mask").show(),new t({width:464,height:564,content:i.downloadTpl({list:1,data:o,option:i.option}),closeSelector:".myclose",mask:{bgColor:"transparent"}})},error:function(){console.log("data error")}}),!1)}},t.exports=d});
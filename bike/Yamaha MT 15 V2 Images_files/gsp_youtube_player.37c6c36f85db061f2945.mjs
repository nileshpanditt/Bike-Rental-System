(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{"./girnarsoft-react-common/plugins/youtube_player.js":function(e,t,a){"use strict";a.r(t);var o,i=a("./bd/utils/global.js"),r=[],n=[],d={resetPlayers:function(){r=[],n=[]},onYouTubeIframeAPIReady:function(e,t,a,i,r,n,d){var l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:{};o=new YT.Player(e,{height:a,width:i,class:r,videoId:t,events:{onReady:u},playerVars:{mute:d,autoplay:null!=l.autoplay?l.autoplay:1,rel:null!=l.rel?l.rel:0}}),"function"==typeof n&&(o.a||o.f||o.h).addEventListener("load",n)},onYouTubeIframeReady:function(e,t,a,o,i,d){var c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:{};n.push(e),r.push(new YT.Player(e,{height:a,width:o,class:i,videoId:t,events:{onReady:u,onStateChange:l},playerVars:{mute:d,autoplay:null!=c.autoplay?c.autoplay:1,rel:null!=c.rel?c.rel:0}}))},onYouTubeIframeAPIReadyForMobi:function(){var e=this;this.resetPlayers(),document.querySelectorAll('iframe[src*="youtube.com"]').forEach((function(t,a){t.id||(t.id="embeddedvideoiframe"+a),e.loadMobiVideos(t.id)}))},loadMobiVideos:function(e,t){(n=[]).indexOf(e)<=-1&&(n.push(e),r.push(new YT.Player(e,{events:{onReady:u,onStateChange:l}})))},loadVideo:function(e,t){o.loadVideoById(t,0,"default")}};function u(e){e.target.playVideo()}function l(e){try{if(e.data==YT.PlayerState.PLAYING){var t=e&&e.target&&e.target.a&&e.target.a.src;for(var a in r)r[a].a&&r[a].a.src!=t&&("function"==typeof r[a].stopVideo?r[a].stopVideo():r[a].a.contentWindow&&r[a].a.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}',"*"))}var n=e&&e.target&&e.target.h&&e.target.h.attributes&&e.target.h.attributes.id&&e.target.h.attributes.id.nodeValue,d=e&&e.target&&e.target.a?e.target.a.id:n,u=document.querySelector("iframe#".concat(d))?document.querySelector("iframe#".concat(d)):e.target.a,l={event:"pwaClick",pwaComponentName:u.parentElement.getAttribute("data-track-component")?u.parentElement.getAttribute("data-track-component"):"videoviewed",pwaSectionName:dataLayerObj?dataLayerObj.page_type:""},p=e.target.j.videoData||e.target.l.videoData||e.target.m.videoData,s="function"==typeof o.getVideoData?o.getVideoData():p;switch(l.pwaLinkLabel=s.title,setTimeout(c,100,"function"==typeof o.getVideoData?e.target:e.target.j.videoData?e.target.j:e.target.l.videoData?e.target.l:e.target.m,d,s.videoId?s.videoId:s.video_id),e.data){case YT.PlayerState.PLAYING:l.pwaAction="videoclicked";break;case YT.PlayerState.PAUSED:l.pwaAction="videopaused";break;case YT.PlayerState.ENDED:l.pwaAction="videoviewed100%";break;default:return}"videoclicked"!=l.pwaAction||u.getAttribute("first-view")?"videoviewed100%"!=l.pwaAction&&"videopaused"!=l.pwaAction||i.a.setDataLayer(null,null,!0,!1,l):(u.setAttribute("data-first-view","1"),i.a.setDataLayer(null,null,!0,!1,l))}catch(e){}}function c(e,t,a){var r=document.querySelector("iframe#".concat(t)),n=(e.currentTime?e.currentTime:e.playerInfo?e.playerInfo.currentTime:"")/(e.duration?e.duration:e.playerInfo?e.playerInfo.duration:"")*100,d={event:"pwaClick",pwaComponentName:r.parentElement.getAttribute("data-track-component")?r.parentElement.getAttribute("data-track-component"):"videoviewed",pwaSectionName:dataLayerObj?dataLayerObj.page_type:"",pwaLinkLabel:"function"==typeof o.getVideoData?o.getVideoData().title:o.videoData.title};return!r.getAttribute("three-fourth")&&n>=75?(d.pwaAction="videoviewed75%",r.setAttribute("data-three-fourth","1"),void i.a.setDataLayer(null,null,!0,!1,d)):!r.getAttribute("half")&&n>=50?(d.pwaAction="videoviewed50%",r.setAttribute("data-half","1"),void i.a.setDataLayer(null,null,!0,!1,d)):!r.getAttribute("one-fourth")&&n>=25?(d.pwaAction="videoviewed25%",r.setAttribute("data-one-fourth","1"),void i.a.setDataLayer(null,null,!0,!1,d)):void 0}window.youTubePlayer=d,t.default=d}}]);
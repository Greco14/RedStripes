function sending_sms(e){$.ajax({url:"http://services.newcomwi.com/mt/http/run?username=redstriperds&password=R3DP8Shrds&sender=8764447744&recipient=18765852845&messageType=SMS&message="+e,dataType:"jsonp",beforeSend:function(e){e.overrideMimeType("text/plain; charset=x-user-defined")}}).done(function(e,n,o){console.log("in"),console.log(e,n,o)}).fail(function(e,n,o){console.log("out"),console.log(e,n,o)})}function myfunc(e){console.log(e)}var Received;window.fbAsyncInit=function(){FB.init({appId:"1552388065005528",xfbml:!0,version:"v2.2"})},function(e,n,o){var i,t=e.getElementsByTagName(n)[0];e.getElementById(o)||(i=e.createElement(n),i.id=o,i.src="//connect.facebook.net/en_US/sdk.js",t.parentNode.insertBefore(i,t))}(document,"script","facebook-jssdk"),Main={init:function(){dropdowns=new Dropdowns,dropdowns.init()}},$(function(){Main.init()});
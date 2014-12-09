var Received;
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1552388065005528',
      xfbml      : true,
      version    : 'v2.2'
    });

    // ADD ADDITIONAL FACEBOOK CODE HERE
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

// function sending_sms(testing){

//     $.ajax({
//       url:'http://services.newcomwi.com/mt/http/run?username=redstriperds&password=R3DP8Shrds&sender=8764447744&recipient=18765852845&messageType=SMS&message='+testing+'',
//       dataType: 'jsonp',
//       beforeSend: function( xhr ) {
//           xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
//         }
//       }) // Notice! JSONP <-- P (lowercase)
//       .done(function (responseData, textStatus, jqXHR) {
//           console.log("in");
//           // var data = JSON.parse(responseData['AuthenticateUserResult']);
//           console.log(responseData, textStatus, jqXHR);
//       })
//       .fail( function (responseData, textStatus, errorThrown) {
//          console.log("out");
//           console.log(responseData, textStatus, errorThrown);
//     });
//   };

// function myfunc(json) {
//   console.log(json);
// }
Main = {
  init: function(){
    dropdowns = new Dropdowns();
    dropdowns.init();
  },
};
$(function(){
  Main.init();
});
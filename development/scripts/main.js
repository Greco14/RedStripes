
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

  $(function(){
    $.ajax({
      url:'http://services.newcomwi.com/mt/http/run?username=redstriperds&password=R3DP8Shrds&sender=8764447744&recipient=18765852845&messageType=SMS&message=KeepTesting',
      dataType: 'jsonp', // Notice! JSONP <-- P (lowercase)
      success:function (responseData, textStatus, jqXHR) {
          console.log("in");
          // var data = JSON.parse(responseData['AuthenticateUserResult']);
          console.log(responseData, textStatus, jqXHR);
      },
      error: function (responseData, textStatus, errorThrown) {
          console.log(responseData, textStatus, errorThrown);
      }
    });
  });


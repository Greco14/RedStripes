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
// $(function() {
//   alert('Charged!!')
//     var size = $("#full_p > p").size();
//   $(".Column1 > p").each(function(index){
//     var counting = size/3;
//     console.log(counting);
//     if (index >= counting){
//       $(this).appendTo(".Column2");
//     }
//     if(index>= counting*2){
//        $(this).appendTo(".Column3");
//     }
//   });
// });


var first_fill ;

var headers, newPerson, request, serviceRoot ;
var oHeaders = {}
  serviceRoot = "https://www.redstriperewards.com/services/";
  // headers =  { "DataServiceVersion": "2.0" };

  // oHeaders['accept']='application/json;charset=utf-8';
  // oHeaders['application/json;odata']='fullmetadata';
  // // oHeaders['q']='0.7, application/json'; 
  // // oHeaders['q']='0.5, */*;q=0.1';
  // // oHeaders['X-CSRF-Token']='header_xcsrf_token';
  // oHeaders['DataServiceVersion'] = "2.0";
  oHeaders = {
    'DataServiceVersion': '2.0',
    'MaxDataServiceVersion': '3.0',
    'Content-Type': 'application/json; charset=utf-8',
    'Accept': 'application/json'
  }

  // oHeaders= {"X-Requested-With": "XMLHttpRequest",                        
  //                          "Content-Type": "application/atom+xml", 
  //                           "DataServiceVersion": "2.0",  
  //                           "Accept": "application/atom+xml,application/atomsvc+xml,application/xml", 
  //                            "X-CSRF-Token": 'header_xcsrf_token'}  
  // oHeaders['Content-Type'] = "application/atom+xml";
  // oHeaders['DataServiceVersion'] = "2.0";
// oHeaders["x-http-method"] = "MERGE";
OData.defaultHttpClient.enableJsonpCallback = true;
OData.jsonHandler.recognizeDates = true;
// request = { 
//     headers : oHeaders, // object that contains HTTP headers as name value pairs 
//     requestUri : updateUrl, // OData endpoint URI 
//     method : "POST", // HTTP method (GET, POST, PUT, DELETE) 
//     data : entry // Payload of the request (in intermediate format) 
// };


first_fill = function(name, lastname, cellphone, email, age, confirmationCode, password, temporaryPassword) {
  
  newPerson = {
    name: name,
    lastname: lastname,
    cellphone: cellphone,
    email: email,
    age: age,
    confirmationCode: confirmationCode,
    password: password,
    temporaryPassword: temporaryPassword
  };
  console.log(newPerson)


//   requested = { 
//      // headers : oHeaders, // object that contains HTTP headers as name value pairs 
//     requestUri : serviceRoot + "users", // OData endpoint URI 
//     method : 'POST', // HTTP method (GET, POST, PUT, DELETE) 
//     data : newPerson
// };
requested = { 
    headers : oHeaders, // object that contains HTTP headers as name value pairs 
    requestUri : serviceRoot + "users", // OData endpoint URI 
    method : "POST", // HTTP method (GET, POST, PUT, DELETE) 
    data : newPerson // Payload of the request (in intermediate format) 
};
console.log(requested);
  OData.request(requested, (function(data, response) {
     console.log(response);
  }), function(err) {
    console.log(err);
  });

  // OData.request(request , function (data, response) {
  //       //success handler
  //       console.log(response);
  //   }, undefined, OData.batchHandler);

  // OData.request( {
  //    requestUri: serviceRoot + "users",
  //    method: "POST",
  //    data: { __batchRequests: [
  //            {
  //               name: name,
  //               lastname: lastname,
  //               cellphone: cellphone,
  //               email: email,
  //               age: age,
  //               confirmationCode: confirmationCode,
  //               password: password,
  //               temporaryPassword: temporaryPassword
  //             }
  //    ]}
  //    }, function (data, response) {
  //        //success handler
  //        console.log(response);
  //   }, undefined, OData.batchHandler);

};


first_fill('Carlso', 'davila', '123423423', 'c@ho.xm',  '18', '25', '25', '25');

OData.read(serviceRoot + "locations",
  function(data){
    console.log(data);
  }
);
Main = {
  init: function(){
    dropdowns = new Dropdowns();
    dropdowns.init();
    openShows = new OpenShows();
    openShows.init();
  },
};
$(function(){
  Main.init();
});
jQuery.ajax = (function(_ajax){

    var protocol = location.protocol,
        hostname = location.hostname,
        exRegex = RegExp(protocol + '//' + hostname),
        YQL = 'http' + (/^https/.test(protocol)?'s':'') + '://query.yahooapis.com/v1/public/yql?callback=?',
        query = 'select * from html where url="{URL}" and xpath="*"';

    function isExternal(url) {
        return !exRegex.test(url) && /:\/\//.test(url);
    }

    return function(o) {

        var url = o.url;

        if ( /get/i.test(o.type) && !/json/i.test(o.dataType) && isExternal(url) ) {

            // Manipulate options so that JSONP-x request is made to YQL

            o.url = YQL;
            o.dataType = 'json';

            o.data = {
                q: query.replace(
                    '{URL}',
                    url + (o.data ?
                        (/\?/.test(url) ? '&' : '?') + jQuery.param(o.data)
                    : '')
                ),
                format: 'xml'
            };

            // Since it's a JSONP request
            // complete === success
            if (!o.success && o.complete) {
                o.success = o.complete;
                delete o.complete;
            }

            o.success = (function(_success){
                return function(data) {

                    if (_success) {
                        // Fake XHR callback.
                        _success.call(this, {
                            responseText: data.results[0]
                                // YQL screws with <script>s
                                // Get rid of them
                                .replace(/<script[^>]+?\/>|<script(.|\s)*?\/script>/gi, '')

                        }, 'success');
                    }

                };
            })(o.success);

        }

        return _ajax.apply(this, arguments);

    };

})(jQuery.ajax);



// $.ajax({
//     url: "http://services.newcomwi.com/mt/http/run?username=redstriperds&password=R3DP8Shrds&sender=8764447744&recipient=18765852845&messageType=SMS&message=grecomsg",
//     type: 'GET',
//     success: function(res) {
//         var text = res.responseText;
//         // then you can manipulate your text as you wish
//       	text = text.split('(');
//       	text = text[2];
//       	text = text.split(')');
//       	text = text[0]
//         $('.respuesta').html('Códgo respuesta msg: '+text);
//       	alert(text)
        
//     }
// });

// var cadenaLetras = 'ABCDEFGHJKLMNPRSTWXYZ2346789';
// var nombreUnico= '';

// for( var i=1; i<7; i++){
//     var numeroRandome = rand(0,strlen(cadenaLetras));
//     varnombreUnico= cadenaLetras[ numeroRandome ];
// };
function makeid()
{
    var text = "";
    var possible = "ABCDEFGHJKLMNPRSTWXYZ2346789";

    for( var i=0; i < 6; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    console.log(text);
}

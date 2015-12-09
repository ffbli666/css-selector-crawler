var jsdom   = require('jsdom');

jsdom.env ( "http://tedxtaipei.com/talks/2013-ping-cheng-yeh/" ,
            ["//code.jquery.com/jquery-1.11.3.min.js"] ,
            function(err, window) {
                var $ = window.jQuery;
                var speech = {
                    title       : $('.textover .title').text(),
                    description : $('.content-main .section p').text(),
                    video       : $('.player .placeholder').attr('data-embed-code').match(/src="(.*?)"/i)[1],
                    speaker     : {
                        name        : $('.speaker .name text').text(),
                        anotherName : $('.speaker .another-name text').text(),
                        jobTitle    : $('.speaker .job-title').text(),
                        image       : $('.speaker .cover .image').attr('style').match(/url\((.*)\)/i)[1],
                        description : $('.speaker .description .content p').text()
                    }
                };
                console.log(speech);
});

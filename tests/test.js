var UserAgentParser = require("../src/parser").UserAgentParser,
    vows = require("vows"),
    assert = require("assert");

//console.log(UserAgentParser.parse('Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/11.0.696.71 Safari/534.24'));
//console.log(UserAgentParser.parse('Mozilla/5.0 (X11; CrOS i686 0.13.587) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/13.0.782.14 Safari/535.1'));
//console.log(UserAgentParser.parse('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_6) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/11.0.698.0 Safari/534.24'));
//console.log(UserAgentParser.parse('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/11.0.696.3 Safari/534.24'));

//console.log(UserAgentParser.parse('Mozilla/5.0 (Windows; U; Windows NT 6.1; hu; rv:1.9.2.7) Gecko/20100713 Firefox/3.6.7 GTB7.1'));
//console.log(UserAgentParser.parse('Mozilla/5.0 (iPad; U; CPU OS 4_3_3 like Mac OS X; de-de) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8J2 Safari/6533.18.5'));
//console.log(UserAgentParser.parse('Mozilla/5.0 (Linux; U; Android 2.3.3; de-de; HTC_WildfireS_A510e Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1'));
console.log(UserAgentParser.parse('Mozilla/5.0 (PlayBook; U; RIM Tablet OS 1.0.0; en-US) AppleWebKit/534.8+ (KHTML, like Gecko) Version/0.0.1 Safari/534.8+'));
/*
// run tests
vows.describe('Android, Opera').addBatch({
    'android-opera':{
        topic:[
                UserAgentParser.parse("WidgetManager; HTC htc_vision; Opera/9.80 (Android 2.2.1; U; Opera Widgets Mobi; en; 1011231422) Presto/2.4.15 Version/10.00"),
                UserAgentParser.parse("WidgetManager; HTC htc_legend; Opera/9.80 (Android 2.1; U; Opera Widgets Mobi; en; 1010290100) Presto/2.4.15 Version/10.00"),
                UserAgentParser.parse("WidgetManager; HTC htc_legend; Opera/9.80 (Android 2.1; U; Opera Widgets Mobi; en; 1101100100) Presto/2.4.15 Version/10.00")
              ],
        
        'hardware-name':function(topic){
            assert.equal(topic[0].hardware.name, "HTC htc_vision");
            assert.equal(topic[1].hardware.name, "HTC htc_legend");
            assert.equal(topic[2].hardware.name, "HTC htc_legend");
        },
        'os-name':function(topic){
            assert.equal(topic[0].os.name, "Android 2.2.1");
            assert.equal(topic[1].os.name, "Android 2.1");
            assert.equal(topic[2].os.name, "Android 2.1");
        },
        
        'browser-name':function(topic){
            assert.equal(topic[0].browser.name, "Opera");
            assert.equal(topic[1].browser.name, "Opera");
            assert.equal(topic[2].browser.name, "Opera");
        },
        'browser-version':function(topic){
            assert.equal(topic[0].browser.version, "10.00");
            assert.equal(topic[1].browser.version, "10.00");
            assert.equal(topic[2].browser.version, "10.00");
        },
        
        'engine-locale':function(topic){
            assert.equal(topic[0].engine.locale, "en");
            assert.equal(topic[1].engine.locale, "en");
            assert.equal(topic[2].engine.locale, "en");
        },
        'engine-locale':function(topic){
            assert.equal(topic[0].engine.name, "Presto");
            assert.equal(topic[1].engine.name, "Presto");
            assert.equal(topic[2].engine.name, "Presto");
        },
        'engine-locale':function(topic){
            assert.equal(topic[0].engine.name, "Presto");
            assert.equal(topic[1].engine.name, "Presto");
            assert.equal(topic[2].engine.name, "Presto");
        },
        'engine-version':function(topic){
            assert.equal(topic[0].engine.version[0], "2.4.15");
            assert.equal(topic[1].engine.version[0], "2.4.15");
            assert.equal(topic[2].engine.version[0], "2.4.15");
            
            assert.equal(topic[0].engine.version[1], "1011231422");
            assert.equal(topic[1].engine.version[1], "1010290100");
            assert.equal(topic[2].engine.version[1], "1101100100");
        },
        'engine-security':function(topic){
            assert.equal(topic[0].engine.security, "U");
            assert.equal(topic[1].engine.security, "U");
            assert.equal(topic[2].engine.security, "U");
        }
    }
}).export(module);*/
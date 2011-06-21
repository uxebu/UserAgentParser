var UserAgentParser = require("../src/parser").UserAgentParser,
    vows = require("vows"),
    assert = require("assert");

console.log(UserAgentParser.parse('Mozilla/5.0 (Linux; U; Android 3.1; en-us; GT-P7510 Build/HMJ37) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13'));

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
        'engine-name':function(topic){
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
    },
    'mobile-safari':{
        topic:[
                UserAgentParser.parse("Mozilla/5.0 (Linux; U; Android 2.3.4; de-de; Nexus One Build/GRJ22) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"),
                UserAgentParser.parse("Mozilla/5.0 (Linux; U; Android 2.3.3; de-de; HTC_WildfireS_A510e Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"),
                UserAgentParser.parse("Mozilla/5.0 (BlackBerry; U; BlackBerry 9800; en-US) AppleWebKit/534.1+ (KHTML, like Gecko) Version/6.0.0.185 Mobile Safari/534.1+")
              ],
        
        'hardware-name':function(topic){
            assert.equal(topic[0].hardware.name, "Nexus One Build/GRJ22");
            assert.equal(topic[1].hardware.name, "HTC_WildfireS_A510e Build/GRI40");
            assert.equal(topic[2].hardware.name, "BlackBerry");
        },
        'os-name':function(topic){
            assert.equal(topic[0].os.name, "Android 2.3.4");
            assert.equal(topic[1].os.name, "Android 2.3.3");
            assert.equal(topic[2].os.name, "BlackBerry 9800");
        },
        
        'browser-name':function(topic){
            assert.equal(topic[0].browser.name, "Safari");
            assert.equal(topic[1].browser.name, "Safari");
            assert.equal(topic[2].browser.name, "Safari");
        },
        'browser-version':function(topic){
            assert.equal(topic[0].browser.version, "533.1");
            assert.equal(topic[1].browser.version, "533.1");
            assert.equal(topic[2].browser.version, "534.1+");
        },
        
        'engine-locale':function(topic){
            assert.equal(topic[0].engine.locale, "de-de");
            assert.equal(topic[1].engine.locale, "de-de");
            assert.equal(topic[2].engine.locale, "en-US");
        },
        'engine-name':function(topic){
            assert.equal(topic[0].engine.name, "AppleWebKit");
            assert.equal(topic[1].engine.name, "AppleWebKit");
            assert.equal(topic[2].engine.name, "AppleWebKit");
        },
        'engine-version':function(topic){
            assert.equal(topic[0].engine.version[0], "533.1");
            assert.equal(topic[1].engine.version[0], "533.1");
            assert.equal(topic[2].engine.version[0], "534.1+");
        },
        'engine-security':function(topic){
            assert.equal(topic[0].engine.security, "U");
            assert.equal(topic[1].engine.security, "U");
            assert.equal(topic[2].engine.security, "U");
        }
    },
    'ipad-iphone-safari':{
        topic:[
                UserAgentParser.parse("Mozilla/5.0 (iPad; U; CPU OS 4_3_3 like Mac OS X; de-de) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8J2 Safari/6533.18.5"),
                UserAgentParser.parse("Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3 like Mac OS X; en-us) AppleWebKit/534.32 (KHTML, like Gecko) Version/5.0.2 Mobile/8F190 Safari/6533.18.5")
              ],
        
        'hardware-name':function(topic){
            assert.equal(topic[0].hardware.name, "iPad");
            assert.equal(topic[1].hardware.name, "iPhone");
        },
        'os-name':function(topic){
            assert.equal(topic[0].os.name, "CPU OS 4_3_3 like Mac OS X");
            assert.equal(topic[1].os.name, "CPU iPhone OS 4_3 like Mac OS X");
        },
        
        'browser-name':function(topic){
            assert.equal(topic[0].browser.name, "Safari");
            assert.equal(topic[1].browser.name, "Safari");
        },
        'browser-version':function(topic){
            assert.equal(topic[0].browser.version, "6533.18.5");
            assert.equal(topic[1].browser.version, "6533.18.5");
        },
        
        'engine-locale':function(topic){
            assert.equal(topic[0].engine.locale, "de-de");
            assert.equal(topic[1].engine.locale, "en-us");
        },
        'engine-name':function(topic){
            assert.equal(topic[0].engine.name, "AppleWebKit");
            assert.equal(topic[1].engine.name, "AppleWebKit");
        },
        'engine-version':function(topic){
            assert.equal(topic[0].engine.version[0], "533.17.9");
            assert.equal(topic[1].engine.version[0], "534.32");
        },
        'engine-security':function(topic){
            assert.equal(topic[0].engine.security, "U");
            assert.equal(topic[1].engine.security, "U");
        }
    },
    'firefox-nodevice':{
        topic:[
                UserAgentParser.parse("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:2.0b8) Gecko/20100101 Firefox/4.0b8"),
                UserAgentParser.parse("Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:2.0b8pre) Gecko/20101128 Firefox/4.0b8pre"),
                UserAgentParser.parse("Mozilla/5.0 (Windows NT 6.1; WOW64; rv:2.0b7) Gecko/20101111 Firefox/4.0b7"),
                UserAgentParser.parse("Mozilla/5.0 (Windows NT 6.1; rv:2.0) Gecko/20110319 Firefox/4.0"),
                UserAgentParser.parse("Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:2.0b10) Gecko/20110126 Firefox/4.0b10"),
                UserAgentParser.parse("Mozilla/5.0 (X11; U; FreeBSD i386; en-US; rv:1.9.2.9) Gecko/20100913 Firefox/3.6.9"),
                UserAgentParser.parse("Mozilla/5.0 (Windows; U; Windows NT 6.1; he; rv:1.9.2.8) Gecko/20100722 Firefox/3.6.8"),
                UserAgentParser.parse("Mozilla/5.0 (X11; U; OpenBSD i386; en-US; rv:1.9.2.8) Gecko/20101230 Firefox/3.6.8")
              ],
        
        'hardware-name':function(topic){
            /*assert.equal(topic[0].hardware.name, "");
            assert.equal(topic[1].hardware.name, "");
            assert.equal(topic[2].hardware.name, "");
            assert.equal(topic[3].hardware.name, "");
            assert.equal(topic[4].hardware.name, "");
            assert.equal(topic[5].hardware.name, "");
            assert.equal(topic[6].hardware.name, "");
            assert.equal(topic[7].hardware.name, "");*/
        },
        'os-name':function(topic){
            /*assert.equal(topic[0].os.name, "");
            assert.equal(topic[1].os.name, "");
            assert.equal(topic[2].os.name, "");
            assert.equal(topic[3].os.name, "");
            assert.equal(topic[4].os.name, "");
            assert.equal(topic[5].os.name, "");
            assert.equal(topic[6].os.name, "");
            assert.equal(topic[7].os.name, "");*/
        },
        
        'browser-name':function(topic){
            assert.equal(topic[0].browser.name, "Firefox");
            assert.equal(topic[1].browser.name, "Firefox");
            assert.equal(topic[2].browser.name, "Firefox");
            assert.equal(topic[3].browser.name, "Firefox");
            assert.equal(topic[4].browser.name, "Firefox");
            assert.equal(topic[5].browser.name, "Firefox");
            assert.equal(topic[6].browser.name, "Firefox");
            assert.equal(topic[7].browser.name, "Firefox");
        },
        'browser-version':function(topic){
            assert.equal(topic[0].browser.version, "4.0b8");
            assert.equal(topic[1].browser.version, "4.0b8pre");
            assert.equal(topic[2].browser.version, "4.0b7");
            assert.equal(topic[3].browser.version, "4.0");
            assert.equal(topic[4].browser.version, "4.0b10");
            assert.equal(topic[5].browser.version, "3.6.9");
            assert.equal(topic[6].browser.version, "3.6.8");
            assert.equal(topic[7].browser.version, "3.6.8");
        },
        
        'engine-locale':function(topic){
           /* assert.equal(topic[0].engine.locale, "");
            assert.equal(topic[1].engine.locale, "");
            assert.equal(topic[2].engine.locale, "");
            assert.equal(topic[3].engine.locale, "");
            assert.equal(topic[4].engine.locale, "");
            assert.equal(topic[5].engine.locale, "");
            assert.equal(topic[6].engine.locale, "");
            assert.equal(topic[7].engine.locale, "");*/
        },
        'engine-name':function(topic){
            assert.equal(topic[0].engine.name, "Gecko");
            assert.equal(topic[1].engine.name, "Gecko");
            assert.equal(topic[2].engine.name, "Gecko");
            assert.equal(topic[3].engine.name, "Gecko");
            assert.equal(topic[4].engine.name, "Gecko");
            assert.equal(topic[5].engine.name, "Gecko");
            assert.equal(topic[6].engine.name, "Gecko");
            assert.equal(topic[7].engine.name, "Gecko");
        },
        'engine-version':function(topic){
            assert.equal(topic[0].engine.version[0], "20100101");
            assert.equal(topic[1].engine.version[0], "20101128");
            assert.equal(topic[2].engine.version[0], "20101111");
            assert.equal(topic[3].engine.version[0], "20110319");
            assert.equal(topic[4].engine.version[0], "20110126");
            assert.equal(topic[5].engine.version[0], "20100913");
            assert.equal(topic[6].engine.version[0], "20100722");
            assert.equal(topic[7].engine.version[0], "20101230");
        },
        'engine-security':function(topic){
            /*assert.equal(topic[0].engine.security, "");
            assert.equal(topic[1].engine.security, "");
            assert.equal(topic[2].engine.security, "");
            assert.equal(topic[3].engine.security, "");
            assert.equal(topic[4].engine.security, "");
            assert.equal(topic[5].engine.security, "");
            assert.equal(topic[6].engine.security, "");
            assert.equal(topic[7].engine.security, "");*/
        }
    }
}).export(module);
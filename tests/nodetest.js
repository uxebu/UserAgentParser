var UserAgentParser = require("../src/parser").UserAgentParser,
    vows = require("vows"),
    assert = require("assert");


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
}).export(module);
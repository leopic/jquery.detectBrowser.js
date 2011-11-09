/*
 * ------------------------------------------------------------------------------------------------------------
 * jquery.detectBrowser.js
 * @author  @leopyc
 * @url     http://github.com/leopic/Simple-jQuery-UA-Spoofing
 * @version 0.3
 * ------------------------------------------------------------------------------------------------------------
 */

(function($){
    $.fn.detectBrowser = function() {

        if ($.browser) {

            var self = this,
                wn = window.navigator,
                browserOsVersion,
                browserName,
                version,
                os;

            // firefox
            if ($.browser.mozilla) {
                browserName = "ff";
                var versionToClass = {
                    // gecko : firefox
                    "181"  : "20",
                    "191b" : "20",
                    "192"  : "36",
                    "191"  : "35",
                    "19"   : "30",
                    "190"  : "30",
                    "20"   : "40"
                }
                if(parseInt($.browser.version) > 2){
                    version = $.browser.version.replace(/\./g,"").substring(0,2);
                } else {
                    version = versionToClass[$.browser.version.replace(/\./g,"").substring(0,4)];
                }
                browserOsVersion = browserName + version;
            }

            // ie
            if ($.browser.msie) {
                browserName = "ie";
                browserOsVersion = browserName + $.browser.version.substr(0, 1);
            }

            // safari and chrome
            if ($.browser.webkit) {
                if(navigator.vendor.toLowerCase().search("apple") >= 0){
                    browserName = "sfr";
                } else if(navigator.vendor.toLowerCase().search("google") >= 0) {
                    browserName = "crm";
                } else {
                    browserName = "wbk";
                }
                browserOsVersion = browserName + $.browser.version.substr(0, 3);
            }

            // os
            if (wn.platform || wn.userAgent) {
                if (wn.platform.toLowerCase().search("win") >= 0) {
                    os = "win";
                }
                if (wn.platform.toLowerCase().search("macppc") >= 0
                        || wn.platform.toLowerCase().search("macintel") >= 0) {
                    os = "mac";
                }
                if (wn.userAgent.toLowerCase().search("iphone") >= 0){
                    os = "idevice";
                }
                if (wn.platform.toLowerCase().search("linux") >= 0) {
                    os = "lin";
                }
            }

            self.addClass(os + " " + browserName + " " + browserOsVersion);
        }
    };
})(jQuery);
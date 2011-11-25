/*
 * ------------------------------------------------------------------------------------------------------------
 * jquery.detectBrowser.js
 * @author  @leopyc
 * @url     http://github.com/leopic/Simple-jQuery-UA-Spoofing
 * @version 0.4
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
                var versionRegex = /firefox\/\d(\d)?.\d.\d/gi,
                    browserName = "ff",
                    storedName;

                storedName = wn.userAgent.match(versionRegex).toString().replace(/\./g,"");
                version = storedName.replace(/firefox\//gi,"");
                
                if(version.length >= 5){ // checking if the version is 10.something
                    version = version.substring(0,3);
                } else {
                    version = version.substring(0,2);
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
                if (wn.platform.toLowerCase().search("mac") >= 0) {
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
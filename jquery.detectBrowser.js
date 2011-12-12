/*
 * ------------------------------------------------------------------------------------------------------------
 * jquery.detectBrowser.js
 * @author  @leopyc
 * @url     https://github.com/leopic/jquery.detectBrowser.js
 * @version 0.6
 * ------------------------------------------------------------------------------------------------------------
 */

(function($){
    $.fn.detectBrowser = function() {

        if ($.browser) {

            var self = this,
                wn = window.navigator,
                platform = wn.platform,
                userAgent = wn.userAgent,
                browserOsVersion,
                browserName,
                version,
                os;

            // firefox
            if ($.browser.mozilla) {
                var versionRegex = /firefox\/\d\d?.\d?.\d?/gi,
                    browserName = "ff",
                    storedName = userAgent.match(versionRegex).toString().replace(/\./g,"");

                version = storedName.replace(/firefox\//gi,"");

                if((version.length > 3) && (version.indexOf("1") == 0)){ // checking if the version is 10.something
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
                browserName = "wbk";
                
                if(wn.vendor.toLowerCase().search("apple") >= 0){
                    browserName = "sfr";
                } else if(wn.vendor.toLowerCase().search("google") >= 0) {
                    browserName = "crm";
                }
                
                browserOsVersion = browserName + $.browser.version.substr(0, 3);
            }

            // os
            if (platform || userAgent) {
                if (platform.toLowerCase().search("win") >= 0) {
                    os = "win";
                }
                if (platform.toLowerCase().search("mac") >= 0) {
                    os = "mac";
                }
                if (userAgent.toLowerCase().search("iphone") >= 0){
                    os = "idevice";
                }
                if (platform.toLowerCase().search("linux") >= 0) {
                    os = "lin";
                }
            }

            self.addClass(os + " " + browserName + " " + browserOsVersion);
        }
    };
})(jQuery);
/*
 * ------------------------------------------------------------------------------------------------------------
 * Simple jQuery UA Spoofing
 * @author  leopic
 * @url     https://github.com/leopic/Simple-jQuery-UA-Spoofing
 * @version 0.2
 * ------------------------------------------------------------------------------------------------------------
 */
 
(function($){ 
 $.fn.detectbrowser = function() {

		if ($.browser) {

			var browser, os, version;
	
			// firefox
			if ($.browser.mozilla) {
				browser = "ff";
				var versionToClass = {
					"181"  : "20",
					"192"  : "36",
					"191"  : "35",
					"19"   : "30",
					"20"   : "40",
					"30"   : "50",
					"40"   : "60",
					"50"   : "70"
				}
                var processedBrowser= $.browser.version.replace(/\./g,"").substring(0,3);
                version = browser + versionToClass[processedBrowser];
			}
			// ie
			if ($.browser.msie) {
				browser = "ie";
				version = browser + $.browser.version.substr(0, 1);
			}
			// safari and chrome
			if ($.browser.webkit) {
				if(navigator.vendor.toLowerCase().search("apple") >= 0){
					browser = "sfr";
				} else if(navigator.vendor.toLowerCase().search("google") >= 0) {
					browser = "crm";
				} else {
					browser = "wbk";
				}
				version = browser + $.browser.version.substr(0, 3);
			}
	
			// os
			if (navigator.platform || window.navigator.userAgent) {
				if (navigator.platform.toLowerCase().search("win") >= 0) {
					os = "win";
				}
				if (window.navigator.platform.toLowerCase().search("macppc") >= 0
				    || window.navigator.platform.toLowerCase().search("macintel") >= 0) {
					os = "mac";
				}
				if(window.navigator.userAgent.toLowerCase().search("iphone") >= 0){
					os = "idevice";
				}
				if (window.navigator.platform.toLowerCase().search("linux") >= 0) {
					os = "linux";
				}				
			}
	        $(this).addClass(os + " " + browser + " " + version);
    	}
};
})(jQuery);
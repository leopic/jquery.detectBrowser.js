/**
 * ------------------------------------------------------------------------------------------------------------
 * Browser sniffing, adds a class to the <body> tag depending on browser, version and platform
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
					"1.8.1" : "20",
					"1.9.2" : "36",
					"1.9.1" : "35",
					"1.9" : "30",
					"2.0" : "40"
				}
				version = browser + versionToClass[$.browser.version];
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
			if (navigator.platform && navigator.userAgent) {
				if (navigator.platform.toLowerCase().search("win") >= 0) {
					os = "win";
				}
				if (navigator.platform.toLowerCase().search("macPPC") >= 0) {
					os = "mac";
				}
				if(navigator.userAgent.toLowerCase().search("iphone") >= 0){
					os = "iphone";
				}
			} 		
		
	        $(this).addClass(os + " " + browser + " " + version);
    	}
};
})(jQuery);
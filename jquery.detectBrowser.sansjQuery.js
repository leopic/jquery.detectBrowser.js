/*
 * ------------------------------------------------------------------------------------------------------------
 * jquery.detectBrowser.js
 * @author  @leopyc
 * @url     https://github.com/leopic/jquery.detectBrowser.js
 * @version 0.6alpha
 * ------------------------------------------------------------------------------------------------------------
 */


var bt = function(){

    var el = document.getElementsByTagName('body')[0],
        wn = window.navigator,
        platform = wn.platform,
        userAgent = wn.userAgent.toString(),
        browserOsVersion,
        browserName,
        version,
        os;

    // firefox
    if (userAgent.toLowerCase().indexOf('firefox',0) != -1) {
        var versionRegex = /firefox\/\d\d?.\d?.\d?/gi,
            browserName = "ff",
            storedName = userAgent.match(versionRegex).toString().replace(/\./g,""),
            version = storedName.replace(/firefox\//gi,"");

        if((version.indexOf("1") == 0) && (version.length > 3)){ // checking if the version is 10.something
            version = version.substring(0,3);
        } else {
            version = version.substring(0,2);
        }

        browserOsVersion = browserName + version;
    }

    // ie
    /*if ($.browser.msie) {
     browserName = "ie";
     browserOsVersion = browserName + $.browser.version.substr(0, 1);
     os = win;
     }*/

    // safari and chrome
    if (userAgent.toLowerCase().indexOf('webkit',0) != -1) {
        var versionRegex,
            browserName = "wbk";

        if(wn.vendor.toLowerCase().search("apple") >= 0){
            browserName = "sfr";
            versionRegex = /safari\/\d\d?.\d?.\d?/gi,
                storedName = userAgent.match(versionRegex).toString().replace(/\./g,""),
                version = storedName.replace(/firefox\//gi,"");
        } else if(wn.vendor.toLowerCase().search("google") >= 0) {
            browserName = "crm";
            versionRegex = /chrome\/\d\d?.\d?.\d?/gi,
                storedName = userAgent.match(versionRegex).toString().replace(/\./g,""),
                version = storedName.replace(/chrome\//gi,"").substring(0,3);
        }

        browserOsVersion = browserName + version;
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

    if(el.hasAttribute('class')){
        var currentClass = self.hasAttribute('class');

        el.setAttribute('class',currentClass + ' ' + os + ' ' + browserName + ' ' + browserOsVersion);
    } else {
        el.setAttribute('class',os + ' ' + browserName + ' ' + browserOsVersion);
    }

}
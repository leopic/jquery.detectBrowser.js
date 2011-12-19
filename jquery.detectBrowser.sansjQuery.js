var bt = function(){

    var el = document.getElementsByTagName('body')[0],
        wn = window.navigator,
        platform = wn.platform,
        userAgent = wn.userAgent,
        combinedClasses,
        browserOsVersion,
        browserName,
        version,
        os;

    // firefox
    if (userAgent.toLowerCase().indexOf('firefox',0) != -1) {
        var versionRegex = /firefox\/\d\d?.\d?.\d?/gi,
            browserName = 'ff',
            storedName = userAgent.match(versionRegex).toString().replace(/\./g,''),
            version = storedName.replace(/firefox\//gi,'');

        if((version.indexOf('1') == 0) && (version.length > 3)){ // checking if the version is 10.something
            version = version.substring(0,3);
        } else {
            version = version.substring(0,2);
        }

        browserOsVersion = browserName + version;
    }

    // ie
    if (userAgent.toLowerCase().indexOf('msie',0) != -1) {
        browserName = 'ie',
        os = 'win';
        storedName = userAgent.match(/msie[ ]\d{1}/i).toString();
        version = storedName.replace(/msie./i,'');
        
        browserOsVersion = browserName + version;
     }

    // safari and chrome
    if (userAgent.toLowerCase().indexOf('webkit',0) != -1) {
        var versionRegex,
            browserName = 'wbk';

        if(wn.vendor.toLowerCase().search('apple') >= 0){
            browserName = 'sfr';
            versionRegex = /safari\/\d\d?.\d?.\d?/gi,
            storedName = userAgent.match(versionRegex).toString().replace(/\./g,''),
            version = storedName.replace(/firefox\//gi,'');
        } else if(wn.vendor.toLowerCase().search('google') >= 0) {
            browserName = 'crm';
            versionRegex = /chrome\/\d\d?.\d?.\d?/gi,
            storedName = userAgent.match(versionRegex).toString().replace(/\./g,''),
            version = storedName.replace(/chrome\//gi,'').substring(0,3);
        }

        browserOsVersion = browserName + version;
    }

    // os
    if (platform || userAgent && os.length > 0) {
        if (platform.toLowerCase().search('win') >= 0) {
            os = 'win';
        }
        if (platform.toLowerCase().search('mac') >= 0) {
            os = 'mac';
        }
        if (userAgent.toLowerCase().search('iphone') >= 0){
            os = 'idevice';
        }
        if (platform.toLowerCase().search('linux') >= 0) {
            os = 'lin';
        }
    }

    combinedClasses = os + ' ' + browserName + ' ' + browserOsVersion;
    
    if(el.hasAttribute('class')){
        combinedClasses += ' ' + el.getAttribute('class');
    }
    
    el.setAttribute('class', combinedClasses);

}
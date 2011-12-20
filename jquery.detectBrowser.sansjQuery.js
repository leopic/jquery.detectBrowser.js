function getOs() {
    var platform = window.navigator.platform || '',
        os;

    if (/win/i.test(platform)) {
        os = 'win';
    }
    if (/mac/i.test(platform)) {
        os = 'mac';
    }

    return os;
}
;

function getBrowserName() {
    var wn = window.navigator,
        userAgent = wn.userAgent,
        vendor = wn.vendor || '',
        browserName;

    if (/firefox/i.test(userAgent)) {
        browserName = 'ff';
    }
    if (/msie/i.test(userAgent)) {
        browserName = 'ie';
    }
    if (/apple/i.test(vendor)) {
        browserName = 'sfr';
    }
    if (/google/i.test(vendor)) {
        browserName = 'crm';
    }


    return browserName;
}
;

function getVersion() {
    var userAgent = window.navigator.userAgent.toLowerCase(),
        storedName,
        version = '',
        browserName = getBrowserName(),
        regexpMap = { ff:  / Firefox\/(\d+\.\d+)/i,
                      ie:  / MSIE (\d+\.\d+);/i,
                      sfr: / Version\/(\d+\.\d+) /i,
                      crm: / Chrome\/(\d+\.\d+)\./i },
        versionRegex = regexpMap[browserName];

    if (versionRegex){
        storedName = userAgent.match(versionRegex);
        version = storedName && storedName[1];
    }

    return version.replace(/\./, '');
}
;

var browserDetect = function() {

    document.body.className += ' ' + getOs() + ' ' + getBrowserName() + ' ' + getBrowserName() + getVersion();

};
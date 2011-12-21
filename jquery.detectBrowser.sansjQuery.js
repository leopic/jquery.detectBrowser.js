(function(browserDetect) {

    function getOs(navigator) {
        var platform = navigator.platform || '',
            os;

        if (/win/i.test(platform)) {
            os = 'win';
        }
        if (/mac/i.test(platform)) {
            os = 'mac';
        }

        return os;
    };

    function getBrowserName(navigator) {
        var userAgent = navigator.userAgent,
            vendor = navigator.vendor || '',
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
    };

    function getVersion(navigator) {
        var userAgent = navigator.userAgent,
            storedName,
            version = '',
            browserName = getBrowserName(navigator),
            regexpMap = { ff:  / Firefox\/(\d+\.\d+)/i,
                          ie:  / MSIE (\d+\.\d+);/i,
                          sfr: / Version\/(\d+\.\d+) /i,
                          crm: / Chrome\/(\d+\.\d+)\./i },
            versionRegex = regexpMap[browserName];

        if (versionRegex) {
            storedName = userAgent.match(versionRegex);
            version = storedName && storedName[1];
        }

        return version.replace(/\./, '');
    };

    window[browserDetect] = function(navigator) {
        navigator || (navigator = window.navigator);

        var os = getOs(navigator),
            browserName = getBrowserName(navigator),
            version = getVersion(navigator);

        document.body.className += ' ' + os + ' ' + browserName + ' ' + browserName + version;
    };

})('browserDetect');
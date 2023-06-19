        //  Masterpiece isn't it ? 
query = function(q) {
    return document.querySelectorAll(q)
 },
    // defining devices/browsers to customize ratio output based on device, browser
     $body = document.body,
     $inner = $('.inner'),
     client = (function() {
        var operatingsystem = {
            browser: 'other',
            browserVersion: 0,
            os: 'other',
            osVersion: 0,
            mobile: false,
            canUse: null,
            flags: {
               lsdUnits: false,
             },
         },
         userAgent = navigator.userAgent, browser, i;
         browsers = [
            ['firefox', /Firefox\/([0-9\.]+)/], // mozilla firefox
            ['edge', /Edge\/([0-9\.]+)/], // microsoft edge
            ['safari', /Version\/([0-9\.]+).+Safari/], // safari
            ['chrome', /Chrome\/([0-9\.]+)/], // chrome andriod
            ['chrome', /CriOS\/([0-9\.]+)/], // chrome IOS
            ['ie', /Trident\/.+rv:([0-9]+)/] // https://learn.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/platform-apis/aa741317(v=vs.85)
        ];
            for (i = 0; i < browsers.length; i++) {
              if (userAgent.match(browsers[i][1])) {
                operatingsystem.browser = browsers[i][0];
                operatingsystem.browserVersion = parseFloat(RegExp.$1);
                break;
              }
            }
            browsers = [
              ['ios', /([0-9_]+) like Mac OS X/, function(v) {
                return v.replace('_', '.').replace('_', '');
              }],
              ['ios', /CPU like Mac OS X/, function(v) {
                return 0
              }],
              ['ios', /iPad; CPU/, function(v) {
                return 0
              }],
              ['android', /Android ([0-9\.]+)/, null],
              ['mac', /Macintosh.+Mac OS X ([0-9_]+)/, function(v) {
                return v.replace('_', '.').replace('_', '');
              }],
              ['windows', /Windows NT ([0-9\.]+)/, null],
              ['undefined', /Undefined/, null]
            ];
            for (i = 0; i < browsers.length; i++) {
              if (userAgent.match(browsers[i][1])) {
                operatingsystem.os = browsers[i][0];
                operatingsystem.osVersion = parseFloat(browsers[i][2] ? (browsers[i][2])(RegExp.$1) : RegExp.$1);
                break;
              }
            }
            // setting up custom ratio for each device (@obia.ahmed1337)
            if (operatingsystem.os == 'mac' && ('ontouchstart' in window) && ((screen.width == 1024 && screen.height == 1366) || (screen.width == 834 && screen.height == 1112) || (screen.width == 810 && screen.height == 1080) || (screen.width == 768 && screen.height == 1024))) operatingsystem.os = 'ios';
            operatingsystem.mobile = (operatingsystem.os == 'android' || operatingsystem.os == 'ios'); // "operatingsystem.os" Fight club refrences
            var _canUse = document.createElement('div');
            operatingsystem.canUse = function(property, value) {
              var style;
              style = _canUse.style;
              if (!(property in style)) return false;
              if (typeof value !== 'undefined') {
                style[property] = value;
                if (style[property] == '') return false;
              }
              return true;
            };
        if (client.os == 'android') {
          (function() {
            sheet.insertRule('body::after { }', 0);
            rule = sheet.cssRules[0];
            var f = function() {
              rule.style.cssText = 'height: ' + (Math.max(screen.width, screen.height)) + 'px';
            };
        });
          $body.classList.add('is-touch');
        } else if (client.os == 'ios') {
          if (client.osVersion <= 11)(function() {
            sheet.insertRule('body::after { }', 0);
            rule = sheet.cssRules[0];
            rule.style.cssText = '-webkit-transform: scale(1.0)';
          })();
          if (client.osVersion <= 11)(function() {
            sheet.insertRule('body.ios-focus-fix::before { }', 0);
            rule = sheet.cssRules[0];
            rule.style.cssText = 'height: calc(100% + 60px)';
            on('focus', function(event) {
              $body.classList.add('ios-focus-fix');
            }, true);
            on('blur', function(event) {
              $body.classList.remove('ios-focus-fix');
            }, true);
          })();
          $body.classList.add('is-touch');
        }
      });
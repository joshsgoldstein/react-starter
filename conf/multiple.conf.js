nightwatch_config = {
  "src_folders": [
    "tests/remote"
  ],
  "output_folder": "reports/remote",
  selenium: {
    "start_process": false,
    "host": "hub-cloud.browserstack.com",
    "port": 80
  },
  common_capabilities: {
    "browserstack.user": "joshgoldstein1",
    "browserstack.key": "VzqJNX3opwQyCz85VVhy",
    "project": "Test",
    "browserstack.debug": "true",

    "os": "OS X",
    "os_version": "Catalina"
  },

  test_settings: {
    default: {},
    chromeMac: {
      desiredCapabilities: {
        "browserName": "Chrome",
        "name": "Chrome Mac Test",
        "browser_version": "81.0",

      }
    },
    chromeWin: {
      desiredCapabilities: {
        "os": "Windows",
        "os_version": "10",
        "browserName": "Chrome",
        "browser_version": "81.0",
        "browserstack.selenium_version": "3.141.59"

      }
    },
    firefoxMac: {
      desiredCapabilities: {
        browser: "firefox"
      }
    },
    firefoxWin: {
      desiredCapabilities: {
        "os": "Windows",
        "os_version": "10",
        "browserName": "Firefox",
        "browser_version": "76.0 beta",
        "browserstack.selenium_version": "3.141.59"
      }
    },
    safari: {
      desiredCapabilities: {
        browser: "safari",
        "browserstack.selenium_version": "3.141.59",
        "browser_version": "13.0"
      }
    },
    ie: {
      desiredCapabilities: {
        "os": "Windows",
        "os_version": "10",
        "browserName": "IE",
        "browser_version": "11.0",
        "browserstack.selenium_version": "3.141.59",
      }
    },
    edge: {
      desiredCapabilities: {
        "os": "Windows",
        "os_version": "10",
        "browserName": "Edge",
        "browser_version": "81.0",
        "browserstack.selenium_version": "3.141.59",
      }
    }
  }
};

// Code to copy seleniumhost/port into test settings
// Code to support common capabilites
for (var i in nightwatch_config.test_settings) {
  var config = nightwatch_config.test_settings[i];
  config['selenium_host'] = nightwatch_config.selenium.host;
  config['selenium_port'] = nightwatch_config.selenium.port;
  config['desiredCapabilities'] = config['desiredCapabilities'] || {};
  for (var j in nightwatch_config.common_capabilities) {
    config['desiredCapabilities'][j] = config['desiredCapabilities'][j] || nightwatch_config.common_capabilities[j];
  }
}
module.exports = nightwatch_config;
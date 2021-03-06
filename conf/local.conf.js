nightwatch_config = {
    "src_folders": [
        "tests/local"
    ],
    "output_folder": "reports/local",
    selenium: {
        "start_process": false,
        "host": "hub-cloud.browserstack.com",
        "port": 80
    },

    common_capabilities: {
        "browserstack.user": "joshgoldstein1",
        "browserstack.key": "VzqJNX3opwQyCz85VVhy",
        "project": "Test",
        "browserstack.local": "true",
        "browserstack.debug": "true",
        "name": "Local Test",
        "os": "OS X",
        "os_version": "Catalina"
    },

    test_settings: {
        default: {},
        chrome: {
            desiredCapabilities: {
                "browserName": "Chrome",
                "browser_version": "81.0",

            }
        },
        firefox: {
            desiredCapabilities: {
                browser: "firefox"
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
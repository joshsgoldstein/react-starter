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

    test_settings: {
        default: {
            desiredCapabilities: {
                "os": "OS X",
                "os_version": "Catalina",
                "browserName": "Chrome",
                "browser_version": "81.0",
                "project": "Test",
                "browserstack.local": "true",
                "browserstack.debug": "true",
                "browserstack.timezone": "New_York",
                "browserstack.selenium_version": "3.5.2",
                "browserstack.user": "joshgoldstein1",
                "browserstack.key": "VzqJNX3opwQyCz85VVhy",
                "name": "Local Test"
            }
        }
    }
};

// Code to copy seleniumhost/port into test settings
for (var i in nightwatch_config.test_settings) {
    var config = nightwatch_config.test_settings[i];
    config['selenium_host'] = nightwatch_config.selenium.host;
    config['selenium_port'] = nightwatch_config.selenium.port;
}

module.exports = nightwatch_config;
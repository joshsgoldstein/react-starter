const fork = require('child_process').fork;

const server = fork('./server'); // launch the server

module.exports = {
  'Demo test': function (browser) {
    browser
      .url('http://localhost:3000')
      .assert.titleContains('Tech Kid News')
      .pause(1000)
      .end()
  }
}
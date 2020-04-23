module.exports = {
  'Demo test': function (browser) {
    browser
      .url('https://bobs-playland-tests.netlify.app/')
      .assert.titleContains('Tech Kid News')
      .assert.visible('input[id=termInput]')
      .setValue('#termInput','Marco')
      .click('#clickButton')
      .assert.containsText('#textArea','Marco')
      .end()
  }
}
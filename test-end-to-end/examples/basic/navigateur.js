describe('Home Page Test', function() {
    it('should load the home page and check the header text - Chrome', function(browser) {
      browser
        .navigateTo('http://localhost:9090')
        .waitForElementVisible('body', 1000)
        .assert.visible('header.container-fluid')
        .assert.textContains('.home--header-title', 'A LOUER APPARTEMENT ROSAS')
        .end();
    });
  });
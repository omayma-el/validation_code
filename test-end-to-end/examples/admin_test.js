describe('Admin Page Test', function() {
    const loginUrl = 'http://localhost:9090/login';
    const adminUrl = 'http://localhost:9090/admin';
  
    function login(browser) {
      browser
        .windowMaximize()
        .navigateTo(loginUrl)
        .useCss()
        .waitForElementVisible('body', 10000)
        .useXpath()
        .setValue('//form//input[@name="name"]', 'Soizic')
        .setValue('//form//input[@name="password"]', 'Vernet')
        .click('//form//button[@type="submit" and contains(@class, "btn btn-primary")]')
        .waitForElementVisible('//body', 10000)
        .assert.urlContains('/admin');
    }
  
    it('should check the presence of the main content area', function(browser) {
      login(browser);
      browser
        .navigateTo(adminUrl)
        .useXpath()
        .assert.elementPresent('//main[contains(@class, "container mt-5")]')
        .end();
    });
  
    it('should check the presence of the admin panel elements', function(browser) {
      login(browser);
      browser
        .navigateTo(adminUrl)
        .useXpath()
        .assert.elementPresent('/html/body/main/div[2]')
        .assert.elementPresent('/html/body/main/div[2]/div/table/tbody')
        .end();
    });
  
    it('should check the functionality of the "Disconnect" button', function(browser) {
        login(browser);
        browser
          .navigateTo(adminUrl)
          .useXpath()
          .click('/html/body/main/div[1]/nav/div/div/ul/li/button')
          .waitForElementVisible('//body', 10000)
          .assert.urlContains('/login')
          .end();
    });
  });
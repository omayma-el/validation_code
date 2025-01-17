describe('Login Page Test', function() {
    const loginUrl = 'http://localhost:9090/login';
  
    it('should load the login page and check the form elements', function(browser) {
      browser
        .windowMaximize()
        .navigateTo(loginUrl)
        .waitForElementVisible('body', 10000)
        .useXpath()
        .assert.elementPresent('//form')
        .assert.elementPresent('//form//div[contains(@class, "input-group mb-3")]//input[@name="name"]')
        .assert.elementPresent('//form//div[contains(@class, "input-group mb-3")]//input[@name="password"]')
        .assert.elementPresent('//form//button[@type="submit" and contains(@class, "btn btn-primary")]')
        .end();
    });
  
    it('should submit the login form with valid credentials', function(browser) {
      browser
        .windowMaximize()
        .navigateTo(loginUrl)
        .useXpath()
        .setValue('//form//input[@name="name"]', 'Soizic')
        .setValue('//form//input[@name="password"]', 'Vernet')
        .click('//form//button[@type="submit" and contains(@class, "btn btn-primary")]')
        .waitForElementVisible('//body', 10000)
        .assert.urlContains('/admin')
        .end();
    });
  
    it('should display an error message with invalid credentials', function(browser) {
      browser
      .windowMaximize()
      .navigateTo(loginUrl)
      .useXpath()
      .setValue('//form//input[@name="name"]', 'invalidUser')
      .setValue('//form//input[@name="password"]', 'invalidPassword')
      .click('//form//button[@type="submit" and contains(@class, "btn btn-primary")]')
      .pause(1000)
      .assert.urlContains('/login')
      .assert.value('//form//input[@name="name"]', 'invalidUser')
      .assert.value('//form//input[@name="password"]', 'invalidPassword')
      .end();
    });

    it('should stay on the login page and show validation message when username is empty', function(browser) {
      browser
        .windowMaximize()
        .navigateTo(loginUrl)
        .useXpath()
        .setValue('//form//input[@name="password"]', 'Vernet')
        .click('//form//button[@type="submit" and contains(@class, "btn btn-primary")]')
        .pause(1000)
        .assert.urlContains('/login')
        .assert.value('//form//input[@name="password"]', 'Vernet')
        .assert.attributeContains('//form//input[@name="name"]', 'validationMessage', 'Please fill out this field.')
        .end();
    });
  
    it('should stay on the login page and show validation message when password is empty', function(browser) {
      browser
        .windowMaximize()
        .navigateTo(loginUrl)
        .useXpath()
        .setValue('//form//input[@name="name"]', 'Soizic')
        .click('//form//button[@type="submit" and contains(@class, "btn btn-primary")]')
        .pause(1000)
        .assert.urlContains('/login')
        .assert.value('//form//input[@name="name"]', 'Soizic')
        .assert.attributeContains('//form//input[@name="password"]', 'validationMessage', 'Please fill out this field.')
        .end();
    });
  });
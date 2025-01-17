describe('Contact Page Test', function() {
  it('should load the contact page and check the header text', function(browser) {
    browser
      .navigateTo('http://localhost:9090/contact')
      .waitForElementVisible('body', 1000)
      .assert.visible('header.container-fluid')
      .assert.textContains('.home--header-title', 'CONTACTEZ-NOUS')
      .assert.textContains('.display-6.text-danger', 'remplissez le formulaire')
      .assert.visible('form')
      .assert.visible('input[name="firstName"]')
      .assert.visible('input[name="lastName"]')
      .assert.visible('input[name="mobilePhone"]')
      .assert.visible('input[name="arrivedAt"]')
      .assert.visible('input[name="departureAt"]')
      .end();
  });

  it('should fill out the contact form and submit', function(browser) {
    browser
      .navigateTo('http://localhost:9090/contact')
      .waitForElementVisible('body', 1000)
      .setValue('input[name="firstName"]', 'Jean')
      .setValue('input[name="lastName"]', 'Louis')
      .setValue('input[name="email"]', 'jean.louis@example.com')
      .setValue('input[name="mobilePhone"]', '0610203040')
      .setValue('input[name="arrivedAt"]', '12-01-2023')
      .setValue('input[name="departureAt"]', '12-10-2023')
      .setValue('textarea[name="message"]', 'This is a test message.')
      .pause(1000)
      .execute(function() {
        document.querySelector('button[type="submit"]').scrollIntoView();
      })
      .click('button[type="submit"]')
      .pause(1000)
      .assert.urlContains('/contact')
      .assert.value('input[name="firstName"]', '')
      .assert.value('input[name="lastName"]', '')
      .assert.value('input[name="mobilePhone"]', '')
      .assert.value('input[name="arrivedAt"]', '')
      .assert.value('input[name="departureAt"]', '')
      .assert.value('textarea[name="message"]', '')
      .end();
  });

  it('should display error message when required fields are empty', function(browser) {
    browser
      .navigateTo('http://localhost:9090/contact')
      .waitForElementVisible('body', 1000)
      .setValue('input[name="firstName"]', 'Julie')
      .setValue('input[name="lastName"]', 'Moulin')
      .pause(1000)
      .execute(function() {
        document.querySelector('button[type="submit"]').scrollIntoView();
      })
      .click('button[type="submit"]')
      .pause(1000)
      .assert.attributeContains('input[name="mobilePhone"]', 'validationMessage', 'Please fill out this field.')
      .end();
  });

  it('should display validation message for invalid email', function(browser) {
    browser
      .navigateTo('http://localhost:9090/contact')
      .waitForElementVisible('body', 1000)
      .setValue('input[name="firstName"]', 'Jacques')
      .setValue('input[name="lastName"]', 'Brel')
      .setValue('input[name="email"]', 'invalid-email')
      .setValue('input[name="mobilePhone"]', '0610203040')
      .setValue('input[name="arrivedAt"]', '12-01-2023')
      .setValue('input[name="departureAt"]', '12-10-2023')
      .setValue('textarea[name="message"]', 'This is a test message.')
      .pause(1000)
      .execute(function() {
        document.querySelector('button[type="submit"]').scrollIntoView();
      })
      .click('button[type="submit"]')
      .pause(1000)
      .assert.attributeContains('input[name="email"]', 'validationMessage', "Please include an '@' in the email address. 'invalid-email' is missing an '@'.")
      .end();
  });
});
describe('Feedback Page Test', function() {
    it('should load the feedback page and check the header text - Chrome', function(browser) {
      browser
        .navigateTo('http://localhost:9090/feedback')
        .waitForElementVisible('body', 1000)
        .assert.visible('header.container-fluid')
        .assert.visible('form')
        .assert.visible('input[name="name"]')
        .assert.visible('textarea[name="message"]')
        .assert.visible('button[type="submit"]')
        .end();
    });
  
    it('should fill out the feedback form and submit and check the message existance on the page - Chrome', function(browser) {
      browser
        .navigateTo('http://localhost:9090/feedback')
        .waitForElementVisible('body', 1000)
        .setValue('input[name="name"]', 'Pierre')
        .setValue('textarea[name="message"]', 'This is a feedback message.')
        .pause(1000)
        .moveToElement('button[type="submit"]', 0, 0)
        .execute(function() {
            window.scrollTo(0, document.body.scrollHeight);
          })
        .click('button[type="submit"]')
        .pause(1000)
        .assert.urlContains('/feedback')
        .assert.value('input[name="name"]', '')
        .assert.value('textarea[name="message"]', '')
        .assert.textContains('body', 'This is a feedback message.', 'Pierre')
        .end();
    });
  
    it('should display validation message when required fields are empty - Chrome', function(browser) {
      browser
        .navigateTo('http://localhost:9090/feedback')
        .waitForElementVisible('body', 1000)
        .pause(1000)
        .moveToElement('button[type="submit"]', 0, 0)
        .execute(function() {
            document.querySelector('button[type="submit"]').scrollIntoView();
        })
        .click('button[type="submit"]')
        .pause(1000)
        .assert.attributeContains('input[name="name"]', 'validationMessage', 'Please fill out this field.')
        .end();
    });
  
  });
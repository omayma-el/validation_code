describe('Pricing Page Test', function() {
    const pricingUrl = 'http://localhost:9090/pricing';
    
    it('should load the pricing page and check the header text', function(browser) {
      browser
        .navigateTo(pricingUrl)
        .waitForElementVisible('body', 10000)
        .assert.containsText('.home--header-title', 'UN PRIX POUR')
        .assert.containsText('.home--header-title', 'TOUTES LES SAISONS')
        .assert.containsText('.display-6', 'Venez séjourner à Rosas')
        .assert.containsText('p', 'De 460 € à 760 € / semaine')
        .assert.visible('a.btn.btn-dark.btn-lg.rounded-pill')
        .end();
    });
  
    it('should check the main content area', function(browser) {
      browser
        .navigateTo(pricingUrl)
        .waitForElementVisible('main.container.mt-5', 10000)
        .assert.visible('main.container.mt-5')
        .assert.visible('#tarifs-pricing')
        .assert.visible('#tarifs-conditions')
        .assert.visible('#tarifs-services')
        .end();
    });

    it('should verify pricing sections and text', function(browser) {
        browser
          .windowMaximize()
          .navigateTo(pricingUrl)
          .waitForElementVisible('body', 5000)
          .waitForElementVisible('.card:nth-of-type(1)', 10000)
          .assert.containsText('.card:nth-of-type(1) .card-title.h4.text-center', 'Basse saison')
          .useXpath()
          .assert.containsText('/html/body/main/section[1]/div/div[2]/div/div/h5', 'Moyenne saison')
          .useXpath()
          .assert.containsText('/html/body/main/section[1]/div/div[3]/div/div/h5', 'Haute saison')
          .end();
      });
  
    it('should check the presence of pricing images', function(browser) {
    browser
        .windowMaximize()
        .navigateTo(pricingUrl)
        .useXpath()
        .assert.visible('/html/body/main/section[1]/div/div[1]/div/img')
        .assert.visible('/html/body/main/section[1]/div/div[2]/div/img')
        .assert.visible('/html/body/main/section[1]/div/div[3]/div/img')
        .end();
    });
  
    it('should check the presence of payment method images - Chrome', function(browser) {
        browser
          .windowMaximize()
          .navigateTo(pricingUrl)
          .useXpath()
          .assert.visible('/html/body/main/section[3]/div/div[2]/div/button/img')
          .assert.visible('/html/body/main/section[3]/div/div[4]/button/img')
          .assert.visible('/html/body/main/section[3]/div/div[6]/button/img')
          .end();
    });
  
    it('should check that the contact button is functional - Chrome', function(browser) {
      browser
        .windowMaximize()
        .navigateTo('http://localhost:9090/pricing')
        .useXpath()
        .click('/html/body/header/div[2]/div/div[2]/div/div/a')
        .assert.urlContains('/contact')
        .end();
    });

    it('should check that the 3 contact buttons are functional - Chrome', function(browser) {
      browser
        .windowMaximize()
        .navigateTo(pricingUrl)
        .useXpath()
        .execute(function() {
          document.evaluate('//*[@id="tarifs-conditions"]/div[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.scrollIntoView(({ behavior: 'auto' }));
        })
        .click('//*[@id="tarifs-pricing"]/div/div[1]/div/div/div[2]/a')
        .assert.urlContains('/contact')
        .navigateTo(pricingUrl)
        .useXpath()
        .execute(function() {
          document.evaluate('/html/body/main/section[1]/div/div[2]/div/div/div[2]/a', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.scrollIntoView(({ behavior: 'auto' }));
        })
        .click('/html/body/main/section[1]/div/div[2]/div/div/div[2]/a')
        .assert.urlContains('/contact')
        .navigateTo(pricingUrl)
        .useXpath()
        .execute(function() {
          document.evaluate('/html/body/main/section[1]/div/div[1]/div/div/div[2]/a', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.scrollIntoView(({ behavior: 'auto' }));
        })
        .click('/html/body/main/section[1]/div/div[1]/div/div/div[2]/a')
        .assert.urlContains('/contact')
        .end();
    });
  });
describe('Pricing Page Test', function() {
    it('should load the pricing page and check the header text - Chrome', function(browser) {
      browser
        .navigateTo('http://localhost:9090/pricing')
        .waitForElementVisible('body', 5000)
        .waitForElementVisible('header.container-fluid', 5000)
        .assert.visible('header.container-fluid')
        .assert.visible('header.container-fluid .container.mt-5.pt-4')
        .assert.containsText('.home--header-title', 'UN PRIX POUR')
        .assert.containsText('.home--header-title', 'TOUTES LES SAISONS')
        .assert.containsText('.display-6', 'Venez séjourner à Rosas')
        .assert.containsText('p', 'De 460 € à 760 € / semaine')
        .assert.visible('a.btn.btn-dark.btn-lg.rounded-pill')
        .end();
    });
  
    it('should check the main content area - Chrome', function(browser) {
      browser
        .navigateTo('http://localhost:9090/pricing')
        .waitForElementVisible('body', 5000)
        .waitForElementVisible('main.container.mt-5', 5000)
        .assert.visible('main.container.mt-5')
        .end();
    });
  });
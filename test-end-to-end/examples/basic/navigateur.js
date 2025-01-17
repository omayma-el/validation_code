describe('Home Page Test', function() {
  const homeUrl = 'http://localhost:9090';

  it('should load the home page and check the header text', function(browser) {
    browser
      .windowMaximize()
      .navigateTo(homeUrl)
      .waitForElementVisible('body', 10000)
      .useXpath()
      .assert.containsText('//header//h2[contains(@class, "home--header-title")]', 'A LOUER APPARTEMENT ROSAS')
      .assert.containsText('//header//h2[contains(@class, "text-danger")]', '2 chambres | 30 m de la plage')
      .assert.visible('//header//img[@alt="spanish"]')
      .assert.visible('//header//a[contains(@class, "btn btn-lg btn-dark rounded-pill") and text()="Contactez-nous"]')
      .end();
  });

  it('should check the apartment gallery', function(browser) {
    browser
      .windowMaximize()
      .navigateTo(homeUrl)
      .useCss()
      .waitForElementVisible('body', 10000)
      .useXpath()
      .assert.containsText('//section[@id="appartement-gallerie"]//h3[contains(@class, "display-6")]', "L'appartement")
      .assert.visible('/html/body/main/section[1]/div[2]/div[1]/div[1]/img')
      .assert.visible('/html/body/main/section[1]/div[2]/div[2]/div/div[1]/img')
      .assert.visible('/html/body/main/section[1]/div[2]/div[1]/div[2]/img')
      .assert.visible('/html/body/main/section[1]/div[2]/div[2]/div/div[2]/img')
      .assert.visible('/html/body/main/section[1]/div[2]/div[1]/div[3]/img')
      .assert.visible('/html/body/main/section[1]/div[2]/div[2]/div/div[3]/img')
      .end();
  });

  it('should check the characteristics section', function(browser) {
    browser
      .windowMaximize()
      .navigateTo(homeUrl)
      .useCss()
      .waitForElementVisible('body', 10000)
      .useXpath()
      .assert.containsText('//section[@id="caracteristiques"]//h3[contains(@class, "display-6")]', 'Caractéristiques')
      .assert.visible('//section[@id="caracteristiques"]//img[@alt="icon"]')
      .assert.containsText('//section[@id="caracteristiques"]//span[contains(text(), "Plage à 30m")]', 'Plage à 30m')
      .assert.containsText('//section[@id="caracteristiques"]//span[contains(text(), "Parking gratuit")]', 'Parking gratuit')
      .assert.containsText('//section[@id="caracteristiques"]//span[contains(text(), "Restaurants")]', 'Restaurants')
      .assert.containsText('//section[@id="caracteristiques"]//span[contains(text(), "Commerces")]', 'Commerces')
      .assert.containsText('//section[@id="caracteristiques"]//span[contains(text(), "Salon de jardin")]', 'Salon de jardin')
      .assert.containsText('//section[@id="caracteristiques"]//span[contains(text(), "Baignoire")]', 'Baignoire')
      .assert.containsText('//section[@id="caracteristiques"]//span[contains(text(), "Micro-ondes")]', 'Micro-ondes')
      .assert.containsText('//section[@id="caracteristiques"]//span[contains(text(), "Cafetière")]', 'Cafetière')
      .assert.containsText('//section[@id="caracteristiques"]//span[contains(text(), "Pas d\'animaux")]', 'Pas d\'animaux')
      .assert.containsText('//section[@id="caracteristiques"]//span[contains(text(), "Pas de TV")]', 'Pas de TV')
      .assert.containsText('//section[@id="caracteristiques"]//span[contains(text(), "Pas de WIFI")]', 'Pas de WIFI')
      .assert.containsText('//section[@id="caracteristiques"]//span[contains(text(), "Non fumeur")]', 'Non fumeur')
      .end();
  });

  it('should check the prices section', function(browser) {
    browser
      .windowMaximize()
      .navigateTo(homeUrl)
      .useCss()
      .waitForElementVisible('body', 10000)
      .useXpath()
      .assert.containsText('//section[@id="tarifs"]//h3[contains(@class, "display-6")]', 'Tarifs')
      .assert.visible('//section[@id="tarifs"]//img[@alt="winter"]')
      .assert.containsText('//section[@id="tarifs"]//h5[contains(@class, "card-title h4 text-center")]', 'Basse saison')
      .assert.containsText('/html/body/main/section[3]/div[2]/div[2]/div/div/h5', 'Moyenne saison')
      .assert.containsText('/html/body/main/section[3]/div[2]/div[3]/div/div/h5', 'Haute saison')
      .assert.containsText('//section[@id="tarifs"]//p[contains(@class, "card-text h2 text-center")]', '460 € / semaine')
      .assert.containsText('/html/body/main/section[3]/div[2]/div[2]/div/div/p', '560 € / semaine')
      .assert.containsText('/html/body/main/section[3]/div[2]/div[3]/div/div/p', '760 € / semaine')
      .assert.visible('//section[@id="tarifs"]//a[contains(@class, "btn btn-primary btn-lg") and text()="Contact"]')
      .end();
  });

  it('should check the presence of the contact button and its functionality', function(browser) {
    browser
      .windowMaximize()
      .navigateTo(homeUrl)
      .useXpath()
      .execute(function() {
        document.evaluate('//header//a[contains(@class, "btn btn-lg btn-dark rounded-pill") and text()="Contactez-nous"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.scrollIntoView({ behavior: 'smooth', block: 'center' });
      })
      .waitForElementVisible('//header//a[contains(@class, "btn btn-lg btn-dark rounded-pill") and text()="Contactez-nous"]', 1000)
      .click('//header//a[contains(@class, "btn btn-lg btn-dark rounded-pill") and text()="Contactez-nous"]')
      .assert.urlContains('/contact')
      .end();
  });

  it('should check the presence and functionality of all buttons', function(browser) {
    browser
      .windowMaximize()
      .navigateTo(homeUrl)
      .useXpath()
      .assert.visible('/html/body/header/div[1]/div[2]/nav/div/div/ul/li[1]/a')
      .assert.containsText('/html/body/header/div[1]/div[2]/nav/div/div/ul/li[1]/a', 'Localisation')
      .click('/html/body/header/div[1]/div[2]/nav/div/div/ul/li[1]/a')
      .assert.urlContains('/geo')
      .navigateTo(homeUrl)
      .assert.visible('/html/body/header/div[1]/div[2]/nav/div/div/ul/li[2]/a')
      .assert.containsText('/html/body/header/div[1]/div[2]/nav/div/div/ul/li[2]/a', 'Tarifs')
      .useXpath()
      .click('/html/body/header/div[1]/div[2]/nav/div/div/ul/li[2]/a')
      .assert.urlContains('/pricing')
      .navigateTo(homeUrl)
      .assert.visible('/html/body/header/div[1]/div[2]/nav/div/div/ul/li[3]/a')
      .assert.containsText('/html/body/header/div[1]/div[2]/nav/div/div/ul/li[3]/a', 'Avis')
      .useXpath()
      .click('/html/body/header/div[1]/div[2]/nav/div/div/ul/li[3]/a')
      .assert.urlContains('/feedback')
      .end();
  });
});
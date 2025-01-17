describe('Geo Page Test', function() {
    const geoUrl = 'http://localhost:9090/geo';
  
    it('should load the geo page and check the header text', function(browser) {
      browser
        .windowMaximize()
        .navigateTo(geoUrl)
        .useCss()
        .waitForElementVisible('body', 10000)
        .useXpath()
        .assert.containsText('//header//h2[contains(@class, "home--header-title")]', 'IDEALEMENT SITUE')
        .assert.containsText('//header//h2[contains(@class, "text-danger")]', '30 mètres de la plage')
        .assert.visible('//header//img[@alt="spanish"]')
        .assert.visible('//header//a[contains(@class, "btn btn-dark btn-lg rounded-pill") and text()="Contactez-nous"]')
        .end();
    });
  
    it('should check the main content area', function(browser) {
      browser
        .windowMaximize()
        .navigateTo(geoUrl)
        .useCss()
        .waitForElementVisible('body', 10000)
        .useXpath()
        .assert.visible('//main[contains(@class, "container mt-5")]')
        .assert.visible('//main//div[contains(@class, "card border border-light bg-light pt-2")]')
        .assert.containsText('//main//h5[contains(@class, "card-title h4")]', 'Accès')
        .assert.containsText('/html/body/main/section[1]/div[2]/h5', 'Carte')
        .end();
    });
  
    it('should check the presence of the contact button and its functionality', function(browser) {
      browser
        .windowMaximize()
        .navigateTo(geoUrl)
        .useXpath()
        .execute(function() {
          document.evaluate('//header//a[contains(@class, "btn btn-dark btn-lg rounded-pill") and text()="Contactez-nous"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.scrollIntoView({ behavior: 'smooth', block: 'center' });
        })
        .waitForElementVisible('//header//a[contains(@class, "btn btn-dark btn-lg rounded-pill") and text()="Contactez-nous"]', 1000)
        .click('//header//a[contains(@class, "btn btn-dark btn-lg rounded-pill") and text()="Contactez-nous"]')
        .assert.urlContains('/contact')
        .end();
    });

    it('should check the presence of the "Voiture" section and its content', function(browser) {
      browser
        .windowMaximize()
        .navigateTo(geoUrl)
        .useXpath()
        .assert.visible('/html/body/main/section[1]/div[1]/div[1]/div[1]/h5')
        .assert.containsText('/html/body/main/section[1]/div[1]/div[1]/div[1]/h5', 'Voiture')
        .assert.hidden('/html/body/main/section[1]/div[1]/div[1]/div[1]/h5/i')
        .assert.containsText('/html/body/main/section[1]/div[1]/div[1]/div[2]/div/a[1]', "Paris", "Rosas", "Autoroute jusqu'à Figueras.", "900 km. ", "Temps de trajet : 8 heures")
        .assert.containsText('/html/body/main/section[1]/div[1]/div[1]/div[2]/div/a[2]', "Toulouse", "Rosas", "Autoroute jusqu'à Figueras.", "290 km. ", "Temps de trajet : 2h30")
        .end();
    });

    it('should check the presence of the "Avion" section and its content', function(browser) {
      browser
        .windowMaximize()
        .navigateTo(geoUrl)
        .useXpath()
        .assert.visible('/html/body/main/section[1]/div[1]/div[2]/div[1]/h5')
        .assert.containsText('/html/body/main/section[1]/div[1]/div[2]/div[1]/h5', 'Avion')
        .assert.visible('/html/body/main/section[1]/div[1]/div[2]/div[1]/h5/i')
        .assert.containsText('/html/body/main/section[1]/div[1]/div[2]/div[2]/div/a', "Paris", "Barcelone", "Location de voiture directement à l'aéroport, car jusqu'à Rosas.", "Puis de l'aéroport à Rosas : 1h30.", "Temps de trajet : 1h15")
        .end();
    });

    it('should check the presence of the "Train" section and its content', function(browser) {
      browser
        .windowMaximize()
        .navigateTo(geoUrl)
        .useXpath()
        .assert.visible('/html/body/main/section[1]/div[1]/div[3]/div[1]/h5')
        .assert.containsText('/html/body/main/section[1]/div[1]/div[3]/div[1]/h5', 'Train')
        .assert.visible('/html/body/main/section[1]/div[1]/div[3]/div[1]/h5/i')
        .assert.visible('/html/body/main/section[1]/div[1]/div[3]/div[2]/div/a', "Paris", "Barcelone", "Puis de la gare de Barcelone à Rosas : location de voiture directement à la gare ou train jusqu'à Figueras.", "Temps de trajet : 6h30")
        .end();
    });

    it('should check the presence of the "Nos meilleures adresses" section and its content', function(browser) {
      browser
        .windowMaximize()
        .navigateTo(geoUrl)
        .useXpath()
        .assert.visible('/html/body/main/section[2]/div[2]/h5')
        .assert.visible('/html/body/main/section[2]/div[2]/h5/i')
        .assert.containsText('/html/body/main/section[2]/div[2]/h5', 'Nos meilleures adresses')
        .assert.containsText('//main//li[contains(@class, "list-group-item")]', 'Restaurant Rosa')
        .assert.containsText('/html/body/main/section[2]/div[2]/div[1]/ol/li[2]', 'Jamoneria Jamon 100 %')
        .assert.containsText('/html/body/main/section[2]/div[2]/div[1]/ol/li[3]', 'Sidreria Toxt\'s')
        .assert.containsText('/html/body/main/section[2]/div[2]/div[2]/ol/li[1]', 'Restaurant Las Palmeras')
        .assert.containsText('/html/body/main/section[2]/div[2]/div[2]/ol/li[2]', 'A emporter : El rey del pollo')
        .assert.containsText('/html/body/main/section[2]/div[2]/div[2]/ol/li[3]', 'Restaurant Pica Pica')
        .end();
    });

    it('should check the presence of the "A proximité" section and its content', function(browser) {
        browser
          .windowMaximize()
          .navigateTo(geoUrl)
          .useCss()
          .waitForElementVisible('body', 10000)
          .useXpath()
          .assert.visible('//main//h5[contains(@class, "h4 pt-2")]')
          .assert.visible('/html/body/main/section[2]/div[1]/h5/i')
          .assert.containsText('//main//h5[contains(@class, "h4 pt-2")]', 'A proximité')
          .assert.containsText('/html/body/main/section[2]/div[1]/p[1]', "Situé sur la promenade qui longe la mer, l'appartement offre un accès direct à la plage.")
          .assert.containsText('/html/body/main/section[2]/div[1]/p[3]', "Parc naturel Cap de Creuz.")
          .assert.containsText('/html/body/main/section[2]/div[1]/p[4]', "Villages typiques de la Costa Brava : Cadaques (Village de Dali), Figueras, Pals, Calella de Pallafrugell, Escala, Paratallada, Peralada...")
          .end();
      });

      it('should check the presence of the map and its functionality', function(browser) {
        browser
          .windowMaximize()
          .navigateTo(geoUrl)
          .useXpath()
          .assert.visible('/html/body/main/section[1]/div[2]/div/div/h5')
          .assert.containsText('/html/body/main/section[1]/div[2]/div/div/h5', 'Localisation')
          .assert.visible('/html/body/main/section[1]/div[2]/div/div/h5/i')
          .assert.visible('//main//iframe[contains(@src, "https://www.google.com/maps/embed")]')
          .end();
      });
  });
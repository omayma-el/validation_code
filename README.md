# Test Description

## Admin page

### Scenario 1 : Should check the presence of the main content area

- Case 1: Log in to the application using valid credentials.
- Case 2: Navigate to the admin page.
- Case 3: Verify that the main container on the admin page is present.

---

### Scenario 2 : Should check the presence of the admin panel elements

- Case 1: Log in to the application using valid credentials.
- Case 2: Navigate to the admin page.
- Case 3: Verify the presence of key elements in the admin panel

---

### Scenario 3 : Should check the functionality of the "Disconnect" button

- Case 1: Log in to the application using valid credentials.
- Case 2: Navigate to the admin page.
- Case 3: Click the "Disconnect" button.
- Case 4: Wait for the application to redirect.
- Case 5: Verify that the URL changes to /login.

---
## Index page

### Scenario 1: Should load the home page and check the header text

- Case 1: Maximize the browser window.  
- Case 2: Navigate to the home page.  
- Case 3: Wait for the page to load completely.  
- Case 4: Verify that the header text contains the title "A LOUER APPARTEMENT ROSAS".  
- Case 5: Verify that the header displays the subtitle "2 chambres | 30 m de la plage".
- Case 6: Verify that the "Contactez-nous" button is visible.  

---

### Scenario 2: Should check the apartment gallery

- Case 1: Maximize the browser window.  
- Case 2: Navigate to the home page.  
- Case 3: Wait for the page to load completely.  
- Case 4: Verify the section title "L'appartement" in the gallery.  
- Case 5: Verify that the gallery images are visible

---

### Scenario 3: Should check the characteristics section

- Case 1: Maximize the browser window.  
- Case 2: Navigate to the home page.  
- Case 3: Wait for the page to load completely.  
- Case 4: Verify the section title "Caractéristiques".  
- Case 5: Verify the following characteristics are displayed:  
Plage à 30m  
Parking gratuit  
Restaurants  
Commerces  
Salon de jardin  
Baignoire  
Micro-ondes  
Cafetière  
Pas d'animaux  
Pas de TV  
Pas de WIFI  
Non fumeur  

---

### Scenario 4: Should check the prices section

- Case 1: Maximize the browser window.  
- Case 2: Navigate to the home page.  
- Case 3: Wait for the page to load completely.  
- Case 4: Verify the section title "Tarifs".  
- Case 5: Verify that the pricing images are visible:  
Image for winter.  
- Case 6: Verify the pricing tiers are displayed with corresponding details:  
Basse saison: 460 € / semaine.  
Moyenne saison: 560 € / semaine.  
Haute saison: 760 € / semaine.  
- Case 7: Verify the presence of the "Contact" button.  

---

### Scenario 5: Should check the presence of the contact button and its functionality

- Case 1: Maximize the browser window.  
- Case 2: Navigate to the home page.  
- Case 3: Scroll to the "Contactez-nous" button in the header.  
- Case 4: Verify the "Contactez-nous" button is visible.  
- Case 5: Click the "Contactez-nous" button and verify redirection to the `/contact` page.  

---

### Scenario 6: Should check the presence and functionality of all navigation buttons

- Case 1: Maximize the browser window.  
- Case 2: Navigate to the home page.  
- Case 3: Verify the presence of the "Localisation" button.  
- Case 4: Click the "Localisation" button and verify redirection to the `/geo` page.  
- Case 5: Navigate back to the home page.  
- Case 6: Verify the presence of the "Tarifs" button.  
- Case 7: Click the "Tarifs" button and verify redirection to the `/pricing` page.  
- Case 8: Navigate back to the home page.  
- Case 9: Verify the presence of the "Avis" button.  
- Case 10: Click the "Avis" button and verify redirection to the `/feedback` page.  

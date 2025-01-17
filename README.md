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
    - Plage à 30m  
    - Parking gratuit  
    - Restaurants  
    - Commerces  
    - Salon de jardin  
    - Baignoire  
    - Micro-ondes  
    - Cafetière  
    - Pas d'animaux  
    - Pas de TV  
    - Pas de WIFI  
    - Non fumeur  

---

### Scenario 4: Should check the prices section

- Case 1: Maximize the browser window.  
- Case 2: Navigate to the home page.  
- Case 3: Wait for the page to load completely.  
- Case 4: Verify the section title "Tarifs".  
- Case 5: Verify that the pricing images are visible:  
Image for winter.  
- Case 6: Verify the pricing tiers are displayed with corresponding details:  
    - Basse saison: 460 € / semaine.  
    - Moyenne saison: 560 € / semaine.  
    - Haute saison: 760 € / semaine.  
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

## Contact page

### Scenario 1: Should load the contact page and check the header text

- Case 1: Maximize the browser window.  
- Case 2: Navigate to the contact page (`http://localhost:9090/contact`).  
- Case 3: Wait for the page to load completely.  
- Case 4: Verify that the header container is visible.  
- Case 5: Verify that the header title contains the text "CONTACTEZ-NOUS".  
- Case 6: Verify that the subtitle contains the text "remplissez le formulaire".  
- Case 7: Verify that the form is visible.  
- Case 8: Verify that the following form fields are visible:  
    - First Name  
    - Last Name  
    - Mobile Phone  
    - Arrival Date  
    - Departure Date  

---

### Scenario 2: Should fill out the contact form and submit

- Case 1: Maximize the browser window.  
- Case 2: Navigate to the contact page (`http://localhost:9090/contact`).  
- Case 3: Wait for the page to load completely.  
- Case 4: Fill out the form with the following details:  
  - First Name: Jean  
  - Last Name: Louis  
  - Email: jean.louis@example.com  
  - Mobile Phone: 0610203040  
  - Arrival Date: 12-01-2023  
  - Departure Date: 12-10-2023  
  - Message: "This is a test message."  
- Case 5: Scroll to the submit button and click it.  
- Case 6: Verify the page URL contains `/contact`.  
- Case 7: Verify that all form fields are cleared after submission.  

---

### Scenario 3: Should display error message when required fields are empty

- Case 1: Maximize the browser window.  
- Case 2: Navigate to the contact page (`http://localhost:9090/contact`).  
- Case 3: Wait for the page to load completely.  
- Case 4: Fill out the following fields:  
  - First Name: Julie  
  - Last Name: Moulin  
- Case 5: Scroll to the submit button and click it.  
- Case 6: Verify that an error message is displayed for the required `Mobile Phone` field:  
  "Please fill out this field."  

---

### Scenario 4: Should display validation message for invalid email

- Case 1: Maximize the browser window.  
- Case 2: Navigate to the contact page (`http://localhost:9090/contact`).  
- Case 3: Wait for the page to load completely.  
- Case 4: Fill out the form with the following details:  
    - First Name: Jacques  
    - Last Name: Brel  
    - Email: invalid-email  
    - Mobile Phone: 0610203040  
    - Arrival Date: 12-01-2023  
    - Departure Date: 12-10-2023  
    - Message: "This is a test message."  
- Case 5: Scroll to the submit button and click it.  
- Case 6: Verify that the error message for the `Email` field is displayed:  
    - "Please include an '@' in the email address. 'invalid-email' is missing an '@'."  

---

## Feedback page

### Scenario 1: Should load the feedback page and check the header text

- Case 1: Maximize the browser window.  
- Case 2: Navigate to the feedback page (`http://localhost:9090/feedback`).  
- Case 3: Wait for the page to load completely.  
- Case 4: Verify that the header container is visible.  
- Case 5: Verify that the feedback form is visible.  
- Case 6: Verify that the following form fields are visible:  
    - Name  
    - Message  
- Case 7: Verify that the submit button is visible.  

---

### Scenario 2: Should fill out the feedback form and submit and check the message existence on the page

- Case 1: Maximize the browser window.  
- Case 2: Navigate to the feedback page (`http://localhost:9090/feedback`).  
- Case 3: Wait for the page to load completely.  
- Case 4: Fill out the form with the following details:  
    - Name: Pierre  
    - Message: "This is a feedback message."  
- Case 5: Scroll to the submit button and click it.  
- Case 6: Verify the page URL contains `/feedback`.  
- Case 7: Verify that the form fields are cleared after submission.  
- Case 8: Verify that the feedback message appears on the page, containing the text "This is a feedback message." and "Pierre".  

---

### Scenario 3: Should display validation message when required fields are empty

- Case 1: Maximize the browser window.  
- Case 2: Navigate to the feedback page (`http://localhost:9090/feedback`).  
- Case 3: Wait for the page to load completely.  
- Case 4: Scroll to the submit button and click it without filling in the required fields.  
- Case 5: Verify that an error message is displayed for the `Name` field:  
  "Please fill out this field."

## Geo page

### Scenario 1: Should load the geo page and check the header text

- Case 1: Maximize the browser window.  
- Case 2: Navigate to the geo page (`http://localhost:9090/geo`).  
- Case 3: Wait for the page to load completely.  
- Case 4: Verify that the header text "IDEALEMENT SITUE" is visible.  
- Case 5: Verify that the subtitle "30 mètres de la plage" is visible.  
- Case 6: Verify that the "Contactez-nous" button is visible.  

---

### Scenario 2: Should check the main content area

- Case 1: Maximize the browser window.  
- Case 2: Navigate to the geo page (`http://localhost:9090/geo`).  
- Case 3: Wait for the page to load completely.  
- Case 4: Verify the visibility of the main content container.  
- Case 5: Verify that the "Accès" card is visible.  
- Case 6: Verify that the "Carte" section is visible.  

---

### Scenario 3: Should check the presence of the contact button and its functionality

- Case 1: Maximize the browser window.  
- Case 2: Navigate to the geo page (`http://localhost:9090/geo`).  
- Case 3: Scroll to the "Contactez-nous" button and click it.  
- Case 4: Verify that the URL contains `/contact`.  

---

### Scenario 4: Should check the presence of the "Voiture" section and its content

- Case 1: Maximize the browser window.  
- Case 2: Navigate to the geo page (`http://localhost:9090/geo`).  
- Case 3: Verify the presence of the "Voiture" section and its title.  
- Case 4: Verify that the details for "Paris" and "Toulouse" are correct:  
    - Paris: "Rosas", "Autoroute jusqu'à Figueras.", "900 km.", "Temps de trajet : 8 heures."  
    - Toulouse: "Rosas", "Autoroute jusqu'à Figueras.", "290 km.", "Temps de trajet : 2h30."  

---

### Scenario 5: Should check the presence of the "Avion" section and its content

- Case 1: Maximize the browser window.  
- Case 2: Navigate to the geo page (`http://localhost:9090/geo`).  
- Case 3: Verify the presence of the "Avion" section and its title.  
- Case 4: Verify that the details for "Paris" to "Barcelone" are correct:  
    - "Location de voiture directement à l'aéroport, car jusqu'à Rosas.",  
    - "Puis de l'aéroport à Rosas : 1h30.",  
    - "Temps de trajet : 1h15."  

---

### Scenario 6: Should check the presence of the "Train" section and its content

- Case 1: Maximize the browser window.  
- Case 2: Navigate to the geo page (`http://localhost:9090/geo`).  
- Case 3: Verify the presence of the "Train" section and its title.  
- Case 4: Verify that the details for "Paris" to "Barcelone" and the train information are correct:  
    - "Puis de la gare de Barcelone à Rosas : location de voiture directement à la gare ou train jusqu'à Figueras."  
    - "Temps de trajet : 6h30."  

---

### Scenario 7: Should check the presence of the "Nos meilleures adresses" section and its content

- Case 1: Maximize the browser window.  
- Case 2: Navigate to the geo page (`http://localhost:9090/geo`).  
- Case 3: Verify the presence of the "Nos meilleures adresses" section.  
- Case 4: Verify that the restaurant names and their details are correct:  
    - "Restaurant Rosa"  
    - "Jamoneria Jamon 100 %"  
    - "Sidreria Toxt's"  
    - "Restaurant Las Palmeras"  
    - "A emporter : El rey del pollo"  
    - "Restaurant Pica Pica"  

---

### Scenario 8: Should check the presence of the "A proximité" section and its content

- Case 1: Maximize the browser window.  
- Case 2: Navigate to the geo page (`http://localhost:9090/geo`).  
- Case 3: Verify the presence of the "A proximité" section and its title.  
- Case 4: Verify the details for the "A proximité" section:  
    - "Situé sur la promenade qui longe la mer, l'appartement offre un accès direct à la plage."  
    - "Parc naturel Cap de Creuz."  
    - "Villages typiques de la Costa Brava : Cadaques (Village de Dali), Figueras, Pals, Calella de Pallafrugell, Escala, Paratallada, Peralada..."  

---

### Scenario 9: Should check the presence of the map and its functionality

- Case 1: Maximize the browser window.  
- Case 2: Navigate to the geo page (`http://localhost:9090/geo`).  
- Case 3: Verify the presence of the "Localisation" section and its title.  
- Case 4: Verify that the map iframe is visible and functional.
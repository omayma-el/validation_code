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
  First Name  
  Last Name  
  Mobile Phone  
  Arrival Date  
  Departure Date  

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
  "Please include an '@' in the email address. 'invalid-email' is missing an '@'."  

---
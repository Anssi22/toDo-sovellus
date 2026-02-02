# Todo-sovellus -- React, Node.js & MongoDB

Käyttäjä voi lisätä, poistaa, muokata ja merkitä tehtäviä tehdyiksi/kesken.
Frontend on toteutettu Reactilla, backend Node.js/Expressillä ja tietokantana MongoDB.

---

## Ominaisuudet

-   Tehtävien lisääminen
-   Tehtävien poisto ja muokkaus
-   Tehtävien tilan vaihto
-   MongoDB-tallennus
-   HTTP-rajapinta frontendille

## Teknologiat

Frontend: React, JavaScript\
Backend: Node.js, Express, Mongoose\
Tietokanta: MongoDB

---

## Asennus ja käyttöönotto

### Esivaatimukset

-   Node.js
-   npm
-   MongoDB

### Backend

    cd backend
    npm install
    npm run dev

### Frontend

    cd frontend
    npm install
    npm run dev

## Käyttö

Avaa selaimella http://localhost:5173 ja käytä sovellusta.

---

## API-dokumentaatio

GET /api/todos\
POST /api/todos\
PUT /api/todos/:id\
DELETE /api/todos/:id

---

## Jatkokehitysideoita

-   Kuvien lisäys -ominaisuus

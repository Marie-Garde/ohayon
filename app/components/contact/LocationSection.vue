<template>
  <section class="location">
    <div class="location__title-wrapper">
      <h2 class="location__title">Nous trouver</h2>
    </div>

    <div class="location__grid">
      <div class="location__map">
        <iframe
          src="https://www.google.com/maps?q=36+route+d'Espagne+31100+Toulouse&output=embed"
          title="Cabinet Ohayon & Associés sur Google Maps"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          allowfullscreen
        ></iframe>
      </div>

      <div class="location__info">
        <div class="location__card">
          <h3>Adresse</h3>
          <p>
            Cabinet Ohayon &amp; Associés<br />
            36, route d'Espagne<br />
            31100 Toulouse
          </p>
        </div>

        <div class="location__card">
          <h3>Horaires</h3>
          <p>
            Du lundi au vendredi<br />
            9h00 &ndash; 12h30 &middot; 14h00 &ndash; 18h00
          </p>
        </div>

        <div class="location__card location__card--highlight">
          <h3>Email</h3>
          <p>
            <a href="mailto:contact@ohayon-associes.com"
              >contact@ohayon-associes.com</a
            >
          </p>
          <p class="location__hint">
            Moyen de contact <strong>privilégié</strong> — réponse dans la
            journée.
          </p>
        </div>

        <div class="location__card location__card--wide">
          <h3>Téléphone</h3>
          <p>
            <a href="tel:+33561552544">05 61 55 25 44</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.location {
  position: relative;
  padding: 80px 40px 60px;
}

.location__title-wrapper {
  text-align: center;
  margin-bottom: 60px;
}

.location__title {
  display: inline-block;
  background-color: var(--color-primary);
  color: #fff;
  padding: 15px 50px;
  white-space: nowrap;
}

.location__grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 50px;
  max-width: 1100px;
  margin: 0 auto;
  align-items: stretch;
}

.location__map {
  height: 500px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.location__map iframe {
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
}

.location__info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.location__card {
  border: 2px solid var(--color-primary);
  border-radius: 5px;
  padding: 20px 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.location__card h3 {
  color: var(--color-primary);
  font-size: 20px;
  margin: 0 0 10px;
}

.location__card p {
  margin: 0;
}

.location__card a {
  color: var(--color-text);
  text-decoration: none;
  transition: color 0.3s;
}

.location__card a:hover {
  color: var(--color-primary);
}

.location__card--wide {
  grid-column: 1 / -1;
}

.location__card--highlight {
  grid-column: 1 / -1;
  background-color: #fff6d6;
  border-color: var(--color-secondary);
  position: relative;
}

.location__card--highlight::before {
  content: "Privilégié";
  position: absolute;
  top: -12px;
  right: 20px;
  background-color: var(--color-primary);
  color: #fff;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 5px 12px;
  border-radius: 3px;
}

.location__card--highlight h3 {
  color: var(--color-text);
}

.location__card--highlight a {
  color: var(--color-text);
  font-weight: 700;
}

.location__card--highlight a:hover {
  color: var(--color-primary);
}

.location__hint {
  margin-top: 8px !important;
  font-size: 13px;
  font-weight: 400;
}
</style>

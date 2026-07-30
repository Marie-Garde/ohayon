<template>
  <section class="pillars">
    <div class="pillars__banner">
      <div class="pillars__image-wrapper">
        <img
          src="~/assets/illustrations/images/qui-sommes-nous/piliers.jpg"
          alt="Nos piliers"
          class="pillars__image"
          loading="lazy"
        />
      </div>
      <div class="pillars__title-wrapper">
        <h2 class="pillars__title">Nos piliers</h2>
      </div>
    </div>

    <div class="pillars__list">
      <div class="pillars__item" v-reveal="'left'">
        <h3>Expertise &amp; qualité</h3>
        <p>
          Une équipe où ⅓ sont experts-comptables. Votre interlocuteur a la
          compétence de répondre à 99% de vos questions.
        </p>
      </div>
      <div class="pillars__item" v-reveal="'right'">
        <h3>Digitalisation pionnière</h3>
        <p>
          0 papier depuis 15 ans, outils interactifs (Pennylane, Silae…),
          intégration de l'IA. On ne vous parle pas de digital, on le
          pratique depuis 2010.
        </p>
      </div>
      <div class="pillars__item" v-reveal="'left'">
        <h3>Réactivité &amp; proximité</h3>
        <p>
          Un collaborateur dédié, joignable en ligne directe, réponse mail
          dans la journée. Toulouse et alentours mais proches de tous nos
          clients.
        </p>
      </div>
      <div class="pillars__item" v-reveal="'right'">
        <h3>Sur-mesure, sans standard</h3>
        <p>
          Pas de pack, pas de grille. On commence par comprendre votre
          activité, vos besoins, vos difficultés. Ensuite on construit
          l'accompagnement adapté.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pillars {
  position: relative;
  margin-top: 0;
  padding-bottom: 60px;
}

.pillars__banner {
  position: relative;
}

.pillars__image-wrapper {
  width: 100%;
  height: 620px;
  overflow: hidden;
  clip-path: polygon(
    0 var(--slant-height),
    100% 0,
    100% calc(100% - var(--slant-height)),
    0 100%
  );
}

.pillars__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.pillars__title-wrapper {
  position: absolute;
  bottom: calc(var(--slant-height) / 2);
  left: 50%;
  transform: translateX(-50%) translateY(50%);
  z-index: 1;
}

.pillars__title {
  display: inline-block;
  background-color: var(--color-primary);
  color: #fff;
  padding: 15px 50px;
  white-space: nowrap;
  transform: rotate(calc(-1 * atan2(var(--slant-height), 100vw)));
}

.pillars__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  max-width: 1180px;
  margin: 70px auto 0;
  padding: 0 40px;
}

.pillars__item {
  border: 2px solid var(--color-primary);
  border-radius: 5px;
  padding: 30px 20px;
  text-align: center;
  width: calc(50% - 25px);
  min-height: 264px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}

.pillars__item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

.pillars__item h3 {
  color: var(--color-primary);
  margin: 0 0 15px;
}

.pillars__item p {
  margin: 0;
}

@media (max-width: 768px) {
  .pillars__image-wrapper {
    height: 440px;
  }

  .pillars__title {
    font-size: 28px;
    padding: 12px 32px;
  }

  .pillars__list {
    gap: 24px;
    margin: 50px auto 0;
    padding: 0 24px;
  }

  .pillars__item {
    width: 100%;
    min-height: 0;
  }
}

@media (max-width: 480px) {
  .pillars__image-wrapper {
    height: 360px;
  }

  .pillars__title {
    font-size: 20px;
    padding: 10px 22px;
  }

  .pillars__list {
    padding: 0 20px;
  }
}
</style>

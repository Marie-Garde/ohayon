<template>
  <section class="highlight">
    <div class="highlight__inner" v-reveal="'up'">
      <div class="highlight__media">
        <img
          src="~/assets/illustrations/images/qui-sommes-nous/equipe.jpg"
          alt="L'équipe du cabinet Ohayon &amp; Associés"
          class="highlight__image"
          loading="lazy"
        />
      </div>
      <div class="highlight__content">
        <p class="highlight__subtitle">Notre approche</p>
        <h2 class="highlight__title">
          Un accompagnement à taille&nbsp;humaine
        </h2>
        <p class="highlight__text">
          Derrière chaque mission, une équipe qui prend le temps de comprendre
          votre activité. Nous conjuguons la rigueur d'un cabinet d'expertise
          comptable et la proximité d'un partenaire du quotidien, disponible
          pour répondre à vos questions bien au-delà des échéances.
        </p>
        <p class="highlight__text">
          Des outils digitaux pour la fiabilité, un interlocuteur dédié pour le
          conseil : vous gardez une vision claire de votre activité, toute
          l'année.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.highlight {
  max-width: 1180px;
  margin: 0 auto;
  padding: 20px 40px 100px;
}

.highlight__inner {
  display: flex;
  align-items: stretch;
  gap: 0;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}

.highlight__inner:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

.highlight__media {
  flex: 0 0 45%;
  overflow: hidden;
}

.highlight__image {
  width: 100%;
  height: 100%;
  min-height: 320px;
  object-fit: cover;
  object-position: center;
  display: block;
}

.highlight__content {
  flex: 1;
  padding: 48px 44px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.highlight__subtitle {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--color-secondary);
  margin: 0 0 10px;
}

.highlight__title {
  font-size: 30px;
  margin: 0 0 20px;
  line-height: 1.2;
}

.highlight__text {
  font-size: 15px;
  line-height: 1.6;
  margin: 0 0 12px;
}

.highlight__text:last-child {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .highlight {
    padding: 0 24px 80px;
  }

  .highlight__inner {
    flex-direction: column;
  }

  .highlight__media {
    flex: unset;
  }

  .highlight__image {
    min-height: 220px;
    max-height: 260px;
  }

  .highlight__content {
    padding: 32px 28px;
  }

  .highlight__title {
    font-size: 24px;
  }
}

@media (max-width: 480px) {
  .highlight {
    padding: 0 16px 60px;
  }

  .highlight__content {
    padding: 28px 22px;
  }

  .highlight__title {
    font-size: 21px;
  }
}
</style>

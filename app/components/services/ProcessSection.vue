<template>
  <section class="process">
    <div class="process__header">
      <p class="process__subtitle">Premier contact ?</p>
      <h2 class="process__title">Comment ça se passe</h2>
    </div>

    <div class="timeline">
      <div class="timeline__track">
        <div class="timeline__step timeline__step--top">
          <div class="timeline__content">
            <h3>Premier<br />échange</h3>
            <span class="timeline__duration">15 à 30 min</span>
            <p>
              Nous prenons le temps d'échanger sur votre activité, vos
              enjeux et vos besoins afin de comprendre précisément votre
              situation.
            </p>
          </div>
          <span class="timeline__dot"></span>
        </div>
        <div class="timeline__step timeline__step--bottom">
          <span class="timeline__dot"></span>
          <div class="timeline__content">
            <p>
              Lors d'un entretien avec un expert-comptable, nous analysons
              votre organisation, vos objectifs et vos enjeux du moment.
            </p>
            <h3>Rendez-vous découverte</h3>
            <span class="timeline__duration">45 min à 1 h</span>
          </div>
        </div>
        <div class="timeline__step timeline__step--top">
          <div class="timeline__content">
            <h3>Proposition personnalisée</h3>
            <span class="timeline__duration">24 à 72 h</span>
            <p>
              Nous vous adressons une lettre de mission claire et adaptée,
              détaillant les prestations proposées, les outils mis à
              disposition et les honoraires.
            </p>
          </div>
          <span class="timeline__dot"></span>
        </div>
        <div class="timeline__step timeline__step--bottom">
          <span class="timeline__dot"></span>
          <div class="timeline__content">
            <p>
              Après validation de notre proposition, nous mettons en place
              les outils, récupérons les informations nécessaires et
              organisons votre suivi.
            </p>
            <h3>Démarrage de la mission</h3>
            <span class="timeline__duration">1 à 2 semaines</span>
          </div>
        </div>
        <div class="timeline__step timeline__step--top">
          <div class="timeline__content">
            <h3>Accompagnement continu</h3>
            <span class="timeline__duration">En continu</span>
            <p>
              Vous bénéficiez d'un interlocuteur dédié et de conseils
              réguliers, tout au long de l'année, pour piloter sereinement
              votre activité.
            </p>
          </div>
          <span class="timeline__dot"></span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.process {
  background-color: var(--color-primary);
  height: 880px;
  padding: 100px 40px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  clip-path: polygon(
    0 var(--slant-height),
    100% 0,
    100% calc(100% - var(--slant-height)),
    0 100%
  );
}

.process__header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.process__subtitle {
  color: #fff;
  font-weight: 300;
  font-size: 25px;
  margin: 0;
  margin-left: 310px;
}

.process__title {
  color: #fff;
  font-size: 45px;
  margin: 0;
}

.timeline {
  width: 100%;
  max-width: 1100px;
  margin: 100px auto 0;
}

.timeline__track {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  position: relative;
  min-height: 480px;
}

.timeline__track::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 3px;
  background-color: #fff;
  transform: translateY(-50%);
}

.timeline__track::after {
  content: "";
  position: absolute;
  top: 50%;
  right: -5px;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 15px solid #fff;
}

.timeline__step {
  position: relative;
  height: 480px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
}

.timeline__dot {
  width: 16px;
  height: 16px;
  background-color: #fff;
  border: none;
  outline: none;
  border-radius: 50%;
  position: absolute;
  left: 0;
  z-index: 1;
  flex-shrink: 0;
}

.timeline__step--top {
  justify-content: flex-end;
  padding-bottom: 240px;
}

.timeline__step--top .timeline__dot {
  bottom: 232px;
}

.timeline__step--top .timeline__content {
  height: 236px;
  display: flex;
  flex-direction: column;
}

.timeline__step--top .timeline__content p {
  flex: 1;
  padding-bottom: 23px;
}

.timeline__step--bottom {
  justify-content: flex-start;
  padding-top: 240px;
}

.timeline__step--bottom .timeline__dot {
  top: 232px;
}

.timeline__step--bottom .timeline__content {
  height: 236px;
  display: flex;
  flex-direction: column;
}

.timeline__step--bottom .timeline__content p {
  flex: 1;
  padding-top: 23px;
}

.timeline__content h3 {
  color: #fff;
  font-size: 20px;
  margin: 0 0 6px;
}

.timeline__content p {
  color: #fff;
  font-weight: 300;
  margin: 0;
  margin-left: 7px;
  border-left: 3px solid #fff;
  padding-left: 10px;
}

.timeline__duration {
  display: block;
  color: var(--color-secondary);
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0 0 8px;
}

.timeline__step--bottom .timeline__content h3 {
  margin: 6px 0 0;
  flex-shrink: 0;
  min-height: 58px;
}

.timeline__step--bottom .timeline__duration {
  margin: 4px 0 0;
  flex-shrink: 0;
}

@media (max-width: 900px) {
  .process {
    height: auto;
    padding: 90px 24px 70px;
  }

  .process__header {
    width: 100%;
    align-items: flex-start;
    text-align: left;
  }

  .process__subtitle {
    margin-left: 0;
    font-size: 18px;
  }

  .process__title {
    font-size: 28px;
  }

  .timeline {
    margin-top: 40px;
  }

  .timeline__track {
    display: flex;
    flex-direction: column;
    min-height: 0;
  }

  .timeline__track::before {
    top: 6px;
    bottom: 6px;
    left: 7px;
    right: auto;
    width: 3px;
    height: auto;
    transform: none;
  }

  .timeline__track::after {
    display: block;
    top: auto;
    bottom: -6px;
    left: 8px;
    right: auto;
    transform: translateX(-50%);
    border-top: 12px solid #fff;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: none;
  }

  .timeline__step,
  .timeline__step--top,
  .timeline__step--bottom {
    height: auto;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0 0 28px 32px;
  }

  .timeline__step:last-child {
    padding-bottom: 12px;
  }

  .timeline__content,
  .timeline__step--top .timeline__content,
  .timeline__step--bottom .timeline__content {
    height: auto;
    min-height: 0;
    display: flex;
    flex-direction: column;
  }

  .timeline__content h3 {
    order: 1;
    font-size: 17px;
    white-space: nowrap;
    min-height: 0 !important;
    margin: 0 0 6px !important;
  }

  .timeline__content h3 br {
    display: none;
  }

  .timeline__duration {
    order: 2;
    margin: 0 0 8px !important;
  }

  .timeline__content p {
    order: 3;
    padding: 0 !important;
    margin-left: 0 !important;
    border-left: none !important;
  }

  .timeline__step--top .timeline__dot,
  .timeline__step--bottom .timeline__dot {
    position: absolute;
    left: 0;
    top: 4px;
    bottom: auto;
  }
}

@media (max-width: 480px) {
  .process__title {
    font-size: 24px;
  }

  .timeline__content h3 {
    font-size: 18px;
  }

  .timeline__content p {
    font-size: 14px;
  }
}
</style>

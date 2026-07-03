<template>
  <section class="process">
    <div class="process__header">
      <p class="process__subtitle">Envie de nous rejoindre ?</p>
      <h2 class="process__title">Processus de recrutement</h2>
    </div>

    <div class="timeline">
      <div class="timeline__track">
        <div class="timeline__step timeline__step--top">
          <div class="timeline__content">
            <h3>Vous postulez</h3>
            <p>Envoyez-nous votre CV, on le lit avec attention.</p>
          </div>
          <span class="timeline__dot"></span>
        </div>
        <div class="timeline__step timeline__step--bottom">
          <span class="timeline__dot"></span>
          <div class="timeline__content">
            <p>Un premier échange pour se rencontrer, sans chichis.</p>
            <h3>Nous discutons</h3>
          </div>
        </div>
        <div class="timeline__step timeline__step--top">
          <div class="timeline__content">
            <h3>Le courant passe</h3>
            <p>On vérifie que l'envie est la même des deux côtés.</p>
          </div>
          <span class="timeline__dot"></span>
        </div>
        <div class="timeline__step timeline__step--bottom">
          <span class="timeline__dot"></span>
          <div class="timeline__content">
            <p>On vérifie que tu connais RechercheV sous Excel.</p>
            <h3>Le test</h3>
          </div>
        </div>
        <div class="timeline__step timeline__step--top">
          <div class="timeline__content">
            <h3>Bienvenue</h3>
            <p>Et si tout va bien, l'aventure commence.</p>
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
  height: 700px;
  padding: 100px 40px 80px;
  margin-bottom: 50px;
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
  max-width: 1150px;
  margin: 40px auto 0;
}

.timeline__track {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  position: relative;
  min-height: 300px;
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
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 15px;
}

.timeline__dot {
  width: 16px;
  height: 16px;
  background-color: #fff;
  border: none;
  outline: none;
  border-radius: 50%;
  position: absolute;
  left: 15px;
  z-index: 1;
  flex-shrink: 0;
}

.timeline__step--top {
  justify-content: flex-end;
  padding-bottom: 150px;
}

.timeline__step--top .timeline__dot {
  bottom: 142px;
}

.timeline__step--top .timeline__content p {
  padding-bottom: 23px;
}

.timeline__step--bottom {
  justify-content: flex-start;
  padding-top: 150px;
}

.timeline__step--bottom .timeline__dot {
  top: 142px;
}

.timeline__step--bottom .timeline__content p {
  padding-top: 23px;
}

.timeline__content h3 {
  color: #fff;
  font-size: 22px;
  margin: 0 0 8px;
}

.timeline__content p {
  color: #fff;
  font-weight: 300;
  margin: 0;
  margin-left: 7px;
  border-left: 3px solid #fff;
  padding-left: 10px;
}

.timeline__step--bottom .timeline__content h3 {
  margin: 8px 0 0;
}

@media (max-width: 900px) {
  .process {
    height: auto;
    padding: 90px 24px 70px;
  }

  .process__header {
    width: 100%;
    align-items: center;
    text-align: center;
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
    padding: 0 0 35px 32px;
  }

  .timeline__step:last-child {
    padding-bottom: 0;
  }

  .timeline__content {
    display: flex;
    flex-direction: column;
  }

  .timeline__content h3 {
    order: 1;
    margin: 0 0 6px !important;
  }

  .timeline__content p {
    order: 2;
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

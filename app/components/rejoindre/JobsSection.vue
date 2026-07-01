<template>
  <section class="jobs">
    <div class="jobs__banner">
      <div class="jobs__image-wrapper">
        <img
          src="~/assets/illustrations/images/nous-rejoindre/offres.jpg"
          alt="Équipe au travail"
          class="jobs__image"
        />
      </div>
      <div class="jobs__title-wrapper">
        <h2 class="jobs__title">Offres d'emploi</h2>
      </div>
    </div>

    <div class="jobs__intro-wrapper">
      <div class="jobs__intro">
        <img
          src="~/assets/illustrations/images/nous-rejoindre/profils.jpg"
          alt=""
          class="jobs__intro-img"
        />
        <div class="jobs__intro-content">
          <p class="jobs__intro-text">
            Nous recherchons des personnalités curieuses, engagées et autonomes,
            qui ont envie de progresser, de prendre des initiatives et de
            contribuer à la réussite collective.
          </p>
        </div>
      </div>
    </div>

    <div class="jobs__cta-wrapper">
      <p class="jobs__cta-text">Pour consulter nos offres en cours, cliquez ici :</p>
      <a
        class="jobs__cta-btn"
        href="https://www.linkedin.com/company/ohayon-associes/jobs/"
        target="_blank"
        rel="noopener"
      >
        Voir nos offres
      </a>
    </div>
  </section>
</template>

<style scoped>
.jobs {
  position: relative;
  margin-top: 100px;
}

.jobs__banner {
  position: relative;
}

.jobs__image-wrapper {
  width: 100%;
  height: 450px;
  overflow: hidden;
  clip-path: polygon(
    0 var(--slant-height),
    100% 0,
    100% calc(100% - var(--slant-height)),
    0 100%
  );
}

.jobs__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.jobs__title-wrapper {
  position: absolute;
  bottom: calc(var(--slant-height) / 2);
  left: 50%;
  transform: translateX(-50%) translateY(50%);
  z-index: 1;
}

.jobs__title {
  display: inline-block;
  background-color: var(--color-primary);
  color: #fff;
  padding: 15px 50px;
  white-space: nowrap;
  transform: rotate(calc(-1 * atan2(var(--slant-height), 100vw)));
}

.jobs__intro-wrapper {
  max-width: 1100px;
  margin: 60px auto 0;
  padding: 0 40px;
}

.jobs__intro {
  display: flex;
  align-items: stretch;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
}

.jobs__intro-img {
  width: 220px;
  flex-shrink: 0;
  object-fit: cover;
  object-position: center;
  display: block;
}

.jobs__intro-content {
  flex: 1;
  background-color: var(--color-primary);
  padding: 36px 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.jobs__intro-text {
  margin: 0;
  font-weight: 300;
  font-size: 16px;
  line-height: 1.7;
  color: #fff;
}

.jobs__cta-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 1100px;
  margin: 60px auto 0;
  padding: 0 40px 100px;
  text-align: center;
}

.jobs__cta-text {
  margin: 0;
  font-weight: 300;
  font-size: 17px;
  color: var(--color-text);
}

.jobs__cta-btn {
  font-family: var(--font-body);
  font-weight: 300;
  font-size: 16px;
  color: var(--color-primary);
  background-color: #fff;
  border: 2px solid var(--color-primary);
  border-radius: 5px;
  padding: 12px 28px;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;
}

.jobs__cta-btn:hover {
  background-color: var(--color-primary);
  color: #fff;
}

@media (max-width: 768px) {
  .jobs {
    margin-top: 70px;
  }

  .jobs__image-wrapper {
    height: 320px;
  }

  .jobs__title {
    font-size: 26px;
    padding: 12px 32px;
  }

  .jobs__intro-wrapper {
    padding: 0 24px;
  }

  .jobs__intro-img {
    width: 140px;
  }

  .jobs__cta-wrapper {
    padding: 0 24px 70px;
  }
}

@media (max-width: 480px) {
  .jobs__image-wrapper {
    height: 260px;
  }

  .jobs__title {
    font-size: 18px;
    padding: 10px 20px;
  }

  .jobs__intro {
    flex-direction: column;
  }

  .jobs__intro-img {
    width: 100%;
    height: 160px;
  }

  .jobs__cta-wrapper {
    padding: 0 20px 60px;
  }

  .jobs__cta-text {
    font-size: 15px;
  }
}
</style>

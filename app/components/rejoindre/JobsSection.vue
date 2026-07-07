<template>
  <section class="jobs">
    <div class="jobs__banner">
      <div class="jobs__image-wrapper">
        <img
          src="~/assets/illustrations/images/nous-rejoindre/offres.jpg"
          alt="Équipe au travail"
          class="jobs__image"
          loading="lazy"
        />
      </div>
      <div class="jobs__title-wrapper">
        <h2 class="jobs__title">Offres d'emploi</h2>
      </div>
    </div>

    <div class="jobs__content">
      <div class="jobs__intro">
        <img
          src="~/assets/illustrations/images/nous-rejoindre/profils.jpg"
          alt=""
          class="jobs__intro-img"
          loading="lazy"
        />
        <div class="jobs__intro-content">
          <p class="jobs__intro-text">
            Nous recherchons des personnalités curieuses, engagées et autonomes,
            qui ont envie de progresser, de prendre des initiatives et de
            contribuer à la réussite collective.
          </p>
        </div>
      </div>

      <div class="jobs__cta">
        <div class="jobs__cta-icon-wrapper">
          <img
            src="~/assets/illustrations/icons/home/contact.svg"
            alt=""
            class="jobs__cta-icon"
            loading="lazy"
          />
        </div>
        <div class="jobs__cta-text">
          <p class="jobs__cta-title">Envie de nous rejoindre ?</p>
          <p class="jobs__cta-subtitle">
            Consultez nos offres d'emploi en cours et postulez en ligne.
          </p>
        </div>
        <a
          class="jobs__cta-btn"
          href="https://www.linkedin.com/company/ohayon-associes/jobs/"
          target="_blank"
          rel="noopener"
        >
          Voir nos offres
        </a>
      </div>
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

.jobs__content {
  max-width: 1180px;
  margin: 70px auto -30px;
  padding: 0 40px 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.jobs__intro {
  display: flex;
  align-items: stretch;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
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
  padding: 36px 40px;
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

.jobs__cta {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 28px 40px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
}

.jobs__cta-icon-wrapper {
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: rgba(28, 177, 161, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.jobs__cta-icon {
  width: 30px;
  height: 30px;
  filter: invert(59%) sepia(61%) saturate(449%) hue-rotate(130deg)
    brightness(93%) contrast(89%);
}

.jobs__cta-text {
  flex: 1;
}

.jobs__cta-title {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 18px;
  color: var(--color-text);
  margin: 0 0 4px;
}

.jobs__cta-subtitle {
  font-size: 14px;
  color: #666;
  margin: 0;
}

.jobs__cta-btn {
  flex-shrink: 0;
  padding: 12px 28px;
  background-color: var(--color-primary);
  color: #fff;
  border-radius: 6px;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 15px;
  text-decoration: none;
  white-space: nowrap;
  transition: background-color 0.3s, color 0.3s;
}

.jobs__cta-btn:hover {
  background-color: var(--color-secondary);
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
    font-size: 28px;
    padding: 12px 32px;
  }

  .jobs__content {
    margin-bottom: 0;
    padding: 0 24px 70px;
  }

  .jobs__intro-img {
    width: 140px;
  }

  .jobs__cta {
    flex-wrap: wrap;
    padding: 24px;
  }

  .jobs__cta-btn {
    width: 100%;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .jobs__image-wrapper {
    height: 260px;
  }

  .jobs__title {
    font-size: 20px;
    padding: 10px 22px;
  }

  .jobs__intro {
    flex-direction: column;
  }

  .jobs__intro-img {
    width: 100%;
    height: 160px;
  }

  .jobs__intro-content {
    padding: 24px 24px;
  }
}
</style>

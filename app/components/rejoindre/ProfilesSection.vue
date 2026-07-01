<template>
  <section class="profiles">
    <div class="profiles__title-wrapper">
      <h2 class="profiles__title">Profils recherchés</h2>
    </div>
    <div class="profiles__image-wrapper">
      <img
        src="~/assets/illustrations/images/nous-rejoindre/profils.jpg"
        alt="Équipe au travail"
        class="profiles__image"
      />
      <div class="profiles__card">
        <p class="profiles__text">
          Nous recherchons des personnalités curieuses, engagées et
          autonomes, qui ont envie de progresser, de prendre des initiatives
          et de contribuer à la réussite collective.
        </p>
        <a
          href="mailto:nousrejoindre@ohayon-associes.com"
          class="profiles__btn"
        >
          Postuler<br /><strong>nousrejoindre@ohayon-associes.com</strong>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.profiles {
  position: relative;
  margin-top: 130px;
  padding: 0 40px 130px;
}

.profiles__image-wrapper {
  position: relative;
  max-width: 1000px;
  height: 400px;
  margin: 0 auto;
  overflow: hidden;
  clip-path: polygon(
    0 calc(tan(atan2(var(--slant-height), 100vw)) * 1000px),
    100% 0,
    100% 100%,
    0 100%
  );
}

.profiles__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left center;
}

.profiles__title-wrapper {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.profiles__title {
  display: inline-block;
  background-color: var(--color-primary);
  color: #fff;
  padding: 15px 50px;
  white-space: nowrap;
  transform: rotate(calc(-1 * atan2(var(--slant-height), 100vw)));
}

.profiles__card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 600px;
  padding: 30px 35px;
  background-color: #fff;
  border-radius: 5px;
  text-align: center;
}

.profiles__text {
  margin: 0;
  font-family: var(--font-body);
  font-weight: 300;
  font-size: 16px;
  line-height: 1.6;
  color: var(--color-text);
}

.profiles__btn {
  font-family: var(--font-body);
  font-weight: 300;
  font-size: 16px;
  color: var(--color-primary);
  background-color: #fff;
  border-radius: 5px;
  padding: 12px 20px;
  text-decoration: none;
  text-align: center;
  line-height: 1.5;
  border: 2px solid var(--color-primary);
  transition:
    background-color 0.3s,
    color 0.3s;
}

.profiles__btn:hover {
  background-color: var(--color-primary);
  color: #fff;
}

@media (max-width: 768px) {
  .profiles {
    margin-top: 90px;
    padding: 0 24px 90px;
  }

  .profiles__image-wrapper {
    clip-path: none;
    border-radius: 5px;
  }

  .profiles__title {
    font-size: 26px;
    padding: 12px 32px;
    transform: none;
  }

  .profiles__card {
    max-width: 90%;
    padding: 24px 28px;
    gap: 16px;
  }

  .profiles__text {
    font-size: 15px;
  }
}

@media (max-width: 480px) {
  .profiles {
    margin-top: 70px;
    padding: 0 20px 70px;
  }

  .profiles__image-wrapper {
    height: 460px;
  }

  .profiles__title {
    font-size: 18px;
    padding: 10px 20px;
  }

  .profiles__card {
    max-width: 92%;
    padding: 20px 20px;
    gap: 14px;
  }

  .profiles__text {
    font-size: 14px;
    line-height: 1.5;
  }

  .profiles__btn {
    font-size: 14px;
    padding: 10px 16px;
  }
}
</style>

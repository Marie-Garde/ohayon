<template>
  <section class="culture">
    <div class="culture__banner">
      <div class="culture__image-wrapper">
        <img
          src="~/assets/illustrations/images/nous-rejoindre/culture.jpg"
          alt="Équipe au travail"
          class="culture__image"
        />
      </div>
      <div class="culture__title-wrapper">
        <h2 class="culture__title">Culture &amp; ambiance du cabinet</h2>
      </div>
    </div>

    <p class="culture__values">
      <span class="culture__value">Bienveillance</span>
      <span class="culture__dot" aria-hidden="true">·</span>
      <span class="culture__value">Exigence</span>
      <span class="culture__dot" aria-hidden="true">·</span>
      <span class="culture__value">Esprit d'équipe</span>
      <span class="culture__dot" aria-hidden="true">·</span>
      <span class="culture__value">Confiance</span>
      <span class="culture__dot" aria-hidden="true">·</span>
      <span class="culture__value">Proximité</span>
      <span class="culture__dot" aria-hidden="true">·</span>
      <span class="culture__value">Autonomie</span>
      <span class="culture__dot" aria-hidden="true">·</span>
      <span class="culture__value">Engagement</span>
      <span class="culture__dot" aria-hidden="true">·</span>
      <span class="culture__value">Innovation</span>
      <span class="culture__dot" aria-hidden="true">·</span>
      <span class="culture__value">Convivialité</span>
      <span class="culture__dot" aria-hidden="true">·</span>
      <span class="culture__value">Réactivité</span>
    </p>

    <div class="culture__grid">
      <div class="culture__card">
        <img
          src="~/assets/illustrations/icons/rejoindre/team-spirit.svg"
          alt=""
          class="culture__icon"
        />
        <h3>Esprit d'équipe</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </div>
      <div class="culture__card">
        <img
          src="~/assets/illustrations/icons/rejoindre/work-life-balance.svg"
          alt=""
          class="culture__icon"
        />
        <h3>Équilibre vie pro / perso</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </div>
      <div class="culture__card">
        <img
          src="~/assets/illustrations/icons/rejoindre/continuous-training.svg"
          alt=""
          class="culture__icon"
        />
        <h3>Formation continue</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </div>
      <div class="culture__card">
        <img
          src="~/assets/illustrations/icons/rejoindre/convivial-moments.svg"
          alt=""
          class="culture__icon"
        />
        <h3>Moments conviviaux</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.culture {
  position: relative;
  margin-top: 100px;
}

.culture__banner {
  position: relative;
}

.culture__image-wrapper {
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

.culture__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.culture__title-wrapper {
  position: absolute;
  bottom: calc(var(--slant-height) / 2);
  left: 50%;
  transform: translateX(-50%) translateY(50%);
  z-index: 1;
}

.culture__title {
  display: inline-block;
  background-color: var(--color-primary);
  color: #fff;
  padding: 15px 50px;
  white-space: nowrap;
  transform: rotate(calc(-1 * atan2(var(--slant-height), 100vw)));
}

.culture__values {
  text-align: center;
  max-width: 900px;
  margin: 80px auto 0;
  padding: 0 40px;
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 17px;
  letter-spacing: 0.3px;
  color: var(--color-primary);
  line-height: 2;
}

.culture__value {
  display: inline-block;
  cursor: default;
  transition: color 0.25s, transform 0.25s;
}

.culture__value:hover {
  color: var(--color-secondary);
  transform: translateY(-2px);
}

.culture__dot {
  color: var(--color-secondary);
  font-size: 24px;
  font-weight: 700;
  margin: 0 10px;
  vertical-align: middle;
  line-height: 1;
}

.culture__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0 30px;
  max-width: 1100px;
  margin: 60px auto 0;
  padding: 0 40px 40px;
}

.culture__card {
  text-align: center;
  border-top: 3px solid var(--color-secondary);
  padding-top: 20px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  padding: 20px 16px;
}

.culture__icon {
  width: 100px;
  height: 100px;
  margin: 0 auto 10px;
}

.culture__card h3 {
  color: var(--color-primary);
  font-size: 20px;
  margin: 0 0 12px;
}

.culture__card p {
  font-weight: 300;
  font-size: 15px;
  margin: 0 auto;
  max-width: 90%;
}

@media (max-width: 768px) {
  .culture {
    margin-top: 60px;
  }

  .culture__image-wrapper {
    height: 320px;
  }

  .culture__title {
    font-size: 24px;
    padding: 12px 30px;
  }

  .culture__values {
    font-size: 15px;
    margin-top: 50px;
    padding: 0 24px;
  }

  .culture__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px 24px;
    margin-top: 40px;
    padding: 0 24px 30px;
  }
}

@media (max-width: 480px) {
  .culture__image-wrapper {
    height: 260px;
  }

  .culture__title {
    font-size: 18px;
    padding: 10px 20px;
  }

  .culture__values {
    font-size: 13px;
    line-height: 1.8;
  }

  .culture__grid {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 0 20px 24px;
  }

  .culture__icon {
    width: 80px;
    height: 80px;
  }
}
</style>

<template>
  <section class="culture">
    <div class="culture__banner">
      <div class="culture__image-wrapper">
        <img
          src="~/assets/illustrations/images/home/image.jpg"
          alt="Équipe au travail"
          class="culture__image"
        />
      </div>
      <div class="culture__title-wrapper">
        <h2 class="culture__title">Culture &amp; ambiance du cabinet</h2>
      </div>
    </div>

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

.culture__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0 30px;
  max-width: 1100px;
  margin: 80px auto 0;
  padding: 0 40px 40px;
}

.culture__card {
  text-align: center;
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
</style>

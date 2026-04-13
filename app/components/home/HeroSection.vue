<template>
  <section class="hero">
    <div class="hero__overlay"></div>
    <img
      src="~/assets/illustrations/images/home/image.jpg"
      alt="Équipe au travail"
      class="hero__image"
    />
    <div class="hero__content">
      <h1>La qualité, par principe.</h1>
      <p>
        Cabinet d'expertise comptable &amp; commissariat aux comptes.<br />
        Accompagnement sur-mesure des <strong>TPE-PME</strong>.<br />
        Sur <span class="highlight">Toulouse</span> et sa région.
      </p>
      <NuxtLink to="/contact" class="hero__btn">Contactez-nous !</NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  height: 580px;
  overflow: hidden;
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - var(--slant-height)),
    0 100%
  );
}

.hero__image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    to right,
    var(--color-primary) 40%,
    rgba(28, 177, 161, 0.6) 60%,
    transparent 100%
  );
}

.hero__content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  height: 100%;
  width: 60%;
  margin: 0 auto;
  padding: 100px 40px 0;
}

.hero__content h1 {
  color: #fff;
  margin: 0 0 20px;
}

.hero__content p {
  color: #fff;
  font-weight: 300;
  font-size: 22px;
  margin: 0 0 30px;
  padding-left: 160px;
}

.hero__content strong {
  font-weight: 700;
}

.highlight {
  font-weight: 700;
}

.hero__btn {
  align-self: flex-start;
  margin-left: 490px;
  font-family: var(--font-body);
  font-weight: 400;
  font-size: 15px;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 5px;
  padding: 12px 24px;
  text-decoration: none;
  background: transparent;
  width: fit-content;
  transition:
    background-color 0.3s,
    color 0.3s,
    border-color 0.3s;
}

.hero__btn:hover {
  background-color: #fff;
  color: var(--color-primary);
  border-color: #fff;
}
</style>

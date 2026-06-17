<template>
  <section class="page-hero">
    <div class="page-hero__overlay"></div>
    <img
      src="~/assets/illustrations/images/home/image.jpg"
      alt="Cabinet Ohayon & Associés"
      class="page-hero__image"
    />
    <div class="page-hero__content">
      <h1>Qui sommes-nous</h1>
      <p class="page-hero__lead">
        Cabinet d'expertise comptable familial, nous accompagnons depuis
        bientôt 40 ans des entrepreneurs et dirigeants avec une approche
        sur-mesure, humaine et résolument digitale.
      </p>
    </div>
  </section>
</template>

<style scoped>
.page-hero {
  position: relative;
  width: 100%;
  height: 380px;
  overflow: hidden;
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - var(--slant-height)),
    0 100%
  );
}

.page-hero__image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.page-hero__overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    to right,
    var(--color-primary) 45%,
    rgba(28, 177, 161, 0.75) 70%,
    rgba(28, 177, 161, 0.3) 100%
  );
}

.page-hero__content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 80px;
}

.page-hero__content h1 {
  color: #fff;
  margin: 0 0 20px;
}

.page-hero__lead {
  color: #fff;
  font-weight: 300;
  font-size: 20px;
  margin: 0;
  max-width: 500px;
}
</style>

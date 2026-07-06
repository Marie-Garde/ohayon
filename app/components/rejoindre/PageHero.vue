<template>
  <section class="page-hero">
    <div class="page-hero__overlay"></div>
    <img
      src="~/assets/illustrations/images/nous-rejoindre/hero.jpg"
      alt="Cabinet Ohayon & Associés"
      class="page-hero__image"
    />
    <div class="page-hero__content">
      <h1>Nous rejoindre</h1>
      <p class="page-hero__lead">
        Envie de rejoindre une équipe à taille humaine ?<br />
        Découvrez nos opportunités.
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
    var(--color-primary) 40%,
    rgba(28, 177, 161, 0.6) 60%,
    transparent 100%
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

@media (max-width: 768px) {
  .page-hero {
    height: 320px;
  }

  .page-hero__content {
    padding: 0 40px;
  }

  .page-hero__content h1 {
    font-size: 40px;
    margin: 0 0 15px;
  }

  .page-hero__lead {
    font-size: 17px;
  }
}

@media (max-width: 480px) {
  .page-hero {
    height: 280px;
  }

  .page-hero__content {
    padding: 0 24px;
  }

  .page-hero__content h1 {
    font-size: 30px;
    margin: 0 0 10px;
  }

  .page-hero__lead {
    font-size: 15px;
    max-width: 100%;
  }
}
</style>

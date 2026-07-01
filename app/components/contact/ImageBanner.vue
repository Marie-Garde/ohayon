<template>
  <section class="banner">
    <div class="banner__image-wrapper">
      <img
        src="~/assets/illustrations/images/contact/nousecrire.jpg"
        alt="Équipe au travail"
        class="banner__image"
        loading="lazy"
      />
    </div>
    <div class="banner__title-wrapper">
      <h2 class="banner__title">Écrivez-nous</h2>
    </div>
  </section>
</template>

<style scoped>
.banner {
  position: relative;
  margin-top: 40px;
}

.banner__image-wrapper {
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

.banner__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.banner__title-wrapper {
  position: absolute;
  bottom: calc(var(--slant-height) / 2);
  left: 50%;
  transform: translateX(-50%) translateY(50%);
  z-index: 1;
}

.banner__title {
  display: inline-block;
  background-color: var(--color-primary);
  color: #fff;
  padding: 15px 50px;
  white-space: nowrap;
  transform: rotate(calc(-1 * atan2(var(--slant-height), 100vw)));
}
</style>

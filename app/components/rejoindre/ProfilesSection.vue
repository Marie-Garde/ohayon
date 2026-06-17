<template>
  <section class="profiles">
    <div class="profiles__title-wrapper">
      <h2 class="profiles__title">Profils recherchés</h2>
    </div>
    <div class="profiles__image-wrapper">
      <img
        src="~/assets/illustrations/images/home/image.jpg"
        alt="Équipe au travail"
        class="profiles__image"
      />
    </div>
  </section>
</template>

<style scoped>
.profiles {
  position: relative;
  margin-top: 130px;
}

.profiles__image-wrapper {
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

.profiles__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
</style>

<template>
  <section class="skills">
    <div class="skills__image-wrapper">
      <img
        src="~/assets/illustrations/images/home/image.jpg"
        alt="Équipe au travail"
        class="skills__image"
      />
    </div>
    <div class="skills__title-wrapper">
      <h2 class="skills__title">Nos savoir-faires</h2>
    </div>
  </section>
</template>

<style scoped>
.skills {
  position: relative;
  margin-top: 80px;
}

.skills__image-wrapper {
  width: 100%;
  height: 350px;
  overflow: hidden;
  clip-path: polygon(
    0 var(--slant-height),
    100% 0,
    100% calc(100% - var(--slant-height)),
    0 100%
  );
}

.skills__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.skills__title-wrapper {
  position: absolute;
  bottom: calc(var(--slant-height) / 2);
  left: 50%;
  transform: translateX(-50%) translateY(50%);
  z-index: 1;
}

.skills__title {
  display: inline-block;
  background-color: var(--color-primary);
  color: #fff;
  padding: 15px 50px;
  white-space: nowrap;
  transform: rotate(calc(-1 * atan2(var(--slant-height), 100vw)));
}
</style>

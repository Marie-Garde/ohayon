<template>
  <section class="culture">
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
  </section>
</template>

<style scoped>
.culture {
  position: relative;
  margin-top: 100px;
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
</style>

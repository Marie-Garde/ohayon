<template>
  <section class="whoweare">
    <div class="whoweare__title-wrapper">
      <h2 class="whoweare__title">Ce qui nous définit</h2>
    </div>
    <div class="whoweare__image-wrapper">
      <img
        src="~/assets/illustrations/images/home/image.jpg"
        alt="Équipe au travail"
        class="whoweare__image"
      />
    </div>
  </section>
</template>

<style scoped>
.whoweare {
  position: relative;
  margin-top: 130px;
}

.whoweare__image-wrapper {
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

.whoweare__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.whoweare__title-wrapper {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.whoweare__title {
  display: inline-block;
  background-color: var(--color-primary);
  color: #fff;
  padding: 15px 50px;
  white-space: nowrap;
  transform: rotate(calc(-1 * atan2(var(--slant-height), 100vw)));
}
</style>

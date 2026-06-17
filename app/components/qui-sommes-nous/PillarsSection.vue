<template>
  <section class="pillars">
    <div class="pillars__banner">
      <div class="pillars__image-wrapper">
        <img
          src="~/assets/illustrations/images/home/image.jpg"
          alt="Équipe au travail"
          class="pillars__image"
        />
      </div>
      <div class="pillars__title-wrapper">
        <h2 class="pillars__title">Nos piliers</h2>
      </div>
    </div>

    <div class="pillars__strip">
      <div class="pillars__list">
        <div class="pillars__item">
          <svg
            class="pillars__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--color-secondary)"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
          </svg>
          <h3>Qualité &amp; expertise</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
        <div class="pillars__item">
          <svg
            class="pillars__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--color-secondary)"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="4" y="3" width="16" height="18" rx="2" />
            <path d="M9 7h6M9 11h6M9 15h3" />
          </svg>
          <h3>Digitalisation pionnière</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
        <div class="pillars__item">
          <svg
            class="pillars__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--color-secondary)"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 3" />
          </svg>
          <h3>Réactivité &amp; proximité</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
        <div class="pillars__item">
          <svg
            class="pillars__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--color-secondary)"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M4 21V8l8-5 8 5v13" />
            <path d="M9 21v-7h6v7" />
          </svg>
          <h3>Sur-mesure</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pillars {
  position: relative;
  margin-top: 100px;
}

.pillars__banner {
  position: relative;
}

.pillars__image-wrapper {
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

.pillars__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.pillars__title-wrapper {
  position: absolute;
  bottom: calc(var(--slant-height) / 2);
  left: 50%;
  transform: translateX(-50%) translateY(50%);
  z-index: 1;
}

.pillars__title {
  display: inline-block;
  background-color: var(--color-primary);
  color: #fff;
  padding: 15px 50px;
  white-space: nowrap;
  transform: rotate(calc(-1 * atan2(var(--slant-height), 100vw)));
}

.pillars__strip {
  background-color: var(--color-primary);
  padding: 100px 40px 60px;
  margin-top: -1px;
  clip-path: polygon(
    0 var(--slant-height),
    100% 0,
    100% calc(100% - var(--slant-height)),
    0 100%
  );
}

.pillars__list {
  display: flex;
  max-width: 1100px;
  margin: 0 auto;
}

.pillars__item {
  flex: 1;
  padding: 0 30px;
  text-align: center;
}

.pillars__icon {
  width: 44px;
  height: 44px;
  margin: 0 auto 15px;
}

.pillars__item h3 {
  color: #fff;
  font-size: 20px;
  margin: 0 0 12px;
}

.pillars__item p {
  color: #fff;
  font-weight: 300;
  font-size: 15px;
  margin: 0;
}
</style>

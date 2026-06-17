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

    <div class="culture__strip">
      <div class="culture__list">
        <div class="culture__item">
          <svg
            class="culture__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--color-secondary)"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="9" cy="7" r="3" />
            <path d="M3 21v-1a6 6 0 0 1 6-6 6 6 0 0 1 6 6v1" />
            <circle cx="17" cy="8" r="2.5" />
            <path d="M21 21v-0.5a4.5 4.5 0 0 0-3-4.24" />
          </svg>
          <h3>Esprit d'équipe</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
        <div class="culture__item">
          <svg
            class="culture__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--color-secondary)"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 6l-3 7a4 4 0 0 0 8 0z" />
            <path d="M19 6l-3 7a4 4 0 0 0 8 0z" />
            <path d="M5 6h14" />
            <path d="M12 6v15" />
            <path d="M8 21h8" />
          </svg>
          <h3>Équilibre vie pro / perso</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
        <div class="culture__item">
          <svg
            class="culture__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--color-secondary)"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M22 10L12 5 2 10l10 5 10-5z" />
            <path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
          </svg>
          <h3>Formation continue</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
        <div class="culture__item">
          <svg
            class="culture__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--color-secondary)"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z"
            />
          </svg>
          <h3>Moments conviviaux</h3>
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

.culture__strip {
  background-color: var(--color-primary);
  padding: 100px 40px calc(60px + var(--slant-height));
  margin-top: -1px;
  clip-path: polygon(
    0 var(--slant-height),
    100% 0,
    100% calc(100% - var(--slant-height)),
    0 100%
  );
}

.culture__list {
  display: flex;
  max-width: 1100px;
  margin: 0 auto;
}

.culture__item {
  flex: 1;
  padding: 0 30px;
  text-align: center;
}

.culture__icon {
  width: 44px;
  height: 44px;
  margin: 0 auto 15px;
}

.culture__item h3 {
  color: #fff;
  font-size: 20px;
  margin: 0 0 12px;
}

.culture__item p {
  color: #fff;
  font-weight: 300;
  font-size: 15px;
  margin: 0;
}
</style>

<template>
  <section class="stats-section">
    <div class="stats-section__title-wrapper">
      <h2 class="stats-section__title">Nos chiffres clés</h2>
    </div>

    <div class="stats">
      <div class="stats__item stats__item--primary">
        <svg
          class="stats__icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" />
        </svg>
        <span class="stats__number">40</span>
        <span class="stats__label">Années d'expérience</span>
      </div>
      <div class="stats__item stats__item--light">
        <svg
          class="stats__icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M12 3l9 5-9 5-9-5 9-5z" />
          <path d="M5 10v6c0 1.5 3 3 7 3s7-1.5 7-3v-6" />
        </svg>
        <span class="stats__number">⅓</span>
        <span class="stats__label">Experts-comptables</span>
      </div>
      <div class="stats__item stats__item--dark">
        <svg
          class="stats__icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21v-1a8 8 0 0 1 16 0v1" />
        </svg>
        <span class="stats__number">12</span>
        <span class="stats__label">Personnes dans l'équipe</span>
      </div>
      <div class="stats__item stats__item--yellow">
        <svg
          class="stats__icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M12 22c6-4 8-8 8-12a8 8 0 0 0-16 0c0 4 2 8 8 12z" />
          <path d="M12 22c2-2 3-4 3-6" />
        </svg>
        <span class="stats__number">15</span>
        <span class="stats__label">Années de zéro papier</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats-section {
  position: relative;
  padding: 100px 40px 100px;
}

.stats-section__title-wrapper {
  text-align: center;
  margin-bottom: 60px;
}

.stats-section__title {
  display: inline-block;
  background-color: var(--color-primary);
  color: #fff;
  padding: 15px 50px;
  white-space: nowrap;
}

.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  z-index: 3;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.stats__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
  padding: 44px 20px 50px;
  border-top: 6px solid transparent;
}

.stats__item--primary {
  background-color: var(--color-primary);
  color: #fff;
  border-top-color: var(--color-secondary);
}

.stats__item--dark {
  background-color: #11625a;
  color: #fff;
  border-top-color: var(--color-secondary);
}

.stats__item--light {
  background-color: #fff;
  color: var(--color-primary);
  border-top-color: #11625a;
}

.stats__item--yellow {
  background-color: #fff;
  color: var(--color-text);
  border-top-color: var(--color-primary);
}

.stats__item--yellow .stats__icon,
.stats__item--yellow .stats__number {
  color: var(--color-secondary);
}

.stats__icon {
  width: 32px;
  height: 32px;
  margin-bottom: 5px;
}

.stats__number {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 56px;
  line-height: 1;
}

.stats__label {
  font-family: var(--font-heading);
  font-weight: 400;
  font-size: 14px;
}

@media (max-width: 800px) {
  .stats {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>

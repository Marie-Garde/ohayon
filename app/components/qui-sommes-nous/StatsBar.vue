<template>
  <section class="stats-section">
    <div class="stats-section__title-wrapper">
      <h2 class="stats-section__title">Nos chiffres clés</h2>
    </div>

    <div class="stats">
      <div class="stats__item">
        <span class="stats__number">40</span>
        <span class="stats__label">Années d'expériences</span>
      </div>
      <div class="stats__item">
        <span class="stats__number">12</span>
        <span class="stats__label">Personnes dans l'équipe</span>
      </div>
      <div class="stats__item">
        <span class="stats__number">⅓</span>
        <span class="stats__label">Experts-comptables</span>
      </div>
      <div class="stats__item">
        <span class="stats__number">15</span>
        <span class="stats__label">Années de zéro papier</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats-section {
  position: relative;
  padding: 80px 40px 60px;
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
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  height: 222px;
  margin: 0 auto;
  position: relative;
  z-index: 3;
  background: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 0 20px;
}

.stats__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.stats__number {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 100px;
  color: var(--color-secondary);
  line-height: 1;
}

.stats__label {
  font-family: var(--font-heading);
  font-weight: 400;
  font-size: 14px;
  color: var(--color-text);
  margin-top: 5px;
}
</style>

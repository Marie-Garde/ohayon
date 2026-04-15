<template>
  <div class="stats">
    <div class="stats__item">
      <span class="stats__number">40</span>
      <span class="stats__label">Années d'expériences</span>
    </div>
    <div class="stats__item">
      <span class="stats__number">4</span>
      <span class="stats__label">Experts-comptables</span>
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
</template>

<style scoped>
.stats {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  height: 222px;
  margin: -130px auto 0;
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

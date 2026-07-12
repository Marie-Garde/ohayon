<template>
  <div class="stats">
    <div v-for="(chiffre, index) in chiffres" :key="index" class="stats__item">
      <span class="stats__number">{{ chiffre.nombre }}</span>
      <span class="stats__label">{{ chiffre.libelle }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = useHomeContent()

const defaultChiffres = [
  { nombre: '40', libelle: "Années d'expériences" },
  { nombre: '4', libelle: 'Experts-comptables' },
  { nombre: '⅓', libelle: 'Experts-comptables' },
  { nombre: '15', libelle: 'Années de zéro papier' },
]

const chiffres = computed(() =>
  data.value?.chiffres?.length ? data.value.chiffres : defaultChiffres,
)
</script>

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

@media (max-width: 768px) {
  .stats {
    flex-wrap: wrap;
    width: 90%;
    height: auto;
    margin: -160px auto 0;
    padding: 30px 20px;
    row-gap: 24px;
  }

  .stats__item {
    flex: 1 1 40%;
  }

  .stats__number {
    font-size: 56px;
  }
}

@media (max-width: 480px) {
  .stats {
    width: 92%;
    margin: -120px auto 0;
    padding: 24px 16px;
  }

  .stats__number {
    font-size: 44px;
  }

  .stats__label {
    font-size: 12px;
  }
}
</style>

<template>
  <section class="history">
    <div class="history__title-wrapper">
      <h2 class="history__title">{{ data?.histoireTitre || 'Notre histoire' }}</h2>
    </div>

    <div class="history__timeline">
      <div
        v-for="(jalon, index) in jalons"
        :key="index"
        class="history__item"
        v-reveal="index % 2 === 0 ? 'left' : 'right'"
      >
        <span class="history__dot"></span>
        <div class="history__content">
          <span class="history__year">{{ jalon.annee }}</span>
          <h3>{{ jalon.titre }}</h3>
          <p>{{ jalon.texte }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data } = useQuiSommesNousContent()

const defaultJalons = [
  { annee: '1987', titre: 'Naissance du cabinet', texte: 'Jean-Marc Ohayon fonde le cabinet Ohayon & Associés à Toulouse.' },
  { annee: '1998', titre: 'Une première associée', texte: "Laurence Bertrand, arrivée en 1995, rejoint l'association." },
  { annee: '2005', titre: 'Une nouvelle adresse', texte: "Le cabinet s'installe route d'Espagne, où il est toujours implanté." },
  { annee: '2010', titre: 'Le virage numérique', texte: 'Digitalisation complète du cabinet : le « zéro papier » devient réalité.' },
  { annee: '2014', titre: 'Le passage de relais', texte: "Départ en retraite du fondateur ; Jérôme Ohayon et une nouvelle génération d'associés prennent le relais." },
  { annee: '2023', titre: "L'équipe d'aujourd'hui", texte: "Avec l'arrivée d'Océane Ducoulombier à l'association, le cabinet compte 4 experts-comptables associés." },
]

const jalons = computed(() =>
  data.value?.jalons?.length ? data.value.jalons : defaultJalons,
)
</script>

<style scoped>
.history {
  padding: 100px 40px 0;
}

.history__title-wrapper {
  text-align: center;
  margin-bottom: 60px;
}

.history__title {
  display: inline-block;
  background-color: var(--color-primary);
  color: #fff;
  padding: 15px 50px;
  white-space: nowrap;
}

.history__timeline {
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
}

.history__timeline::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 3px;
  background-color: var(--color-primary);
  transform: translateX(-50%);
}

.history__timeline::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -10px;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 12px solid var(--color-primary);
}

.history__item {
  position: relative;
  width: 50%;
  padding-bottom: 60px;
}

.history__item:last-child {
  padding-bottom: 0;
}

.history__item:nth-child(odd) {
  text-align: right;
  padding-right: 50px;
}

.history__item:nth-child(even) {
  left: 50%;
  text-align: left;
  padding-left: 50px;
}

.history__dot {
  position: absolute;
  top: 4px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: var(--color-primary);
  border: 3px solid var(--color-primary);
}

.history__item:nth-child(odd) .history__dot {
  right: -8px;
}

.history__item:nth-child(even) .history__dot {
  left: -8px;
}

.history__year {
  display: inline-block;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--color-secondary);
}

.history__content h3 {
  color: var(--color-primary);
  margin: 2px 0 8px;
}

.history__content p {
  font-weight: 300;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 900px) {
  .history__timeline::before {
    left: 8px;
    top: 4px;
  }

  .history__timeline::after {
    left: 9px;
    transform: translateX(-50%);
  }

  .history__item,
  .history__item:nth-child(odd),
  .history__item:nth-child(even) {
    width: 100%;
    left: 0;
    text-align: left;
    padding-left: 35px;
    padding-right: 0;
  }

  .history__item:nth-child(odd) .history__dot,
  .history__item:nth-child(even) .history__dot {
    left: 0;
    right: auto;
  }
}

@media (max-width: 768px) {
  .history {
    padding: 70px 24px 0;
  }

  .history__title-wrapper {
    margin-bottom: 40px;
  }

  .history__title {
    font-size: 28px;
    padding: 12px 32px;
  }
}

@media (max-width: 480px) {
  .history {
    padding: 50px 20px 0;
  }

  .history__title {
    font-size: 20px;
    padding: 10px 22px;
  }
}
</style>

<template>
  <section class="values">
    <div class="values__inner" v-reveal="'up'">
      <div class="values__media" :class="{ 'img-loader-bg': loading }">
        <img
          v-if="valeursImage"
          :src="valeursImage"
          :alt="valeursAlt"
          class="values__image"
          loading="lazy"
        />
      </div>
      <div class="values__grid">
        <div v-for="(valeur, index) in valeurs" :key="index" class="values__card">
          <h3>{{ valeur.titre }}</h3>
          <p>{{ valeur.texte }}</p>
        </div>
      </div>
    </div>
    <div class="values__cta">
      <NuxtLink to="/qui-sommes-nous" class="values__btn">
        <template v-if="valeursBouton">{{ valeursBouton }}</template>
        <template v-else>Découvrir <strong>qui nous sommes</strong><br />et nos valeurs</template>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data } = useHomeContent()
const img = useSanityImageUrl()

const loading = computed(() => !data.value)

const defaultValeurs = [
  {
    titre: 'Sur-mesure, sans standard',
    texte:
      "Pas de pack, pas de grille. On commence par comprendre votre activité, vos besoins, vos difficultés. Ensuite on construit l'accompagnement adapté.",
  },
  {
    titre: 'Réactivité & proximité',
    texte:
      'Un collaborateur dédié, joignable en ligne directe, réponse mail dans la journée. Toulouse et alentours mais proches de tous nos clients.',
  },
  {
    titre: 'Expertise & qualité',
    texte:
      'Une équipe où ⅓ sont experts-comptables. Votre interlocuteur a la compétence de répondre à 99% de vos questions.',
  },
  {
    titre: 'Digitalisation pionnière',
    texte:
      "0 papier depuis plusieurs années, outils interactifs (Pennylane, Silae…). Intégration de l'IA. On ne vous parle pas de digital, on le pratique depuis 2010.",
  },
]

const valeurs = computed(() =>
  data.value?.valeurs?.length ? data.value.valeurs : defaultValeurs,
)
const valeursImage = computed(
  () => img(data.value?.valeursImage as any)?.url() || '',
)
const valeursAlt = computed(
  () =>
    (data.value?.valeursImage as any)?.alt ||
    "L'équipe du cabinet Ohayon & Associés au travail",
)
const valeursBouton = computed(() => data.value?.valeursBouton || '')
</script>

<style scoped>
.values {
  padding: 80px 40px 0;
}

.values__inner {
  display: flex;
  align-items: stretch;
  gap: 40px;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 40px;
}

.values__media {
  flex: 0 0 38%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
}

.values__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.values__grid {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.values__card {
  border: 2px solid var(--color-primary);
  border-radius: 5px;
  padding: 26px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.3s,
    box-shadow 0.3s;
}

.values__card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

.values__card h3 {
  color: var(--color-primary);
  margin: 0 0 15px;
}

.values__card p {
  margin: 0;
}

.values__cta {
  text-align: center;
  margin-top: 50px;
}

.values__btn {
  display: inline-block;
  font-family: var(--font-body);
  font-weight: 300;
  font-size: 18px;
  color: #fff;
  background-color: var(--color-primary);
  border-radius: 5px;
  padding: 12px 20px;
  text-decoration: none;
  line-height: 1.5;
  border: 2px solid transparent;
  transition:
    background-color 0.3s,
    color 0.3s,
    border-color 0.3s;
}

.values__btn:hover {
  background-color: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

@media (max-width: 900px) {
  .values__inner {
    flex-direction: column;
    gap: 28px;
  }

  .values__media {
    flex: unset;
    max-height: 320px;
  }
}

@media (max-width: 768px) {
  .values {
    padding: 60px 24px 0;
  }

  .values__inner {
    padding: 0 24px;
  }

  .values__grid {
    gap: 20px;
  }
}

@media (max-width: 560px) {
  .values__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .values {
    padding: 50px 20px 0;
  }

  .values__inner {
    padding: 0 20px;
  }
}
</style>

<template>
  <section class="culture">
    <div class="culture__banner">
      <div class="culture__image-wrapper" :class="{ 'img-loader-bg': loading }">
        <img
          v-if="cultureImage"
          :src="cultureImage"
          :alt="cultureAlt"
          class="culture__image"
          loading="lazy"
        />
      </div>
      <div class="culture__title-wrapper">
        <h2 class="culture__title">{{ cultureTitre }}</h2>
      </div>
    </div>

    <p class="culture__values">
      <template v-for="(mot, i) in motsCles" :key="i">
        <span v-if="i > 0" class="culture__dot" aria-hidden="true">·</span>
        <span class="culture__value">{{ mot }}</span>
      </template>
    </p>

    <div class="culture__grid">
      <div v-for="(carte, index) in cultureCartes" :key="index" class="culture__card">
        <img
          :src="carte.icone"
          alt=""
          class="culture__icon"
          loading="lazy"
        />
        <h3>{{ carte.titre }}</h3>
        <p>{{ carte.texte }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import iconTeamSpirit from '../../assets/illustrations/icons/rejoindre/team-spirit.svg'
import iconWorkLife from '../../assets/illustrations/icons/rejoindre/work-life-balance.svg'
import iconTraining from '../../assets/illustrations/icons/rejoindre/continuous-training.svg'
import iconConvivial from '../../assets/illustrations/icons/rejoindre/convivial-moments.svg'

const { data } = useRejoindreContent()
const img = useSanityImageUrl()

const loading = computed(() => !data.value)
const cultureTitre = computed(() => data.value?.cultureTitre || 'Culture & ambiance du cabinet')
const cultureImage = computed(() => img(data.value?.cultureImage as any)?.url() || '')
const cultureAlt = computed(() => (data.value?.cultureImage as any)?.alt || 'Équipe au travail')

const defaultMotsCles = [
  'Bienveillance', 'Exigence', "Esprit d'équipe", 'Confiance', 'Proximité',
  'Autonomie', 'Engagement', 'Innovation', 'Convivialité', 'Réactivité',
]
const motsCles = computed(() =>
  data.value?.motsCles?.length ? data.value.motsCles : defaultMotsCles,
)

const defaultCartes = [
  { titre: "Esprit d'équipe", icone: iconTeamSpirit, texte: "Ici, personne n'avance seul. On partage les dossiers, les idées et les coups de main : c'est à plusieurs qu'on trouve les meilleures solutions pour nos clients." },
  { titre: 'Équilibre vie pro / perso', icone: iconWorkLife, texte: "Une charge de travail maîtrisée, de la souplesse dans l'organisation et des outils qui allègent le quotidien : on tient à ce que chacun s'épanouisse au cabinet comme en dehors." },
  { titre: 'Formation continue', icone: iconTraining, texte: "Nos outils évoluent, nos méthodes aussi, et vous avec. Montée en compétences, veille métier et intégration de l'IA : chez nous, on n'arrête jamais d'apprendre." },
  { titre: 'Moments conviviaux', icone: iconConvivial, texte: "Au-delà des chiffres, il y a les pauses café, les déjeuners d'équipe et les moments partagés qui donnent envie de se retrouver chaque matin." },
]
const cultureCartes = computed(() => {
  const sanity = data.value?.cultureCartes
  if (sanity?.length) {
    return sanity.map((carte, index) => ({
      titre: carte.titre,
      texte: carte.texte,
      icone: img(carte.icone as any)?.url() ?? defaultCartes[index]?.icone ?? '',
    }))
  }
  return defaultCartes
})
</script>

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

.culture__values {
  text-align: center;
  max-width: 1180px;
  margin: 80px auto 0;
  padding: 0 40px;
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 17px;
  letter-spacing: 0.3px;
  color: var(--color-primary);
  line-height: 2;
}

.culture__value {
  display: inline-block;
  cursor: default;
  transition: color 0.25s, transform 0.25s;
}

.culture__value:hover {
  color: var(--color-secondary);
  transform: translateY(-2px);
}

.culture__dot {
  color: var(--color-secondary);
  font-size: 24px;
  font-weight: 700;
  margin: 0 10px;
  vertical-align: middle;
  line-height: 1;
}

.culture__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0 30px;
  max-width: 1180px;
  margin: 60px auto 0;
  padding: 0 40px 40px;
}

.culture__card {
  text-align: center;
  border-top: 3px solid var(--color-secondary);
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  padding: 20px 16px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.culture__card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

.culture__icon {
  width: 100px;
  height: 100px;
  margin: 0 auto 10px;
}

.culture__card h3 {
  color: var(--color-primary);
  font-size: 20px;
  min-height: 56px;
  margin: 0 0 12px;
}

.culture__card p {
  font-weight: 300;
  font-size: 15px;
  margin: 0 auto;
  max-width: 90%;
}

@media (max-width: 768px) {
  .culture {
    margin-top: 60px;
  }

  .culture__image-wrapper {
    height: 320px;
  }

  .culture__title {
    font-size: 28px;
    padding: 12px 32px;
  }

  .culture__values {
    font-size: 15px;
    margin-top: 50px;
    padding: 0 24px;
  }

  .culture__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px 24px;
    margin-top: 40px;
    padding: 0 24px 30px;
  }
}

@media (max-width: 480px) {
  .culture__image-wrapper {
    height: 260px;
  }

  .culture__title {
    font-size: 20px;
    padding: 10px 22px;
  }

  .culture__values {
    font-size: 13px;
    line-height: 1.8;
  }

  .culture__grid {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 0 20px 24px;
  }

  .culture__icon {
    width: 80px;
    height: 80px;
  }
}
</style>

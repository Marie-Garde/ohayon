<template>
  <section class="jobs">
    <div class="jobs__banner">
      <div class="jobs__image-wrapper" :class="{ 'img-loader-bg': loading }">
        <img
          v-if="offresImage"
          :src="offresImage"
          :alt="offresAlt"
          class="jobs__image"
          loading="lazy"
        />
      </div>
      <div class="jobs__title-wrapper">
        <h2 class="jobs__title">{{ data?.offresTitre || "Offres d'emploi" }}</h2>
      </div>
    </div>

    <div class="jobs__content">
      <div class="jobs__intro">
        <div class="jobs__intro-media" :class="{ 'img-loader-bg': loading }">
          <img
            v-if="profilsImage"
            :src="profilsImage"
            :alt="profilsAlt"
            class="jobs__intro-img"
            loading="lazy"
          />
        </div>
        <div class="jobs__intro-content">
          <p class="jobs__intro-text">
            {{ data?.profilsTexte || "Nous recherchons des personnalités curieuses, engagées et autonomes, qui ont envie de progresser, de prendre des initiatives et de contribuer à la réussite collective." }}
          </p>
        </div>
      </div>

      <ul v-if="offres.length" class="jobs__list">
        <li v-for="offre in offres" :key="offre._key" class="jobs__cta">
          <div class="jobs__cta-text">
            <p class="jobs__cta-title">{{ offre.titre }}</p>
            <ul
              v-if="offre.typePoste || offre.niveauEtude || offre.debutSouhaite !== undefined"
              class="jobs__tags"
            >
              <li v-if="offre.typePoste" class="jobs__tag">{{ offre.typePoste }}</li>
              <li v-if="offre.niveauEtude" class="jobs__tag">{{ offre.niveauEtude }}</li>
              <li class="jobs__tag">Début : {{ formatDebut(offre.debutSouhaite) }}</li>
            </ul>
            <p class="jobs__cta-subtitle">{{ truncate(offre.texte) }}</p>
          </div>
          <a
            v-if="offre.lien"
            class="jobs__cta-btn"
            :href="offre.lien"
            target="_blank"
            rel="noopener"
          >
            Voir l'offre
          </a>
        </li>
      </ul>

      <div v-else class="jobs__cta">
        <div class="jobs__cta-icon-wrapper">
          <img
            src="~/assets/illustrations/icons/home/contact.svg"
            alt=""
            class="jobs__cta-icon"
            loading="lazy"
          />
        </div>
        <div class="jobs__cta-text">
          <p class="jobs__cta-title">{{ data?.offresEncartTitre || 'Envie de nous rejoindre ?' }}</p>
          <p class="jobs__cta-subtitle">
            {{ data?.offresEncartSousTitre || "Consultez nos offres d'emploi en cours et postulez en ligne." }}
          </p>
        </div>
        <a
          class="jobs__cta-btn"
          :href="offresLien"
          target="_blank"
          rel="noopener"
        >
          {{ data?.offresEncartBouton || 'Voir nos offres' }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data } = useRejoindreContent()
const img = useSanityImageUrl()

const loading = computed(() => !data.value)
const offresImage = computed(() => img(data.value?.offresImage as any)?.url() || '')
const offresAlt = computed(() => (data.value?.offresImage as any)?.alt || 'Équipe au travail')
const profilsImage = computed(() => img(data.value?.profilsImage as any)?.url() || '')
const profilsAlt = computed(() => (data.value?.profilsImage as any)?.alt || '')
const offresLien = computed(
  () => data.value?.offresEncartLien || 'https://www.linkedin.com/company/ohayon-associes/jobs/',
)

const offres = computed(() => data.value?.offres ?? [])

function truncate(text?: string) {
  if (!text) return ''
  return text.length > 200 ? text.slice(0, 200) + '…' : text
}

// Sanity renvoie une date au format « AAAA-MM-JJ ».
// Vide ou antérieure à aujourd'hui → « Maintenant », sinon date en JJ/MM/AAAA.
function formatDebut(date?: string) {
  if (!date) return 'Dès que possible'
  const debut = new Date(date + 'T00:00:00')
  if (Number.isNaN(debut.getTime())) return 'Dès que possible'
  const aujourdhui = new Date()
  aujourdhui.setHours(0, 0, 0, 0)
  if (debut <= aujourdhui) return 'Dès que possible'
  return debut.toLocaleDateString('fr-FR')
}
</script>

<style scoped>
.jobs {
  position: relative;
  margin-top: 100px;
}

.jobs__banner {
  position: relative;
}

.jobs__image-wrapper {
  width: 100%;
  height: 620px;
  overflow: hidden;
  clip-path: polygon(
    0 var(--slant-height),
    100% 0,
    100% calc(100% - var(--slant-height)),
    0 100%
  );
}

.jobs__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.jobs__title-wrapper {
  position: absolute;
  bottom: calc(var(--slant-height) / 2);
  left: 50%;
  transform: translateX(-50%) translateY(50%);
  z-index: 1;
}

.jobs__title {
  display: inline-block;
  background-color: var(--color-primary);
  color: #fff;
  padding: 15px 50px;
  white-space: nowrap;
  transform: rotate(calc(-1 * atan2(var(--slant-height), 100vw)));
}

.jobs__content {
  max-width: 1180px;
  margin: 70px auto 0;
  padding: 0 40px 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.jobs__intro {
  display: flex;
  align-items: stretch;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
}

.jobs__intro-media {
  width: 220px;
  flex-shrink: 0;
  position: relative;
}
.jobs__intro-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.jobs__intro-content {
  flex: 1;
  background-color: var(--color-primary);
  padding: 36px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.jobs__intro-text {
  margin: 0;
  font-weight: 300;
  font-size: 16px;
  line-height: 1.7;
  color: #fff;
}

.jobs__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.jobs__cta {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 28px 40px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
}

.jobs__cta-icon-wrapper {
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: rgba(28, 177, 161, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.jobs__cta-icon {
  width: 30px;
  height: 30px;
  filter: invert(59%) sepia(61%) saturate(449%) hue-rotate(130deg)
    brightness(93%) contrast(89%);
}

.jobs__cta-text {
  flex: 1;
}

.jobs__cta-title {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 18px;
  color: var(--color-text);
  margin: 0 0 4px;
}

.jobs__tags {
  list-style: none;
  margin: 0 0 10px;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.jobs__tag {
  padding: 4px 12px;
  background-color: var(--color-secondary);
  color: var(--color-text);
  border-radius: 999px;
  font-family: var(--font-heading);
  font-size: 13px;
  font-weight: 700;
  white-space: nowrap;
}

.jobs__cta-subtitle {
  font-size: 14px;
  color: #666;
  margin: 0;
}

.jobs__cta-btn {
  flex-shrink: 0;
  padding: 12px 28px;
  background-color: var(--color-primary);
  color: #fff;
  border-radius: 6px;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 15px;
  text-decoration: none;
  white-space: nowrap;
  transition: background-color 0.3s, color 0.3s;
}

.jobs__cta-btn:hover {
  background-color: var(--color-secondary);
  color: #fff;
}

@media (max-width: 768px) {
  .jobs {
    margin-top: 70px;
  }

  .jobs__image-wrapper {
    height: 440px;
  }

  .jobs__title {
    font-size: 28px;
    padding: 12px 32px;
  }

  .jobs__content {
    margin-bottom: 0;
    padding: 0 24px 70px;
  }

  .jobs__intro-media {
    width: 140px;
  }

  .jobs__cta {
    flex-wrap: wrap;
    padding: 24px;
  }

  .jobs__cta-btn {
    width: 100%;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .jobs__image-wrapper {
    height: 360px;
  }

  .jobs__title {
    font-size: 20px;
    padding: 10px 22px;
  }

  .jobs__intro {
    flex-direction: column;
  }

  .jobs__intro-media {
    width: 100%;
    height: 160px;
  }

  .jobs__intro-content {
    padding: 24px 24px;
  }
}
</style>

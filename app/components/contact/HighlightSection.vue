<template>
  <section class="highlight">
    <div class="highlight__inner" v-reveal="'up'">
      <div class="highlight__content">
        <p class="highlight__subtitle">{{ data?.approcheSurtitre || 'Prenons contact' }}</p>
        <h2 class="highlight__title">{{ data?.approcheTitre || 'Un premier échange, sans engagement' }}</h2>
        <template v-if="approcheParas.length">
          <p v-for="(para, i) in approcheParas" :key="i" class="highlight__text" v-html="para"></p>
        </template>
        <template v-else>
          <p class="highlight__text">
            Que vous soyez en pleine création, en quête d'un nouvel
            expert-comptable ou simplement à la recherche de conseils, nous
            prenons le temps de vous écouter avant toute chose.
          </p>
          <p class="highlight__text">
            Appelez-nous, écrivez-nous ou passez nous voir à Toulouse : nous vous
            répondons dans la journée et vous orientons vers la solution la plus
            adaptée à votre situation.
          </p>
        </template>
      </div>
      <div class="highlight__media" :class="{ 'img-loader-bg': loading }">
        <img
          v-if="approcheImage"
          :src="approcheImage"
          :alt="approcheAlt"
          class="highlight__image"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data } = useContactContent()
const img = useSanityImageUrl()

const loading = computed(() => !data.value)
const approcheImage = computed(() => img(data.value?.approcheImage as any)?.url() || '')
const approcheAlt = computed(
  () => (data.value?.approcheImage as any)?.alt || "Échange avec l'équipe du cabinet Ohayon & Associés",
)
const approcheParas = computed(() => richTextToParagraphArray(data.value?.approcheTexte))
</script>

<style scoped>
.highlight {
  max-width: 1180px;
  margin: 0 auto;
  padding: 40px 40px 20px;
}

.highlight__inner {
  display: flex;
  align-items: stretch;
  gap: 0;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}

.highlight__inner:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

.highlight__media {
  flex: 0 0 45%;
  overflow: hidden;
}

.highlight__image {
  width: 100%;
  height: 100%;
  min-height: 320px;
  object-fit: cover;
  object-position: center;
  display: block;
}

.highlight__content {
  flex: 1;
  padding: 48px 44px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.highlight__subtitle {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--color-secondary);
  margin: 0 0 10px;
}

.highlight__title {
  font-size: 30px;
  margin: 0 0 20px;
  line-height: 1.2;
}

.highlight__text {
  font-size: 15px;
  line-height: 1.6;
  margin: 0 0 12px;
}

.highlight__text:last-child {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .highlight {
    padding: 20px 24px 0;
  }

  .highlight__inner {
    flex-direction: column;
  }

  .highlight__media {
    flex: unset;
    order: -1;
  }

  .highlight__image {
    min-height: 220px;
    max-height: 260px;
  }

  .highlight__content {
    padding: 32px 28px;
  }

  .highlight__title {
    font-size: 24px;
  }
}

@media (max-width: 480px) {
  .highlight {
    padding: 10px 16px 0;
  }

  .highlight__content {
    padding: 28px 22px;
  }

  .highlight__title {
    font-size: 21px;
  }
}
</style>

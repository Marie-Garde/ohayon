<template>
  <section class="locaux">
    <div class="locaux__banner">
      <div class="locaux__image-wrapper" :class="{ 'img-loader-bg': loading }">
        <img
          v-if="bannerImage"
          :src="bannerImage"
          alt="Nos locaux"
          class="locaux__banner-image"
          loading="lazy"
        />
      </div>
      <div class="locaux__title-wrapper">
        <h2 class="locaux__title">Nos locaux</h2>
      </div>
    </div>

    <div class="locaux__intro" v-reveal="'up'">
      <p>{{ introText }}</p>
    </div>

    <div
      class="locaux__grid"
      :class="{ 'img-loader-bg': loading }"
      :style="loading ? { minHeight: '320px' } : null"
      v-reveal="'up'"
    >
      <button
        v-for="(photo, index) in photos"
        :key="index"
        type="button"
        class="locaux__tile"
        :class="{ 'locaux__tile--large': isLarge(index) }"
        @click="open(index)"
      >
        <img :src="photo" :alt="`Locaux du cabinet — photo ${index + 1}`" loading="lazy" />
      </button>
    </div>

    <Teleport to="body">
      <div v-if="current !== null" class="lightbox" @click.self="close">
        <button class="lightbox__btn lightbox__btn--close" aria-label="Fermer" @click="close">
          <span></span><span></span>
        </button>
        <button class="lightbox__btn lightbox__btn--prev" aria-label="Photo précédente" @click.stop="prev">
          ‹
        </button>
        <figure class="lightbox__figure">
          <img :src="photos[current]" :alt="`Locaux du cabinet — photo ${current + 1}`" />
          <figcaption>{{ current + 1 }} / {{ photos.length }}</figcaption>
        </figure>
        <button class="lightbox__btn lightbox__btn--next" aria-label="Photo suivante" @click.stop="next">
          ›
        </button>
      </div>
    </Teleport>
  </section>
</template>

<script setup>
const { data } = useQuiSommesNousContent()
const img = useSanityImageUrl()

const loading = computed(() => !data.value)

// Galerie : uniquement les photos gérées dans Sanity.
const photos = computed(() =>
  (data.value?.locauxPhotos || [])
    .map((photo) => img(photo)?.url())
    .filter(Boolean),
)

const bannerImage = computed(() => img(data.value?.locauxImage)?.url() || '')
const introText = computed(
  () =>
    data.value?.locauxIntro ||
    'Un cadre de travail lumineux et chaleureux, pensé pour vous recevoir comme pour faire grandir nos équipes. Poussez la porte, en images.',
)

// Tuiles agrandies, réparties à un rythme régulier (mosaïque maîtrisée)
const largeIndexes = [0, 6, 11]
const isLarge = (index) => largeIndexes.includes(index)

const current = ref(null)

const open = (index) => {
  current.value = index
}
const close = () => {
  current.value = null
}
const next = () => {
  current.value = (current.value + 1) % photos.value.length
}
const prev = () => {
  current.value = (current.value - 1 + photos.value.length) % photos.value.length
}

const onKey = (e) => {
  if (current.value === null) return
  if (e.key === 'Escape') close()
  else if (e.key === 'ArrowRight') next()
  else if (e.key === 'ArrowLeft') prev()
}

watch(current, (value) => {
  if (import.meta.client) {
    document.body.style.overflow = value !== null ? 'hidden' : ''
  }
})

onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
  if (import.meta.client) document.body.style.overflow = ''
})
</script>

<style scoped>
.locaux {
  position: relative;
  padding-bottom: 60px;
}

.locaux__banner {
  position: relative;
}

.locaux__image-wrapper {
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

.locaux__banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.locaux__title-wrapper {
  position: absolute;
  bottom: calc(var(--slant-height) / 2);
  left: 50%;
  transform: translateX(-50%) translateY(50%);
  z-index: 1;
}

.locaux__title {
  display: inline-block;
  background-color: var(--color-primary);
  color: #fff;
  padding: 15px 50px;
  white-space: nowrap;
  transform: rotate(calc(-1 * atan2(var(--slant-height), 100vw)));
}

.locaux__intro {
  max-width: 720px;
  margin: 80px auto 0;
  padding: 0 40px;
  text-align: center;
}

.locaux__intro p {
  font-size: 17px;
  line-height: 1.7;
  color: var(--color-text);
  margin: 0;
}

.locaux__grid {
  max-width: 1180px;
  margin: 40px auto 0;
  padding: 0 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  grid-auto-flow: dense;
  gap: 14px;
}

.locaux__tile {
  position: relative;
  padding: 0;
  border: none;
  background: none;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.locaux__tile--large {
  grid-column: span 2;
  grid-row: span 2;
}

.locaux__tile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.locaux__tile::after {
  content: '';
  position: absolute;
  inset: 0;
  background-color: var(--color-primary);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.locaux__tile:hover img {
  transform: scale(1.06);
}

.locaux__tile:hover::after {
  opacity: 0.12;
}

.locaux__tile:focus-visible {
  outline: 3px solid var(--color-secondary);
  outline-offset: 2px;
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background-color: rgba(20, 20, 20, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.lightbox__figure {
  margin: 0;
  max-width: 90vw;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
}

.lightbox__figure img {
  max-width: 100%;
  max-height: 78vh;
  object-fit: contain;
  border-radius: 4px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
}

.lightbox__figure figcaption {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 14px;
  color: #fff;
  letter-spacing: 0.5px;
}

.lightbox__btn {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease, background-color 0.2s ease;
}

.lightbox__btn--prev,
.lightbox__btn--next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 56px;
  height: 56px;
  font-size: 44px;
  line-height: 1;
  border-radius: 50%;
}

.lightbox__btn--prev {
  left: 24px;
}

.lightbox__btn--next {
  right: 24px;
}

.lightbox__btn--prev:hover,
.lightbox__btn--next:hover {
  background-color: rgba(255, 255, 255, 0.15);
}

.lightbox__btn--close {
  position: absolute;
  top: 24px;
  right: 24px;
  width: 44px;
  height: 44px;
}

.lightbox__btn--close span {
  position: absolute;
  width: 26px;
  height: 2px;
  background-color: #fff;
}

.lightbox__btn--close span:first-child {
  transform: rotate(45deg);
}

.lightbox__btn--close span:last-child {
  transform: rotate(-45deg);
}

@media (max-width: 900px) {
  .locaux__grid {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 170px;
  }
}

@media (max-width: 768px) {
  .locaux__image-wrapper {
    height: 320px;
  }

  .locaux__title {
    font-size: 28px;
    padding: 12px 32px;
  }

  .locaux__intro {
    margin-top: 50px;
    padding: 0 24px;
  }

  .locaux__intro p {
    font-size: 15px;
  }

  .locaux__grid {
    padding: 0 24px;
    gap: 10px;
  }
}

@media (max-width: 600px) {
  .locaux__grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 150px;
  }

  .locaux__tile--large {
    grid-column: span 2;
    grid-row: span 1;
  }
}

@media (max-width: 480px) {
  .locaux__image-wrapper {
    height: 260px;
  }

  .locaux__title {
    font-size: 20px;
    padding: 10px 22px;
  }

  .locaux__grid {
    padding: 0 16px;
  }

  .lightbox {
    padding: 20px;
  }

  .lightbox__btn--prev,
  .lightbox__btn--next {
    width: 44px;
    height: 44px;
    font-size: 34px;
  }

  .lightbox__btn--prev {
    left: 8px;
  }

  .lightbox__btn--next {
    right: 8px;
  }
}
</style>

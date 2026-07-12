<template>
  <section class="skills">
    <div class="skills__image-wrapper" :class="{ 'img-loader-bg': loading }">
      <img
        v-if="savoirFaireImage"
        :src="savoirFaireImage"
        :alt="savoirFaireAlt"
        class="skills__image"
        loading="lazy"
      />
    </div>
    <div class="skills__title-wrapper">
      <h2 class="skills__title">{{ data?.savoirFaireTitre || 'Nos savoir-faire' }}</h2>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data } = useHomeContent()
const img = useSanityImageUrl()

const loading = computed(() => !data.value)
const savoirFaireImage = computed(
  () => img(data.value?.savoirFaireImage as any)?.url() || '',
)
const savoirFaireAlt = computed(
  () => (data.value?.savoirFaireImage as any)?.alt || 'Équipe au travail',
)
</script>

<style scoped>
.skills {
  position: relative;
  margin-top: 100px;
}

.skills__image-wrapper {
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

.skills__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.skills__title-wrapper {
  position: absolute;
  bottom: calc(var(--slant-height) / 2);
  left: 50%;
  transform: translateX(-50%) translateY(50%);
  z-index: 1;
}

.skills__title {
  display: inline-block;
  background-color: var(--color-primary);
  color: #fff;
  padding: 15px 50px;
  white-space: nowrap;
  transform: rotate(calc(-1 * atan2(var(--slant-height), 100vw)));
}

@media (max-width: 768px) {
  .skills {
    margin-top: 60px;
  }

  .skills__image-wrapper {
    height: 320px;
  }

  .skills__title {
    font-size: 28px;
    padding: 12px 32px;
  }
}

@media (max-width: 480px) {
  .skills__image-wrapper {
    height: 260px;
  }

  .skills__title {
    font-size: 20px;
    padding: 10px 22px;
  }
}
</style>

<template>
  <section class="banner">
    <div class="banner__image-wrapper" :class="{ 'img-loader-bg': loading }">
      <img
        v-if="ecrireImage"
        :src="ecrireImage"
        :alt="ecrireAlt"
        class="banner__image"
        loading="lazy"
      />
    </div>
    <div class="banner__title-wrapper">
      <h2 class="banner__title">{{ data?.ecrireTitre || 'Écrivez-nous' }}</h2>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data } = useContactContent()
const img = useSanityImageUrl()

const loading = computed(() => !data.value)
const ecrireImage = computed(() => img(data.value?.ecrireImage as any)?.url() || '')
const ecrireAlt = computed(() => (data.value?.ecrireImage as any)?.alt || 'Équipe au travail')
</script>

<style scoped>
.banner {
  position: relative;
  margin-top: 40px;
}

.banner__image-wrapper {
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

.banner__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.banner__title-wrapper {
  position: absolute;
  bottom: calc(var(--slant-height) / 2);
  left: 50%;
  transform: translateX(-50%) translateY(50%);
  z-index: 1;
}

.banner__title {
  display: inline-block;
  background-color: var(--color-primary);
  color: #fff;
  padding: 15px 50px;
  white-space: nowrap;
  transform: rotate(calc(-1 * atan2(var(--slant-height), 100vw)));
}

@media (max-width: 768px) {
  .banner {
    margin-top: 30px;
  }

  .banner__image-wrapper {
    height: 440px;
  }

  .banner__title {
    font-size: 28px;
    padding: 12px 32px;
  }
}

@media (max-width: 480px) {
  .banner__image-wrapper {
    height: 360px;
  }

  .banner__title {
    font-size: 20px;
    padding: 10px 22px;
  }
}
</style>

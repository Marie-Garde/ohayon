<template>
  <section class="whoweare">
    <div class="whoweare__title-wrapper">
      <h2 class="whoweare__title">{{ data?.definitTitre || 'Ce qui nous définit' }}</h2>
    </div>
    <div class="whoweare__image-wrapper" :class="{ 'img-loader-bg': loading }">
      <img
        v-if="definitImage"
        :src="definitImage"
        :alt="definitAlt"
        class="whoweare__image"
        loading="lazy"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const { data } = useHomeContent()
const img = useSanityImageUrl()

const loading = computed(() => !data.value)
const definitImage = computed(() => img(data.value?.definitImage as any)?.url() || '')
const definitAlt = computed(() => (data.value?.definitImage as any)?.alt || 'Équipe au travail')
</script>

<style scoped>
.whoweare {
  position: relative;
  margin-top: 130px;
}

.whoweare__image-wrapper {
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

.whoweare__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
}

.whoweare__title-wrapper {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.whoweare__title {
  display: inline-block;
  background-color: var(--color-primary);
  color: #fff;
  padding: 15px 50px;
  white-space: nowrap;
  transform: rotate(calc(-1 * atan2(var(--slant-height), 100vw)));
}

@media (max-width: 768px) {
  .whoweare {
    margin-top: 90px;
  }

  .whoweare__image-wrapper {
    height: 440px;
  }

  .whoweare__title {
    font-size: 28px;
    padding: 12px 32px;
  }
}

@media (max-width: 480px) {
  .whoweare__image-wrapper {
    height: 360px;
  }

  .whoweare__title {
    font-size: 20px;
    padding: 10px 22px;
  }
}
</style>

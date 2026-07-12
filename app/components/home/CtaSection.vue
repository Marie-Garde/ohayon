<template>
  <section class="cta">
    <div class="cta__image-wrapper" :class="{ 'img-loader-bg': loading }">
      <img
        v-if="resolvedImage"
        :src="resolvedImage"
        :alt="resolvedAlt"
        class="cta__image"
        loading="lazy"
      />
      <NuxtLink to="/contact" class="cta__btn">
        <template v-if="contactTexte">{{ contactTexte }}</template>
        <template v-else>Pour toute question n'hésitez pas<br /><strong>contactez-nous !</strong></template>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  // Valeurs de la page courante. Si non fournies, repli sur la page d'accueil.
  texte?: string
  image?: unknown
  alt?: string
}>()

const { data } = useHomeContent()
const img = useSanityImageUrl()

const rawImage = computed(() => props.image ?? data.value?.contactImage)
const loading = computed(() => !rawImage.value && !data.value)
const resolvedImage = computed(() => img(rawImage.value as any)?.url() || '')
const resolvedAlt = computed(
  () => props.alt ?? (rawImage.value as any)?.alt ?? 'Équipe au travail',
)
const contactTexte = computed(() => props.texte ?? data.value?.contactTexte ?? '')
</script>

<style scoped>
.cta {
  padding: 70px 40px 70px;
}

.cta__image-wrapper {
  position: relative;
  max-width: 1100px;
  height: 400px;
  margin: 0 auto;
  overflow: hidden;
  clip-path: polygon(
    0 calc(tan(atan2(var(--slant-height), 100vw)) * 1100px),
    100% 0,
    100% 100%,
    0 100%
  );
}

.cta__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 0%;
}

.cta__btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--font-body);
  font-weight: 300;
  font-size: 18px;
  color: var(--color-primary);
  background-color: #fff;
  border-radius: 5px;
  padding: 17px 25px;
  text-decoration: none;
  text-align: center;
  line-height: 1.5;
  border: 2px solid transparent;
  transition:
    background-color 0.3s,
    color 0.3s,
    border-color 0.3s;
}

.cta__btn:hover {
  background-color: var(--color-primary);
  color: #fff;
  border-color: var(--color-primary);
}

@media (max-width: 768px) {
  .cta {
    padding: 45px 24px 45px;
  }

  .cta__image-wrapper {
    height: 320px;
    clip-path: polygon(
      0 var(--slant-height),
      100% 0,
      100% 100%,
      0 100%
    );
  }

  .cta__btn {
    font-size: 16px;
    padding: 14px 20px;
    max-width: calc(100% - 48px);
  }
}

@media (max-width: 480px) {
  .cta {
    padding: 35px 20px 35px;
  }

  .cta__image-wrapper {
    height: 260px;
  }

  .cta__btn {
    font-size: 14px;
    padding: 12px 16px;
    max-width: calc(100% - 32px);
  }
}
</style>

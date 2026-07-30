<template>
  <section class="page-hero" :class="{ 'img-loader-bg': loading }">
    <div class="page-hero__overlay"></div>
    <img
      v-if="heroImage"
      :src="heroImage"
      :alt="heroAlt"
      class="page-hero__image"
    />
    <div class="page-hero__content">
      <h1>{{ data?.heroTitre || 'Nos services' }}</h1>
      <p class="page-hero__lead">
        {{ data?.heroLead || 'Des solutions adaptées à chaque étape de votre activité.' }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data } = useServicesContent()
const img = useSanityImageUrl()

const loading = computed(() => !data.value)
const heroImage = computed(() => img(data.value?.heroImage as any)?.url() || '')
const heroAlt = computed(() => (data.value?.heroImage as any)?.alt || 'Cabinet Ohayon & Associés')
</script>

<style scoped>
.page-hero {
  position: relative;
  width: 100%;
  height: 520px;
  overflow: hidden;
  background: var(--color-primary);
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - var(--slant-height)),
    0 100%
  );
}

.page-hero__image {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 20%;
  width: 80%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  mask-image: linear-gradient(to right, transparent 0%, black 12%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 12%);
}

.page-hero__overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    to right,
    var(--color-primary) 10%,
    rgba(28, 177, 161, 0.6) 25%,
    transparent 55%
  );
}

.page-hero__content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 80px;
}

.page-hero__content h1 {
  color: #fff;
  margin: 0 0 20px;
}

.page-hero__lead {
  color: #fff;
  font-weight: 300;
  font-size: 20px;
  margin: 0;
  max-width: 500px;
}

@media (max-width: 768px) {
  .page-hero {
    height: 420px;
  }

  .page-hero__content {
    padding: 0 40px;
  }

  .page-hero__content h1 {
    font-size: 40px;
    margin: 0 0 15px;
  }

  .page-hero__lead {
    font-size: 17px;
  }
}

@media (max-width: 480px) {
  .page-hero {
    height: 360px;
  }

  .page-hero__content {
    padding: 0 24px;
  }

  .page-hero__content h1 {
    font-size: 30px;
    margin: 0 0 10px;
  }

  .page-hero__lead {
    font-size: 15px;
    max-width: 100%;
  }
}
</style>

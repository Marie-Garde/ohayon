<template>
  <div>
    <ServicesPageHero />
    <ServicesDetailSection />
    <ServicesHighlightSection />
    <ServicesProcessSection />
    <HomeCtaSection :texte="data?.contactTexte" :image="data?.contactImage" />
  </div>
</template>

<script setup lang="ts">
const { data } = useServicesContent()
</script>

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

useSeo({
  title: "Nos services d'expertise comptable à Toulouse | Ohayon",
  description:
    'Comptabilité, gestion sociale et paie, fiscalité, audit et accompagnement : découvrez les services du Cabinet Ohayon & Associés, expert-comptable à Toulouse.',
})
</script>

<template>
  <div>
    <HomeHeroSection />
    <HomeStatsBar />
    <HomeWhoWeAreSection />
    <HomeValuesSection />
    <HomeSkillsSection />
    <HomeServicesGrid />
    <HomeProcessSection />
    <HomeCtaSection />
  </div>
</template>

<script setup lang="ts">
useSeo({
  title: 'Expert-comptable à Toulouse | Cabinet Ohayon & Associés',
  description:
    "Cabinet d'expertise comptable à Toulouse : comptabilité, fiscalité, paie et conseil. Un interlocuteur dédié pour accompagner votre entreprise au quotidien.",
})

// Données structurées (JSON-LD) pour le référencement local Google.
useLocalBusinessJsonLd()
</script>

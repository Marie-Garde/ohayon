<template>
  <div>
    <RejoindrePageHero />
    <RejoindreHookSection />
    <RejoindreReasonsSection />
    <RejoindreCultureSection />
    <RejoindreRecruitmentProcessSection />
    <RejoindreJobsSection />
    <HomeCtaSection :texte="data?.contactTexte" :image="data?.contactImage" />
  </div>
</template>

<script setup lang="ts">
const { data } = useRejoindreContent()
</script>

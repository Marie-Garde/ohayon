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

useSeo({
  title: 'Nous rejoindre — Carrières | Cabinet Ohayon & Associés',
  description:
    "Rejoignez le Cabinet Ohayon & Associés à Toulouse : découvrez nos offres d'emploi, notre culture d'entreprise et les raisons de construire votre carrière ici.",
})
</script>

<template>
  <div>
    <QuiSommesNousPageHero />
    <QuiSommesNousHistorySection />
    <QuiSommesNousTeamSection />
    <QuiSommesNousLocauxSection />
    <QuiSommesNousValuesSection />
    <HomeCtaSection :texte="data?.contactTexte" :image="data?.contactImage" />
  </div>
</template>

<script setup lang="ts">
const { data } = useQuiSommesNousContent()

useSeo({
  title: 'Qui sommes-nous — Cabinet Ohayon & Associés à Toulouse',
  description:
    "Découvrez le Cabinet Ohayon & Associés, expert-comptable à Toulouse : notre histoire, notre équipe et les valeurs qui guident l'accompagnement de nos clients.",
})
</script>

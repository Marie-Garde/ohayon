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
</script>

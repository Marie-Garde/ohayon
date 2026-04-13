<template>
  <section class="values">
    <div class="values__grid">
      <div class="values__card">
        <h3>Sur-mesure,<br />sans standard</h3>
        <p>
          Pas de pack, pas de grille. On commence par comprendre votre activité,
          vos besoins, vos difficultés. Ensuite on construit l'accompagnement
          adapté.
        </p>
      </div>
      <div class="values__card">
        <h3>Réactivité &amp; proximité</h3>
        <p>
          Un collaborateur dédié, joignable en ligne directe, réponse mail dans
          la journée. Toulouse et alentours mais proches de tous nos clients.
        </p>
      </div>
      <div class="values__card">
        <h3>Expertise &amp; qualité</h3>
        <p>
          Une équipe où ⅓ sont experts-comptables. Votre interlocuteur a la
          compétence de répondre à 99% de vos questions.
        </p>
      </div>
      <div class="values__card">
        <h3>Digitalisation pionnière</h3>
        <p>
          0 papier depuis 15 ans, outils interactifs (Pennylane, iSuite…).
          Intégration de l'IA. On ne vous parle pas de digital, on le pratique
          depuis 2010.
        </p>
      </div>
    </div>
    <div class="values__cta">
      <NuxtLink to="/qui-sommes-nous" class="values__btn">
        Découvrir <strong>qui sommes-nous</strong><br />et nos valeurs
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.values {
  padding: 60px 40px;
}

.values__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
}

.values__card {
  border: 2px solid var(--color-primary);
  border-radius: 5px;
  padding: 30px;
  text-align: center;
}

.values__card h3 {
  color: var(--color-primary);
  margin: 0 0 15px;
}

.values__card p {
  margin: 0;
}

.values__cta {
  text-align: center;
  margin-top: 40px;
}

.values__btn {
  display: inline-block;
  font-family: var(--font-body);
  font-weight: 300;
  font-size: 15px;
  color: #fff;
  background-color: var(--color-primary);
  border-radius: 5px;
  padding: 12px 30px;
  text-decoration: none;
  line-height: 1.5;
  transition: opacity 0.2s;
}

.values__btn:hover {
  opacity: 0.85;
}
</style>

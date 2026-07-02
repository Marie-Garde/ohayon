<template>
  <section class="values-quote">
    <div class="values-quote__inner" v-reveal="'left'">
      <div class="values-quote__image-wrapper">
        <img
          src="~/assets/illustrations/images/qui-sommes-nous/arbre.jpg"
          alt=""
          aria-hidden="true"
          class="values-quote__image"
          loading="lazy"
        />
      </div>
      <div class="values-quote__content">
        <h2>Nos valeurs</h2>
        <p>
          Notre conception d'un cabinet d'expertise-comptable est celle où la
          <strong>proximité et la confiance</strong> sont des valeurs
          indissociables des prestations proposées à nos clients.
        </p>
        <p>
          La confiance que vous inspire un expert-comptable est sans aucun
          doute le premier critère pour vous permettre de choisir. Nous
          basons notre collaboration avec vous sur le principe d'une
          <strong>confiance réciproque</strong>.
        </p>
        <p>
          Dès le départ, un <strong>interlocuteur unique</strong> établit et
          entretient avec vous une relation de proximité et de confiance
          afin de vous conseiller au quotidien.
        </p>
        <p>
          Que vous soyez dirigeant ou créateur d'une entreprise, la réussite
          professionnelle durable n'est jamais le fruit du hasard, elle
          demande non seulement de s'impliquer et d'oser mais aussi de
          s'organiser et de savoir s'entourer. En tant que
          <strong>partenaire privilégié</strong> des chefs d'entreprises,
          nous vous guidons et vous accompagnons dans tous vos projets de
          développement.
        </p>
      </div>
    </div>

    <div class="values-quote__inner" v-reveal="'right'">
      <div class="values-quote__content">
        <p>
          Grâce à sa rigueur et son expérience des entreprises, le cabinet
          Ohayon &amp; Associés vous accompagnera
          <strong>encore plus efficacement</strong> tout au long du chemin
          de votre réussite.
        </p>
        <p>
          Vous travaillerez avec une
          <strong>équipe pluridisciplinaire, dynamique, disponible et
          réactive</strong>, toujours à l'écoute de vos attentes. Pour
          accompagner la réussite de votre entreprise et développer votre
          leadership, nous agissons avec rigueur, professionnalisme en
          constante interaction avec vous.
        </p>
        <p>
          Notre objectif est avant tout de
          <strong>vous informer et de bien vous conseiller</strong> pour
          mettre en place tous les outils adaptés à une parfaite maîtrise
          de l'environnement de votre entreprise, et ainsi contribuer à
          améliorer ses performances.
        </p>
      </div>
      <div class="values-quote__image-wrapper">
        <img
          src="~/assets/illustrations/images/qui-sommes-nous/eolienne.jpg"
          alt=""
          aria-hidden="true"
          class="values-quote__image"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.values-quote {
  position: relative;
  background-color: var(--color-primary);
  margin-top: 40px;
  padding: 90px 40px;
  clip-path: polygon(
    0 var(--slant-height),
    100% 0,
    100% calc(100% - var(--slant-height)),
    0 100%
  );
}

.values-quote__inner {
  display: flex;
  align-items: center;
  gap: 60px;
  max-width: 1220px;
  margin: 0 auto;
}

.values-quote__inner + .values-quote__inner {
  margin-top: 70px;
}

.values-quote__image-wrapper {
  flex-shrink: 0;
  width: 320px;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transform: rotate(calc(-1 * atan2(var(--slant-height), 100vw)));
}

.values-quote__image {
  width: 100%;
  height: auto;
  display: block;
}

.values-quote__content {
  flex: 1;
}

.values-quote__content h2 {
  color: #fff;
  margin: 0 0 24px;
}

.values-quote__content p {
  text-align: justify;
  color: #fff;
  font-weight: 300;
  font-size: 17px;
  line-height: 1.7;
  margin: 0 0 20px;
}

.values-quote__content p:last-child {
  margin-bottom: 0;
}

.values-quote__content strong {
  font-weight: 700;
  color: var(--color-secondary);
}

@media (max-width: 800px) {
  .values-quote__inner {
    flex-direction: column;
    text-align: center;
  }

  .values-quote__image-wrapper {
    width: 240px;
  }
}
</style>

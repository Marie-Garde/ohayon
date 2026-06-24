<template>
  <section class="services">
    <div class="service-block">
      <div class="service-block__icon-wrapper">
        <img
          src="~/assets/illustrations/icons/home/accounting.svg"
          alt=""
          class="service-block__icon"
        />
      </div>
      <div class="service-block__content">
        <h3>Comptabilité</h3>
        <p>
          Nous assurons la tenue, la révision et l'établissement de vos
          comptes annuels, avec un suivi régulier plutôt qu'un bilan
          découvert une fois par an. Vous gardez à tout moment une vision
          claire de votre activité.
        </p>
        <p>
          Notre équipe s'appuie sur des outils digitaux pour fiabiliser la
          saisie et raccourcir les délais, sans jamais perdre le contact
          humain qui fait la différence dans le suivi de votre dossier.
        </p>
      </div>
    </div>

    <div class="service-block service-block--reverse">
      <div class="service-block__icon-wrapper">
        <img
          src="~/assets/illustrations/icons/home/tax-management.svg"
          alt=""
          class="service-block__icon"
        />
      </div>
      <div class="service-block__content">
        <h3>Gestion fiscale</h3>
        <p>
          De l'établissement de vos déclarations à l'optimisation de votre
          situation fiscale, nous vous accompagnons pour sécuriser vos
          obligations tout en identifiant les dispositifs adaptés à votre
          activité.
        </p>
        <p>
          Nous anticipons les échéances et vous alertons en amont sur les
          changements de réglementation qui peuvent vous concerner, pour que
          la fiscalité reste un sujet maîtrisé plutôt qu'une source
          d'inquiétude.
        </p>
      </div>
    </div>

    <div class="service-block">
      <div class="service-block__icon-wrapper">
        <img
          src="~/assets/illustrations/icons/home/social-management.svg"
          alt=""
          class="service-block__icon"
        />
      </div>
      <div class="service-block__content">
        <h3>Gestion sociale &amp; paie</h3>
        <p>
          Nous prenons en charge l'établissement des bulletins de paie, les
          déclarations sociales et l'administration du personnel, quelle que
          soit la taille de votre équipe ou la complexité de votre convention
          collective.
        </p>
        <p>
          Au-delà de la paie, nous vous conseillons sur vos obligations
          d'employeur : contrats de travail, rupture conventionnelle,
          embauche, pour vous permettre de rester concentré sur le pilotage
          de votre activité.
        </p>
      </div>
    </div>

    <div class="service-block service-block--reverse">
      <div class="service-block__icon-wrapper">
        <img
          src="~/assets/illustrations/icons/home/accompaniement.svg"
          alt=""
          class="service-block__icon"
        />
      </div>
      <div class="service-block__content">
        <h3>Conseil &amp; accompagnement</h3>
        <p>
          Création d'entreprise, levée de fonds, transmission,
          restructuration : nous accompagnons les moments clés de votre
          activité avec un conseil adapté à votre secteur et à vos
          objectifs.
        </p>
        <p>
          Nous prenons le temps de comprendre votre projet avant de vous
          proposer des solutions, parce qu'un bon conseil commence toujours
          par une bonne écoute.
        </p>
      </div>
    </div>

    <div class="service-block">
      <div class="service-block__icon-wrapper">
        <img
          src="~/assets/illustrations/icons/home/audit-office.svg"
          alt=""
          class="service-block__icon"
        />
      </div>
      <div class="service-block__content">
        <h3>Commissariat aux comptes</h3>
        <p>
          Nos missions de commissariat aux comptes garantissent la fiabilité
          de vos comptes auprès de vos partenaires, actionnaires et
          financeurs, dans le respect strict des normes d'exercice
          professionnel.
        </p>
        <p>
          Notre équipe d'audit intervient avec rigueur et indépendance, et
          formule des recommandations concrètes pour renforcer vos process
          de contrôle interne.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services {
  max-width: 1000px;
  margin: 0 auto;
  padding: 100px 40px;
  display: flex;
  flex-direction: column;
  gap: 70px;
}

.service-block {
  display: flex;
  align-items: center;
  gap: 60px;
}

.service-block--reverse {
  flex-direction: row-reverse;
}

.service-block__icon-wrapper {
  flex-shrink: 0;
  width: 160px;
  height: 160px;
  border-radius: 20px;
  background-color: rgba(28, 177, 161, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-block__icon {
  width: 90px;
  height: 90px;
}

.service-block__content {
  flex: 1;
}

.service-block__content h3 {
  color: var(--color-primary);
  margin: 0 0 15px;
}

.service-block__content p {
  margin: 0 0 12px;
}

.service-block__content p:last-child {
  margin-bottom: 0;
}

@media (max-width: 700px) {
  .service-block,
  .service-block--reverse {
    flex-direction: column;
    text-align: left;
  }

  .service-block__icon-wrapper {
    align-self: center;
  }

  .service-block__content h3 {
    text-align: center;
  }
}
</style>

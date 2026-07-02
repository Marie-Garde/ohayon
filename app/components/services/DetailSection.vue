<template>
  <section class="services">
    <div class="service-card" v-reveal="'up'">
      <div class="service-card__left">
        <div class="service-card__icon-wrapper">
          <img
            src="~/assets/illustrations/icons/home/accounting.svg"
            alt=""
            class="service-card__icon"
            loading="lazy"
          />
        </div>
        <div class="service-card__info">
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
      <ul class="service-card__list">
        <li>Tenue comptable</li>
        <li>Établissement des comptes annuels</li>
        <li>Déclarations comptables</li>
        <li>Tableaux de bord &amp; reporting</li>
      </ul>
    </div>

    <div class="service-card" v-reveal="'up'">
      <div class="service-card__left">
        <div class="service-card__icon-wrapper">
          <img
            src="~/assets/illustrations/icons/home/tax-management.svg"
            alt=""
            class="service-card__icon"
            loading="lazy"
          />
        </div>
        <div class="service-card__info">
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
      <ul class="service-card__list">
        <li>Déclarations fiscales</li>
        <li>Optimisation fiscale</li>
        <li>TVA &amp; taxes</li>
        <li>Assistance en cas de contrôle fiscal</li>
      </ul>
    </div>

    <div class="service-card" v-reveal="'up'">
      <div class="service-card__left">
        <div class="service-card__icon-wrapper">
          <img
            src="~/assets/illustrations/icons/home/social-management.svg"
            alt=""
            class="service-card__icon"
            loading="lazy"
          />
        </div>
        <div class="service-card__info">
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
      <ul class="service-card__list">
        <li>Établissement des bulletins de paie</li>
        <li>Déclarations sociales</li>
        <li>Gestion des contrats</li>
        <li>Conseil en droit social</li>
      </ul>
    </div>

    <div class="service-card" v-reveal="'up'">
      <div class="service-card__left">
        <div class="service-card__icon-wrapper">
          <img
            src="~/assets/illustrations/icons/home/accompaniement.svg"
            alt=""
            class="service-card__icon"
            loading="lazy"
          />
        </div>
        <div class="service-card__info">
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
      <ul class="service-card__list">
        <li>Conseil en gestion</li>
        <li>Accompagnement à la création</li>
        <li>Business plan &amp; prévisionnel</li>
        <li>Gestion de la croissance &amp; transmission</li>
      </ul>
    </div>

    <div class="service-card" v-reveal="'up'">
      <div class="service-card__left">
        <div class="service-card__icon-wrapper">
          <img
            src="~/assets/illustrations/icons/home/audit-office.svg"
            alt=""
            class="service-card__icon"
            loading="lazy"
          />
        </div>
        <div class="service-card__info">
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
      <ul class="service-card__list">
        <li>Audit légal</li>
        <li>Certification des comptes</li>
        <li>Missions spécifiques</li>
        <li>Audit contractuel</li>
      </ul>
    </div>

    <div class="services__cta">
      <div class="services__cta-icon-wrapper">
        <img
          src="~/assets/illustrations/icons/home/contact.svg"
          alt=""
          class="services__cta-icon"
          loading="lazy"
        />
      </div>
      <div class="services__cta-text">
        <p class="services__cta-title">Besoin d'un accompagnement personnalisé ?</p>
        <p class="services__cta-subtitle">Prenez rendez-vous avec nos experts.</p>
      </div>
      <NuxtLink to="/contact" class="services__cta-btn">Contactez-nous</NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.services {
  max-width: 1000px;
  margin: 0 auto;
  padding: 80px 40px 100px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.service-card {
  display: flex;
  align-items: center;
  background: #fff;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

.service-card__left {
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 0 0 55%;
  padding: 32px 20px 32px 32px;
  position: relative;
}

.service-card__left::after {
  content: '';
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 50%;
  background-color: var(--color-secondary);
  opacity: 0.3;
}

.service-card__icon-wrapper {
  flex-shrink: 0;
  width: 110px;
  height: 110px;
  border-radius: 24px;
  background-color: rgba(255, 191, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-card__icon {
  width: 68px;
  height: 68px;
}

.service-card__info {
  flex: 1;
}

.service-card__info h3 {
  color: var(--color-text);
  font-size: 22px;
  margin: 0 0 12px;
}

.service-card__info p {
  margin: 0 0 10px;
  font-size: 14px;
  line-height: 1.5;
}

.service-card__info p:last-child {
  margin-bottom: 0;
}

.service-card__list {
  flex: 1;
  list-style: none;
  padding: 32px 32px 32px 36px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.service-card__list li {
  position: relative;
  padding-left: 18px;
  font-family: var(--font-body);
  font-size: 14px;
  color: var(--color-text);
}

.service-card__list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: var(--color-primary);
}

.services__cta {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 16px;
  padding: 28px 36px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
}

.services__cta-icon-wrapper {
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: rgba(28, 177, 161, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.services__cta-icon {
  width: 30px;
  height: 30px;
  filter: invert(59%) sepia(61%) saturate(449%) hue-rotate(130deg) brightness(93%) contrast(89%);
}

.services__cta-text {
  flex: 1;
}

.services__cta-title {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 18px;
  color: var(--color-text);
  margin: 0 0 4px;
}

.services__cta-subtitle {
  font-size: 14px;
  color: #666;
  margin: 0;
}

.services__cta-btn {
  flex-shrink: 0;
  padding: 12px 28px;
  background-color: var(--color-primary);
  color: #fff;
  border-radius: 6px;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 15px;
  text-decoration: none;
  white-space: nowrap;
  transition: background-color 0.3s, color 0.3s;
}

.services__cta-btn:hover {
  background-color: var(--color-secondary);
  color: #fff;
}

@media (max-width: 768px) {
  .services {
    padding: 60px 24px 80px;
  }

  .service-card {
    flex-direction: column;
    align-items: stretch;
  }

  .service-card__left {
    border-right: none;
    border-bottom: 1px solid #e8e8e8;
    padding: 24px;
    flex: unset;
  }

  .service-card__list {
    padding: 24px;
  }

  .services__cta {
    flex-wrap: wrap;
    padding: 24px;
  }

  .services__cta-btn {
    width: 100%;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .services {
    padding: 40px 16px 60px;
  }

  .service-card__info h3 {
    font-size: 19px;
  }
}
</style>

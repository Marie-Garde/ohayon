<template>
  <section class="services">
    <div class="services__grid">
      <div class="services__card">
        <img
          src="~/assets/illustrations/icons/home/accounting.svg"
          alt=""
          class="services__icon"
        />
        <h3>Comptabilité</h3>
        <p>La gestion de vos comptes au quotidien, tenue, révision, bilans.</p>
      </div>
      <div class="services__card">
        <img
          src="~/assets/illustrations/icons/home/tax-management.svg"
          alt=""
          class="services__icon"
        />
        <h3>Gestion fiscale</h3>
        <p>Optimisation fiscale, déclarations, conseil stratégique.</p>
      </div>
      <div class="services__card">
        <img
          src="~/assets/illustrations/icons/home/social-management.svg"
          alt=""
          class="services__icon"
        />
        <h3>Gestion sociale</h3>
        <p>Bulletins de paie, déclarations sociales, droit du travail.</p>
      </div>
      <div class="services__card">
        <img
          src="~/assets/illustrations/icons/home/accompaniement.svg"
          alt=""
          class="services__icon"
        />
        <h3>Accompagnement</h3>
        <p>Création, transmission, évaluation, patrimoine du dirigeant.</p>
      </div>
      <div class="services__card">
        <img
          src="~/assets/illustrations/icons/home/audit-office.svg"
          alt=""
          class="services__icon"
        />
        <h3>Audit légal</h3>
        <p>Commissariat aux comptes, certification, opérations sur capital.</p>
      </div>
      <div class="services__card services__card--cta">
        <NuxtLink to="/nos-services" class="services__btn">
          Découvrir <strong>nos services</strong><br />en détail
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services {
  padding: 120px 40px 100px;
}

.services__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px 0;
  max-width: 900px;
  margin: 0 auto;
}

.services__card {
  text-align: center;
}

.services__icon {
  height: 100px;
  width: 100px;
  margin-bottom: 10px;
}

.services__card h3 {
  color: var(--color-primary);
  margin: 0 0 10px;
}

.services__card p {
  margin: 0 auto;
  max-width: 80%;
}

.services__card--cta {
  display: flex;
  align-items: center;
  justify-content: center;
}

.services__btn {
  display: inline-block;
  font-family: var(--font-body);
  font-weight: 300;
  font-size: 15px;
  color: var(--color-secondary);
  border: 2px solid var(--color-secondary);
  border-radius: 5px;
  padding: 12px 30px;
  text-decoration: none;
  line-height: 1.5;
  text-align: center;
  transition:
    background-color 0.3s,
    color 0.3s,
    border-color 0.3s;
}

.services__btn:hover {
  background-color: var(--color-secondary);
  color: #fff;
  border-color: var(--color-secondary);
}
</style>

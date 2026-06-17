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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          tincidunt, orci eget viverra feugiat.
        </p>
      </div>
      <div class="services__card">
        <img
          src="~/assets/illustrations/icons/home/tax-management.svg"
          alt=""
          class="services__icon"
        />
        <h3>Gestion fiscale</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          tincidunt, orci eget viverra feugiat.
        </p>
      </div>
      <div class="services__card">
        <img
          src="~/assets/illustrations/icons/home/social-management.svg"
          alt=""
          class="services__icon"
        />
        <h3>Gestion sociale &amp; paie</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          tincidunt, orci eget viverra feugiat.
        </p>
      </div>
      <div class="services__card">
        <img
          src="~/assets/illustrations/icons/home/accompaniement.svg"
          alt=""
          class="services__icon"
        />
        <h3>Conseil &amp; accompagnement</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          tincidunt, orci eget viverra feugiat.
        </p>
      </div>
      <div class="services__card">
        <img
          src="~/assets/illustrations/icons/home/audit-office.svg"
          alt=""
          class="services__icon"
        />
        <h3>Commissariat aux comptes</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          tincidunt, orci eget viverra feugiat.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services {
  padding: 100px 40px;
}

.services__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px 80px;
  max-width: 800px;
  margin: 0 auto;
}

.services__card {
  text-align: center;
}

.services__card:last-child {
  grid-column: 1 / -1;
  max-width: calc(50% - 40px);
  margin: 0 auto;
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
  max-width: 90%;
}
</style>

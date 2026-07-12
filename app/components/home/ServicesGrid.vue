<template>
  <section class="services">
    <div class="services__grid">
      <div v-for="(service, index) in services" :key="index" class="services__card">
        <img
          :src="service.icone"
          alt=""
          class="services__icon"
          loading="lazy"
        />
        <h3>{{ service.titre }}</h3>
        <p>{{ service.texte }}</p>
      </div>
      <div class="services__card services__card--cta">
        <NuxtLink to="/nos-services" class="services__btn">
          <template v-if="servicesBouton">{{ servicesBouton }}</template>
          <template v-else>Découvrir <strong>nos services</strong><br />en détail</template>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import iconAccounting from '../../assets/illustrations/icons/home/accounting.svg'
import iconTax from '../../assets/illustrations/icons/home/tax-management.svg'
import iconSocial from '../../assets/illustrations/icons/home/social-management.svg'
import iconAccompaniement from '../../assets/illustrations/icons/home/accompaniement.svg'
import iconAudit from '../../assets/illustrations/icons/home/audit-office.svg'

const { data } = useHomeContent()
const img = useSanityImageUrl()

const defaultServices = [
  { titre: 'Comptabilité', texte: 'La gestion de vos comptes au quotidien, tenue, révision, bilans.', icone: iconAccounting },
  { titre: 'Gestion fiscale', texte: 'Optimisation fiscale, déclarations, conseil stratégique.', icone: iconTax },
  { titre: 'Gestion sociale', texte: 'Bulletins de paie, déclarations sociales, droit du travail.', icone: iconSocial },
  { titre: 'Accompagnement', texte: 'Création, transmission, évaluation, patrimoine du dirigeant.', icone: iconAccompaniement },
  { titre: 'Audit légal', texte: 'Commissariat aux comptes, certification, opérations sur capital.', icone: iconAudit },
]

const services = computed(() => {
  const sanity = data.value?.services
  if (sanity?.length) {
    return sanity.map((service, index) => ({
      titre: service.titre,
      texte: service.texte,
      icone: img(service.icone as any)?.url() ?? defaultServices[index]?.icone ?? '',
    }))
  }
  return defaultServices
})

const servicesBouton = computed(() => data.value?.servicesBouton || '')
</script>

<style scoped>
.services {
  padding: 120px 40px 100px;
}

.services__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px 0;
  max-width: 1100px;
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

@media (max-width: 768px) {
  .services {
    padding: 80px 24px 70px;
  }

  .services__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 50px 30px;
  }
}

@media (max-width: 480px) {
  .services {
    padding: 60px 20px 50px;
  }

  .services__grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .services__icon {
    height: 80px;
    width: 80px;
  }
}
</style>

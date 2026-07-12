<template>
  <section class="faq">
    <div class="faq__inner">
      <div class="faq__header">
        <p class="faq__subtitle">{{ data?.faqSurtitre || 'Une interrogation ?' }}</p>
        <h2 class="faq__title">{{ data?.faqTitre || 'Questions fréquentes' }}</h2>
      </div>

      <div class="faq__list">
        <details
          v-for="(item, index) in questions"
          :key="index"
          class="faq__item"
          v-reveal="'up'"
        >
          <summary class="faq__question">
            <span>{{ item.question }}</span>
            <span class="faq__icon" aria-hidden="true"></span>
          </summary>
          <div class="faq__answer">
            <p>{{ item.answer }}</p>
          </div>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup>
const { data } = useContactContent()

const defaultQuestions = [
  {
    question: "Quels types d'entreprises accompagnez-vous ?",
    answer:
      "Nous accompagnons principalement les dirigeants de TPE, PME, professions libérales, commerçants, artisans et groupes de sociétés.",
  },
  {
    question: "Travaillez-vous uniquement à Toulouse ?",
    answer:
      "Non. Grâce à nos outils numériques, nous accompagnons des clients partout en France tout en conservant une relation de proximité.",
  },
  {
    question: "Puis-je changer d'expert-comptable facilement ?",
    answer:
      "Oui. Nous vous guidons dans l'ensemble des démarches administratives liées au transfert de votre dossier.",
  },
  {
    question: "Combien coûte un expert-comptable ?",
    answer:
      "Nos honoraires sont adaptés à la taille de votre structure, à vos besoins et au niveau d'accompagnement souhaité. Un devis personnalisé vous est remis en toute transparence.",
  },
  {
    question: "Serez-vous mon interlocuteur direct ?",
    answer:
      "Chaque client bénéficie d'un interlocuteur dédié, soutenu par l'expertise de l'ensemble du cabinet lorsque cela est nécessaire.",
  },
  {
    question: "Comment démarrer un accompagnement ?",
    answer:
      "Un simple échange suffit pour faire connaissance, comprendre vos besoins et déterminer la solution la plus adaptée à votre situation.",
  },
];

const questions = computed(() => {
  const sanity = data.value?.questions;
  if (sanity?.length) {
    return sanity.map((q) => ({ question: q.question, answer: q.reponse }));
  }
  return defaultQuestions;
});
</script>

<style scoped>
.faq {
  background-color: var(--color-primary);
  padding: 120px 40px 130px;
  margin-top: 60px;
  clip-path: polygon(
    0 var(--slant-height),
    100% 0,
    100% calc(100% - var(--slant-height)),
    0 100%
  );
}

.faq__inner {
  max-width: 1100px;
  margin: 0 auto;
}

.faq__header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;
  margin: 0 auto 40px;
}

.faq__subtitle {
  color: #fff;
  font-weight: 300;
  font-size: 25px;
  margin: 0 0 0 310px;
}

.faq__title {
  color: #fff;
  font-size: 45px;
  margin: 0;
}

.faq__list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.faq__item {
  background-color: #fff;
  border: 2px solid #fff;
  border-radius: 5px;
  overflow: hidden;
  transition:
    box-shadow 0.3s,
    border-color 0.3s;
}

.faq__item[open] {
  border-color: var(--color-secondary);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.faq__question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  cursor: pointer;
  padding: 18px 25px;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 18px;
  color: var(--color-primary);
  list-style: none;
  user-select: none;
  transition:
    background-color 0.3s,
    color 0.3s;
}

.faq__question::-webkit-details-marker {
  display: none;
}

.faq__item[open] .faq__question {
  background-color: var(--color-secondary);
  color: var(--color-text);
}

.faq__icon {
  position: relative;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.faq__icon::before,
.faq__icon::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: var(--color-primary);
  transition:
    transform 0.3s,
    background-color 0.3s;
}

.faq__icon::before {
  width: 16px;
  height: 2px;
  transform: translate(-50%, -50%);
}

.faq__icon::after {
  width: 2px;
  height: 16px;
  transform: translate(-50%, -50%);
}

.faq__item[open] .faq__icon::before,
.faq__item[open] .faq__icon::after {
  background-color: var(--color-text);
}

.faq__item[open] .faq__icon::after {
  transform: translate(-50%, -50%) rotate(90deg);
}

.faq__answer {
  padding: 20px 25px 25px;
  background-color: #fff;
}

.faq__answer p {
  margin: 0;
}

@media (max-width: 768px) {
  .faq {
    padding: 100px 24px 100px;
    margin-top: 40px;
  }

  .faq__header {
    margin: 0 auto 30px;
  }

  .faq__subtitle {
    font-size: 18px;
    margin-left: 0;
  }

  .faq__title {
    font-size: 32px;
  }

  .faq__list {
    max-width: 90%;
    margin: 0 auto;
  }
}

@media (max-width: 480px) {
  .faq {
    padding: 80px 20px 80px;
  }

  .faq__subtitle {
    font-size: 15px;
  }

  .faq__title {
    font-size: 24px;
  }

  .faq__question {
    padding: 14px 18px;
    font-size: 15px;
    gap: 12px;
  }

  .faq__answer {
    padding: 16px 18px 20px;
  }

  .faq__icon {
    width: 14px;
    height: 14px;
  }

  .faq__icon::before {
    width: 14px;
  }

  .faq__icon::after {
    height: 14px;
  }

  .faq__list {
    max-width: 94%;
    margin: 0 auto;
  }
}
</style>

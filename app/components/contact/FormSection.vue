<template>
  <section class="form-section">
    <div class="form-section__inner">
      <div v-if="success" class="form__success">
        <p>Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.</p>
      </div>

      <form v-else class="form" @submit.prevent="handleSubmit">
        <div v-if="error" class="form__error">
          Une erreur est survenue. Veuillez réessayer ou nous contacter directement par email.
        </div>

        <div class="form__row">
          <div class="form__field">
            <label for="firstname">Prénom</label>
            <input id="firstname" v-model="form.firstname" type="text" name="firstname" required />
          </div>
          <div class="form__field">
            <label for="lastname">Nom</label>
            <input id="lastname" v-model="form.lastname" type="text" name="lastname" required />
          </div>
        </div>

        <div class="form__row">
          <div class="form__field">
            <label for="email">Email</label>
            <input id="email" v-model="form.email" type="email" name="email" required />
          </div>
          <div class="form__field">
            <label for="phone">Téléphone <span>(facultatif)</span></label>
            <input id="phone" v-model="form.phone" type="tel" name="phone" />
          </div>
        </div>

        <div class="form__field">
          <label for="subject">Objet de votre demande</label>
          <select id="subject" v-model="form.subject" name="subject" required>
            <option value="" disabled selected>Sélectionnez un objet</option>
            <option value="devis">Demande de devis</option>
            <option value="rdv">Prise de rendez-vous</option>
            <option value="info">Demande d'informations</option>
            <option value="collaboration">Candidature / collaboration</option>
            <option value="autre">Autre</option>
          </select>
        </div>

        <div class="form__field">
          <label for="message">Votre message</label>
          <textarea id="message" v-model="form.message" name="message" rows="6" required></textarea>
        </div>

        <div class="form__consent">
          <input id="consent" v-model="form.consent" type="checkbox" name="consent" required />
          <label for="consent">
            J'accepte que mes informations soient utilisées pour répondre à ma
            demande.
          </label>
        </div>

        <div class="form__submit">
          <button type="submit" class="form__btn" :disabled="loading">
            {{ loading ? 'Envoi en cours…' : 'Envoyer le message' }}
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
const form = reactive({
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  consent: false,
})

const loading = ref(false)
const success = ref(false)
const error = ref(false)

async function handleSubmit() {
  loading.value = true
  error.value = false

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: form,
    })
    success.value = true
  } catch {
    error.value = true
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.form-section {
  padding: 100px 40px 130px;
}

.form-section__inner {
  max-width: 800px;
  margin: 0 auto;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.form__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;
}

.form__field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form__field label {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 14px;
  color: var(--color-text);
}

.form__field label span {
  font-weight: 400;
  font-size: 13px;
  color: #888;
}

.form__field input,
.form__field select,
.form__field textarea {
  font-family: var(--font-body);
  font-weight: 400;
  font-size: 15px;
  color: var(--color-text);
  background-color: #fff;
  border: 1px solid #d6d6d6;
  border-radius: 5px;
  padding: 12px 14px;
  transition:
    border-color 0.3s,
    box-shadow 0.3s;
}

.form__field input:focus,
.form__field select:focus,
.form__field textarea:focus {
  outline: none;
  border-color: var(--color-secondary);
  box-shadow: 0 0 0 3px rgba(255, 191, 0, 0.2);
}

.form__field textarea {
  resize: vertical;
  min-height: 140px;
}

.form__field select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%231cb1a1' d='M6 8 0 0h12z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  padding-right: 36px;
}

.form__consent {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.form__consent input {
  margin-top: 3px;
  accent-color: var(--color-secondary);
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.form__consent label {
  font-family: var(--font-body);
  font-weight: 400;
  font-size: 13px;
  color: var(--color-text);
  line-height: 1.4;
}

.form__submit {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}

.form__btn {
  font-family: var(--font-body);
  font-weight: 400;
  font-size: 16px;
  color: var(--color-text);
  background-color: var(--color-secondary);
  border: 2px solid var(--color-secondary);
  border-radius: 5px;
  padding: 14px 32px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s,
    border-color 0.3s;
}

.form__btn:hover {
  background-color: transparent;
  color: var(--color-secondary);
  border-color: var(--color-secondary);
}

@media (max-width: 768px) {
  .form-section {
    padding: 80px 24px 90px;
  }

  .form__row {
    grid-template-columns: 1fr;
    gap: 22px;
  }
}

.form__success {
  padding: 24px;
  background-color: #e6f7f5;
  border: 1px solid var(--color-primary);
  border-radius: 5px;
  color: var(--color-text);
  font-family: var(--font-body);
  font-size: 15px;
  line-height: 1.5;
}

.form__error {
  padding: 14px 16px;
  background-color: #fff0f0;
  border: 1px solid #e05c5c;
  border-radius: 5px;
  color: #c0392b;
  font-family: var(--font-body);
  font-size: 14px;
}

.form__btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

@media (max-width: 480px) {
  .form-section {
    padding: 60px 20px 70px;
  }

  .form {
    gap: 18px;
  }

  .form__submit {
    margin-top: 4px;
  }

  .form__btn {
    width: 100%;
    padding: 14px 20px;
  }
}
</style>

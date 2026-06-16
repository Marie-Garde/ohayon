<template>
  <div class="legal">
    <header class="legal__header">
      <h1>Mentions légales</h1>
      <p class="legal__updated">Dernière mise à jour : {{ lastUpdate }}</p>
    </header>

    <article class="legal__section">
      <h2>1. Éditeur du site</h2>
      <dl class="legal__list">
        <div>
          <dt>Raison sociale</dt>
          <dd>Cabinet Ohayon &amp; Associés</dd>
        </div>
        <div>
          <dt>Adresse</dt>
          <dd>36, route d'Espagne — 31100 Toulouse</dd>
        </div>
        <div>
          <dt>Téléphone</dt>
          <dd><a href="tel:+33561552544">+33 (0)5 61 55 25 44</a></dd>
        </div>
        <div>
          <dt>Email</dt>
          <dd>
            <a href="mailto:contact@ohayon-associes.com"
              >contact@ohayon-associes.com</a
            >
          </dd>
        </div>
        <div>
          <dt>SIREN</dt>
          <dd>340 930 098</dd>
        </div>
        <div>
          <dt>N° TVA intracommunautaire</dt>
          <dd>FR 93 340 930 098</dd>
        </div>
        <div>
          <dt>Code APE</dt>
          <dd>6920Z — Activités comptables</dd>
        </div>
        <div>
          <dt>Directeur de la publication</dt>
          <dd>Cabinet Ohayon &amp; Associés</dd>
        </div>
      </dl>
    </article>

    <article class="legal__section">
      <h2>2. Hébergement</h2>
      <p>
        Le site est hébergé par <strong>OVH SAS</strong>, société par actions
        simplifiée au capital de 10 174 560 €, immatriculée au RCS de Lille
        Métropole sous le numéro 424 761 419.
      </p>
      <dl class="legal__list">
        <div>
          <dt>Siège social</dt>
          <dd>2, rue Kellermann — 59100 Roubaix — France</dd>
        </div>
        <div>
          <dt>Téléphone</dt>
          <dd>1007</dd>
        </div>
        <div>
          <dt>Site web</dt>
          <dd>
            <a href="https://www.ovh.com" target="_blank" rel="noopener"
              >www.ovh.com</a
            >
          </dd>
        </div>
      </dl>
    </article>

    <article class="legal__section">
      <h2>3. Propriété intellectuelle</h2>
      <p>
        L'ensemble des éléments constituant le site
        <a href="https://www.ohayon-associes.com" target="_blank" rel="noopener"
          >www.ohayon-associes.com</a
        >
        (textes, graphismes, logos, icônes, images, photographies, sons, mise en
        page, charte graphique) est la propriété exclusive du Cabinet Ohayon
        &amp; Associés ou de ses partenaires. Ces éléments sont protégés par
        les lois relatives à la propriété intellectuelle.
      </p>
      <p>
        Toute reproduction, représentation, modification ou adaptation,
        intégrale ou partielle, par quelque procédé et sur quelque support que
        ce soit, sans autorisation écrite préalable du Cabinet Ohayon &amp;
        Associés, est strictement interdite et constituerait une contrefaçon
        sanctionnée par les articles L.335-2 et suivants du Code de la
        propriété intellectuelle.
      </p>
    </article>

    <article class="legal__section">
      <h2>4. Données personnelles</h2>
      <p>
        Conformément au Règlement général sur la protection des données (RGPD)
        et à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée,
        vous disposez d'un droit d'accès, de rectification, d'effacement, de
        limitation, d'opposition et de portabilité des données vous concernant.
      </p>
      <p>
        Les informations recueillies via le formulaire de contact sont
        strictement destinées au Cabinet Ohayon &amp; Associés et utilisées
        uniquement pour répondre à votre demande. Elles ne sont ni cédées ni
        vendues à des tiers.
      </p>
      <p>
        Pour exercer vos droits ou pour toute question relative au traitement
        de vos données, vous pouvez nous contacter à l'adresse
        <a href="mailto:contact@ohayon-associes.com"
          >contact@ohayon-associes.com</a
        >.
      </p>
      <p>
        Vous disposez également du droit d'introduire une réclamation auprès de
        la CNIL (<a
          href="https://www.cnil.fr"
          target="_blank"
          rel="noopener"
          >www.cnil.fr</a
        >).
      </p>
    </article>

    <article class="legal__section">
      <h2>5. Cookies</h2>
      <p>
        Le site n'utilise pas de cookies publicitaires ni de traceurs à des
        fins de profilage. Seuls des cookies strictement nécessaires au bon
        fonctionnement du site peuvent être déposés. Ils ne nécessitent pas
        votre consentement préalable.
      </p>
    </article>

    <article class="legal__section">
      <h2>6. Liens externes</h2>
      <p>
        Le site peut contenir des liens vers des sites tiers. Le Cabinet Ohayon
        &amp; Associés n'exerce aucun contrôle sur ces sites et décline toute
        responsabilité quant à leur contenu.
      </p>
    </article>

    <article class="legal__section">
      <h2>7. Droit applicable</h2>
      <p>
        Les présentes mentions légales sont régies par le droit français. En
        cas de litige, et à défaut de résolution amiable, les tribunaux
        français seront seuls compétents.
      </p>
    </article>
  </div>
</template>

<script setup>
const lastUpdate = "avril 2026";
</script>

<style scoped>
.legal {
  max-width: 850px;
  margin: 0 auto;
  padding: 80px 40px 120px;
}

.legal__header {
  margin-bottom: 60px;
  padding-bottom: 30px;
  border-bottom: 3px solid var(--color-primary);
}

.legal__header h1 {
  margin: 0 0 10px;
  color: var(--color-primary);
}

.legal__updated {
  margin: 0;
  font-style: italic;
  color: #888;
  font-size: 14px;
}

.legal__section {
  margin-bottom: 40px;
}

.legal__section h2 {
  color: var(--color-primary);
  font-size: 24px;
  margin: 0 0 18px;
  padding-bottom: 8px;
  border-bottom: 1px solid #e6e6e6;
}

.legal__section p {
  margin: 0 0 12px;
}

.legal__section p:last-child {
  margin-bottom: 0;
}

.legal__section a {
  color: var(--color-primary);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s;
}

.legal__section a:hover {
  border-bottom-color: var(--color-primary);
}

.legal__list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin: 0;
}

.legal__list > div {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 20px;
  padding: 8px 0;
  border-bottom: 1px dashed #eaeaea;
}

.legal__list > div:last-child {
  border-bottom: none;
}

.legal__list dt {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 14px;
  color: var(--color-text);
}

.legal__list dd {
  margin: 0;
  font-family: var(--font-body);
  font-weight: 400;
  font-size: 15px;
  color: var(--color-text);
}
</style>

# Composants — résumé

Note locale, non versionnée (voir `.gitignore`).

## Racine (utilisés dans le layout, sur toutes les pages)

- **AppNavbar.vue** — barre de navigation : logo, liens (À propos, Services, Nous rejoindre, Contact), bouton CTA "Vos outils". Hauteur réduite au scroll. *(branche `mobile-menu-footer`)* N'avait aucun responsive — c'était la cause probable des débordements horizontaux constatés sur plusieurs pages en mobile. Ajout d'un menu hamburger sous 900px : liens + bouton "Vos outils" remplacés par une icône qui s'anime en croix, panneau plein écran qui glisse depuis la droite au clic, scroll de la page bloqué pendant que le menu est ouvert, fermeture auto au clic sur un lien. Corrigé au passage un bug de spécificité CSS qui rendait le texte du bouton invisible (teal sur teal) dans le menu mobile.
- **AppFooter.vue** — pied de page : logo blanc, copyright, crédit "L'envolée numérique", liens mentions légales / plan du site. *(branche `mobile-menu-footer`)* Rendu responsive sous 700px : le logo (en position absolue à gauche) repasse dans le flux normal au-dessus du texte au lieu de risquer de le chevaucher, et la ligne d'infos/liens passe en `flex-wrap` centré au lieu de déborder horizontalement (elle n'avait pas de wrap du tout).

## home/ (page d'accueil)

*(branche `main-responsive`, partie depuis `main`)* Plusieurs sections avaient du contenu lorem ipsum ou des marges fixes qui débordaient en mobile — tout a été repris avec du vrai contenu et/ou du responsive.

- **HeroSection.vue** — bandeau hero avec image de fond, accroche "La qualité, par principe" et CTA "Contactez-nous". Avait des décalages fixes énormes (`padding-left: 160px` sur le texte, `margin-left: 490px` sur le bouton) qui débordaient largement en mobile — remis à 0 sous 768px, tailles de police et hauteur réduites.
- **StatsBar.vue** — bandeau de 4 chiffres clés. Le chiffre principal était en police 100px sur une seule ligne de 4 items : passage en grille 2×2 avec police réduite (56px puis 44px) sous 768px/480px.
- **WhoWeAreSection.vue** — section "Ce qui nous définit". Titre en pill `white-space: nowrap` à 40px qui débordait en mobile — réduit à 28px puis 20px, bannière réduite à 320px/260px.
- **ValuesSection.vue** — grille de 4 valeurs + CTA "Découvrir qui nous sommes". Pas encore audité pour le responsive.
- **SkillsSection.vue** — section "Nos savoir-faire". Même correctif de pill-titre que `WhoWeAreSection`.
- **ServicesGrid.vue** — grille de 6 cartes services. Grille à 3 colonnes fixes sans aucun fallback : passage à 2 colonnes sous 768px puis 1 sous 480px, icônes réduites.
- **ProcessSection.vue** — timeline "Comment ça se passe". Contenu lorem ipsum ("Étape 1-4") remplacé par le vrai contenu déjà rédigé sur la page nos-services (5 étapes réelles avec durée : Premier échange, Rendez-vous découverte, Proposition personnalisée, Démarrage de la mission, Accompagnement continu). La frise zigzag à colonnes fixes (impossible à lire en dessous d'environ 900px) est remplacée par une liste verticale avec ligne/points alignés à gauche sous 900px. Corrigé aussi le sous-titre "Premier contact ?" qui avait un `margin-left: 310px` débordant.
- **CtaSection.vue** — bandeau image avec CTA centré "Pour toute question, contactez-nous !", découpe diagonale. *(composant partagé avec `nous-rejoindre`, `qui-sommes-nous`, `nos-services`)* Découpe diagonale supprimée sous 768px (rectangle classique + coins arrondis), bouton avec taille/largeur max adaptées pour ne pas être coupé par l'`overflow: hidden` du conteneur.

## contact/ (page contact)

*(branche `page-contact`)*

- **PageHero.vue** — bandeau hero "Contactez-nous" avec sous-titre. Dégradé de l'overlay aligné sur celui de la home (était plus opaque/différent, comme sur `nos-services` et `vos-outils` avant correction). Rendu responsive (mêmes valeurs que les autres heros de page : 320px/280px, padding 40/24px, h1 40/30px, lead 17/15px).
- **LocationSection.vue** — carte Google Maps + 4 cartes infos (adresse, horaires, email mis en avant, téléphone). Rendu responsive : grille map+infos passe en 1 colonne sous 900px, les 4 cards passent en 1 colonne sous 480px, titre "Nous trouver" rétréci (était en `nowrap`, débordait), inset centré supplémentaire sur la grille en plus du padding de section.
- **FaqSection.vue** — FAQ en accordéon (texte toujours en Lorem ipsum, à remplacer). Rendu responsive : titre/sous-titre rétrécis, sous-titre qui avait un `margin-left: 310px` débordant corrigé, padding vertical augmenté, cards centrées avec inset supplémentaire.
- **ImageBanner.vue** — bandeau image "Écrivez-nous", découpe diagonale. Image remplacée par `assets/illustrations/images/contact/nousecrire.jpg`.
- **FormSection.vue** — formulaire de contact (prénom, nom, email, téléphone optionnel, sujet en dropdown, message, case consentement, bouton d'envoi). Désormais fonctionnel : champs liés avec `v-model`, appel à `/api/contact` au submit, message de succès affiché après envoi, message d'erreur en cas d'échec, bouton désactivé pendant l'envoi. L'envoi vers l'objet "Candidature / collaboration" est routé vers `BREVO_TO_EMAIL_RH`, tous les autres objets vers `BREVO_TO_EMAIL`. Rendu responsive : champs prénom/nom et email/téléphone en 1 colonne sous 768px, bouton pleine largeur sous 480px.

  **Envoi des emails via Brevo** (service transactionnel gratuit, 300 emails/jour). La route serveur est dans `server/api/contact.post.ts` — elle appelle directement l'API REST Brevo sans dépendance externe. Les identifiants sont dans `.env` (non versionné).

  **Ce que Marie doit faire avant la mise en prod :**
  1. Le client crée un compte sur [brevo.com](https://brevo.com) avec l'adresse du cabinet.
  2. Dans Brevo → Paramètres → Expéditeurs, ajouter et valider le domaine `ohayon-associes.com` (ou au minimum l'adresse `contact@ohayon-associes.com`).
  3. Dans Brevo → Paramètres → Clés API, générer une clé API.
  4. Remplacer les valeurs du `.env` sur le serveur de prod :
     - `BREVO_API_KEY` → la clé API du compte client
     - `BREVO_FROM_EMAIL` → `contact@ohayon-associes.com` (une fois le domaine vérifié)
     - `BREVO_FROM_NAME` → `Cabinet Ohayon`
     - `BREVO_TO_EMAIL` → adresse générale du cabinet
     - `BREVO_TO_EMAIL_RH` → `nousrejoindre@ohayon-associes.com`

## qui-sommes-nous/ (page qui sommes nous — gros chantier de cette session)

- **PageHero.vue** — titre "Qui sommes-nous" conservé, nouveau paragraphe ("Équipe très qualifiée... depuis plus de 40 ans..."), image de fond remplacée par `historique.jpg`, dégradé d'overlay aligné sur celui du hero d'accueil (transparent à droite pour révéler davantage l'image). *(branche `page-qui-sommes-nous`)* Rendu responsive (mêmes valeurs que les autres heros de page).
- **HistorySection.vue** *(nouveau)* — section "Notre histoire" juste après le hero : frise chronologique verticale alternée (gauche/droite), titre en pill teal (même style que "Nos chiffres clés"), 5 jalons en lorem ipsum avec années réelles à conserver (1985, 1998, 2010, 2018, 2024). Anime au scroll (slide-in gauche/droite via `v-reveal`). Avait déjà un bon point de bascule responsive à 700px (frise → liste verticale alignée à gauche) ; complété *(branche `page-qui-sommes-nous`)* avec le rétrécissement du titre (pill en `nowrap`) et un padding latéral cohérent sous 768px/480px.
- **TeamSection.vue** — ne garde que les 4 associés (Jérôme Ohayon, Laurence Bertrand, Maryse Olhats, Océane Ducoulombier), suppression de la grille de collaborateurs en dessous. Vraies photos (compressées ~9-10 Mo → ~50 Ko), médaillon agrandi (150px, zoom 1.4, ombre bleue subtile, sans bordure). Cards sur une seule ligne (260px) : nom en 2 lignes (prénom/nom), poste, email (couleur teal), bouton "En savoir plus". Au clic : la card sélectionnée passe à gauche, détail (bullets + bloc "J'aime / J'aime pas" en accents jaunes) s'affiche dans un encadré vert à droite. Texte d'intro au-dessus des cards (barres jaunes, justifié). Bannière "L'équipe" avec `equipe.jpg`. **Pas encore audité pour le responsive.**
- **PillarsSection.vue** — bannière "Nos piliers" avec `piliers.jpg`. Les 4 cards (Expertise & qualité, Digitalisation pionnière — "Silae" et non "iSuite —, Réactivité & proximité, Sur-mesure sans standard) reprennent exactement le style `values__card` de la page d'accueil (bordure teal, sans icône). Anime au scroll (slide-in gauche/droite alterné). **Pas encore audité pour le responsive.**
- **ValuesSection.vue** *(nouveau)* — bandeau bleu diagonal "Nos valeurs" : 2 rangées (arbre à gauche/texte à droite, puis texte à gauche/éolienne à droite). Illustrations dans un cadre blanc légèrement incliné (parallèle au biais du bandeau, via `rotate` calculé sur `--slant-height`), sans bordure. Quelques expressions clés du texte en gras jaune. A déjà du CSS responsive existant (non audité en détail pour savoir s'il est suffisant).
- **StatsBar.vue** — "Nos chiffres clés" repensé en mosaïque de 4 tuiles colorées (icône + chiffre + libellé) façon infographie, inspiré d'une référence externe : fonds pleins (teal, teal foncé `#11625a`, blanc+texte teal, blanc+accent jaune) + bordure du haut de couleur différente sur chaque tuile, complémentaire à son propre fond. Section déplacée en bas de page, juste avant le CTA final. Avait déjà un point de bascule à 800px (4→2 colonnes) ; complété *(branche `page-qui-sommes-nous`)* avec le rétrécissement du titre et des tuiles sous 768px/480px.
- **Ordre de la page** : Hero → Notre histoire → L'équipe → Nos piliers → Nos valeurs → Nos chiffres clés → CTA. Espacement entre sections harmonisé à ~100px.
- *(branche `page-qui-sommes-nous`)* Le CTA contact (`home/CtaSection.vue`, partagé) a aussi reçu son traitement responsive ici.
- **Reste à faire sur cette branche** : responsive de `TeamSection.vue` et `PillarsSection.vue`.

## rejoindre/ (page nous rejoindre)

*(branche `page-nous-rejoindre`)* Page entièrement reprise cette session : contenu réel + responsive sur toutes les sections.

- **PageHero.vue** — image remplacée par `nous-rejoindre/hero.jpg`, dégradé aligné sur la home, responsive.
- **HookSection.vue** — bandeau "Pourquoi nous rejoindre ?" : padding resserré, titre (pill en `nowrap`) rétréci sous 768px/480px (débordait sinon).
- **ReasonsSection.vue** — 3 cards "pourquoi nous rejoindre" (cabinet moderne, progression, équipe expérimentée avec stats 40 ans / 4 experts-comptables). Titre "Un cabinet moderne" sur 2 lignes, padding des cards augmenté, hover ajouté (fond teal très léger, même style que les cards de profil). Grille en `flex-wrap: nowrap` avec largeur fixe (débordait totalement en dessous de 1150px) : passage à 2 colonnes sous 900px puis 1 colonne sous 650px.
- **CultureSection.vue** — section "Culture & ambiance du cabinet" : bandeau remplacé par une grille de 4 cards (Esprit d'équipe, Équilibre vie pro/perso, Formation continue, Moments conviviaux) façon `ServicesGrid.vue`. Image remplacée par `nous-rejoindre/culture.jpg`. Ajout d'une ligne de 10 mots-clés (Bienveillance, Exigence, Esprit d'équipe, Confiance, Proximité, Autonomie, Engagement, Innovation, Convivialité, Réactivité) sous le bandeau, séparés par des points jaunes, avec effet hover par mot (après une première tentative en "nuage de mots" jugée pas assez propre). Rendu responsive : grille 4→2→1 colonnes, bannière et titre réduits. Icônes toujours dessinées à la main en attendant — **à remplacer par de vraies icônes** dans le même style que celles de `home/icons/` (gris deux tons `#3A3A3A`/`#B2B2B2` + blanc, 100x100px). Pas de lien source connu vers le pack d'icônes existant.
- **ProfilesSection.vue** — entièrement repensée : l'ancien système de cards cliquables avec sélection (3 profils factices en lorem ipsum) a été remplacé par une bannière CTA contrainte (même style que `home/CtaSection.vue` : largeur max 1000px, pas d'overlay), image `nous-rejoindre/profils.jpg` cadrée à gauche, avec une card blanche flottante centrée verticalement sur l'image contenant le texte de recrutement réel et un bouton "Postuler" en `mailto:` vers `nousrejoindre@ohayon-associes.com`. Rendu responsive : diagonale supprimée sous 768px (rectangle classique), largeurs en `%` pour éviter que la card soit rognée par l'`overflow: hidden` du conteneur.
- **RecruitmentProcessSection.vue** — timeline "Processus de recrutement" remplie avec le vrai contenu (5 étapes : Vous postulez / Nous discutons / Le courant passe / Le test [RechercheV sous Excel, raccourci en titre pour éviter un texte trop long et trop de lignes] / Bienvenue), structure titre+description à deux niveaux comme l'originale. Rendu responsive : la frise zigzag à 5 colonnes fixes est devenue une liste verticale sous 900px (ligne + points alignés à gauche), avec correction du bug de chevauchement texte/ligne rencontré en cours de route (hauteur de step explicite au lieu de dépendre du stretch implicite de la grille) et du `margin-left: 310px` débordant du sous-titre.
- **JobsSection.vue** *(nouveau)* — section "Offres d'emploi" : bannière avec `nous-rejoindre/offres.jpg`, liste de 10 offres générées en dur (titre, contrat en badge, lieu avec icône pin, détail), paginée à 6 par page. Au clic sur une offre, reproduit le pattern de la section "associés" (qui-sommes-nous) : la card sélectionnée passe en colonne à gauche, le détail (avec bouton "Postuler à cette offre" en `mailto:` incluant le sujet) à droite. État vide géré si le tableau est vide (message + CTA candidature spontanée). Rendu responsive : cards en liste verticale (avatar + titre/badge + lieu + chevron), chevron masqué sous 480px, vue détail empilée (card au-dessus du panneau) sous 768px.
- Le CTA contact (`home/CtaSection.vue`, partagé) a aussi reçu son traitement responsive ici (et la card de `ProfilesSection.vue` a été recentrée verticalement à cette occasion, `top: 50%` au lieu de `62%`).

## nos-services/ (page nos services)

*(branche `page-nos-services`, page entièrement créée/remplie cette session)*

- **PageHero.vue** — image remplacée par `nos-services/services-hero.jpg`, dégradé aligné sur la home (était auparavant plus opaque, façon page contact d'origine). Rendu responsive.
- **DetailSection.vue** — l'ancienne grille de 5 cards icône+titre+2 lignes (trop peu de place pour du vrai contenu) a été remplacée par des blocs alternés (icône à gauche/droite en alternance, titre + 2 paragraphes de contenu réel rédigé pour chacun des 5 services : Comptabilité, Gestion fiscale, Gestion sociale & paie, Conseil & accompagnement, Commissariat aux comptes). Rendu responsive : passage en colonne sous 700px, icône et titre centrés mais texte aligné à gauche (pas tout centré).
- **ProcessSection.vue** — timeline "Comment ça se passe" remplie avec le contenu réel fourni (5 étapes avec durée : Premier échange 15-30min, Rendez-vous découverte avec un expert-comptable 45min-1h [titre raccourci, détail dans le texte], Proposition personnalisée 24-72h, Démarrage de la mission 1-2 semaines, Accompagnement continu). Rendu responsive : frise verticale sous 900px (même traitement que `rejoindre/RecruitmentProcessSection.vue`, avec gestion de l'ordre titre→durée→description), texte aligné à gauche sur mobile (pas centré).
- Le CTA contact (`home/CtaSection.vue`, partagé) a aussi reçu son traitement responsive ici.

## vos-outils/ (page vos outils)

*(branche `page-outils`)*

- **PageHero.vue** — rendu responsive (alignée sur les mêmes valeurs que les autres heros de page, malgré un texte d'intro plus long sur 3 lignes — pas de risque de débordement car le conteneur est en pleine largeur).
- **ToolsGrid.vue** — vrais liens/contenus pour iSuite, Pennylane et My Silae (URL, description, logo). Cards à deux zones : bannière logo flouté en fond (couleur primaire) + badge blanc net par-dessus, puis description + bouton "Accéder à...". Logo My Silae en SVG recoloré `#003548`. Rendu responsive : grille 3→2 colonnes sous 900px → 1 colonne centrée sous 600px, badge/icône réduits sous 480px.

## Bugs récurrents trouvés pendant le chantier responsive

- **Titres en pill avec `white-space: nowrap`** : très répandu sur le site (bannières "Culture & ambiance", "Profils recherchés", "Nos chiffres clés", "Notre histoire", "Ce qui nous définit", "Nos savoir-faire"...). À 40px de police, certains débordent largement la largeur de l'écran en mobile. Correctif systématique : réduction de la taille de police par palier (768px / 480px).
- **Frises "timeline" en grille à colonnes fixes** (`RecruitmentProcessSection`, `ProcessSection` x2) : illisibles en dessous d'environ 900px (5 colonnes de ~60-70px de large). Converties en liste verticale avec une ligne + des points alignés à gauche, en réordonnant le contenu (titre → durée → description) via `order` flex plutôt qu'en réécrivant le DOM.
- **Hauteurs fixes calculées pour un contenu lorem ipsum court** : en remplaçant le faux texte par du vrai contenu plus long, plusieurs sections ont vu leur texte chevaucher la ligne de la frise ou le titre de section. Toujours vérifier que les `height`/`padding` fixes ont assez de marge une fois le vrai contenu en place.
- **`AppNavbar.vue` sans aucun responsive** : probablement la cause de la plupart des débordements horizontaux constatés sur les captures d'écran mobile pendant toute la session, corrigé en dernier (branche `mobile-menu-footer`).

## Plugins

- **reveal.client.ts** *(nouveau, `app/plugins/`)* — directive `v-reveal` (valeurs `'up' | 'left' | 'right'`) basée sur `IntersectionObserver` : ajoute une classe `reveal--visible` au premier passage dans le viewport pour déclencher un slide-in + fade (classes `.reveal*` définies dans `assets/css/variables.css`). Utilisée pour l'instant uniquement sur `HistorySection.vue` et `PillarsSection.vue` (qui-sommes-nous).

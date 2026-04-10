// ════════════════════════════════════════════════════
// PROJECT TEMPLATES — phases détaillées par type
// ════════════════════════════════════════════════════
const PROJECT_TYPES = {
  web: {
    label: "Projet Web",
    icon: "🌐",
    color: "#2980b9",
    phases: [
      {
        name: "Cadrage",
        key: "framing",
        desc: "Définir les objectifs, les parties prenantes, les contraintes et le périmètre du projet web.",
        tasks: [
          {
            label: "Définir l'objectif principal du site",
            sub: "Vitrine, e-commerce, SaaS, blog, portail…",
          },
          {
            label: "Identifier les parties prenantes",
            sub: "Client, équipe, prestataires, utilisateurs finaux",
          },
          {
            label: "Analyser les besoins et attentes",
            sub: "Entretiens, questionnaires, benchmark concurrents",
          },
          {
            label: "Définir les KPIs de succès",
            sub: "Trafic, conversions, temps de session…",
          },
          {
            label: "Établir le budget et planning macro",
            sub: "Enveloppe globale, jalons clés, date de livraison",
          },
          {
            label: "Rédiger le brief projet",
            sub: "Document de référence signé par toutes les parties",
          },
        ],
        questions: [
          "Quel est l'objectif du site ?",
          "Qui sont les utilisateurs cibles ?",
          "Quel est le budget prévu ?",
          "Quelle est la deadline ?",
        ],
      },
      {
        name: "Architecture",
        key: "archi",
        desc: "Concevoir la structure technique et fonctionnelle du projet avant tout développement.",
        tasks: [
          {
            label: "Définir la stack technique",
            sub: "Framework, CMS, hébergement, base de données",
          },
          {
            label: "Cartographier l'arborescence du site",
            sub: "Plan de site, niveaux de navigation, URLs",
          },
          {
            label: "Identifier les intégrations tierces",
            sub: "API, outils marketing, CRM, analytics",
          },
          {
            label: "Évaluer les exigences SEO techniques",
            sub: "Performance, structure, balisage sémantique",
          },
          {
            label: "Choisir le système de design",
            sub: "Design system existant ou à créer, composants",
          },
          {
            label: "Rédiger le document d'architecture",
            sub: "Schémas, diagrammes, décisions techniques justifiées",
          },
        ],
        questions: [
          "Quelle stack technique avez-vous choisie ?",
          "Avez-vous un design system existant ?",
          "Quelles intégrations sont nécessaires ?",
        ],
      },
      {
        name: "Design UI/UX",
        key: "design",
        desc: "Concevoir l'expérience utilisateur et l'interface visuelle du produit.",
        tasks: [
          {
            label: "Créer les wireframes des pages clés",
            sub: "Accueil, listing, fiche produit, contact…",
          },
          {
            label: "Définir la charte graphique",
            sub: "Couleurs, typographies, iconographie, ton visuel",
          },
          {
            label: "Concevoir les maquettes haute-fidélité",
            sub: "Desktop + Mobile, états actifs, hover, erreurs",
          },
          {
            label: "Valider les parcours utilisateurs",
            sub: "User flows, arbre de décision, tests utilisateurs",
          },
          {
            label: "Préparer le prototype interactif",
            sub: "Figma, Sketch, XD — prototype navigable",
          },
          {
            label: "Recueillir les validations client",
            sub: "Retours, itérations, validation finale signée",
          },
        ],
        questions: [
          "Avez-vous des références visuelles ?",
          "Y a-t-il une charte existante ?",
          "Combien de pages principales ?",
        ],
      },
      {
        name: "Développement",
        key: "dev",
        desc: "Intégration et développement front-end / back-end du projet.",
        tasks: [
          {
            label: "Configurer l'environnement de développement",
            sub: "Repo Git, CI/CD, environnements dev/staging/prod",
          },
          {
            label: "Développer les composants front-end",
            sub: "Intégration HTML/CSS/JS, responsive, accessibilité",
          },
          {
            label: "Développer le back-end et APIs",
            sub: "Logique métier, endpoints, base de données",
          },
          {
            label: "Intégrer les services tiers",
            sub: "Analytics, paiement, CRM, newsletter, chat…",
          },
          {
            label: "Mettre en place les contenus",
            sub: "Import, rédaction, médias, traductions",
          },
          {
            label: "Revue de code et optimisation",
            sub: "Performance, sécurité, bonnes pratiques",
          },
        ],
        questions: [
          "Le développement est-il en interne ou externalisé ?",
          "Utilisez-vous des sprints Agile ?",
          "Avez-vous une équipe QA dédiée ?",
        ],
      },
      {
        name: "Tests & QA",
        key: "qa",
        desc: "Valider la qualité, les performances et la compatibilité avant la mise en ligne.",
        tasks: [
          {
            label: "Tester la compatibilité navigateurs",
            sub: "Chrome, Firefox, Safari, Edge — Desktop & Mobile",
          },
          {
            label: "Tests de performance",
            sub: "Core Web Vitals, LCP, FID, CLS — Lighthouse score",
          },
          {
            label: "Tests fonctionnels complets",
            sub: "Formulaires, paiements, parcours utilisateur, erreurs",
          },
          {
            label: "Tests de sécurité",
            sub: "HTTPS, injections, données sensibles, RGPD",
          },
          {
            label: "Recette client",
            sub: "Session de validation avec le client, liste des retours",
          },
          {
            label: "Correction des bugs et retours",
            sub: "Priorisation, correction, nouveau cycle de tests",
          },
        ],
        questions: [
          "Avez-vous une checklist de tests ?",
          "Utilisez-vous des outils automatisés ?",
          "Qui réalise la recette client ?",
        ],
      },
      {
        name: "Lancement",
        key: "launch",
        desc: "Mise en ligne, communication et suivi post-lancement.",
        tasks: [
          {
            label: "Configurer l'hébergement et le domaine",
            sub: "DNS, SSL, redirections, CDN",
          },
          {
            label: "Déployer en production",
            sub: "Processus de déploiement, rollback plan",
          },
          {
            label: "Configurer le monitoring",
            sub: "Uptime, alertes, error tracking (Sentry, Datadog)",
          },
          {
            label: "Communiquer le lancement",
            sub: "Email, réseaux sociaux, presse, partenaires",
          },
          {
            label: "Former les équipes",
            sub: "Back-office, contenu, support client",
          },
          {
            label: "Plan de maintenance et roadmap",
            sub: "Mises à jour, évolutions, backlog v2",
          },
        ],
        questions: [
          "Avez-vous planifié la maintenance ?",
          "Qui gère le contenu post-lancement ?",
          "Avez-vous un plan de communication ?",
        ],
      },
    ],
  },
  mobile: {
    label: "App Mobile",
    icon: "📱",
    color: "#8e44ad",
    phases: [
      {
        name: "Découverte",
        key: "discovery",
        desc: "Comprendre le marché, les utilisateurs et valider le concept de l'application.",
        tasks: [
          {
            label: "Étude de marché et analyse concurrentielle",
            sub: "App Store, benchmarks, positionnement",
          },
          {
            label: "Définir les personas utilisateurs",
            sub: "Profils, besoins, points de friction, jobs-to-be-done",
          },
          {
            label: "Valider la proposition de valeur",
            sub: "Quoi de unique ? Pourquoi maintenant ?",
          },
          {
            label: "Définir le MVP",
            sub: "Features essentielles, ce qu'on laisse pour v2",
          },
          {
            label: "Choisir la stratégie de plateforme",
            sub: "iOS only, Android, cross-platform (RN/Flutter)",
          },
          {
            label: "Estimer le budget et la roadmap",
            sub: "Développement, design, tests, ASO, marketing",
          },
        ],
        questions: [
          "Native ou cross-platform ?",
          "Quel est le modèle de revenu ?",
          "iOS ou Android en priorité ?",
        ],
      },
      {
        name: "UX Design",
        key: "ux",
        desc: "Définir les flux, l'architecture de l'information et les interactions.",
        tasks: [
          {
            label: "Cartographier les user flows",
            sub: "Onboarding, core loop, notifications, offboarding",
          },
          {
            label: "Concevoir les wireframes",
            sub: "Basse fidélité, validation des flows avant design",
          },
          {
            label: "Définir le design system mobile",
            sub: "HIG (iOS) ou Material Design (Android), tokens",
          },
          {
            label: "Prototyper les interactions clés",
            sub: "Gestes, transitions, animations, haptics",
          },
          {
            label: "Sessions de tests utilisateurs",
            sub: "Usability testing, eye tracking, A/B prototypes",
          },
          {
            label: "Documenter les specs UX",
            sub: "Handoff design-développement (Figma, Zeplin)",
          },
        ],
        questions: [
          "Avez-vous déjà des utilisateurs tests ?",
          "Quel est le parcours d'onboarding prévu ?",
        ],
      },
      {
        name: "Développement",
        key: "dev",
        desc: "Construction technique de l'application.",
        tasks: [
          {
            label: "Setup du projet et architecture technique",
            sub: "Boilerplate, navigation, state management",
          },
          {
            label: "Développer les features du MVP",
            sub: "Écran par écran, composants réutilisables",
          },
          {
            label: "Intégrer les APIs et back-end",
            sub: "REST/GraphQL, auth, push notifications",
          },
          {
            label: "Gestion de l'état et persistence",
            sub: "Redux, Zustand, SQLite, Realm, AsyncStorage",
          },
          {
            label: "Optimisation des performances",
            sub: "FPS, mémoire, taille du bundle, lazy loading",
          },
          {
            label: "Tests unitaires et d'intégration",
            sub: "Jest, Detox, XCTest, Espresso",
          },
        ],
        questions: ["Quel est le niveau de couverture de tests requis ?"],
      },
      {
        name: "Bêta & Tests",
        key: "beta",
        desc: "Tester l'application sur des appareils réels avec de vrais utilisateurs.",
        tasks: [
          {
            label: "Distribution bêta (TestFlight / Firebase)",
            sub: "Invitations testeurs, builds signés",
          },
          {
            label: "Collecter les retours utilisateurs",
            sub: "In-app feedback, interviews, analytics",
          },
          {
            label: "Corriger les bugs critiques",
            sub: "Crashs, blocages, régressions",
          },
          {
            label: "Tests de performance sur appareils réels",
            sub: "Anciens appareils, connexions lentes, offline",
          },
          {
            label: "Préparer les assets App Store",
            sub: "Screenshots, preview vidéo, icône, description",
          },
          {
            label: "Audit de sécurité et confidentialité",
            sub: "RGPD, permissions, chiffrement, privacy manifest",
          },
        ],
        questions: ["Combien de bêta-testeurs prévoyez-vous ?"],
      },
      {
        name: "Publication",
        key: "publish",
        desc: "Soumettre et publier l'application sur les stores.",
        tasks: [
          {
            label: "Préparer la soumission App Store / Play Store",
            sub: "Guidelines Apple/Google, review checklist",
          },
          {
            label: "Optimiser l'ASO",
            sub: "Titre, mots-clés, description, visuels",
          },
          {
            label: "Configurer l'analytique",
            sub: "Firebase, Mixpanel, Amplitude — events clés",
          },
          {
            label: "Stratégie de lancement",
            sub: "PR, social, Product Hunt, influenceurs",
          },
          {
            label: "Plan de support et mise à jour",
            sub: "Hotfixes, itérations hebdo, changelog",
          },
          {
            label: "Mesurer les KPIs post-lancement",
            sub: "Installs, rétention, NPS, reviews",
          },
        ],
        questions: ["Avez-vous planifié une campagne de lancement ?"],
      },
    ],
  },
  marketing: {
    label: "Campagne Marketing",
    icon: "📣",
    color: "#e67e22",
    phases: [
      {
        name: "Stratégie",
        key: "strategy",
        desc: "Définir les objectifs, la cible et le positionnement de la campagne.",
        tasks: [
          {
            label: "Définir les objectifs SMART",
            sub: "Notoriété, leads, conversions, fidélisation",
          },
          {
            label: "Analyser la cible (ICP)",
            sub: "Démographie, psychographie, canaux préférés",
          },
          {
            label: "Définir le message clé et la promesse",
            sub: "USP, tonalité, angle éditorial",
          },
          {
            label: "Analyser la concurrence",
            sub: "Benchmark messages, visuels, canaux",
          },
          {
            label: "Choisir les canaux de diffusion",
            sub: "SEO, SEA, social ads, email, influence, PR",
          },
          {
            label: "Allouer le budget par canal",
            sub: "ROI estimé, priorités, flexibilité",
          },
        ],
        questions: [
          "Quel est l'objectif principal ?",
          "Quel budget total ?",
          "Quelle durée de campagne ?",
        ],
      },
      {
        name: "Création",
        key: "creation",
        desc: "Produire tous les contenus et assets de la campagne.",
        tasks: [
          {
            label: "Rédiger le plan de contenu",
            sub: "Calendrier éditorial, formats, sujets, fréquence",
          },
          {
            label: "Créer les assets visuels",
            sub: "Vidéos, photos, infographies, banners, stories",
          },
          {
            label: "Rédiger les copies publicitaires",
            sub: "Headlines, descriptions, CTA, landing pages",
          },
          {
            label: "Préparer les emails et séquences",
            sub: "Welcome, nurturing, promo, abandon panier",
          },
          {
            label: "Valider la conformité légale",
            sub: "Mentions obligatoires, RGPD, droits d'image",
          },
          {
            label: "Validation interne et brief créatif",
            sub: "Revue, corrections, approbation finale",
          },
        ],
        questions: [
          "Avez-vous une équipe créative en interne ?",
          "Faites-vous appel à des freelances ?",
        ],
      },
      {
        name: "Mise en place",
        key: "setup",
        desc: "Configurer tous les outils, pixels et tracking avant le lancement.",
        tasks: [
          {
            label: "Configurer le tracking (GA4, Pixel, GTM)",
            sub: "Events, conversions, audiences, attribution",
          },
          {
            label: "Paramétrer les campagnes publicitaires",
            sub: "Ciblages, enchères, placements, budgets",
          },
          {
            label: "Préparer les landing pages",
            sub: "A/B tests, formulaires, confirmation",
          },
          {
            label: "Configurer les séquences email / automation",
            sub: "Triggers, segments, personnalisation",
          },
          {
            label: "Briefer les partenaires et influenceurs",
            sub: "Contrats, briefs créatifs, calendrier",
          },
          {
            label: "Plan B et gestion de crise",
            sub: "Bad buzz, budget overflow, contenu sensible",
          },
        ],
        questions: [
          "Utilisez-vous un CRM ?",
          "Avez-vous des audiences de remarketing ?",
        ],
      },
      {
        name: "Lancement",
        key: "launch",
        desc: "Lancer la campagne et assurer le suivi quotidien.",
        tasks: [
          {
            label: "Lancer les campagnes selon le calendrier",
            sub: "Checklist go-live, vérifications de dernière minute",
          },
          {
            label: "Monitoring quotidien des KPIs",
            sub: "CPC, CPM, CTR, CPA, ROAS",
          },
          {
            label: "Optimiser les campagnes en continu",
            sub: "Pauses, ajustements enchères, split tests",
          },
          {
            label: "Animer les réseaux sociaux",
            sub: "Publications, stories, réponses aux commentaires",
          },
          {
            label: "Reporting hebdomadaire",
            sub: "Dashboard, insights, recommandations",
          },
          {
            label: "Ajuster le budget selon les performances",
            sub: "Réallocation vers les canaux performants",
          },
        ],
        questions: [
          "Qui gère le monitoring quotidien ?",
          "Quels outils de reporting utilisez-vous ?",
        ],
      },
      {
        name: "Analyse",
        key: "analysis",
        desc: "Mesurer les résultats et tirer les enseignements pour les prochaines campagnes.",
        tasks: [
          {
            label: "Consolider les données post-campagne",
            sub: "Tous canaux, attribution multi-touch",
          },
          {
            label: "Analyser le ROI global",
            sub: "Coût par lead, coût par acquisition, LTV",
          },
          {
            label: "Identifier les insights clés",
            sub: "Ce qui a fonctionné, ce qui a échoué, pourquoi",
          },
          {
            label: "Préparer le rapport de synthèse",
            sub: "Executive summary, recommandations, next steps",
          },
          {
            label: "Capitaliser sur les learnings",
            sub: "Base de connaissances, A/B test winners",
          },
          {
            label: "Planifier la prochaine itération",
            sub: "Roadmap éditoriale, calendrier, budget",
          },
        ],
        questions: ["Comment mesurez-vous le succès de la campagne ?"],
      },
    ],
  },
  event: {
    label: "Événement",
    icon: "🎯",
    color: "#16a085",
    phases: [
      {
        name: "Concept",
        key: "concept",
        desc: "Définir le concept, les objectifs et les grands axes de l'événement.",
        tasks: [
          {
            label: "Définir les objectifs de l'événement",
            sub: "Notoriété, networking, ventes, formation, célébration",
          },
          {
            label: "Déterminer le format",
            sub: "Conférence, séminaire, soirée, salon, webinaire, hybride",
          },
          {
            label: "Estimer la jauge et le profil des participants",
            sub: "Nombre, secteur, niveau, géographie",
          },
          {
            label: "Choisir la date et le fuseau horaire",
            sub: "Concurrences, disponibilités, saisonnalité",
          },
          {
            label: "Allouer le budget global",
            sub: "Lieu, traiteur, technique, communication, speakers",
          },
          {
            label: "Constituer l'équipe projet",
            sub: "Chef de projet, communication, logistique, accueil",
          },
        ],
        questions: [
          "Format présentiel ou virtuel ?",
          "Quel est le thème central ?",
          "Nombre de participants attendus ?",
        ],
      },
      {
        name: "Logistique",
        key: "logistics",
        desc: "Organiser tous les aspects pratiques de l'événement.",
        tasks: [
          {
            label: "Trouver et réserver le lieu",
            sub: "Capacité, accessibilité, équipements, backup plan",
          },
          {
            label: "Sélectionner les prestataires",
            sub: "Traiteur, AV technique, sécurité, décoration",
          },
          {
            label: "Planifier le programme détaillé",
            sub: "Timing, sessions, pauses, transitions",
          },
          {
            label: "Gérer les invitations et inscriptions",
            sub: "Plateforme billetterie, confirmation, relances",
          },
          {
            label: "Organiser les transports et hébergements",
            sub: "Navettes, hôtels partenaires, plan d'accès",
          },
          {
            label: "Préparer le plan B (risques)",
            sub: "Météo, no-show speakers, problèmes techniques",
          },
        ],
        questions: [
          "Avez-vous déjà un lieu en tête ?",
          "Y a-t-il des VIPs ou des speakers invités ?",
        ],
      },
      {
        name: "Programme",
        key: "program",
        desc: "Construire le contenu et le programme de l'événement.",
        tasks: [
          {
            label: "Confirmer les intervenants et speakers",
            sub: "Contrats, briefs, slides, besoins techniques",
          },
          {
            label: "Concevoir le programme détaillé",
            sub: "Horaires, transitions, modérateurs, Q&A",
          },
          {
            label: "Préparer les supports de présentation",
            sub: "Template slides, charte, révisions",
          },
          {
            label: "Prévoir les animations et networking",
            sub: "Icebreakers, activités, speed networking",
          },
          {
            label: "Coordonner les sponsors et partenaires",
            sub: "Contreparties, visibilité, prises de parole",
          },
          {
            label: "Répétition générale",
            sub: "Filage technique, timings, gestion des imprévus",
          },
        ],
        questions: [
          "Combien de speakers êtes-vous en train de recruter ?",
          "Avez-vous des sponsors ?",
        ],
      },
      {
        name: "Communication",
        key: "comms",
        desc: "Promouvoir l'événement et gérer la relation avec les participants.",
        tasks: [
          {
            label: "Créer l'identité visuelle de l'événement",
            sub: "Logo, couleurs, charte graphique, assets",
          },
          {
            label: "Lancer le site ou la page événement",
            sub: "Programme, inscription, intervenants, FAQ",
          },
          {
            label: "Déployer la stratégie de communication",
            sub: "Email, social, PR, partenaires, ads",
          },
          {
            label: "Gérer les inscriptions et la billetterie",
            sub: "Confirmations, badges, accès spéciaux",
          },
          {
            label: "Animer les réseaux sociaux avant l'événement",
            sub: "Teasing, compte à rebours, #hashtag",
          },
          {
            label: "Préparer les communications jour J",
            sub: "Live tweets, stories, photos, vidéos",
          },
        ],
        questions: ["Quel est le hashtag officiel de l'événement ?"],
      },
      {
        name: "Jour J",
        key: "dayof",
        desc: "Exécuter l'événement avec excellence.",
        tasks: [
          {
            label: "Briefing équipe le matin",
            sub: "Rôles, planning, procédures d'urgence",
          },
          {
            label: "Installation et check technique",
            sub: "Son, lumière, projecteurs, wifi, signalétique",
          },
          {
            label: "Accueil et enregistrement des participants",
            sub: "Badges, sacs, plan de salle",
          },
          {
            label: "Animation et gestion du temps",
            sub: "Respect des horaires, transitions fluides",
          },
          {
            label: "Couverture live (photos, réseaux)",
            sub: "Photographe, social media manager",
          },
          {
            label: "Collecte de feedbacks en temps réel",
            sub: "Sondage in-app, échanges, observations",
          },
        ],
        questions: ["Avez-vous un photographe/vidéaste prévu ?"],
      },
      {
        name: "Post-événement",
        key: "post",
        desc: "Capitaliser sur l'événement et fidéliser les participants.",
        tasks: [
          {
            label: "Envoyer les emails de suivi (merci, replay)",
            sub: "Dans les 48h, lien vers les ressources",
          },
          {
            label: "Publier les contenus post-événement",
            sub: "Replays, photos, résumés, key quotes",
          },
          {
            label: "Analyser les KPIs",
            sub: "Présence, NPS, reach social, leads générés",
          },
          {
            label: "Débrief équipe",
            sub: "Ce qui a bien marché, axes d'amélioration",
          },
          {
            label: "Clôturer les contrats prestataires",
            sub: "Factures, évaluations, recommandations",
          },
          {
            label: "Planifier l'édition suivante",
            sub: "Learnings, date, budget, évolutions",
          },
        ],
        questions: ["Prévoyez-vous de rééditer cet événement ?"],
      },
    ],
  },
  product: {
    label: "Produit",
    icon: "📦",
    color: "#2c3e50",
    phases: [
      {
        name: "Idéation",
        key: "idea",
        desc: "Explorer, valider et affiner l'idée produit.",
        tasks: [
          {
            label: "Définir le problème à résoudre",
            sub: "Problem statement, pain points, jobs-to-be-done",
          },
          {
            label: "Explorer les solutions possibles",
            sub: "Brainstorming, design thinking, inspiration secteur",
          },
          {
            label: "Valider les hypothèses marché",
            sub: "Interviews utilisateurs, sondages, landing page test",
          },
          {
            label: "Analyser la faisabilité technique",
            sub: "Contraintes, time-to-market, compétences nécessaires",
          },
          {
            label: "Définir le business model",
            sub: "Monétisation, pricing, canal de distribution",
          },
          {
            label: "Constituer l'équipe produit",
            sub: "PM, designers, devs, marketing, data",
          },
        ],
        questions: [
          "Quel problème résolvez-vous ?",
          "Pour qui ?",
          "Avez-vous déjà interviewé des utilisateurs ?",
        ],
      },
      {
        name: "Recherche",
        key: "research",
        desc: "Comprendre en profondeur les utilisateurs et le marché.",
        tasks: [
          {
            label: "Conduire des interviews utilisateurs",
            sub: "10-20 entretiens qualitatifs, transcriptions",
          },
          {
            label: "Analyser les données quantitatives",
            sub: "Analytics, surveys, NPS existant",
          },
          {
            label: "Cartographier le parcours utilisateur actuel",
            sub: "As-is journey map, points de frustration",
          },
          {
            label: "Benchmark concurrents et alternatives",
            sub: "Features, prix, forces, faiblesses",
          },
          {
            label: "Rédiger les insights clés",
            sub: "Patterns, verbatims, priorisation des problèmes",
          },
          {
            label: "Présenter les findings à l'équipe",
            sub: "Research report, recommendations",
          },
        ],
        questions: ["Avez-vous accès à des utilisateurs existants ?"],
      },
      {
        name: "Conception",
        key: "design",
        desc: "Définir et concevoir la solution produit.",
        tasks: [
          {
            label: "Rédiger les user stories",
            sub: "Backlog priorisé, critères d'acceptation",
          },
          {
            label: "Définir les specs fonctionnelles",
            sub: "PRD, flowcharts, règles métier",
          },
          {
            label: "Concevoir les wireframes et prototypes",
            sub: "Lo-fi → hi-fi, itérations, tests",
          },
          {
            label: "Valider les specs avec l'équipe tech",
            sub: "Estimation, faisabilité, dette technique",
          },
          {
            label: "Planifier les sprints",
            sub: "Roadmap trimestrielle, OKRs, milestones",
          },
          {
            label: "Créer le design system",
            sub: "Tokens, composants, documentation",
          },
        ],
        questions: [
          "Travaillez-vous en Agile/Scrum ?",
          "Quelle est la durée des sprints ?",
        ],
      },
      {
        name: "Développement",
        key: "dev",
        desc: "Construire le produit itération après itération.",
        tasks: [
          {
            label: "Sprint planning et rituels Agile",
            sub: "Daily, rétro, démo, refinement",
          },
          {
            label: "Développer et livrer les features",
            sub: "Feature flags, déploiements continus",
          },
          {
            label: "Tests et assurance qualité",
            sub: "Unit tests, integration, E2E, usability",
          },
          {
            label: "Collecter le feedback utilisateurs early",
            sub: "Alpha, bêta, dog-fooding interne",
          },
          {
            label: "Mesurer les métriques produit",
            sub: "Activation, rétention, engagement, NPS",
          },
          {
            label: "Itérer selon les données",
            sub: "Pivot ou persévère, kill features, double down",
          },
        ],
        questions: [
          "Avez-vous des utilisateurs bêta ?",
          "Quels sont vos OKRs actuels ?",
        ],
      },
      {
        name: "Lancement",
        key: "launch",
        desc: "Lancer le produit et piloter la croissance.",
        tasks: [
          {
            label: "Préparer le go-to-market",
            sub: "Positionnement, messaging, canaux, calendrier",
          },
          {
            label: "Former les équipes Sales et Support",
            sub: "Playbooks, FAQ, démo, certification",
          },
          {
            label: "Lancer en soft launch / limited release",
            sub: "Segment cible, retours rapides",
          },
          {
            label: "Déployer la stratégie marketing",
            sub: "Content, PR, social, ads, Product Hunt",
          },
          {
            label: "Monitorer les KPIs de lancement",
            sub: "Acquisitions, activation, rétention J1/J7/J30",
          },
          {
            label: "Plan de croissance post-lancement",
            sub: "Referral, SEO, partenariats, expansion",
          },
        ],
        questions: [
          "Avez-vous un plan de referral ?",
          "Qui gère l'onboarding des nouveaux users ?",
        ],
      },
    ],
  },
  construction: {
    label: "Construction",
    icon: "🏗",
    color: "#7f8c8d",
    phases: [
      {
        name: "Faisabilité",
        key: "feasibility",
        desc: "Étudier la viabilité technique, juridique et financière du projet.",
        tasks: [
          {
            label: "Définir le programme et les besoins",
            sub: "Surface, usages, capacité, accessibilité PMR",
          },
          {
            label: "Étude de sol et sondages",
            sub: "Géotechnique, pollution, contraintes du terrain",
          },
          {
            label: "Analyse réglementaire et urbanistique",
            sub: "PLU, servitudes, droits à construire, ABF",
          },
          {
            label: "Estimation financière préliminaire",
            sub: "Coût de construction, honoraires, taxes",
          },
          {
            label: "Identifier les parties prenantes",
            sub: "Maîtrise d'ouvrage, utilisateurs, collectivités",
          },
          {
            label: "Lancer la consultation des architectes",
            sub: "Concours, gré à gré, contrat de maîtrise d'œuvre",
          },
        ],
        questions: [
          "S'agit-il d'une construction neuve ou d'une rénovation ?",
          "Avez-vous le terrain ?",
          "Quel est le budget total ?",
        ],
      },
      {
        name: "Conception",
        key: "design",
        desc: "Phase de conception architecturale et technique (ESQ → APS → APD → PRO).",
        tasks: [
          {
            label: "Esquisse (ESQ) — concept architectural",
            sub: "Plans de masse, volumétrie, ambiances",
          },
          {
            label: "Avant-Projet Sommaire (APS)",
            sub: "Plans à 1/200, coupes, façades, notice",
          },
          {
            label: "Avant-Projet Définitif (APD)",
            sub: "Plans à 1/100, systèmes techniques, budget APS",
          },
          {
            label: "Dossier de permis de construire (PC)",
            sub: "CERFA, pièces graphiques, dépôt mairie",
          },
          {
            label: "Études de Projet (PRO)",
            sub: "Plans à 1/50, détails, CCTP, DPGF",
          },
          {
            label: "Synthèse tous corps d'état",
            sub: "Coordination structure / MEP / architecture",
          },
        ],
        questions: [
          "Avez-vous déjà un architecte mandaté ?",
          "Le permis de construire est-il obtenu ?",
        ],
      },
      {
        name: "Consultation",
        key: "tender",
        desc: "Sélectionner les entreprises et contractualiser.",
        tasks: [
          {
            label: "Rédiger le Dossier de Consultation des Entreprises (DCE)",
            sub: "CCTP, DPGF, planning, pièces contractuelles",
          },
          {
            label: "Lancer les appels d'offres par lot",
            sub: "Gros-œuvre, charpente, façades, MEP, second-œuvre",
          },
          {
            label: "Analyser les offres (analyse technique + financière)",
            sub: "Mémoire technique, prix, références",
          },
          {
            label: "Négocier et contractualiser",
            sub: "Marchés de travaux, sous-traitants, assurances",
          },
          {
            label: "Mise au point des marchés",
            sub: "Plans d'exécution (EXE), VISA de la maîtrise d'œuvre",
          },
          {
            label: "Préparation du chantier (OPC)",
            sub: "Planning général, installations, réunion démarrage",
          },
        ],
        questions: [
          "Procédure de marché public ou privé ?",
          "Combien de lots prévoyez-vous ?",
        ],
      },
      {
        name: "Chantier",
        key: "works",
        desc: "Suivi et pilotage de l'exécution des travaux.",
        tasks: [
          {
            label: "Réunions de chantier hebdomadaires",
            sub: "Compte-rendus, levées de réserves, avenants",
          },
          {
            label: "Contrôle de l'avancement et du planning",
            sub: "S-curves, chemins critiques, alertes retard",
          },
          {
            label: "Gestion des interfaces entre corps d'état",
            sub: "Coordination, réservations, calfeutrements",
          },
          {
            label: "Contrôle budgétaire et gestion des avenants",
            sub: "Décomptes mensuels, situations de travaux",
          },
          {
            label: "Contrôle qualité (OPC)",
            sub: "Fiches de contrôle, essais, conformité DTU",
          },
          {
            label: "Gestion HSE et sécurité chantier",
            sub: "PPSPS, PGCSPS, visites CSPS, incidents",
          },
        ],
        questions: [
          "Avez-vous un coordinateur SPS ?",
          "Y a-t-il des contraintes de voisinage ?",
        ],
      },
      {
        name: "Livraison",
        key: "delivery",
        desc: "Réceptionner les travaux et clôturer le chantier.",
        tasks: [
          {
            label: "Opérations Préalables à la Réception (OPR)",
            sub: "Visite contradictoire, liste des réserves",
          },
          {
            label: "Levée des réserves",
            sub: "Délais, responsabilités, vérification",
          },
          {
            label: "Réception officielle des travaux (PV)",
            sub: "Avec ou sans réserves, date de départ GPA",
          },
          {
            label: "Dossier des Ouvrages Exécutés (DOE)",
            sub: "Plans conformes, notices, garanties, PV essais",
          },
          {
            label: "Formation des équipes exploitation",
            sub: "Équipements techniques, GTB, maintenance",
          },
          {
            label: "Garantie de Parfait Achèvement (GPA)",
            sub: "Suivi année 1, levée des désordres apparus",
          },
        ],
        questions: [
          "Avez-vous planifié le DOE ?",
          "Qui gère la maintenance en exploitation ?",
        ],
      },
    ],
  },
};

// ════════════════════════════════════════════════════
// APP STATE
// ════════════════════════════════════════════════════
const STORE_KEY = "archi_projects_v1";
let projects = JSON.parse(localStorage.getItem(STORE_KEY) || "[]");
let currentProject = null;
let currentPhaseIdx = 0;
let chatBusy = false;
let convState = "idle"; // idle | naming_project

function saveProjects() {
  localStorage.setItem(STORE_KEY, JSON.stringify(projects));
}

function h(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// ════════════════════════════════════════════════════
// SIDEBAR RENDER
// ════════════════════════════════════════════════════
function renderSidebar() {
  const container = document.getElementById("projItems");
  if (projects.length === 0) {
    container.innerHTML = `<div style="font-family:'JetBrains Mono',monospace;font-size:11px;color:rgba(245,242,236,0.3);padding:12px;text-align:center">Aucun projet.<br>Commencez ci-dessous.</div>`;
    return;
  }
  container.innerHTML = projects
    .map((p, i) => {
      const type = PROJECT_TYPES[p.type];
      const totalTasks = p.phases
        ? p.phases.reduce((a, ph) => a + (ph.tasks ? ph.tasks.length : 0), 0)
        : 0;
      const doneTasks = p.phases
        ? p.phases.reduce(
            (a, ph) =>
              a + (ph.tasks ? ph.tasks.filter((t) => t.done).length : 0),
            0,
          )
        : 0;
      const pct =
        totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : 0;
      const isActive = currentProject && currentProject.id === p.id;
      return `<div class="proj-item ${isActive ? "active" : ""}" onclick="loadProject(${i})">
      <div class="proj-item-name">${h(p.name)}</div>
      <div class="proj-item-meta">
        <span class="proj-type-tag">${type ? type.icon + " " + type.label : p.type}</span>
        <span>${pct}%</span>
      </div>
      <div class="progress-mini"><div class="progress-mini-fill" style="width:${pct}%"></div></div>
    </div>`;
    })
    .join("");
}

// ════════════════════════════════════════════════════
// PROJECT LOADING & PHASE RENDER
// ════════════════════════════════════════════════════
function loadProject(idx) {
  currentProject = projects[idx];
  currentPhaseIdx = currentProject.currentPhase || 0;
  document.getElementById("welcomeState").style.display = "none";
  document.getElementById("contentArea").style.display = "grid";
  document.getElementById("phaseStrip").style.display = "flex";
  document.getElementById("headerProgress").style.display = "flex";
  renderSidebar();
  renderHeader();
  renderPhaseStrip();
  renderPhaseDetail();
  // Start chat for current project
  document.getElementById("chatMessages").innerHTML = "";
  setTimeout(() => aiChat(getPhaseIntroMessage()), 300);
}

function renderHeader() {
  const type = PROJECT_TYPES[currentProject.type];
  document.getElementById("headerProjName").textContent = currentProject.name;
  const ph = type.phases[currentPhaseIdx];
  document.getElementById("headerPhase").textContent =
    `Phase ${currentPhaseIdx + 1} / ${type.phases.length} — ${ph.name}`;
  updateProgress();
}

function updateProgress() {
  const p = currentProject;
  const totalTasks = p.phases.reduce((a, ph) => a + ph.tasks.length, 0);
  const doneTasks = p.phases.reduce(
    (a, ph) => a + ph.tasks.filter((t) => t.done).length,
    0,
  );
  const pct = totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : 0;
  document.getElementById("progressLabel").textContent = pct + "%";
  document.getElementById("progressFill").style.width = pct + "%";
}

function renderPhaseStrip() {
  const type = PROJECT_TYPES[currentProject.type];
  const strip = document.getElementById("phaseStrip");
  strip.innerHTML = type.phases
    .map((ph, i) => {
      const phaseData = currentProject.phases[i];
      const allDone = phaseData && phaseData.tasks.every((t) => t.done);
      const cls = i === currentPhaseIdx ? "active" : allDone ? "done" : "";
      return `<div class="phase-step ${cls}" onclick="switchPhase(${i})">
      <div class="phase-num">${allDone ? "✓" : i + 1}</div>
      ${ph.name}
    </div>`;
    })
    .join("");
}

function renderPhaseDetail() {
  const type = PROJECT_TYPES[currentProject.type];
  const ph = type.phases[currentPhaseIdx];
  const phData = currentProject.phases[currentPhaseIdx];
  const done = phData.tasks.filter((t) => t.done).length;

  document.getElementById("phaseDetail").innerHTML = `
    <div class="phase-detail-header">
      <div class="phase-detail-num">Phase ${currentPhaseIdx + 1} sur ${type.phases.length}</div>
      <div class="phase-detail-title">${h(ph.name)}</div>
      <div class="phase-detail-desc">${h(ph.desc)}</div>
    </div>
    <div class="checklist">
      <div class="checklist-title">${done}/${ph.tasks.length} tâches complétées</div>
      ${ph.tasks
        .map((task, ti) => {
          const tData = phData.tasks[ti] || {};
          const isDone = tData.done;
          const isSkipped = tData.skipped;
          const hasResponse = tData.notes && tData.notes.trim().length > 0;
          let statusHtml;
          if (isDone && !isSkipped) {
            statusHtml = `<span class="check-item-status done">✓ Validée</span>`;
          } else if (isSkipped) {
            statusHtml = `<span class="check-item-status skipped">⏭ Passée</span>`;
          } else {
            statusHtml = `<span class="check-item-status pending">→</span>`;
          }
          return `<div class="check-item ${isDone ? "done" : ""}" onclick="openTaskPopup(${currentPhaseIdx}, ${ti})">
          <div class="check-label">${h(task.label)}</div>
          ${statusHtml}
        </div>`;
        })
        .join("")}
    </div>
    <div class="notes-block">
      <div class="notes-header">
        <span>Notes — Phase ${ph.name}</span>
        <span style="font-size:10px;opacity:0.5">sauvegarde auto</span>
      </div>
      <textarea class="notes-area" id="phaseNotes" placeholder="Ajoutez vos notes, décisions, observations pour cette phase…" oninput="saveNotes()">${phData.notes || ""}</textarea>
    </div>
  `;
}

function openTaskPopup(phaseIdx, taskIdx) {
  const type = PROJECT_TYPES[currentProject.type];
  const ph = type.phases[phaseIdx];
  const task = ph.tasks[taskIdx];
  const tData = currentProject.phases[phaseIdx].tasks[taskIdx] || {};
  const detail = getTaskDetail(currentProject.type, ph.key, taskIdx);
  const isDone = tData.done;
  const isSkipped = tData.skipped;
  const userResponse = tData.notes || "";
  const hasResponse = userResponse.trim().length > 0;

  let statusBadge = "";
  if (isDone && !isSkipped) {
    statusBadge = `<span style="display:inline-flex;align-items:center;gap:5px;background:rgba(39,174,96,0.1);color:var(--accent3);border-radius:20px;padding:3px 10px;font-size:11px;font-weight:600;font-family:'JetBrains Mono',monospace;margin-left:10px">✓ Validée</span>`;
  } else if (isSkipped) {
    statusBadge = `<span style="display:inline-flex;align-items:center;gap:5px;background:var(--surface2);color:var(--muted);border-radius:20px;padding:3px 10px;font-size:11px;font-weight:600;font-family:'JetBrains Mono',monospace;margin-left:10px">⏭ Passée</span>`;
  }

  // Response block
  let responseBlock = "";
  if (hasResponse) {
    responseBlock = `
      <div class="task-popup-block response">
        <div class="task-popup-block-label response">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          Votre réponse
        </div>
        <div class="task-popup-block-text" style="white-space:pre-wrap">${h(userResponse)}</div>
      </div>`;
  } else {
    responseBlock = `
      <div class="task-popup-block empty-response">
        <div class="task-popup-block-label livrable">✏ Réponse</div>
        <div class="task-popup-block-text italic">Aucune réponse enregistrée pour cette tâche.</div>
      </div>`;
  }

  // Footer buttons
  let footerBtns = "";
  if (isDone) {
    footerBtns = `
      <button class="tpf-btn reset" onclick="taskPopupReset(${phaseIdx},${taskIdx})">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-4.95"/></svg>
        Réinitialiser
      </button>
      <button class="tpf-btn cancel" onclick="closeTaskPopup()">Fermer</button>`;
  } else {
    footerBtns = `
      <button class="tpf-btn mark-done" onclick="taskPopupMarkDone(${phaseIdx},${taskIdx})">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        Marquer comme fait
      </button>
      <button class="tpf-btn cancel" onclick="closeTaskPopup()">Fermer</button>`;
  }

  document.getElementById("taskPopupContent").innerHTML = `
    <div class="task-popup-header">
      <div>
        <div class="task-popup-num">Tâche ${taskIdx + 1} sur ${ph.tasks.length} · Phase ${phaseIdx + 1}</div>
        <div class="task-popup-title">${h(task.label)}${statusBadge}</div>
      </div>
      <button class="task-popup-close" onclick="closeTaskPopup()">×</button>
    </div>
    <div class="task-popup-body">
      <div class="task-popup-block livrable">
        <div class="task-popup-block-label livrable">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
          Ce que cette tâche produit
        </div>
        <div class="task-popup-block-text">${detail.livrable}</div>
      </div>
      <div class="task-popup-block questions">
        <div class="task-popup-block-label questions">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          Questions auxquelles répondre
        </div>
        <div class="task-popup-block-text">${detail.questions}</div>
      </div>
      ${responseBlock}
    </div>
    <div class="task-popup-footer">${footerBtns}</div>
  `;

  document.getElementById("taskPopupOverlay").style.display = "flex";
  // Prevent body scroll
  document.body.style.overflow = "hidden";
}

function closeTaskPopup() {
  document.getElementById("taskPopupOverlay").style.display = "none";
  document.body.style.overflow = "";
}

function taskPopupMarkDone(phaseIdx, taskIdx) {
  currentProject.phases[phaseIdx].tasks[taskIdx].done = true;
  currentProject.phases[phaseIdx].tasks[taskIdx].skipped = false;
  saveProjects();
  renderPhaseStrip();
  renderPhaseDetail();
  updateProgress();
  renderSidebar();
  closeTaskPopup();
  const allDone = currentProject.phases[phaseIdx].tasks.every((t) => t.done);
  if (allDone && phaseIdx === currentPhaseIdx) {
    setTimeout(() => aiChat(getPhaseCompleteMessage(phaseIdx)), 500);
  }
}

function taskPopupReset(phaseIdx, taskIdx) {
  currentProject.phases[phaseIdx].tasks[taskIdx].done = false;
  currentProject.phases[phaseIdx].tasks[taskIdx].skipped = false;
  currentProject.phases[phaseIdx].tasks[taskIdx].notes = "";
  saveProjects();
  renderPhaseStrip();
  renderPhaseDetail();
  updateProgress();
  renderSidebar();
  // Re-open popup with fresh state
  openTaskPopup(phaseIdx, taskIdx);
}

function saveNotes() {
  const v = document.getElementById("phaseNotes").value;
  currentProject.phases[currentPhaseIdx].notes = v;
  saveProjects();
}

function switchPhase(idx) {
  currentPhaseIdx = idx;
  currentProject.currentPhase = idx;
  saveProjects();
  renderHeader();
  renderPhaseStrip();
  renderPhaseDetail();
  document.getElementById("chatMessages").innerHTML = "";
  setTimeout(() => aiChat(getPhaseIntroMessage()), 200);
}

// ════════════════════════════════════════════════════
// PROJECT CREATION FLOW
// ════════════════════════════════════════════════════
function selectProjectType(type) {
  const typeData = PROJECT_TYPES[type];
  document.getElementById("welcomeState").style.display = "none";

  // Create project shell
  const proj = {
    id: Date.now(),
    type,
    name: "",
    currentPhase: 0,
    phases: typeData.phases.map((ph) => ({
      key: ph.key,
      tasks: ph.tasks.map(() => ({ done: false })),
      notes: "",
    })),
    createdAt: new Date().toISOString(),
  };

  convState = "naming_project";
  window._pendingProject = proj;

  // Show chat + temp layout
  document.getElementById("contentArea").style.display = "grid";
  document.getElementById("phaseStrip").style.display = "none";
  document.getElementById("headerProgress").style.display = "none";
  document.getElementById("headerProjName").textContent =
    typeData.icon + " Nouveau " + typeData.label;
  document.getElementById("headerPhase").textContent = "Configuration initiale";
  document.getElementById("phaseDetail").innerHTML = `
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;text-align:center;padding:60px;gap:16px;color:var(--muted)">
      <div style="font-size:56px">${typeData.icon}</div>
      <div style="font-family:'Playfair Display',serif;font-size:24px;color:var(--ink)">Projet ${typeData.label}</div>
      <div style="font-size:13px;line-height:1.6;max-width:320px">${typeData.phases.length} phases détaillées · ${typeData.phases.reduce((a, p) => a + p.tasks.length, 0)} tâches · Suivi complet</div>
    </div>
  `;

  document.getElementById("chatMessages").innerHTML = "";
  setTimeout(
    () =>
      aiChat(
        `${typeData.icon} Parfait, lançons votre <strong>projet ${typeData.label}</strong> !<br><br>Commençons par le commencement : comment voulez-vous appeler ce projet ?`,
      ),
    400,
  );
}

function startNewProject() {
  currentProject = null;
  currentPhaseIdx = 0;
  document.getElementById("contentArea").style.display = "none";
  document.getElementById("phaseStrip").style.display = "none";
  document.getElementById("headerProgress").style.display = "none";
  document.getElementById("headerProjName").textContent = "Archi";
  document.getElementById("headerPhase").textContent =
    "Gestion de projet intelligente";
  document.getElementById("welcomeState").style.display = "flex";
  renderSidebar();
}

// ════════════════════════════════════════════════════
// AI MESSAGES
// ════════════════════════════════════════════════════
// ════════════════════════════════════════════════════
// CONVERSATIONAL TASK STATE
// ════════════════════════════════════════════════════
let activeTaskIdx = null; // which task is currently being discussed
let awaitingTaskInfo = false; // true when we expect the user to provide info for a task

// ── Per-task detailed descriptions: what it produces + questions to answer ──
const TASK_DETAILS = {
  web: {
    framing: [
      {
        livrable:
          "Une phrase claire qui résume pourquoi ce site existe et ce qu'il doit accomplir.",
        questions:
          "Quel problème ce site résout-il ? Pour qui exactement ? Quel est le résultat attendu pour l'utilisateur qui y arrive ?",
        exemple:
          "Ex : « Ce site e-commerce permet aux artisans locaux de vendre leurs produits à des particuliers, objectif 50 commandes/mois en 6 mois. »",
      },
      {
        livrable:
          "Une liste nominative de toutes les personnes impliquées, avec leur rôle et niveau de décision.",
        questions:
          "Qui commande ? Qui valide ? Qui va utiliser le site au quotidien ? Qui gère le contenu après le lancement ?",
        exemple:
          "Ex : « Client : Marie (décideuse), Paul (contenu). Équipe : Dev front, Dev back, Designer. Prestataire SEO externe. »",
      },
      {
        livrable:
          "Un résumé des attentes exprimées par les parties prenantes, et les points de friction identifiés.",
        questions:
          "Qu'est-ce que le client veut absolument ? Qu'est-ce qu'il veut éviter ? Y a-t-il des contraintes non-dites ?",
        exemple:
          "Ex : « Le client veut un site rapide et moderne. Il a eu une mauvaise expérience avec un agence avant. Il ne veut pas de slider en page d'accueil. »",
      },
      {
        livrable:
          "2 à 4 indicateurs mesurables qui permettront de dire si le site est un succès ou non.",
        questions:
          "Comment saurez-vous dans 6 mois que le site a réussi ? Quel chiffre précis ? Dans quel délai ?",
        exemple:
          "Ex : « KPI 1 : 1 000 visiteurs/mois à J+3 mois. KPI 2 : taux de conversion formulaire > 3%. KPI 3 : score Lighthouse > 90. »",
      },
      {
        livrable:
          "Un tableau budget par poste (design, dev, contenu, hébergement) + un planning avec jalons clés.",
        questions:
          "Quel est le budget total alloué ? Y a-t-il une date de livraison imposée ? Quelles sont les étapes intermédiaires attendues ?",
        exemple:
          "Ex : « Budget : 8 000 € — Design 2k, Dev 4k, Contenu 1k, SEO 1k. Livraison maquettes : S4. Recette : S10. Mise en ligne : S12. »",
      },
      {
        livrable:
          "Un document court (1-2 pages) signé par le client qui récapitule tout ce qui a été décidé en cadrage.",
        questions:
          "Avez-vous couché par écrit l'objectif, la cible, les KPIs, le budget et le planning ? Le client a-t-il validé formellement ?",
        exemple:
          "Ex : « Brief signé le 12/01 par Marie. Contient : objectif, personas, KPIs, périmètre, budget, planning, et liste des pages prévues. »",
      },
    ],
    archi: [
      {
        livrable:
          "La liste des technologies choisies pour le front, le back, la base de données et l'hébergement, avec la justification de chaque choix.",
        questions:
          "Quel framework front avez-vous choisi ? CMS ou développement sur mesure ? Quelle base de données ? Quel hébergeur ? Pourquoi ces choix ?",
        exemple:
          "Ex : « Next.js (équipe connait React) + Sanity CMS (client gère le contenu seul) + Vercel (déploiement simple). »",
      },
      {
        livrable:
          "Un schéma en arbre listant toutes les pages du site, leur niveau de navigation et leurs relations.",
        questions:
          "Combien de pages le site aura-t-il ? Quelles sont les rubriques principales ? Y a-t-il des pages dynamiques (blog, produits) ?",
        exemple:
          "Ex : « Accueil > Services (3 sous-pages) > Réalisations > Blog (articles) > Contact. Total : ~15 pages. »",
      },
      {
        livrable:
          "La liste de chaque service tiers intégré, avec son rôle précis et sa criticité pour le fonctionnement du site.",
        questions:
          "Y a-t-il un CRM, un outil emailing, un système de paiement, des analytics, un live chat ? Lesquels exactement ?",
        exemple:
          "Ex : « Google Analytics 4 (stats), Stripe (paiement — critique), Mailchimp (newsletter — non critique), Intercom (chat). »",
      },
      {
        livrable:
          "Une liste des exigences SEO techniques à respecter dès la conception (structure, performance, balisage).",
        questions:
          "Le SEO est-il un canal prioritaire ? Y a-t-il un audit existant à respecter ? Des mots-clés cibles ?",
        exemple:
          "Ex : « URLs propres, balises H1 uniques, sitemap XML, schema.org produits, LCP < 2.5s, pas de contenu dupliqué. »",
      },
      {
        livrable:
          "La décision sur le système de design : existence d'un DS existant, ou liste des composants à créer.",
        questions:
          "Y a-t-il déjà une charte graphique ou un design system ? Faut-il tout créer ? Quels composants UI seront réutilisés ?",
        exemple:
          "Ex : « Pas de DS existant. Créer : boutons (3 variantes), cards, formulaires, navigation, footer, hero section. »",
      },
      {
        livrable:
          "Un document écrit avec les schémas d'architecture, les décisions techniques et leurs justifications.",
        questions:
          "Avez-vous formalisé les choix techniques dans un document partageable ? Les décisions abandonnées sont-elles documentées ?",
        exemple:
          "Ex : « Doc Notion partagé avec client. Inclut : diagramme de flux, choix stack justifiés, décision rejetée (WordPress) et pourquoi. »",
      },
    ],
    design: [
      {
        livrable:
          "Des schémas basse fidélité (croquis ou wireframes numériques) pour chaque page clé, montrant la structure et la hiérarchie du contenu.",
        questions:
          "Quelles pages ont été maquettées en wireframe ? Avez-vous couvert les versions desktop et mobile ? Les parcours principaux sont-ils représentés ?",
        exemple:
          "Ex : « Wireframes Figma pour : Accueil, Page produit, Panier, Checkout, Contact. Desktop + Mobile. Validés en réunion client le 15/02. »",
      },
      {
        livrable:
          "Un document de charte graphique définissant les couleurs, polices, tailles, espaces, iconographie et ton visuel du projet.",
        questions:
          "Quelles sont les couleurs principales et secondaires ? Les polices choisies ? Y a-t-il une charte existante à respecter ?",
        exemple:
          "Ex : « Primaire : #1A1A2E. Accent : #E94560. Police : Syne (titres) + Inter (corps). Iconographie : Phosphor Icons. Ton : professionnel et moderne. »",
      },
      {
        livrable:
          "Des maquettes haute fidélité pour toutes les pages, incluant les états actifs, hover, erreurs et les versions mobile.",
        questions:
          "Toutes les pages ont-elles une maquette finalisée ? Les états formulaires, erreurs et hover sont-ils représentés ? Le mobile est-il couvert ?",
        exemple:
          "Ex : « 15 pages maquettées en hi-fi sur Figma, desktop + mobile. États : bouton hover, champ erreur, message succès, page 404. »",
      },
      {
        livrable:
          "Un diagramme des parcours utilisateurs principaux, avec les écrans traversés et les points de décision.",
        questions:
          "Quel est le parcours d'un utilisateur qui arrive sur le site pour la première fois ? Et celui qui veut acheter/contacter/s'inscrire ?",
        exemple:
          "Ex : « Parcours achat : Accueil > Catégorie > Produit > Panier > Compte > Paiement > Confirmation. Testé avec 5 utilisateurs, 2 frictions corrigées. »",
      },
      {
        livrable:
          "Un prototype cliquable et navigable permettant de tester les parcours principaux sans code.",
        questions:
          "Avez-vous créé un prototype interactif ? Quels parcours couvre-t-il ? A-t-il été présenté au client ?",
        exemple:
          "Ex : « Prototype Figma couvrant parcours achat complet + navigation principale. Lien partagé au client le 20/02. »",
      },
      {
        livrable:
          "Un document de validation signé ou une confirmation écrite du client approuvant les maquettes finales.",
        questions:
          "Le client a-t-il validé les maquettes par écrit ? Quels retours ont été intégrés avant la validation finale ?",
        exemple:
          "Ex : « Email de validation reçu le 01/03. 3 retours intégrés : changement couleur CTA, ajout logo partenaires, reformulation slogan. »",
      },
    ],
    dev: [
      {
        livrable:
          "Un environnement de développement opérationnel avec repo Git, pipeline CI/CD et les trois environnements (dev / staging / prod) configurés.",
        questions:
          "Quel service de versioning utilisez-vous ? Le pipeline de déploiement automatique est-il en place ? Les environnements sont-ils séparés ?",
        exemple:
          "Ex : « Repo GitHub privé, branches main/staging/dev. CI/CD via GitHub Actions → Vercel. Variables d'env séparées par environnement. »",
      },
      {
        livrable:
          "Tous les composants d'interface intégrés, responsive, accessibles, correspondant aux maquettes validées.",
        questions:
          "Quels composants sont développés ? Le responsive est-il testé sur mobile/tablette/desktop ? L'accessibilité de base est-elle respectée ?",
        exemple:
          "Ex : « 23 composants développés. Responsive testé sur iPhone 12, iPad, 1440px. Contraste AAA respecté, labels ARIA sur formulaires. »",
      },
      {
        livrable:
          "Le back-end fonctionnel avec les APIs, la logique métier et la base de données opérationnels.",
        questions:
          "Quels endpoints API ont été développés ? La base de données est-elle configurée ? Les règles métier sont-elles implémentées et testées ?",
        exemple:
          "Ex : « API REST : authentification, CRUD produits, gestion commandes, webhooks Stripe. BDD PostgreSQL. Tests unitaires sur la logique de calcul panier. »",
      },
      {
        livrable:
          "Toutes les intégrations tierces fonctionnelles et testées (analytics, paiement, CRM, etc.).",
        questions:
          "Quels services tiers ont été intégrés ? Ont-ils été testés en environnement staging avec des données réelles ? Les erreurs sont-elles gérées ?",
        exemple:
          "Ex : « Stripe testé avec cartes de test (succès, refus, 3DS). GA4 events : page_view, add_to_cart, purchase. Mailchimp : subscribe confirmé. »",
      },
      {
        livrable:
          "L'ensemble des contenus (textes, images, vidéos) importés et mis en place dans le CMS ou le code.",
        questions:
          "Tous les contenus ont-ils été fournis par le client ? Sont-ils intégrés sur toutes les pages ? Les médias sont-ils optimisés (compression, formats) ?",
        exemple:
          "Ex : « Tous les textes intégrés. Images compressées WebP, lazy loading activé. Vidéo Vimeo embed. Seule la page blog en attente de 3 articles. »",
      },
      {
        livrable:
          "Un rapport de revue de code documentant les points vérifiés, les corrections apportées et les optimisations réalisées.",
        questions:
          "Une revue de code a-t-elle eu lieu ? Qui l'a faite ? Quels problèmes ont été identifiés et corrigés ? Les performances ont-elles été auditées ?",
        exemple:
          "Ex : « Code review par dev senior le 10/03. 4 corrections : fuite mémoire, requête SQL non optimisée, secret exposé, bundle trop lourd. Tout corrigé. »",
      },
    ],
    qa: [
      {
        livrable:
          "Un tableau de compatibilité navigateurs listant les tests effectués et les résultats pour chaque combinaison navigateur/device.",
        questions:
          "Sur quels navigateurs et appareils avez-vous testé ? Y a-t-il des bugs spécifiques à certaines configurations ? Ont-ils été corrigés ?",
        exemple:
          "Ex : « Testé : Chrome 120, Firefox 121, Safari 17, Edge 120 — desktop + iPhone 14 + Galaxy S23. 2 bugs Safari corrigés (flexbox + date input). »",
      },
      {
        livrable:
          "Un rapport Lighthouse (ou équivalent) avec les scores obtenus et les actions d'optimisation réalisées.",
        questions:
          "Quels sont vos scores Lighthouse sur mobile et desktop ? Quels sont les Core Web Vitals (LCP, FID, CLS) ? Quelles optimisations ont été faites ?",
        exemple:
          "Ex : « Desktop : Perf 94, Access 98, SEO 100. Mobile : Perf 87. LCP 1.8s, CLS 0.02. Actions : images WebP, preload fonts, code splitting. »",
      },
      {
        livrable:
          "Un rapport de tests fonctionnels couvrant tous les parcours critiques (formulaires, paiement, connexion, etc.).",
        questions:
          "Tous les formulaires ont-ils été testés (succès et erreur) ? Le parcours d'achat complet a-t-il été testé ? Y a-t-il des cas limites couverts ?",
        exemple:
          "Ex : « 47 cas de tests joués. Bugs trouvés : formulaire contact bloqué si numéro invalide, paiement CB échoue silencieusement. Les deux corrigés. »",
      },
      {
        livrable:
          "Un rapport de sécurité de base listant les vérifications effectuées (HTTPS, données sensibles, protections XSS/CSRF).",
        questions:
          "Le site est-il en HTTPS ? Les données sensibles sont-elles protégées ? Y a-t-il une protection contre les injections et les attaques CSRF ?",
        exemple:
          "Ex : « HTTPS + HSTS configurés. Secrets dans variables d'env. Headers CSP activés. Protection CSRF sur formulaires. Scan OWASP ZAP : 0 critique. »",
      },
      {
        livrable:
          "Un document de recette signé par le client listant tous les retours, leur statut (corrigé/accepté/reporté) et la date de validation.",
        questions:
          "Une session de recette a-t-elle eu lieu avec le client ? Quels retours ont été émis ? Ont-ils tous été traités ? Le client a-t-il signé la validation ?",
        exemple:
          "Ex : « Recette le 20/03 avec Marie. 11 retours : 8 corrigés, 2 reportés en v2, 1 refusé (hors périmètre). PV signé le 25/03. »",
      },
      {
        livrable:
          "Un journal de bugs clôturé, sans bugs bloquants ou majeurs ouverts, avec les bugs mineurs documentés et acceptés.",
        questions:
          "Y a-t-il encore des bugs bloquants ou majeurs ouverts ? Tous les bugs critiques identifiés en recette sont-ils résolus ? Le client a-t-il accepté les mineurs ?",
        exemple:
          "Ex : « 0 bug bloquant. 0 bug majeur. 3 bugs mineurs acceptés par le client (affichage cosmétique sur IE11, hors cible). Journal JIRA à jour. »",
      },
    ],
    launch: [
      {
        livrable:
          "La configuration DNS validée, le certificat SSL actif, les redirections en place et le CDN configuré.",
        questions:
          "Le nom de domaine pointe-t-il vers le bon serveur ? Le certificat SSL est-il actif et valide ? Les redirections 301 depuis l'ancien site sont-elles en place ?",
        exemple:
          "Ex : « DNS propagé en 2h. SSL Let's Encrypt valide 90j. 12 redirections 301 depuis ancienne structure. CDN Cloudflare activé. »",
      },
      {
        livrable:
          "Un runbook de déploiement documenté listant chaque étape, les vérifications post-déploiement et le plan de rollback.",
        questions:
          "Quelles étapes exactes avez-vous suivies pour déployer ? Avez-vous un plan de rollback si quelque chose se passe mal ? Le déploiement a-t-il été testé sur staging ?",
        exemple:
          "Ex : « Pipeline GitHub Actions : build > tests > deploy Vercel. Rollback : 1 commande `vercel rollback`. Déploiement testé 3x sur staging. Déploiement prod : 4 min. »",
      },
      {
        livrable:
          "Les outils de surveillance actifs avec des alertes configurées pour les temps de réponse, les erreurs et la disponibilité.",
        questions:
          "Quel outil de monitoring utilisez-vous ? Des alertes sont-elles configurées ? Qui est notifié en cas d'incident ? Le tracking GA4 est-il vérifié ?",
        exemple:
          "Ex : « Sentry actif (erreurs JS/back), UptimeRobot (disponibilité toutes les 5 min), alertes Slack. GA4 vérifié via DebugView : events OK. »",
      },
      {
        livrable:
          "Un plan de communication exécuté avec les canaux activés, les audiences ciblées et les premiers résultats mesurés.",
        questions:
          "Comment avez-vous communiqué sur le lancement ? Quels canaux ? Quels messages ? Quels sont les premiers chiffres (trafic, clics, conversions) ?",
        exemple:
          "Ex : « Email à 2 400 contacts (taux ouverture 34%). Post LinkedIn (1 200 vues). Article blog. J+1 : 340 visiteurs, 12 leads, 3 ventes. »",
      },
      {
        livrable:
          "Un support de formation (vidéo ou document) remis aux équipes qui vont utiliser et gérer le site.",
        questions:
          "Les équipes ont-elles été formées sur le back-office ? Y a-t-il un guide d'utilisation ? Qui gère le contenu ? Qui contacter en cas de problème ?",
        exemple:
          "Ex : « Vidéo Loom de 8 min sur Sanity CMS remise à Paul. Guide PDF : ajout article, modification produit, export commandes. Contact support : dev@agence.fr. »",
      },
      {
        livrable:
          "Un backlog de maintenance (mises à jour, corrections, évolutions) et une roadmap v2 formalisée avec le client.",
        questions:
          "Y a-t-il un contrat de maintenance ? Qui s'occupe des mises à jour ? Quelles évolutions sont déjà prévues pour la v2 ? Dans quel délai ?",
        exemple:
          "Ex : « Contrat maintenance mensuel signé : mises à jour sécurité + 2h dev inclus. Backlog v2 : espace client, programme fidélité, multi-langue. Roadmap Q3. »",
      },
    ],
  },
};

// Generic fallback for project types without detailed descriptions
const GENERIC_TASK_DETAILS = {
  livrable:
    "Le résultat concret et documenté de cette tâche, prêt à être partagé avec l'équipe ou le client.",
  questions:
    "Qu'avez-vous accompli pour cette tâche ? Qui était responsable ? Quel est le livrable produit ? Y a-t-il des décisions ou contraintes à noter ?",
  exemple:
    "Ex : « Réunion tenue le JJ/MM, décision prise sur X, document partagé ici : [lien], validé par [nom]. »",
};

function getTaskDetail(projType, phaseKey, taskIdx) {
  const t = TASK_DETAILS[projType];
  if (t && t[phaseKey] && t[phaseKey][taskIdx]) return t[phaseKey][taskIdx];
  return GENERIC_TASK_DETAILS;
}

// ── Task list (clickable, read-only visually) ──
function buildTaskList(phaseIdx) {
  const type = PROJECT_TYPES[currentProject.type];
  const ph = type.phases[phaseIdx];
  const phData = currentProject.phases[phaseIdx];
  const rows = ph.tasks
    .map((task, ti) => {
      const isDone = phData.tasks[ti] && phData.tasks[ti].done;
      const isActive = ti === activeTaskIdx;
      let bg, border, labelColor, cursor;
      if (isDone) {
        bg = "rgba(39,174,96,0.07)";
        border = "rgba(39,174,96,0.3)";
        labelColor = "var(--muted)";
        cursor = "default";
      } else if (isActive) {
        bg = "rgba(192,57,43,0.07)";
        border = "var(--accent)";
        labelColor = "var(--ink)";
        cursor = "default";
      } else {
        bg = "rgba(26,24,20,0.03)";
        border = "var(--border)";
        labelColor = "var(--ink)";
        cursor = "pointer";
      }
      return `<div
      onclick="${isDone || isActive ? "" : `openTask(${phaseIdx},${ti})`}"
      style="display:flex;align-items:flex-start;gap:10px;padding:9px 12px;border-radius:8px;cursor:${cursor};background:${bg};border:1.5px solid ${border};margin-bottom:5px;transition:all .2s${!isDone && !isActive ? ";" : ""}"
      ${!isDone && !isActive ? `onmouseover="this.style.borderColor='var(--accent)';this.style.background='rgba(192,57,43,0.04)'" onmouseout="this.style.borderColor='${border}';this.style.background='${bg}'"` : ""}
    >
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:500;color:${labelColor};${isDone ? "text-decoration:line-through;" : ""}line-height:1.4">
          ${h(task.label)}
        </div>
      </div>
      ${!isDone && !isActive ? `<span style="font-size:10px;color:var(--accent);opacity:0.7;font-family:'JetBrains Mono',monospace;flex-shrink:0">→</span>` : ""}
    </div>`;
    })
    .join("");
  return `<div class="task-list-container" style="margin-top:12px">${rows}</div>`;
}

// Called when user clicks a task in the list
async function openTask(phaseIdx, taskIdx) {
  if (chatBusy) return;
  activeTaskIdx = taskIdx;
  awaitingTaskInfo = true;

  const type = PROJECT_TYPES[currentProject.type];
  const ph = type.phases[phaseIdx];
  const task = ph.tasks[taskIdx];
  const detail = getTaskDetail(currentProject.type, ph.key, taskIdx);

  // Highlight the active task in the last chat message
  refreshTaskListInChat(phaseIdx);

  const msg = `
    <div style="font-family:'JetBrains Mono',monospace;font-size:9px;color:var(--accent);letter-spacing:2px;text-transform:uppercase;margin-bottom:10px">Tâche ${taskIdx + 1} / ${ph.tasks.length}</div>
    <strong style="font-size:14px">${h(task.label)}</strong>

    <div style="margin-top:14px;display:flex;flex-direction:column;gap:10px">

      <div style="background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:12px 14px">
        <div style="font-family:'JetBrains Mono',monospace;font-size:9px;color:var(--muted);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:6px">📦 Ce que cette tâche produit</div>
        <div style="font-size:13px;color:var(--ink);line-height:1.6">${detail.livrable}</div>
      </div>

      <div style="background:rgba(192,57,43,0.05);border:1px solid rgba(192,57,43,0.2);border-radius:8px;padding:12px 14px">
        <div style="font-family:'JetBrains Mono',monospace;font-size:9px;color:var(--accent);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:6px">❓ Questions auxquelles répondre</div>
        <div style="font-size:13px;color:var(--ink2);line-height:1.7">${detail.questions}</div>
      </div>

      <div style="background:rgba(39,174,96,0.05);border:1px solid rgba(39,174,96,0.2);border-radius:8px;padding:12px 14px">
        <div style="font-family:'JetBrains Mono',monospace;font-size:9px;color:var(--accent3);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:6px">✅ Exemple de bonne réponse</div>
        <div style="font-size:12px;color:var(--muted);line-height:1.6;font-style:italic">${detail.exemple}</div>
      </div>

    </div>

    <div style="margin-top:12px;font-size:13px;color:var(--ink2)">Répondez ci-dessous pour valider cette tâche.</div>

    <div class="msg-chips" style="margin-top:10px">
      <button class="msg-chip" onclick="skipTask(${phaseIdx},${taskIdx})">⏭ Passer cette tâche</button>
    </div>`;

  await aiChat(msg, 500);
}

function refreshTaskListInChat(phaseIdx) {
  const msgs = document.getElementById("chatMessages");
  // Find the message that has a task-list-container for this phase
  const containers = msgs.querySelectorAll(".task-list-container");
  if (containers.length > 0) {
    const last = containers[containers.length - 1];
    last.innerHTML = buildTaskList(phaseIdx)
      .replace('<div class="task-list-container" style="margin-top:12px">', "")
      .replace(/^<div[^>]*>/, "")
      .slice(0, -6);
    // Simpler: just replace the whole container
    const newList = document.createElement("div");
    newList.className = "task-list-container";
    newList.style.marginTop = "12px";
    newList.innerHTML =
      buildTaskList(phaseIdx).match(
        /<div class="task-list-container"[^>]*>([\s\S]*)<\/div>$/,
      )?.[1] || "";
    last.replaceWith(newList);
  }
}

async function skipTask(phaseIdx, taskIdx) {
  const type = PROJECT_TYPES[currentProject.type];
  const ph = type.phases[phaseIdx];
  const task = ph.tasks[taskIdx];

  // Mark as done (skipped)
  currentProject.phases[phaseIdx].tasks[taskIdx].done = true;
  currentProject.phases[phaseIdx].tasks[taskIdx].skipped = true;
  saveProjects();
  renderPhaseDetail();
  renderPhaseStrip();
  updateProgress();
  renderSidebar();

  awaitingTaskInfo = false;
  activeTaskIdx = null;

  const done = currentProject.phases[phaseIdx].tasks.filter(
    (t) => t.done,
  ).length;
  const total = ph.tasks.length;

  if (done === total) {
    await aiChat(getPhaseCompleteMessage(phaseIdx), 400);
    return;
  }

  // Find next undone task
  const nextIdx = ph.tasks.findIndex(
    (_, i) => i > taskIdx && !currentProject.phases[phaseIdx].tasks[i].done,
  );

  await aiChat(
    `⏭ Tâche <em>"${h(task.label)}"</em> passée.<br><br>${done}/${total} tâches complétées.` +
      buildTaskList(phaseIdx) +
      (nextIdx !== -1
        ? `<div class="msg-chips" style="margin-top:4px"><button class="msg-chip" onclick="openTask(${phaseIdx},${nextIdx})">→ Tâche suivante</button></div>`
        : ""),
    400,
  );
}

async function validateTask(phaseIdx, taskIdx, userResponse) {
  const type = PROJECT_TYPES[currentProject.type];
  const ph = type.phases[phaseIdx];
  const task = ph.tasks[taskIdx];

  // Mark as done
  currentProject.phases[phaseIdx].tasks[taskIdx].done = true;
  currentProject.phases[phaseIdx].tasks[taskIdx].notes = userResponse;
  saveProjects();
  renderPhaseDetail();
  renderPhaseStrip();
  updateProgress();
  renderSidebar();

  awaitingTaskInfo = false;
  activeTaskIdx = null;

  const done = currentProject.phases[phaseIdx].tasks.filter(
    (t) => t.done,
  ).length;
  const total = ph.tasks.length;

  if (done === total) {
    await aiChat(getPhaseCompleteMessage(phaseIdx), 500);
    return;
  }

  // Find next undone task
  const nextIdx = ph.tasks.findIndex(
    (_, i) => i > taskIdx && !currentProject.phases[phaseIdx].tasks[i].done,
  );
  const firstUndone = ph.tasks.findIndex(
    (_, i) => !currentProject.phases[phaseIdx].tasks[i].done,
  );

  await aiChat(
    `✅ Tâche <strong>"${h(task.label)}"</strong> validée !<br><br>${done}/${total} tâches complétées.` +
      buildTaskList(phaseIdx) +
      `<div class="msg-chips" style="margin-top:4px">
      ${nextIdx !== -1 ? `<button class="msg-chip" onclick="openTask(${phaseIdx},${nextIdx})">→ Tâche suivante</button>` : ""}
      ${firstUndone !== -1 && firstUndone !== nextIdx ? `<button class="msg-chip" onclick="openTask(${phaseIdx},${firstUndone})">↩ Première tâche restante</button>` : ""}
    </div>`,
    500,
  );
}

function getPhaseIntroMessage() {
  const type = PROJECT_TYPES[currentProject.type];
  const ph = type.phases[currentPhaseIdx];
  const phData = currentProject.phases[currentPhaseIdx];
  const done = phData.tasks.filter((t) => t.done).length;
  const total = ph.tasks.length;
  const pct = Math.round((done / total) * 100);

  activeTaskIdx = null;
  awaitingTaskInfo = false;

  let msg = `Phase <strong>${ph.name}</strong> &nbsp;<span style="font-size:11px;color:var(--muted);font-family:'JetBrains Mono',monospace">${currentPhaseIdx + 1}/${type.phases.length}</span><br><span style="font-size:12px;color:var(--muted)">${ph.desc}</span>`;

  if (pct === 100) {
    msg += `<br><br>✅ Phase <strong>complète</strong> !`;
    if (currentPhaseIdx < type.phases.length - 1) {
      const next = type.phases[currentPhaseIdx + 1];
      msg += `<div class="msg-chips" style="margin-top:8px"><button class="msg-chip" onclick="switchPhase(${currentPhaseIdx + 1})">→ ${next.name}</button></div>`;
    }
    msg += buildTaskList(currentPhaseIdx);
  } else {
    const remaining = total - done;
    msg += `<br><br><strong>${total} tâches</strong> pour cette phase${done > 0 ? ` · <span style="color:var(--accent3)">${done} déjà complétée${done > 1 ? "s" : ""}</span>` : ""}.<br><span style="font-size:12px;color:var(--muted)">Cliquez sur une tâche pour commencer.</span>`;
    msg += buildTaskList(currentPhaseIdx);
  }
  return msg;
}

function getPhaseCompleteMessage(phaseIdx) {
  const type = PROJECT_TYPES[currentProject.type];
  const ph = type.phases[phaseIdx];
  if (phaseIdx < type.phases.length - 1) {
    const next = type.phases[phaseIdx + 1];
    return `🎉 Phase <strong>${ph.name}</strong> terminée !<br><br>Prochaine étape : <strong>${next.name}</strong><br><span style="font-size:12px;color:var(--muted)">${next.desc}</span><div class="msg-chips" style="margin-top:10px"><button class="msg-chip" onclick="switchPhase(${phaseIdx + 1})">→ Commencer : ${next.name}</button></div>`;
  } else {
    return `🏆 <strong>Félicitations !</strong> Toutes les phases du projet <em>${currentProject.name}</em> sont complètes !<br><br>Votre projet est terminé. Souhaitez-vous démarrer un nouveau projet ?<div class="msg-chips"><button class="msg-chip" onclick="startNewProject()">+ Nouveau projet</button></div>`;
  }
}

// ════════════════════════════════════════════════════
// CHAT LOGIC
// ════════════════════════════════════════════════════
function aiChat(content, delay = 700) {
  return new Promise((resolve) => {
    chatBusy = true;
    document.getElementById("sendBtn").disabled = true;
    const msgs = document.getElementById("chatMessages");
    const ti = document.createElement("div");
    ti.className = "typing-indicator";
    ti.id = "typingInd";
    ti.innerHTML = `<div class="msg-avatar ai">AI</div><div class="typing-dots"><span></span><span></span><span></span></div>`;
    msgs.appendChild(ti);
    msgs.scrollTop = msgs.scrollHeight;

    setTimeout(() => {
      ti.remove();
      const el = document.createElement("div");
      el.className = "msg ai";
      el.innerHTML = `<div class="msg-avatar ai">AI</div><div class="msg-bubble">${content}</div>`;
      msgs.appendChild(el);
      msgs.scrollTop = msgs.scrollHeight;
      chatBusy = false;
      document.getElementById("sendBtn").disabled = false;
      resolve();
    }, delay);
  });
}

function userMsg(text) {
  const msgs = document.getElementById("chatMessages");
  const el = document.createElement("div");
  el.className = "msg user";
  el.innerHTML = `<div class="msg-avatar user">Moi</div><div class="msg-bubble">${h(text)}</div>`;
  msgs.appendChild(el);
  msgs.scrollTop = msgs.scrollHeight;
}

async function processInput(text) {
  const t = text.trim();
  if (!t) return;
  userMsg(t);

  // Naming a new project
  if (convState === "naming_project") {
    const proj = window._pendingProject;
    proj.name = t.charAt(0).toUpperCase() + t.slice(1);
    delete window._pendingProject;
    convState = "idle";
    projects.push(proj);
    saveProjects();
    await loadProject(projects.length - 1);
    return;
  }

  if (!currentProject) {
    await aiChat(
      "Veuillez d'abord créer ou sélectionner un projet en utilisant les cartes ci-dessus.",
    );
    return;
  }

  const lower = t.toLowerCase();

  // ── User is responding to an active task ──
  if (awaitingTaskInfo && activeTaskIdx !== null) {
    // Check for skip keywords
    if (/skip|passer|ignorer|suivant|plus tard/.test(lower)) {
      await skipTask(currentPhaseIdx, activeTaskIdx);
    } else {
      await validateTask(currentPhaseIdx, activeTaskIdx, t);
    }
    return;
  }

  const type = PROJECT_TYPES[currentProject.type];
  const ph = type.phases[currentPhaseIdx];

  // Global shortcuts
  if (/suivant|prochaine|next|avancer/.test(lower)) {
    if (currentPhaseIdx < type.phases.length - 1) {
      switchPhase(currentPhaseIdx + 1);
    } else {
      await aiChat("Vous êtes déjà à la dernière phase du projet. 🏁");
    }
    return;
  }

  if (/avancement|progression|statut|état/.test(lower)) {
    const total = currentProject.phases.reduce((a, p) => a + p.tasks.length, 0);
    const done = currentProject.phases.reduce(
      (a, p) => a + p.tasks.filter((t) => t.done).length,
      0,
    );
    const pct = Math.round((done / total) * 100);
    await aiChat(
      `Progression du projet <strong>${currentProject.name}</strong> :<br><br>• Phase actuelle : <strong>${ph.name}</strong> (${currentPhaseIdx + 1}/${type.phases.length})<br>• Avancement global : <strong>${pct}%</strong> (${done}/${total} tâches)<br><br>Continuez ainsi !`,
    );
    return;
  }

  // Default: remind to click a task
  const firstUndone = ph.tasks.findIndex(
    (_, i) => !currentProject.phases[currentPhaseIdx].tasks[i].done,
  );
  await aiChat(
    `Je suis prêt à vous guider sur la phase <strong>${ph.name}</strong>.<br><br>Cliquez sur une tâche dans la liste ci-dessus pour que je vous accompagne.` +
      (firstUndone !== -1
        ? `<div class="msg-chips"><button class="msg-chip" onclick="openTask(${currentPhaseIdx},${firstUndone})">→ Commencer par la première tâche</button></div>`
        : ""),
  );
}

function handleChip(text) {
  document.getElementById("chatInput").value = text;
  handleSend();
}

async function handleSend() {
  if (chatBusy) return;
  const inp = document.getElementById("chatInput");
  const text = inp.value.trim();
  if (!text) return;
  inp.value = "";
  inp.style.height = "auto";
  await processInput(text);
}

// ════════════════════════════════════════════════════
// INIT
// ════════════════════════════════════════════════════
function init() {
  renderSidebar();

  const inp = document.getElementById("chatInput");
  inp.addEventListener("input", () => {
    inp.style.height = "auto";
    inp.style.height = Math.min(inp.scrollHeight, 80) + "px";
  });
  inp.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  });

  // Auto-load last project if any
  if (projects.length > 0) {
    loadProject(projects.length - 1);
  }
}

init();

// ══════════════════════════════════════
// MOBILE DRAWER SYSTEM
// ══════════════════════════════════════
function isMobile() {
  return window.innerWidth <= 900;
}

function toggleNavDrawer() {
  const nav = document.getElementById("navSidebar");
  const isOpen = nav.classList.contains("open");
  closeAllDrawers();
  if (!isOpen) {
    nav.classList.add("open");
    document.getElementById("drawerOverlay").classList.add("visible");
    document.getElementById("sidebarCloseBtn").style.display = "flex";
  }
}

function toggleChatDrawer() {
  const chat = document.getElementById("chatPanelDrawer");
  const isOpen = chat.classList.contains("open");
  closeAllDrawers();
  if (!isOpen) {
    chat.classList.add("open");
    document.getElementById("drawerOverlay").classList.add("visible");
    document.getElementById("chatCloseBtn").style.display = "block";
    // scroll chat to bottom
    const msgs = document.getElementById("chatMessages");
    if (msgs) msgs.scrollTop = msgs.scrollHeight;
  }
}

function closeAllDrawers() {
  document.getElementById("navSidebar").classList.remove("open");
  document.getElementById("chatPanelDrawer").classList.remove("open");
  document.getElementById("drawerOverlay").classList.remove("visible");
  document.getElementById("sidebarCloseBtn").style.display = "none";
  document.getElementById("chatCloseBtn").style.display = "none";
}

// Auto-close drawers on resize to desktop
window.addEventListener("resize", () => {
  if (!isMobile()) closeAllDrawers();
});

// Close on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeAllDrawers();
    closeTaskPopup();
  }
});

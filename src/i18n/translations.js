export const translations = {
  fr: {
    nav: {
      about: 'À propos',
      skills: 'Compétences',
      experience: 'Expérience',
      projects: 'Projets',
      defense: 'Soutenance',
      formation: 'Formation',
      contact: 'Contact',
      cta: 'Me contacter',
    },
    hero: {
      name1: 'Dountio Tchiofo',
      name2: 'David Duclair',
      tagline:
        "Ingénieur en Réseaux & Services Distribués. Je conçois et développe des applications complètes — modélisation UML, architectures microservices, interfaces React — et je mène des recherches sur la sécurité des systèmes IoT, entre rigueur de conception et recherche appliquée.",
      ctaPrimary: 'Voir mes travaux',
      ctaSecondary: 'Discutons',
      location: 'Dschang, Cameroun',
    },
    about: {
      title: 'À propos',
      p1: "Titulaire d'un Master en Réseaux et Services Distribués obtenu avec la mention Bien à l'Université de Dschang, je conçois et développe des applications de bout en bout\u00a0: modélisation UML, architectures microservices avec Spring Boot, interfaces React, jusqu'à l'administration des réseaux et systèmes (Linux, Cisco).",
      p2: "J'encadre des étudiants de licence en réseaux et en génie logiciel — conception, modélisation UML, bonnes pratiques de développement — et je suis actuellement Censeur du club AlgoTech à l'Université de Dschang. Mes projets personnels vont d'une plateforme e-commerce en microservices à un système de streaming synchronisé en temps réel.",
      p3: "En parallèle, mes travaux de recherche portent sur la sécurisation des systèmes d'irrigation intelligents en environnement IoT, en combinant jumeau numérique et apprentissage par renforcement pour construire un modèle de confiance dynamique des capteurs — une spécialisation qui complète mon profil d'ingénieur logiciel.",
      strong1: 'Master en Réseaux et Services Distribués',
      strong2: 'jumeau numérique',
      strong3: 'apprentissage par renforcement',
      strong4: 'React, Spring Boot, microservices',
    },
    skills: {
      title: 'Compétences techniques',
      groups: [
        { label: 'Langages', items: ['Java', 'JavaScript', 'Python', 'HTML', 'CSS', 'SQL'] },
        { label: 'Backend', items: ['Spring Boot', 'Microservices', 'API REST'] },
        { label: 'Frontend', items: ['React', 'Tailwind CSS', 'JavaScript'] },
        { label: 'Modélisation', items: ['UML'] },
        { label: 'Réseaux & Systèmes', items: ['Cisco', 'Linux', 'Administration système'] },
        { label: 'Cybersécurité', items: ['Sécurité IoT', 'Jumeaux numériques', 'Apprentissage par renforcement'] },
        { label: 'Outils', items: ['Git', 'GitHub', 'IntelliJ', 'Arduino'] },
      ],
    },
    experience: {
      title: 'Expérience',
      roles: [
        {
          period: '2024 — 2025',
          title: 'Chargé de TP — Réseaux',
          org: 'Licence 1 Informatique, Université de Dschang',
          points: [
            "Encadrement des travaux pratiques de réseaux informatiques pour les étudiants de Licence 1.",
            "Accompagnement pédagogique et correction des travaux pratiques.",
          ],
        },
        {
          period: '2024 — Présent',
          title: 'Répétiteur — Génie Logiciel',
          org: 'Université de Dschang',
          points: [
            "Soutien pédagogique en conception, modélisation et développement logiciel.",
            "Aide à la compréhension des bonnes pratiques de développement et des patterns de conception.",
          ],
        },
      ],
    },
    projects: {
      title: 'Recherche & Projets',
      items: [
        {
          kind: 'Recherche — Master',
          title: "Détection & réponse adaptatives aux attaques cyber-physiques dans les systèmes d'irrigation IoT",
          desc: "Sécurisation des systèmes d'irrigation intelligents en environnement IoT via une approche combinant un jumeau numérique, un modèle de confiance dynamique des capteurs, et l'apprentissage par renforcement (Q-Learning) pour arbitrer la réponse à une attaque en cours.",
          stack: ['Cybersécurité', 'IoT', 'Digital Twin', 'Q-Learning', 'Systèmes embarqués'],
        },
        {
          kind: 'Conception & Développement',
          title: 'Plateforme E-commerce Microservices',
          desc: "Conception (modélisation UML) et développement d'une plateforme e-commerce basée sur une architecture microservices, pensée pour l'isolation des pannes et la montée en charge indépendante des services.",
          stack: ['UML', 'Java', 'Spring Boot', 'Docker', 'Git', 'GitHub'],
        },
        {
          kind: 'Conception & Développement',
          title: 'Plateforme de Streaming Synchronisé',
          desc: "Modélisation et développement d'une plateforme de streaming vidéo synchronisé en temps réel, permettant à plusieurs utilisateurs de regarder le même contenu au même instant.",
          stack: ['UML', 'Java', 'JavaScript', 'WebSocket', 'Git', 'GitHub'],
        },
      ],
    },
    defense: {
      title: 'Soutenance de Mémoire',
      mention: 'Mention Très Bien',
      intro:
        "Soutenance du mémoire de Master, portant sur la détection et la réponse adaptatives aux attaques cyber-physiques dans les systèmes d'irrigation IoT, devant un jury composé de\u00a0:",
      jury: [
        { role: 'Président du jury', name: 'Pr Lienou Jean-Pierre' },
        { role: 'Rapporteur', name: 'Pr Soh Mathurin' },
        { role: 'Examinateur', name: 'Dr Jagho Brel' },
      ],
    },
    formation: {
      titleFormation: 'Formation',
      titleCerts: 'Certifications & Ateliers',
      titleLangues: 'Langues',
      langues: 'Français (langue maternelle) · Anglais (notions)',
      diplomas: [
        { title: 'Master 2 Réseaux et Services Distribués', mention: 'Mention Bien', org: 'Université de Dschang' },
        { title: 'Master 1 Réseaux et Services Distribués', mention: 'Mention Assez Bien', org: 'Université de Dschang' },
        { title: 'Licence Informatique', mention: 'Mention Assez Bien', org: 'Université de Dschang' },
      ],
      certifications: [
        { title: 'Workshop GMC 2026', org: 'Armée Américaine', period: '15–16 Avr. 2026', note: 'Théorie des jeux et apprentissage automatique pour la cybersécurité' },
        { title: 'Organisation Conférence IA & Cybersécurité / Hackathon Pentest', org: '', period: '', note: "Participation à l'organisation de la conférence IA & cybersécurité, et au hackathon de tests d'intrusion" },
        { title: 'Formation Microcontrôleurs Arduino', org: 'TME Education Africa', period: '25–30 Nov. 2024' },
        { title: 'Initiation au développement web', org: 'IT NOVATION Sarl', period: 'Juin – Sept. 2022' },
      ],
    },
    contact: {
      title: 'Contact',
      heading: 'Un projet réseau, IoT ou cybersécurité à sécuriser\u00a0? Parlons-en.',
      location: 'Dschang, Cameroun',
    },
    footer: {
      rights: 'Tous droits réservés',
    },
    misc: {
      langToggle: 'EN',
      scrollTop: 'Remonter en haut de page',
      themeToLight: 'Activer le mode clair',
      themeToDark: 'Activer le mode sombre',
    },
  },

  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      defense: 'Defense',
      formation: 'Education',
      contact: 'Contact',
      cta: 'Get in touch',
    },
    hero: {
      name1: 'Dountio Tchiofo',
      name2: 'David Duclair',
      tagline:
        "Networks & Distributed Systems engineer. I design and build complete applications — UML modeling, microservices architectures, React interfaces — and research the security of IoT systems, balancing design rigor with applied research.",
      ctaPrimary: 'See my work',
      ctaSecondary: "Let's talk",
      location: 'Dschang, Cameroon',
    },
    about: {
      title: 'About',
      p1: "Holder of a Master's degree in Networks and Distributed Systems (with distinction) from the University of Dschang, I design and build end-to-end applications: UML modeling, microservices architectures with Spring Boot, React interfaces, down to network and systems administration (Linux, Cisco).",
      p2: "I mentor undergraduate students in networking and software engineering — design, UML modeling, development best practices — and currently serve as Censeur of the AlgoTech club at the University of Dschang. My personal projects range from a microservices e-commerce platform to a real-time synchronized streaming system.",
      p3: "Alongside this, my research focuses on securing smart irrigation systems in IoT environments, combining digital twin technology and reinforcement learning to build a dynamic sensor trust model — a specialization that complements my profile as a software engineer.",
      strong1: "Master's degree in Networks and Distributed Systems",
      strong2: 'digital twin',
      strong3: 'reinforcement learning',
      strong4: 'React, Spring Boot, microservices',
    },
    skills: {
      title: 'Technical Skills',
      groups: [
        { label: 'Languages', items: ['Java', 'JavaScript', 'Python', 'HTML', 'CSS', 'SQL'] },
        { label: 'Backend', items: ['Spring Boot', 'Microservices', 'REST API'] },
        { label: 'Frontend', items: ['React', 'Tailwind CSS', 'JavaScript'] },
        { label: 'Modeling', items: ['UML'] },
        { label: 'Networks & Systems', items: ['Cisco', 'Linux', 'System Administration'] },
        { label: 'Cybersecurity', items: ['IoT Security', 'Digital Twins', 'Reinforcement Learning'] },
        { label: 'Tools', items: ['Git', 'GitHub', 'IntelliJ', 'Arduino'] },
      ],
    },
    experience: {
      title: 'Experience',
      roles: [
        {
          period: '2024 — 2025',
          title: 'Teaching Assistant — Networks',
          org: 'Bachelor 1 Computer Science, University of Dschang',
          points: [
            'Supervised networking labs for first-year Computer Science students.',
            'Provided academic support and graded lab assignments.',
          ],
        },
        {
          period: '2024 — Present',
          title: 'Tutor — Software Engineering',
          org: 'University of Dschang',
          points: [
            'Academic support in software design, modeling and development.',
            'Helped students understand development best practices and design patterns.',
          ],
        },
      ],
    },
    projects: {
      title: 'Projects & Research',
      items: [
        {
          kind: "Research — Master's",
          title: 'Adaptive Detection & Response to Cyber-Physical Attacks in IoT Irrigation Systems',
          desc: 'Securing smart irrigation systems in IoT environments through an approach combining a digital twin, a dynamic sensor trust model, and reinforcement learning (Q-Learning) to arbitrate the response to an ongoing attack.',
          stack: ['Cybersecurity', 'IoT', 'Digital Twin', 'Q-Learning', 'Embedded Systems'],
        },
        {
          kind: 'Design & Development',
          title: 'E-commerce Microservices Platform',
          desc: 'Designed (UML modeling) and built an e-commerce platform on a microservices architecture, geared for fault isolation and independently scalable services.',
          stack: ['UML', 'Java', 'Spring Boot', 'Docker', 'Git', 'GitHub'],
        },
        {
          kind: 'Design & Development',
          title: 'Synchronized Streaming Platform',
          desc: 'Modeled and built a real-time synchronized video streaming platform, letting multiple users watch the same content at the same instant.',
          stack: ['UML', 'Java', 'JavaScript', 'WebSocket', 'Git', 'GitHub'],
        },
      ],
    },
    defense: {
      title: "Thesis Defense",
      mention: 'Highest Honors',
      intro:
        "Master's thesis defense on adaptive detection and response to cyber-physical attacks in IoT irrigation systems, in front of a jury composed of:",
      jury: [
        { role: 'Committee Chair', name: 'Pr Lienou Jean-Pierre' },
        { role: 'Reporter', name: 'Pr Soh Mathurin' },
        { role: 'Examiner', name: 'Dr Jagho Brel' },
      ],
    },
    formation: {
      titleFormation: 'Education',
      titleCerts: 'Certifications & Workshops',
      titleLangues: 'Languages',
      langues: 'French (native) · English (basic)',
      diplomas: [
        { title: "Master's in Networks and Distributed Systems (Year 2)", mention: 'With Distinction', org: 'University of Dschang' },
        { title: "Master's in Networks and Distributed Systems (Year 1)", mention: 'Satisfactory Distinction', org: 'University of Dschang' },
        { title: 'Bachelor in Computer Science', mention: 'Satisfactory Distinction', org: 'University of Dschang' },
      ],
      certifications: [
        { title: 'GMC 2026 Workshop', org: 'US Army', period: 'Apr 15–16, 2026', note: 'Game theory and machine learning for cybersecurity' },
        { title: 'AI & Cybersecurity Conference Organization / Pentest Hackathon', org: '', period: '', note: 'Helped organize the AI & cybersecurity conference and the penetration-testing hackathon' },
        { title: 'Arduino Microcontrollers Training', org: 'TME Education Africa', period: 'Nov 25–30, 2024' },
        { title: 'Introduction to Web Development', org: 'IT NOVATION Sarl', period: 'Jun – Sep 2022' },
      ],
    },
    contact: {
      title: 'Contact',
      heading: 'Have a network, IoT or cybersecurity project to secure? Let\u2019s talk.',
      location: 'Dschang, Cameroon',
    },
    footer: {
      rights: 'All rights reserved',
    },
    misc: {
      langToggle: 'FR',
      scrollTop: 'Back to top',
      themeToLight: 'Switch to light mode',
      themeToDark: 'Switch to dark mode',
    },
  },
}

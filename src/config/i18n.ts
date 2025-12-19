export const languages = {
  en: "English",
  es: "Español",
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = "en";

export const ui = {
  en: {
    nav: {
      agents: "Agents",
      platform: "Platform",
      process: "Process",
      about: "About us",
      faq: "FAQ",
      contact: "Contact",
    },
    hero: {
      title: [
        {
          pref: "THE ",
          bolded: "AI ENTERPRISE",
          suff: "",
        },
        {
          pref: "PLATFORM",
          bolded: "",
          suff: "",
        },
      ],
      subtitle: "DEPLOY AI AGENTS ACROSS YOUR ORGANIZATION, DRIVING 10X ROI",
      cta: "BOOK A DEMO",
      videoFallback: "Your browser does not support the video tag.",
    },
    integrations: {
      heading: "Automate complex workflows and make better decisions",
      description: "WE CONNECT TO YOUR EXISTING SYSTEMS TO GIVE AI THE RIGHT CONTEXT",
    },
    platform: {
      heading: "Our Platform",
      steps: {
        "1": {
          title: "Centralize Data",
          description: "Our engineering team will help you unify your company's fragmented data (SAP, Hubspot, etc.) in our platform",
        },
        "2": {
          title: "Create AI Agents",
          description: "Deploy LLM agents and ML models (anomaly, clustering, time-series, etc.) on top of your company's data",
        },
        "3": {
          title: "Build Workflows",
          description: "Automate mission-critical workflows by connecting AI agents with +50 tools",
        },
        "4": {
          title: "Monitor Results",
          description: "Review agent logs to spot issues and fine-tune your workflows for the right results",
        },
        "5": {
          title: "Boost Analytics",
          description: "Analyze your company's data, automating reporting and speeding up decision-making",
        },
      },
    },
    process: {
      heading: "Our Process",
      steps: {
        "1": {
          title: "Diagnostic",
          description: "We get to know your team and identify the highest ROI opportunities for AI implementation",
        },
        "2": {
          title: "Proof of Value",
          description: "We deploy a specific AI use case in less than 4 weeks to demonstrate our platform's value",
        },
        "3": {
          title: "Data Integration",
          description: "We centralize your fragmented systems in our platform to give AI agents relevant context",
        },
        "4": {
          title: "Build & Deploy",
          description: "We act as your strategic partner, building the highest ROI AI products for your team",
        },
        "5": {
          title: "Maintenance",
          description: "We offer round-the-clock support so that your system keeps running seamlessly",
        },
      },
    },
    about: {
      heading: "Founders Building for Founders",
      description: "We know how hard it is to run a business. Each of us built a company before Primero. We are here to create ROI and prove to you our value, not to be another cost in your P&L.",
    },
    contact: {
      heading: "Request a free AI-readiness diagnostic",
      description: "Our forward deployed engineering team will get to know your team and identify the highest ROI opportunities for AI implementation. Free of charge!",
      cta: "CONTACT US",
      form: {
        name: "Name",
        email: "E-mail",
        submit: "Submit Message",
      },
    },
    footer: {
      legalHeading: "Legal",
      contactHeading: "Contact",
      terms: "Terms and Conditions",
      privacy: "Privacy Notice",
    },
    agents: {
      centerCardDescription: "Analyze data, build predictive models, and automate back-office processes",
      "form-filling": {
        name: "Form Filling Agent",
        description: "automatically input data from your email inbox to your ERP",
      },
      "report-writing": {
        name: "Report Writing Agent",
        description: "draft a 10+ page executive summary, analyzing a credit application",
      },
      "fraud-flagging": {
        name: "Fraud Flagging Agent",
        description: "compare your customers' IDs to their data and flag discrepancies",
      },
      "contract-analyst": {
        name: "Contract Analyst Agent",
        description: "review a 100+ page contract and leave the red-lining to AI",
      },
      "inventory-forecast": {
        name: "Inventory Forecast Agent",
        description: "analyze past orders and external trends to predict next 12 months sales",
      },
      "sales-outbound": {
        name: "Sales Outbound Agent",
        description: "identify high-quality leads and automate introduction calls",
      },
      "anomaly-detection": {
        name: "Anomaly Detection Agent",
        description: "monitor production data and spot quality issues or machine failure early on",
      },
      "internet-scraper": {
        name: "Internet Scraper Agent",
        description: "search for social media mentions and categorize them by urgency",
      },
    },
    faqs: {
      heading: "FAQs",
      items: [
        {
          question: "What is Primero?",
          answer:
            "Primero is an AI enterprise platform. We work with Fortune 500 companies, building AI backoffice automations and tools to improve decision-making. Our products are built on top of our intelligence platform and integrate with our customers' systems and data. To keep it short: we help companies get 10x ROI from AI adoption.",
        },
        {
          question: "What features does the platform include?",
          answer:
            "Our platform includes data centralization, AI agent creation, workflow automation, monitoring tools, and advanced analytics. We integrate with over 50 tools and connect to your existing systems like SAP, AWS, Microsoft Dynamics, NetSuite, and Oracle.",
        },
        {
          question: "Can Primero help me build custom products?",
          answer:
            "Yes, absolutely. We act as your strategic partner, building custom AI products tailored to your specific business needs and highest ROI opportunities.",
        },
        {
          question: "How does Primero manage data security?",
          answer:
            "We take data security seriously. Our platform follows enterprise-grade security standards and we work closely with your team to ensure all data is handled according to your security requirements and compliance standards.",
        },
        {
          question: "Do I have to be technical to use Primero?",
          answer:
            "No, you don't need to be technical. Our forward deployed engineering team handles the implementation, integration, and maintenance. We work with your team to identify opportunities and deploy solutions.",
        },
        {
          question: "How much does it cost?",
          answer:
            "Pricing is customized based on your specific needs and use cases. We start with a free AI-readiness diagnostic to identify opportunities. Contact us to discuss your requirements and get a tailored quote.",
        },
        {
          question: "Can I use my own AI model providers?",
          answer:
            "Yes, our platform is flexible and can integrate with various AI model providers. We work with you to determine the best approach for your specific use cases.",
        },
      ],
    },
  },
  es: {
    nav: {
      agents: "Agentes",
      platform: "Plataforma",
      process: "Proceso",
      about: "Nosotros",
      faq: "Preguntas",
      contact: "Contacto",
    },
    hero: {
      title: [
        {
          pref: "LA PLATAFORMA",
          bolded: "",
          suff: "",
        },
        {
          pref: "DE ",
          bolded: "IA EMPRESARIAL",
          suff: "",
        },
      ],
      subtitle: "IMPLEMENTA AGENTES DE IA EN TU ORGANIZACIÓN, GENERANDO 10X ROI",
      cta: "RESERVA UNA DEMO",
    },
    integrations: {
      heading: "Automatiza flujos de trabajo complejos y toma mejores decisiones",
      description: "NOS CONECTAMOS A TUS SISTEMAS EXISTENTES PARA DARLE A LA IA EL CONTEXTO CORRECTO",
    },
    platform: {
      heading: "Nuestra Plataforma",
      steps: {
        "1": {
          title: "Centralizar Datos",
          description: "Nuestro equipo de ingeniería te ayudará a unificar los datos fragmentados de tu empresa (SAP, Hubspot, etc.) en nuestra plataforma",
        },
        "2": {
          title: "Crear Agentes de IA",
          description: "Implementa agentes LLM y modelos ML (detección de anomalías, clustering, series temporales, etc.) sobre los datos de tu empresa",
        },
        "3": {
          title: "Construir Flujos de Trabajo",
          description: "Automatiza flujos de trabajo críticos conectando agentes de IA con más de 50 herramientas",
        },
        "4": {
          title: "Monitorear Resultados",
          description: "Revisa los registros de agentes para detectar problemas y ajustar tus flujos de trabajo para obtener los resultados correctos",
        },
        "5": {
          title: "Impulsar Analíticas",
          description: "Analiza los datos de tu empresa, automatizando reportes y acelerando la toma de decisiones",
        },
      },
    },
    process: {
      heading: "Nuestro Proceso",
      steps: {
        "1": {
          title: "Diagnóstico",
          description: "Conocemos a tu equipo e identificamos las oportunidades de mayor ROI para la implementación de IA",
        },
        "2": {
          title: "Prueba de Valor",
          description: "Implementamos un caso de uso específico de IA en menos de 4 semanas para demostrar el valor de nuestra plataforma",
        },
        "3": {
          title: "Integración de Datos",
          description: "Centralizamos tus sistemas fragmentados en nuestra plataforma para dar a los agentes de IA el contexto relevante",
        },
        "4": {
          title: "Construir e Implementar",
          description: "Actuamos como tu socio estratégico, construyendo los productos de IA de mayor ROI para tu equipo",
        },
        "5": {
          title: "Soporte",
          description: "Ofrecemos soporte las 24 horas para que tu sistema siga funcionando sin problemas",
        },
      },
    },
    about: {
      heading: "Fundadores Construyendo para Fundadores",
      description: "Sabemos lo difícil que es dirigir un negocio. Cada uno de nosotros construyó una empresa antes de Primero. Estamos aquí para crear ROI y demostrarte nuestro valor, no para ser otro costo en tu P&L.",
    },
    contact: {
      heading: "Solicita un diagnóstico gratuito de preparación para IA",
      description: "Nuestro equipo de ingeniería desplegado se conocerá a tu equipo e identificará las oportunidades de mayor ROI para la implementación de IA. ¡Gratis!",
      cta: "CONTÁCTANOS",
      form: {
        name: "Nombre",
        email: "Correo electrónico",
        submit: "Enviar Mensaje",
      },
    },
    footer: {
      legalHeading: "Legal",
      contactHeading: "Contacto",
      terms: "Términos y Condiciones",
      privacy: "Aviso de Privacidad",
    },
    agents: {
      centerCardDescription: "Analiza datos, construye modelos predictivos y automatiza procesos de back-office",
      "form-filling": {
        name: "Agente de Llenado de Formularios",
        description: "ingresa automáticamente datos desde tu bandeja de entrada de correo a tu ERP",
      },
      "report-writing": {
        name: "Agente de Escritura de Reportes",
        description: "redacta un resumen ejecutivo de 10+ páginas, analizando una solicitud de crédito",
      },
      "fraud-flagging": {
        name: "Agente de Detección de Fraude",
        description: "compara las identificaciones de tus clientes con sus datos y marca discrepancias",
      },
      "contract-analyst": {
        name: "Agente Analista de Contratos",
        description: "revisa un contrato de 100+ páginas y deja el marcado de cambios a la IA",
      },
      "inventory-forecast": {
        name: "Agente de Pronóstico de Inventario",
        description: "analiza pedidos pasados y tendencias externas para predecir las ventas de los próximos 12 meses",
      },
      "sales-outbound": {
        name: "Agente de Ventas Externas",
        description: "identifica prospectos de alta calidad y automatiza llamadas de introducción",
      },
      "anomaly-detection": {
        name: "Agente de Detección de Anomalías",
        description: "monitorea datos de producción y detecta problemas de calidad o fallas de máquinas tempranamente",
      },
      "internet-scraper": {
        name: "Agente Rastreador de Internet",
        description: "busca menciones en redes sociales y las categoriza por urgencia",
      },
    },
    faqs: {
      heading: "Preguntas Frecuentes",
      items: [
        {
          question: "¿Qué es Primero?",
          answer:
            "Primero es una plataforma empresarial de IA. Trabajamos con empresas Fortune 500, construyendo automatizaciones y herramientas de back-office con IA para mejorar la toma de decisiones. Nuestros productos están construidos sobre nuestra plataforma de inteligencia e integran con los sistemas y datos de nuestros clientes. Para resumir: ayudamos a las empresas a obtener 10x ROI de la adopción de IA.",
        },
        {
          question: "¿Qué características incluye la plataforma?",
          answer:
            "Nuestra plataforma incluye centralización de datos, creación de agentes de IA, automatización de flujos de trabajo, herramientas de monitoreo y analíticas avanzadas. Nos integramos con más de 50 herramientas y nos conectamos a tus sistemas existentes como SAP, AWS, Microsoft Dynamics, NetSuite y Oracle.",
        },
        {
          question: "¿Puede Primero ayudarme a construir productos personalizados?",
          answer:
            "Sí, absolutamente. Actuamos como tu socio estratégico, construyendo productos de IA personalizados adaptados a tus necesidades específicas de negocio y las oportunidades de mayor ROI.",
        },
        {
          question: "¿Cómo maneja Primero la seguridad de datos?",
          answer:
            "Tomamos la seguridad de datos muy en serio. Nuestra plataforma sigue estándares de seguridad de nivel empresarial y trabajamos estrechamente con tu equipo para asegurar que todos los datos se manejen de acuerdo con tus requisitos de seguridad y estándares de cumplimiento.",
        },
        {
          question: "¿Tengo que ser técnico para usar Primero?",
          answer:
            "No, no necesitas ser técnico. Nuestro equipo de ingeniería desplegado maneja la implementación, integración y mantenimiento. Trabajamos con tu equipo para identificar oportunidades e implementar soluciones.",
        },
        {
          question: "¿Cuánto cuesta?",
          answer:
            "El precio se personaliza según tus necesidades específicas y casos de uso. Comenzamos con un diagnóstico gratuito de preparación para IA para identificar oportunidades. Contáctanos para discutir tus requisitos y obtener una cotización personalizada.",
        },
        {
          question: "¿Puedo usar mis propios proveedores de modelos de IA?",
          answer:
            "Sí, nuestra plataforma es flexible y puede integrarse con varios proveedores de modelos de IA. Trabajamos contigo para determinar el mejor enfoque para tus casos de uso específicos.",
        },
      ],
    },
  },
} as const;


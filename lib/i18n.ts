export type Locale = "en" | "ru" | "kz" | "zh" | "de"

export interface LocaleConfig {
  code: Locale
  name: string
  domain: string
  flag: string
  currency: string
  currencySymbol: string
}

export const locales: LocaleConfig[] = [
  { code: "en", name: "English", domain: "multron.org", flag: "🌐", currency: "USD", currencySymbol: "$" },
  { code: "ru", name: "Русский", domain: "multron.ru", flag: "🇷🇺", currency: "RUB", currencySymbol: "₽" },
  { code: "kz", name: "Қазақша", domain: "multron.kz", flag: "🇰🇿", currency: "KZT", currencySymbol: "₸" },
  { code: "zh", name: "中文", domain: "multron.cn", flag: "🇨🇳", currency: "CNY", currencySymbol: "¥" },
  { code: "de", name: "Deutsch", domain: "multron.de", flag: "🇩🇪", currency: "EUR", currencySymbol: "€" },
]

export const defaultLocale: Locale = "en"

export function getLocaleFromDomain(hostname: string): Locale {
  // Extract domain from hostname
  const domain = hostname.replace("www.", "").toLowerCase()

  // Check for localhost with query param
  if (domain.includes("localhost") || domain.includes("vercel.app") || domain.includes("v0.dev")) {
    return defaultLocale
  }

  // Find locale by domain
  const localeConfig = locales.find((l) => domain.includes(l.domain.replace("www.", "")))
  return localeConfig?.code || defaultLocale
}

export function getLocaleConfig(locale: Locale): LocaleConfig {
  return locales.find((l) => l.code === locale) || locales[0]
}

// Translations
export const translations: Record<Locale, Record<string, string>> = {
  en: {
    // Navigation
    "nav.products": "Products",
    "nav.categories": "Categories",
    "nav.about": "About Us",
    "nav.contact": "Contact",
    "nav.search": "Search products...",
    "nav.cart": "Cart",

    // Hero
    "hero.subtitle": "Technology Infrastructure Solutions",
    "hero.title": "Engineering Excellence for Tomorrow",
    "hero.description":
      "Premium electronic components, power systems, and lighting solutions for industrial and consumer applications worldwide.",
    "hero.cta.catalog": "Browse Catalog",
    "hero.cta.about": "Learn More",

    // About
    "about.tag": "About MULTRON",
    "about.title": "Global Leader in Electronic Infrastructure",
    "about.description":
      "MULTRON develops and manufactures advanced equipment, electronic devices, and components for everyday use and industrial environments. Our product line covers solutions for mobile electronics, workstations, production facilities, and specialized technical equipment.",
    "about.stat.products": "Products",
    "about.stat.countries": "Countries",
    "about.stat.clients": "B2B Clients",
    "about.stat.years": "Years",

    // Features
    "features.safety": "Safety First",
    "features.safety.desc": "Certified products meeting international standards",
    "features.technology": "Advanced Technology",
    "features.technology.desc": "Cutting-edge solutions for modern challenges",
    "features.reliability": "Proven Reliability",
    "features.reliability.desc": "Industrial-grade components built to last",

    // Categories
    "categories.title": "Product Categories",
    "categories.subtitle": "Explore our comprehensive range of electronic solutions",
    "categories.viewAll": "View All",
    "categories.power": "Power Supplies",
    "categories.connectors": "Connectors",
    "categories.lighting": "Lighting",
    "categories.cables": "Cables",
    "categories.protection": "Protection",
    "categories.data": "Data Transfer",
    "categories.industrial": "Industrial",
    "categories.mobile": "Mobile",

    // Products
    "products.title": "Products",
    "products.subtitle": "Discover our most popular solutions",
    "products.viewAll": "View All Products",
    "products.addToCart": "Add to Cart",
    "products.inStock": "In Stock",
    "products.outOfStock": "Out of Stock",
    "products.new": "New",
    "products.sale": "Sale",
    "products.previewTitle": "Our Product Line",
    "products.previewSubtitle": "Explore our range of Multron accessories and solutions",
    "products.previewAlt": "Multron products collection",
    "productsPage.title": "All Products",
    "productsPage.subtitle": "Browse our complete catalog of Multron products",
    "productsPage.moreProducts": "And much more in our product line",

    // Footer
    "footer.description": "Global manufacturer of electronic components, power systems, and lighting solutions.",
    "footer.products": "Products",
    "footer.company": "Company",
    "footer.support": "Support",
    "footer.legal": "Legal",
    "footer.about": "About Us",
    "footer.careers": "Careers",
    "footer.news": "News",
    "footer.help": "Help Center",
    "footer.shipping": "Shipping",
    "footer.returns": "Returns",
    "footer.warranty": "Warranty",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.cookies": "Cookie Policy",
    "footer.rights": "All rights reserved.",
    "footer.newsletter": "Subscribe to our newsletter",
    "footer.newsletter.placeholder": "Enter your email",
    "footer.newsletter.button": "Subscribe",
    "footer.contact": "Contact",
    "footer.contact.email": "info@multron.org",
    "footer.contact.phone": "+1 (555) 123-4567",
    "footer.contact.address": "123 Tech Street, Innovation City, IC 12345",
    "cta.title": "Let's Work Together",
    "cta.description": "Interested in partnership or bulk purchases? We're here to help you find the right solutions for your business needs.",
    "cta.button": "Get in Touch",

    // Common
    "common.learnMore": "Learn More",
    "common.viewDetails": "View Details",
    "common.close": "Close",
    "common.menu": "Menu",
  },
  ru: {
    // Navigation
    "nav.products": "Продукция",
    "nav.categories": "Категории",
    "nav.about": "О компании",
    "nav.contact": "Контакты",
    "nav.search": "Поиск товаров...",
    "nav.cart": "Корзина",

    // Hero
    "hero.subtitle": "Решения для технологической инфраструктуры",
    "hero.title": "Инженерное совершенство для будущего",
    "hero.description":
      "Премиальные электронные компоненты, системы питания и световые решения для промышленных и бытовых применений по всему миру.",
    "hero.cta.catalog": "Каталог товаров",
    "hero.cta.about": "Подробнее",

    // About
    "about.tag": "О MULTRON",
    "about.title": "Мировой лидер в электронной инфраструктуре",
    "about.description":
      "MULTRON разрабатывает и производит передовое оборудование, электронные устройства и компоненты для повседневного и промышленного использования. Наша продукция охватывает решения для мобильной электроники, рабочих станций, производственных объектов и специализированного оборудования.",
    "about.stat.products": "Товаров",
    "about.stat.countries": "Стран",
    "about.stat.clients": "B2B клиентов",
    "about.stat.years": "Лет",

    // Features
    "features.safety": "Безопасность",
    "features.safety.desc": "Сертифицированная продукция международных стандартов",
    "features.technology": "Технологии",
    "features.technology.desc": "Передовые решения для современных задач",
    "features.reliability": "Надёжность",
    "features.reliability.desc": "Промышленные компоненты высшего качества",

    // Categories
    "categories.title": "Категории товаров",
    "categories.subtitle": "Исследуйте наш полный ассортимент электронных решений",
    "categories.viewAll": "Все товары",
    "categories.power": "Блоки питания",
    "categories.connectors": "Разъёмы",
    "categories.lighting": "Освещение",
    "categories.cables": "Кабели",
    "categories.protection": "Защита",
    "categories.data": "Передача данных",
    "categories.industrial": "Промышленные",
    "categories.mobile": "Мобильные",

    // Products
    "products.title": "Продукция",
    "products.subtitle": "Откройте наши самые востребованные решения",
    "products.viewAll": "Все товары",
    "products.addToCart": "В корзину",
    "products.inStock": "В наличии",
    "products.outOfStock": "Нет в наличии",
    "products.new": "Новинка",
    "products.sale": "Скидка",
    "products.previewTitle": "Наша продукция",
    "products.previewSubtitle": "Изучите наш ассортимент аксессуаров и решений Multron",
    "products.previewAlt": "Коллекция товаров Multron",
    "productsPage.title": "Все товары",
    "productsPage.subtitle": "Просмотрите полный каталог товаров Multron",
    "productsPage.moreProducts": "И многое другое в нашей линейке товаров",

    // Footer
    "footer.description": "Мировой производитель электронных компонентов, систем питания и световых решений.",
    "footer.products": "Продукция",
    "footer.company": "Компания",
    "footer.support": "Поддержка",
    "footer.legal": "Правовая информация",
    "footer.about": "О нас",
    "footer.careers": "Карьера",
    "footer.news": "Новости",
    "footer.help": "Центр помощи",
    "footer.shipping": "Доставка",
    "footer.returns": "Возврат",
    "footer.warranty": "Гарантия",
    "footer.privacy": "Политика конфиденциальности",
    "footer.terms": "Условия использования",
    "footer.cookies": "Политика cookies",
    "footer.rights": "Все права защищены.",
    "footer.newsletter": "Подпишитесь на рассылку",
    "footer.newsletter.placeholder": "Введите email",
    "footer.newsletter.button": "Подписаться",
    "footer.contact": "Контакты",
    "footer.contact.email": "info@multron.ru",
    "footer.contact.phone": "+7 (495) 123-45-67",
    "footer.contact.address": "г. Москва, ул. Технологическая, д. 123",
    "cta.title": "Давайте сотрудничать",
    "cta.description": "Заинтересованы в партнёрстве или оптовых закупках? Мы готовы помочь вам найти подходящие решения для вашего бизнеса.",
    "cta.button": "Связаться с нами",

    // Common
    "common.learnMore": "Узнать больше",
    "common.viewDetails": "Подробнее",
    "common.close": "Закрыть",
    "common.menu": "Меню",
  },
  kz: {
    // Navigation
    "nav.products": "Өнімдер",
    "nav.categories": "Санаттар",
    "nav.about": "Біз туралы",
    "nav.contact": "Байланыс",
    "nav.search": "Өнімдерді іздеу...",
    "nav.cart": "Себет",

    // Hero
    "hero.subtitle": "Технологиялық инфрақұрылым шешімдері",
    "hero.title": "Болашаққа инженерлік жетістік",
    "hero.description":
      "Бүкіл әлемдегі өнеркәсіптік және тұтынушылық қолданбалар үшін премиум электронды компоненттер, қуат жүйелері және жарықтандыру шешімдері.",
    "hero.cta.catalog": "Каталогты қарау",
    "hero.cta.about": "Толығырақ",

    // About
    "about.tag": "MULTRON туралы",
    "about.title": "Электронды инфрақұрылымдағы әлемдік көшбасшы",
    "about.description":
      "MULTRON күнделікті және өнеркәсіптік пайдалану үшін озық жабдықтар, электронды құрылғылар мен компоненттерді әзірлейді және өндіреді.",
    "about.stat.products": "Өнімдер",
    "about.stat.countries": "Елдер",
    "about.stat.clients": "B2B клиенттер",
    "about.stat.years": "Жыл",

    // Features
    "features.safety": "Қауіпсіздік",
    "features.safety.desc": "Халықаралық стандарттарға сертификатталған өнімдер",
    "features.technology": "Технология",
    "features.technology.desc": "Заманауи мәселелерге озық шешімдер",
    "features.reliability": "Сенімділік",
    "features.reliability.desc": "Ұзақ уақытқа жасалған өнеркәсіптік компоненттер",

    // Categories
    "categories.title": "Өнім санаттары",
    "categories.subtitle": "Электрондық шешімдердің толық ассортиментін зерттеңіз",
    "categories.viewAll": "Барлығын көру",
    "categories.power": "Қуат көздері",
    "categories.connectors": "Қосқыштар",
    "categories.lighting": "Жарықтандыру",
    "categories.cables": "Кабельдер",
    "categories.protection": "Қорғау",
    "categories.data": "Деректер беру",
    "categories.industrial": "Өнеркәсіптік",
    "categories.mobile": "Мобильді",

    // Products
    "products.title": "Өнімдер",
    "products.subtitle": "Біздің ең сұранысқа ие шешімдерімізді ашыңыз",
    "products.viewAll": "Барлық өнімдер",
    "products.addToCart": "Себетке қосу",
    "products.inStock": "Қоймада бар",
    "products.outOfStock": "Қоймада жоқ",
    "products.new": "Жаңа",
    "products.sale": "Жеңілдік",
    "products.previewTitle": "Біздің өнімдер",
    "products.previewSubtitle": "Multron аксессуарлары мен шешімдерінің ассортиментін зерттеңіз",
    "products.previewAlt": "Multron өнімдерінің жинағы",
    "productsPage.title": "Барлық өнімдер",
    "productsPage.subtitle": "Multron өнімдерінің толық каталогын қараңыз",
    "productsPage.moreProducts": "Және біздің өнімдер қатарында тағы көптеген",

    // Footer
    "footer.description":
      "Электрондық компоненттердің, қуат жүйелерінің және жарықтандыру шешімдерінің әлемдік өндірушісі.",
    "footer.products": "Өнімдер",
    "footer.company": "Компания",
    "footer.support": "Қолдау",
    "footer.legal": "Құқықтық ақпарат",
    "footer.about": "Біз туралы",
    "footer.careers": "Мансап",
    "footer.news": "Жаңалықтар",
    "footer.help": "Анықтама орталығы",
    "footer.shipping": "Жеткізу",
    "footer.returns": "Қайтару",
    "footer.warranty": "Кепілдік",
    "footer.privacy": "Құпиялылық саясаты",
    "footer.terms": "Қызмет шарттары",
    "footer.cookies": "Cookie саясаты",
    "footer.rights": "Барлық құқықтар қорғалған.",
    "footer.newsletter": "Жаңалықтарға жазылыңыз",
    "footer.newsletter.placeholder": "Email енгізіңіз",
    "footer.newsletter.button": "Жазылу",
    "footer.contact": "Байланыс",
    "footer.contact.email": "info@multron.kz",
    "footer.contact.phone": "+7 (727) 123-45-67",
    "footer.contact.address": "г. Алматы, пр. Абая, д. 123",
    "cta.title": "Бірге жұмыс істейік",
    "cta.description": "Серіктестік немесе көтерме сатып алуға қызығасыз ба? Біз сіздің бизнес қажеттіліктеріңізге сәйкес шешімдерді табуға көмектесуге дайынбыз.",
    "cta.button": "Байланысу",

    // Common
    "common.learnMore": "Толығырақ",
    "common.viewDetails": "Толық қарау",
    "common.close": "Жабу",
    "common.menu": "Мәзір",
  },
  zh: {
    // Navigation
    "nav.products": "产品",
    "nav.categories": "分类",
    "nav.about": "关于我们",
    "nav.contact": "联系我们",
    "nav.search": "搜索产品...",
    "nav.cart": "购物车",

    // Hero
    "hero.subtitle": "技术基础设施解决方案",
    "hero.title": "面向未来的工程卓越",
    "hero.description": "为全球工业和消费应用提供优质电子元件、电源系统和照明解决方案。",
    "hero.cta.catalog": "浏览目录",
    "hero.cta.about": "了解更多",

    // About
    "about.tag": "关于 MULTRON",
    "about.title": "电子基础设施的全球领导者",
    "about.description":
      "MULTRON 开发和生产用于日常使用和工业环境的先进设备、电子设备和组件。我们的产品线涵盖移动电子、工作站、生产设施和专业技术设备的解决方案。",
    "about.stat.products": "产品",
    "about.stat.countries": "国家",
    "about.stat.clients": "B2B客户",
    "about.stat.years": "年",

    // Features
    "features.safety": "安全第一",
    "features.safety.desc": "符合国际标准的认证产品",
    "features.technology": "先进技术",
    "features.technology.desc": "应对现代挑战的尖端解决方案",
    "features.reliability": "可靠性",
    "features.reliability.desc": "经久耐用的工业级组件",

    // Categories
    "categories.title": "产品类别",
    "categories.subtitle": "探索我们全面的电子解决方案",
    "categories.viewAll": "查看全部",
    "categories.power": "电源",
    "categories.connectors": "连接器",
    "categories.lighting": "照明",
    "categories.cables": "电缆",
    "categories.protection": "保护",
    "categories.data": "数据传输",
    "categories.industrial": "工业",
    "categories.mobile": "移动",

    // Products
    "products.title": "产品",
    "products.subtitle": "发现我们最受欢迎的解决方案",
    "products.viewAll": "查看所有产品",
    "products.addToCart": "加入购物车",
    "products.inStock": "有库存",
    "products.outOfStock": "缺货",
    "products.new": "新品",
    "products.sale": "促销",
    "products.previewTitle": "我们的产品线",
    "products.previewSubtitle": "探索Multron配件和解决方案系列",
    "products.previewAlt": "Multron产品集合",
    "productsPage.title": "所有产品",
    "productsPage.subtitle": "浏览Multron产品的完整目录",
    "productsPage.moreProducts": "以及我们产品线中的更多产品",

    // Footer
    "footer.description": "电子元件、电源系统和照明解决方案的全球制造商。",
    "footer.products": "产品",
    "footer.company": "公司",
    "footer.support": "支持",
    "footer.legal": "法律信息",
    "footer.about": "关于我们",
    "footer.careers": "职业",
    "footer.news": "新闻",
    "footer.help": "帮助中心",
    "footer.shipping": "配送",
    "footer.returns": "退货",
    "footer.warranty": "保修",
    "footer.privacy": "隐私政策",
    "footer.terms": "服务条款",
    "footer.cookies": "Cookie政策",
    "footer.rights": "版权所有。",
    "footer.newsletter": "订阅我们的通讯",
    "footer.newsletter.placeholder": "输入您的邮箱",
    "footer.newsletter.button": "订阅",
    "footer.contact": "联系方式",
    "footer.contact.email": "info@multron.cn",
    "footer.contact.phone": "+86 400-123-4567",
    "footer.contact.address": "中国北京市科技路123号",
    "cta.title": "让我们一起合作",
    "cta.description": "对合作伙伴关系或批量采购感兴趣？我们随时准备帮助您找到适合您业务需求的解决方案。",
    "cta.button": "联系我们",

    // Common
    "common.learnMore": "了解更多",
    "common.viewDetails": "查看详情",
    "common.close": "关闭",
    "common.menu": "菜单",
  },
  de: {
    // Navigation
    "nav.products": "Produkte",
    "nav.categories": "Kategorien",
    "nav.about": "Über uns",
    "nav.contact": "Kontakt",
    "nav.search": "Produkte suchen...",
    "nav.cart": "Warenkorb",

    // Hero
    "hero.subtitle": "Technologie-Infrastrukturlösungen",
    "hero.title": "Ingenieursexzellenz für morgen",
    "hero.description":
      "Premium-Elektronikkomponenten, Stromversorgungssysteme und Beleuchtungslösungen für industrielle und Verbraucheranwendungen weltweit.",
    "hero.cta.catalog": "Katalog durchsuchen",
    "hero.cta.about": "Mehr erfahren",

    // About
    "about.tag": "Über MULTRON",
    "about.title": "Weltmarktführer in der Elektronik-Infrastruktur",
    "about.description":
      "MULTRON entwickelt und produziert fortschrittliche Geräte, elektronische Komponenten und Bauteile für den täglichen Gebrauch und industrielle Umgebungen. Unsere Produktpalette umfasst Lösungen für mobile Elektronik, Workstations, Produktionsanlagen und spezialisierte technische Ausrüstung.",
    "about.stat.products": "Produkte",
    "about.stat.countries": "Länder",
    "about.stat.clients": "B2B-Kunden",
    "about.stat.years": "Jahre",

    // Features
    "features.safety": "Sicherheit zuerst",
    "features.safety.desc": "Zertifizierte Produkte nach internationalen Standards",
    "features.technology": "Fortschrittliche Technologie",
    "features.technology.desc": "Spitzenlösungen für moderne Herausforderungen",
    "features.reliability": "Bewährte Zuverlässigkeit",
    "features.reliability.desc": "Industriekomponenten für lange Lebensdauer",

    // Categories
    "categories.title": "Produktkategorien",
    "categories.subtitle": "Entdecken Sie unser umfassendes Angebot an Elektroniklösungen",
    "categories.viewAll": "Alle anzeigen",
    "categories.power": "Netzteile",
    "categories.connectors": "Steckverbinder",
    "categories.lighting": "Beleuchtung",
    "categories.cables": "Kabel",
    "categories.protection": "Schutz",
    "categories.data": "Datenübertragung",
    "categories.industrial": "Industrie",
    "categories.mobile": "Mobil",

    // Products
    "products.title": "Produkte",
    "products.subtitle": "Entdecken Sie unsere beliebtesten Lösungen",
    "products.viewAll": "Alle Produkte",
    "products.addToCart": "In den Warenkorb",
    "products.inStock": "Auf Lager",
    "products.outOfStock": "Nicht vorrätig",
    "products.new": "Neu",
    "products.sale": "Angebot",
    "products.previewTitle": "Unser Produktsortiment",
    "products.previewSubtitle": "Entdecken Sie unser Sortiment an Multron-Zubehör und Lösungen",
    "products.previewAlt": "Multron-Produktkollektion",
    "productsPage.title": "Alle Produkte",
    "productsPage.subtitle": "Durchsuchen Sie unseren vollständigen Katalog von Multron-Produkten",
    "productsPage.moreProducts": "Und vieles mehr in unserem Produktsortiment",

    // Footer
    "footer.description":
      "Globaler Hersteller von Elektronikkomponenten, Stromversorgungssystemen und Beleuchtungslösungen.",
    "footer.products": "Produkte",
    "footer.company": "Unternehmen",
    "footer.support": "Support",
    "footer.legal": "Rechtliches",
    "footer.about": "Über uns",
    "footer.careers": "Karriere",
    "footer.news": "Neuigkeiten",
    "footer.help": "Hilfe-Center",
    "footer.shipping": "Versand",
    "footer.returns": "Rückgabe",
    "footer.warranty": "Garantie",
    "footer.privacy": "Datenschutz",
    "footer.terms": "Nutzungsbedingungen",
    "footer.cookies": "Cookie-Richtlinie",
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.newsletter": "Newsletter abonnieren",
    "footer.newsletter.placeholder": "E-Mail eingeben",
    "footer.newsletter.button": "Abonnieren",
    "footer.contact": "Kontakt",
    "footer.contact.email": "info@multron.de",
    "footer.contact.phone": "+49 (0) 30 12345678",
    "footer.contact.address": "Technologiestraße 123, 10115 Berlin, Deutschland",
    "cta.title": "Lassen Sie uns zusammenarbeiten",
    "cta.description": "Interessiert an Partnerschaft oder Großbestellungen? Wir sind hier, um Ihnen zu helfen, die richtigen Lösungen für Ihre Geschäftsanforderungen zu finden.",
    "cta.button": "Kontakt aufnehmen",

    // Common
    "common.learnMore": "Mehr erfahren",
    "common.viewDetails": "Details ansehen",
    "common.close": "Schließen",
    "common.menu": "Menü",
  },
}

export function t(key: string, locale: Locale): string {
  return translations[locale]?.[key] || translations.en[key] || key
}

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
    "nav.about": "О нас",
    "nav.contact": "Контакты",
    "nav.search": "Поиск...",
    "nav.cart": "Корзина",

    // Hero
    "hero.subtitle": "Решения для тех. инфраструктуры",
    "hero.title": "Инженерное совершенство будущего",
    "hero.description":
      "Премиальные электронные компоненты, системы питания и световые решения для промышленности и быта по всему миру.",
    "hero.cta.catalog": "В каталог",
    "hero.cta.about": "Подробнее",

    // About
    "about.tag": "О MULTRON",
    "about.title": "Лидер в электронной инфраструктуре",
    "about.description":
      "MULTRON создает передовое оборудование и компоненты для быта и промышленности. Мы предлагаем решения для мобильной электроники, рабочих станций, производств и спецтехники.",
    "about.stat.products": "Товаров",
    "about.stat.countries": "Стран",
    "about.stat.clients": "B2B Клиентов",
    "about.stat.years": "Лет",

    // Features
    "features.safety": "Безопасность",
    "features.safety.desc": "Сертификация по мировым стандартам",
    "features.technology": "Технологии",
    "features.technology.desc": "Передовые решения современных задач",
    "features.reliability": "Надёжность",
    "features.reliability.desc": "Долговечные промышленные компоненты",

    // Categories
    "categories.title": "Категории",
    "categories.subtitle": "Полный спектр наших электронных решений",
    "categories.viewAll": "Все товары",
    "categories.power": "Питание",
    "categories.connectors": "Разъёмы",
    "categories.lighting": "Освещение",
    "categories.cables": "Кабели",
    "categories.protection": "Защита",
    "categories.data": "Передача данных",
    "categories.industrial": "Промышленное",
    "categories.mobile": "Мобильное",

    // Products
    "products.title": "Продукция",
    "products.subtitle": "Наши самые востребованные решения",
    "products.viewAll": "Смотреть всё",
    "products.addToCart": "В корзину",
    "products.inStock": "В наличии",
    "products.outOfStock": "Нет в наличии",
    "products.new": "Новинка",
    "products.sale": "Скидка",
    "products.previewTitle": "Линейка товаров",
    "products.previewSubtitle": "Изучите ассортимент решений Multron",
    "products.previewAlt": "Коллекция Multron",
    "productsPage.title": "Каталог",
    "productsPage.subtitle": "Полный список продукции Multron",
    "productsPage.moreProducts": "И многое другое в нашем каталоге",

    // Footer
    "footer.description": "Мировой производитель электронных компонентов, питания и освещения.",
    "footer.products": "Продукция",
    "footer.company": "Компания",
    "footer.support": "Поддержка",
    "footer.legal": "Инфо",
    "footer.about": "О нас",
    "footer.careers": "Карьера",
    "footer.news": "Новости",
    "footer.help": "Помощь",
    "footer.shipping": "Доставка",
    "footer.returns": "Возврат",
    "footer.warranty": "Гарантия",
    "footer.privacy": "Конфиденциальность",
    "footer.terms": "Условия",
    "footer.cookies": "Cookies",
    "footer.rights": "Все права защищены.",
    "footer.newsletter": "Подписка на новости",
    "footer.newsletter.placeholder": "Ваш email",
    "footer.newsletter.button": "Подписаться",
    "footer.contact": "Контакты",
    "footer.contact.email": "info@multron.ru",
    "footer.contact.phone": "+7 (495) 123-45-67",
    "footer.contact.address": "г. Москва, ул. Технологическая, д. 123",
    "cta.title": "Сотрудничество",
    "cta.description": "Интересует партнерство или опт? Мы поможем подобрать решения для вашего бизнеса.",
    "cta.button": "Связаться",

    // Common
    "common.learnMore": "Подробнее",
    "common.viewDetails": "Детали",
    "common.close": "Закрыть",
    "common.menu": "Меню",
  },
  kz: {
    // Navigation
    "nav.products": "Өнімдер",
    "nav.categories": "Санаттар",
    "nav.about": "Біз туралы",
    "nav.contact": "Байланыс",
    "nav.search": "Іздеу...",
    "nav.cart": "Себет",

    // Hero
    "hero.subtitle": "Тех. инфрақұрылым шешімдері",
    "hero.title": "Болашақ инженерлік жетістігі",
    "hero.description":
      "Өнеркәсіп пен тұрмысқа арналған премиум электронды компоненттер, қуат жүйелері және жарықтандыру шешімдері.",
    "hero.cta.catalog": "Каталогқа",
    "hero.cta.about": "Толығырақ",

    // About
    "about.tag": "MULTRON туралы",
    "about.title": "Электронды саладағы көшбасшы",
    "about.description":
      "MULTRON тұрмыстық және өндірістік озық жабдықтар мен компоненттерді шығарады. Біз мобильді электроника, жұмыс станциялары және арнайы техника үшін шешімдер ұсынамыз.",
    "about.stat.products": "Өнімдер",
    "about.stat.countries": "Елдер",
    "about.stat.clients": "B2B Клиенттер",
    "about.stat.years": "Жыл",

    // Features
    "features.safety": "Қауіпсіздік",
    "features.safety.desc": "Халықаралық стандартқа сай өнімдер",
    "features.technology": "Технология",
    "features.technology.desc": "Заманауи мәселелердің озық шешімі",
    "features.reliability": "Сенімділік",
    "features.reliability.desc": "Ұзақ мерзімді өнеркәсіптік бөлшектер",

    // Categories
    "categories.title": "Санаттар",
    "categories.subtitle": "Электрондық шешімдердің толық топтамасы",
    "categories.viewAll": "Барлығы",
    "categories.power": "Қуат көздері",
    "categories.connectors": "Қосқыштар",
    "categories.lighting": "Жарықтандыру",
    "categories.cables": "Кабельдер",
    "categories.protection": "Қорғау",
    "categories.data": "Деректер",
    "categories.industrial": "Өнеркәсіп",
    "categories.mobile": "Мобильді",

    // Products
    "products.title": "Өнімдер",
    "products.subtitle": "Ең сұранысқа ие шешімдеріміз",
    "products.viewAll": "Барлық өнімдер",
    "products.addToCart": "Себетке салу",
    "products.inStock": "Қоймада бар",
    "products.outOfStock": "Қоймада жоқ",
    "products.new": "Жаңа",
    "products.sale": "Жеңілдік",
    "products.previewTitle": "Өнім желісі",
    "products.previewSubtitle": "Multron аксессуарлары мен шешімдері",
    "products.previewAlt": "Multron жинағы",
    "productsPage.title": "Каталог",
    "productsPage.subtitle": "Multron өнімдерінің толық тізімі",
    "productsPage.moreProducts": "Және тағы басқалары каталогта",

    // Footer
    "footer.description": "Электрондық компоненттер мен қуат жүйелерінің әлемдік өндірушісі.",
    "footer.products": "Өнімдер",
    "footer.company": "Компания",
    "footer.support": "Қолдау",
    "footer.legal": "Ақпарат",
    "footer.about": "Біз туралы",
    "footer.careers": "Мансап",
    "footer.news": "Жаңалықтар",
    "footer.help": "Көмек",
    "footer.shipping": "Жеткізу",
    "footer.returns": "Қайтару",
    "footer.warranty": "Кепілдік",
    "footer.privacy": "Құпиялылық",
    "footer.terms": "Ережелер",
    "footer.cookies": "Cookies",
    "footer.rights": "Барлық құқық қорғалған.",
    "footer.newsletter": "Жаңалыққа жазылу",
    "footer.newsletter.placeholder": "Сіздің email",
    "footer.newsletter.button": "Жазылу",
    "footer.contact": "Байланыс",
    "footer.contact.email": "info@multron.kz",
    "footer.contact.phone": "+7 (727) 123-45-67",
    "footer.contact.address": "г. Алматы, пр. Абая, д. 123",
    "cta.title": "Серіктестік",
    "cta.description": "Серіктестік немесе көтерме сауда қызықтыра ма? Бизнесіңізге арналған шешімдерді табуға көмектесеміз.",
    "cta.button": "Хабарласу",

    // Common
    "common.learnMore": "Толығырақ",
    "common.viewDetails": "Ашу",
    "common.close": "Жабу",
    "common.menu": "Мәзір",
  },
  zh: {
    // Navigation
    "nav.products": "产品",
    "nav.categories": "分类",
    "nav.about": "关于我们",
    "nav.contact": "联系我们",
    "nav.search": "搜索...",
    "nav.cart": "购物车",

    // Hero
    "hero.subtitle": "技术基础设施解决方案",
    "hero.title": "面向未来的卓越工程",
    "hero.description": "全球工业和消费应用的高端电子元件、电源系统和照明解决方案。",
    "hero.cta.catalog": "浏览目录",
    "hero.cta.about": "了解更多",

    // About
    "about.tag": "关于 MULTRON",
    "about.title": "电子基础设施的全球领袖",
    "about.description":
      "MULTRON 研发并生产用于日常和工业的先进设备与组件。产品涵盖移动电子、工作站、生产设施及专业技术设备的解决方案。",
    "about.stat.products": "产品",
    "about.stat.countries": "国家",
    "about.stat.clients": "B2B客户",
    "about.stat.years": "年",

    // Features
    "features.safety": "安全第一",
    "features.safety.desc": "符合国际标准的认证产品",
    "features.technology": "先进技术",
    "features.technology.desc": "应对现代挑战的尖端方案",
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
    "products.viewAll": "查看全部",
    "products.addToCart": "加入购物车",
    "products.inStock": "有库存",
    "products.outOfStock": "缺货",
    "products.new": "新品",
    "products.sale": "促销",
    "products.previewTitle": "产品系列",
    "products.previewSubtitle": "探索Multron配件和解决方案",
    "products.previewAlt": "Multron产品集",
    "productsPage.title": "所有产品",
    "productsPage.subtitle": "浏览Multron完整产品目录",
    "productsPage.moreProducts": "更多产品敬请期待",

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
    "footer.cookies": "Cookie策略",
    "footer.rights": "版权所有。",
    "footer.newsletter": "订阅通讯",
    "footer.newsletter.placeholder": "输入邮箱",
    "footer.newsletter.button": "订阅",
    "footer.contact": "联系方式",
    "footer.contact.email": "info@multron.cn",
    "footer.contact.phone": "+86 400-123-4567",
    "footer.contact.address": "中国北京市科技路123号",
    "cta.title": "合作共赢",
    "cta.description": "有意合作或批量采购？我们随时为您提供适合业务需求的解决方案。",
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
    "nav.search": "Suche...",
    "nav.cart": "Warenkorb",

    // Hero
    "hero.subtitle": "Technologie-Infrastrukturlösungen",
    "hero.title": "Ingenieursexzellenz für morgen",
    "hero.description":
      "Premium-Elektronik, Stromversorgungssysteme und Lichtlösungen für industrielle und private Anwendungen weltweit.",
    "hero.cta.catalog": "Zum Katalog",
    "hero.cta.about": "Mehr Infos",

    // About
    "about.tag": "Über MULTRON",
    "about.title": "Weltmarktführer für E-Infrastruktur",
    "about.description":
      "MULTRON entwickelt fortschrittliche Geräte und Komponenten für Alltag und Industrie. Unser Portfolio umfasst Lösungen für mobile Elektronik, Workstations, Produktion und Spezialtechnik.",
    "about.stat.products": "Produkte",
    "about.stat.countries": "Länder",
    "about.stat.clients": "B2B-Kunden",
    "about.stat.years": "Jahre",

    // Features
    "features.safety": "Sicherheit",
    "features.safety.desc": "Zertifiziert nach internationalen Normen",
    "features.technology": "Technologie",
    "features.technology.desc": "Spitzenlösungen für moderne Aufgaben",
    "features.reliability": "Zuverlässigkeit",
    "features.reliability.desc": "Langlebige Industriekomponenten",

    // Categories
    "categories.title": "Kategorien",
    "categories.subtitle": "Unser umfassendes Angebot an Elektroniklösungen",
    "categories.viewAll": "Alle zeigen",
    "categories.power": "Netzteile",
    "categories.connectors": "Steckverbinder",
    "categories.lighting": "Beleuchtung",
    "categories.cables": "Kabel",
    "categories.protection": "Schutz",
    "categories.data": "Datentransfer",
    "categories.industrial": "Industrie",
    "categories.mobile": "Mobil",

    // Products
    "products.title": "Produkte",
    "products.subtitle": "Unsere beliebtesten Lösungen",
    "products.viewAll": "Alle Produkte",
    "products.addToCart": "In den Korb",
    "products.inStock": "Auf Lager",
    "products.outOfStock": "Ausverkauft",
    "products.new": "Neu",
    "products.sale": "Sale",
    "products.previewTitle": "Sortiment",
    "products.previewSubtitle": "Entdecken Sie Multron-Zubehör und Lösungen",
    "products.previewAlt": "Multron Kollektion",
    "productsPage.title": "Katalog",
    "productsPage.subtitle": "Der vollständige Katalog der Multron-Produkte",
    "productsPage.moreProducts": "Und vieles mehr in unserem Sortiment",

    // Footer
    "footer.description": "Globaler Hersteller von Elektronikkomponenten, Stromversorgung und Lichtlösungen.",
    "footer.products": "Produkte",
    "footer.company": "Firma",
    "footer.support": "Support",
    "footer.legal": "Rechtliches",
    "footer.about": "Über uns",
    "footer.careers": "Karriere",
    "footer.news": "News",
    "footer.help": "Hilfe",
    "footer.shipping": "Versand",
    "footer.returns": "Retouren",
    "footer.warranty": "Garantie",
    "footer.privacy": "Datenschutz",
    "footer.terms": "AGB",
    "footer.cookies": "Cookies",
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.newsletter": "Newsletter",
    "footer.newsletter.placeholder": "Ihre E-Mail",
    "footer.newsletter.button": "Abonnieren",
    "footer.contact": "Kontakt",
    "footer.contact.email": "info@multron.de",
    "footer.contact.phone": "+49 (0) 30 12345678",
    "footer.contact.address": "Technologiestraße 123, 10115 Berlin",
    "cta.title": "Zusammenarbeit",
    "cta.description": "Interesse an Partnerschaft oder Großbestellung? Wir finden die passenden Lösungen für Ihr Geschäft.",
    "cta.button": "Kontaktieren",

    // Common
    "common.learnMore": "Mehr erfahren",
    "common.viewDetails": "Details",
    "common.close": "Schließen",
    "common.menu": "Menü",
  },
}

export function t(key: string, locale: Locale): string {
  return translations[locale]?.[key] || translations.en[key] || key
}

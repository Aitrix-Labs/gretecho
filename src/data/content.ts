import { asset } from '../asset'

export const navLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Our Solutions', to: '/solutions' },
  { label: 'Business Verticals', to: '/verticals' },
  { label: 'News & Updates', to: '/news' },
  { label: 'Career', to: '/career' },
  { label: 'Contact', to: '/contact' },
]

export const stats = [
  {
    value: '2',
    label: 'Countries',
    description:
      'With our innovation center in Nepal and business center in Dubai, we continue to expand our horizons',
    tone: 'sky',
    image: asset('images/stat-countries.jpg'),
  },
  {
    value: '50+',
    label: 'BFI Partners',
    description:
      "We are the trusted technology partner for leading Banks and FI's, empowering them to deliver seamless digital experiences",
    tone: 'amber',
    image: asset('images/stat-partners.jpg'),
  },
  {
    value: '26M+',
    label: 'Users',
    description:
      'Our technology touches the lives of millions of people, simplifying their access to financial services',
    tone: 'cyan',
    image: asset('images/stat-users.jpg'),
  },
  {
    value: '1200+',
    label: 'Strong Team',
    description:
      'Guided by our values, our workforce comprises experienced technologists, domain experts, and creative thinkers',
    tone: 'rose',
    image: asset('images/stat-team.jpg'),
  },
] as const

export const solutions = [
  {
    id: 'omnichannel',
    title: 'Omnichannel Banking',
    description:
      'By seamlessly integrating mobile, web and branch banking, our Omnichannel Banking solution is designed to unify and elevate the customer experience across all touchpoints.',
    useCase:
      'BankXP, our omnichannel banking platform, is trusted by 50+ banks, enabling them to deliver a complete and consistent digital banking experience to 23M+ customers through self-service and assisted options.',
    image: asset('images/sol-omnichannel.jpg'),
    metrics: [
      { value: '50+', label: 'Banks' },
      { value: '23M+', label: 'Customers' },
      { value: '2.2M+', label: 'Transactions Daily' },
      { value: '75%', label: 'Reduction in Branch Footfall' },
    ],
  },
  {
    id: 'neobanking',
    title: 'Neobanking',
    description:
      'Our Neobanking solution, a cutting-edge Banking as a Service (BaaS) platform, enables banks to foster innovation by reducing operational complexities and accelerating time-to-market through fully digital, customer-centric banking experiences.',
    useCase:
      'OrangeNXT is a digital-only banking service, the first of its kind in Nepal. Designed as a next-gen digital banking platform, it caters to the digital native by providing features like digital account opening, goal based savings and personal finance management.',
    image: asset('images/sol-neobanking.jpg'),
    metrics: [
      { value: '100%', label: 'Digital Onboarding' },
      { value: '100%', label: 'Digital Operations' },
    ],
  },
  {
    id: 'wallet',
    title: 'Digital Wallet',
    description:
      'Our foray into Fintech! Over 15 years of continuous development and innovation has made our digital wallet solution a powerhouse product capable of functioning as an ecosystem on its own. It seamlessly connects customers, merchants, agents and banks to provide services that go beyond payments.',
    useCase:
      "eSewa is South Asia's first digital wallet and has emerged as Nepal's most popular and widely-used wallet. eSewa has been instrumental in revolutionizing the digital payments landscape in Nepal.",
    image: asset('images/sol-wallet.jpg'),
    metrics: [
      { value: '3M+', label: 'Active Users' },
      { value: '250K+', label: 'Agents' },
      { value: '425K+', label: 'Merchants' },
      { value: '$275M+', label: 'Avg Monthly Transactions' },
    ],
  },
  {
    id: 'lending',
    title: 'Digital Lending',
    description:
      'Our digital lending solution enables instant, automated, and collateral-free loans through a fully digital process. It offers an end-to-end lending solution powered by a Decision Analytics System to assess credit worthiness and a Loan Management System that automates the entire lending cycle.',
    useCase:
      "Foneloan is a next-gen digital lending solution that empowers banks to provide quick, hassle-free loans directly through customers' mobile devices.",
    image: asset('images/sol-lending.jpg'),
    metrics: [
      { value: '100K+', label: 'Users' },
      { value: '320K+', label: 'Loans Disbursed' },
      { value: '$57M+', label: 'Loan Volume' },
    ],
  },
  {
    id: 'payments',
    title: 'Interoperable Payment Switch',
    description:
      'Our Interoperable Payment System integrates various financial players into a unified system, enabling rapid adoption and seamless transactions by leveraging cutting-edge technologies like real-time payment processing, QR codes, NFC, and digital interfaces.',
    useCase:
      "Fonepay is Nepal's largest payment network that connects BFI's, Merchants and Consumers through an interoperable ecosystem.",
    image: asset('images/sol-payments.jpg'),
    metrics: [
      { value: '60+', label: "Partner BFI's" },
      { value: '20M+', label: 'Customers' },
      { value: '1.5M+', label: 'QR Merchants' },
      { value: '$25B+', label: 'Yearly Transaction Volume' },
    ],
  },
  {
    id: 'loyalty',
    title: 'Loyalty Management',
    description:
      'Our innovative reward system empowers customers with personalized benefits, including points, cashback, and discounts, elevating them to loyal advocates who drive long-term growth and success.',
    useCase:
      'Fonepoints is a digital loyalty management platform that enables businesses to provide enhanced loyalty experiences for their customers.',
    image: asset('images/sol-loyalty.jpg'),
    metrics: [
      { value: '1.68M+', label: 'Customers' },
      { value: '900+', label: 'Active Offers' },
    ],
  },
]

export const verticals = [
  {
    name: 'Gretecho',
    tag: 'Fintech',
    logo: asset('images/logos/gretecho.svg'),
  },
  { name: 'eSewa', tag: 'Digital Wallet', logo: asset('images/logos/esewa.svg') },
  { name: 'Fonepay', tag: 'Payment System', logo: asset('images/logos/fonepay.svg') },
  { name: 'Foneloan', tag: 'Digital Lending', logo: asset('images/logos/foneloan.svg') },
  {
    name: 'eSewa Money Transfer',
    tag: 'Remittance',
    logo: asset('images/logos/esewa-mt.svg'),
  },
  { name: 'FoneNXT', tag: 'Neo Banking', logo: asset('images/logos/fonenxt.svg') },
  { name: 'Foneinsure', tag: 'Insurtech', logo: asset('images/logos/foneinsure.svg') },
  {
    name: 'Fonepoints',
    tag: 'Loyalty & Rewards',
    logo: asset('images/logos/fonepoints.svg'),
  },
  { name: 'eXtensoData', tag: 'Big Data & AI', logo: asset('images/logos/extensodata.svg') },
  {
    name: 'Vidhypro Crafts',
    tag: 'Enterprise Tech',
    logo: asset('images/logos/vidhypro.svg'),
  },
]

export const news = [
  {
    title: 'Foneloan Marks Six Years of Trust, Partnership and Progress',
    excerpt:
      'Foneloan has marked its sixth anniversary, celebrating a journey shaped by innovation, partnership, and a shared commitment to making access to finance simpler.',
    date: 'Featured',
    featured: true,
    image: asset('images/news-featured.jpg'),
  },
  {
    title: "Gretecho Contributes Rs. 1.35 Crore to Prime Minister's Disaster Relief Fund",
    date: 'Sep 04, 2026',
  },
  {
    title: "Bankers' Meetup 2026 Highlights Shift Toward Digital Transformation",
    date: 'May 11, 2026',
  },
  {
    title: 'New Leadership Appointed at Gretecho',
    date: 'Apr 16, 2026',
  },
  {
    title: 'Foneloan Partners with Rastriya Banijya Bank to Expand Digital Credit',
    date: 'Feb 19, 2026',
  },
]

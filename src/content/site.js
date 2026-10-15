export const promises = [
  {
    title: 'Your workflow, not ours',
    body: 'We digitise how you already work. Your team recognises it on day one, so there is nothing to retrain.',
  },
  {
    title: 'One source of truth',
    body: 'No more versions of the same spreadsheet, lost forms, or asking who has the latest copy.',
  },
  {
    title: 'Control built in',
    body: 'Permission gates, approval chains and an audit trail. Nothing goes out without the right sign-off.',
  },
  {
    title: 'Start small, own it',
    body: 'One process first, at a fixed price, with a monthly payment option. The system is yours.',
  },
];

export const howItWorks = [
  {
    step: '01',
    name: 'Map',
    duration: '1-2 weeks',
    body: 'A paid Workflow Audit. We sit with your team, collect every form, spreadsheet and template, and map who approves what. You get the cost of your current process in rands and a fixed quote.',
  },
  {
    step: '02',
    name: 'Build',
    duration: '3-6 weeks',
    body: 'We assemble your system from our tested core modules and build only the parts that are unique to you. Same steps, same sign-offs, without the retyping.',
  },
  {
    step: '03',
    name: 'Run',
    duration: 'Monthly',
    body: 'Hosting, backups, security updates, POPIA housekeeping and support for one flat monthly fee. Not per user. Add the next process when you are ready.',
  },
];

export const solutions = {
  quoting: {
    slug: 'quoting',
    label: 'Quoting & approvals',
    audience: 'Manufacturers, fabricators and installers',
    headline: 'Quotes that build themselves, and never leave without sign-off.',
    intro:
      'If your estimators price jobs from a spec, a rate table and a mark-up spreadsheet, we turn that exact method into a system. The price builds itself, a manager approves it, and finance sends it.',
    today: [
      'Specs arrive by email and WhatsApp and get retyped into Excel',
      'Every estimator has their own copy of the price list',
      'Approvals happen by walking over to someone’s desk',
      'Nobody can say which version of a quote the client accepted',
    ],
    after: [
      'Spec captured once, price built from your rate table and mark-ups',
      'One price list, updated in one place, used by everyone',
      'Approval gates by value or margin, with amendments looping back',
      'Every quote tracked from request to accepted, with a full history',
    ],
    flow: ['Spec in', 'Price builds', 'Adjust', 'Approve', 'Send', 'Track'],
  },
  applications: {
    slug: 'applications',
    label: 'Applications & payments',
    audience: 'Bursary trusts, funds and grant-makers',
    headline: 'No applicant left waiting because a form was lost.',
    intro:
      'Download, print, certify, post, capture, verify, approve, pay, renew. We turn your application cycle into one system your administrators and trustees can trust, with the data kept in your own cloud if you prefer.',
    today: [
      'Printable forms and certified copies arrive by post and email',
      'Administrators retype applications into spreadsheets',
      'Verification lives in someone’s inbox',
      'Payments to institutions are tracked by hand and slip',
    ],
    after: [
      'Online application with document upload on any phone',
      'A verification checklist per applicant, with notes and history',
      'Committee approval with a clear audit trail',
      'Payment schedules to institutions, renewals and reminders built in',
    ],
    flow: ['Apply', 'Upload', 'Verify', 'Approve', 'Pay', 'Renew'],
  },
  operations: {
    slug: 'operations',
    label: 'Job cards & timesheets',
    audience: 'Security, staffing, logistics, facilities and workshops',
    headline: 'Stop hiring people to retype paper.',
    intro:
      'If your teams fill in job cards, timesheets or inspection sheets on paper, and someone in the office captures them into Excel, we replace the capture step with a system your field teams use directly.',
    today: [
      'Paper job cards and timesheets collected weekly',
      'A data capturer retypes them into Excel',
      'Errors surface only when invoices or payroll go wrong',
      'Managers chase signatures across sites',
    ],
    after: [
      'Field teams capture once on their phones, even offline',
      'Supervisor sign-off in the same flow',
      'Clean data straight into invoicing and payroll exports',
      'Dashboards by site, team and client',
    ],
    flow: ['Capture', 'Sign off', 'Check', 'Approve', 'Invoice', 'Report'],
  },
};

export const offers = [
  {
    name: 'Workflow Audit',
    tag: 'Start here',
    price: 'R6,500',
    priceNote: 'fixed · credited in full to your build within 60 days',
    timeline: '1-2 weeks',
    features: [
      'Two working sessions, on-site or online',
      'Map of your current process and approval gates',
      'Cost of the current process in hours and rands',
      'Recommended system scope',
      'Fixed quote with three options',
    ],
    highlight: true,
  },
  {
    name: 'Starter',
    tag: 'One process',
    price: 'from R35,000',
    priceNote: 'setup · plus R3,500-R6,500 / month',
    timeline: '3-5 weeks',
    features: [
      'One workflow, up to ~10 users',
      'Core modules plus light customisation',
      'Import from your existing Excel files',
      'Training and hosting included',
    ],
  },
  {
    name: 'Growth',
    tag: 'Connected processes',
    price: 'from R80,000',
    priceNote: 'setup · plus R6,500-R12,000 / month',
    timeline: '6-10 weeks',
    features: [
      '2-4 linked workflows, up to ~40 users',
      'Multi-level approvals and dashboards',
      'Document generation',
      'One accounting integration (Xero, Sage)',
    ],
  },
  {
    name: 'Dedicated platform',
    tag: 'Full build',
    price: 'from R180,000',
    priceNote: 'plus retainer from R12,000 / month',
    timeline: '3-6 months, phased',
    features: [
      'Complex rules and multiple integrations',
      'Hosted in your own cloud if required',
      'Phased delivery with milestone payments',
    ],
  },
];

export const paymentModels = [
  {
    name: 'Own it',
    body: 'Pay the setup in milestones (40% start, 40% go-live, 20% after 30 days live), then a monthly support fee.',
    bestFor: 'Businesses with budget set aside, trusts with an approved budget',
  },
  {
    name: 'Rent-to-own',
    body: 'Spread the setup over 24 or 36 months, bundled with support. You own the system at the end of the term.',
    bestFor: 'Most SMEs: nothing big upfront',
  },
  {
    name: 'Managed subscription',
    body: 'Lower setup and a higher monthly fee. We host and maintain everything, with an option to buy it out later.',
    bestFor: 'Teams who just want it to work',
  },
];

export const pricingFaq = [
  {
    q: 'Why is there a fee for the audit?',
    a: 'Because the audit is real work with a real deliverable: a map of your process, what it costs you today, and a fixed quote. It is useful even if you never build with us. If you do, the full R6,500 is credited to your build.',
  },
  {
    q: 'Do you charge per user?',
    a: 'No. The monthly fee is flat. Adding a colleague should never be a budget conversation.',
  },
  {
    q: 'What does the monthly fee cover?',
    a: 'Hosting, backups, security updates, POPIA housekeeping (access logs, retention), support, and a small allowance of change hours every month. Bigger changes are quoted separately.',
  },
  {
    q: 'What if we have been burned by developers before?',
    a: 'That is common, and fair. We work in milestones, can start with a 30-day pilot on your real data, and you do not pay the setup fee unless you continue.',
  },
  {
    q: 'Who owns the system?',
    a: 'You do: immediately on the Own it model, or at the end of the term on Rent-to-own.',
  },
  {
    q: 'Where does our data live?',
    a: 'In South Africa or your own cloud account, with role-based access and an audit trail of who did what.',
  },
];

export const notList = [
  { title: 'Not a form tool', body: 'A form tool collects data. We run the process behind it: the approvals, the documents, the payments.' },
  { title: 'Not an ERP project', body: 'No year-long implementation. One process live in weeks, shaped to how you work.' },
  { title: 'Not per-user licences', body: 'Flat monthly. Your costs do not grow every time you hire.' },
];

export const signs = [
  { title: 'You have a "master" spreadsheet only one person really understands', body: 'If they are on leave, quotes or payments slow down. That is key-person risk, not a process.' },
  { title: 'The same information gets typed more than once', body: 'From a form into Excel, from Excel into an invoice, from the invoice into an email. Every retype is a chance for an error.' },
  { title: 'Approvals happen in corridors and WhatsApp groups', body: 'When something goes wrong, nobody can show who signed off on what, or when.' },
  { title: 'You are hiring someone to capture data', body: 'A data capturer job ad is the clearest sign the process is doing the work a system should.' },
  { title: 'People ask "which version is the latest?"', body: 'Multiple copies of the truth mean decisions are made on stale numbers.' },
  { title: 'Paper files hold personal information', body: 'Under POPIA you must know who accessed personal information and protect it. Filing cabinets cannot tell you that.' },
];

// Synthetic demo data only. Never use a real client's names, prices or documents here.
export const demos = {
  quoting: {
    product: 'Quotes',
    company: 'Karoo Fabrication (demo)',
    reference: 'Q-2027-0148',
    steps: [
      {
        title: 'Spec captured',
        caption: 'The request comes in once. Nobody retypes it.',
        panel: {
          type: 'form',
          rows: [
            ['Client', 'Vaal Water Board (demo)'],
            ['Product', 'HDPE pressure pipe, PE100'],
            ['Class / diameter', 'PN10 · 250 mm'],
            ['Length', '1,200 m'],
            ['Fittings', '24 × electrofusion couplers'],
            ['Delivery', 'Vanderbijlpark, 14 days'],
          ],
        },
      },
      {
        title: 'Price builds itself',
        caption: 'Your rate table and mark-ups, applied the way your estimators already do it.',
        panel: {
          type: 'table',
          columns: ['Line', 'Qty', 'Rate', 'Amount'],
          rows: [
            ['PE100 PN10 250 mm', '1,200 m', 'R612.40', 'R734,880'],
            ['Electrofusion coupler 250', '24', 'R1,980', 'R47,520'],
            ['Delivery (zone 3)', '1', 'R18,500', 'R18,500'],
          ],
          totals: [
            ['Cost build-up', 'R800,900'],
            ['Mark-up (28%)', 'R224,252'],
            ['Quote total', 'R1,025,152'],
          ],
        },
      },
      {
        title: 'Estimator adjusts',
        caption: 'A 6% discount drops the margin below 22%, so the system routes it for approval.',
        panel: {
          type: 'adjust',
          field: 'Discount',
          before: '0%',
          after: '6%',
          metric: 'Margin',
          metricBefore: '21.9%',
          threshold: 'Approval needed below 22%',
        },
      },
      {
        title: 'Manager approves',
        caption: 'The right person signs off, from their phone if they need to. It is all on record.',
        panel: {
          type: 'approval',
          approver: 'Sales manager',
          note: 'Repeat client, approved for this order only.',
        },
      },
      {
        title: 'Finance sends',
        caption: 'Your quote template, your terms, generated and sent from one place.',
        panel: {
          type: 'send',
          document: 'Q-2027-0148.pdf',
          to: 'procurement@vaalwater.demo',
        },
      },
      {
        title: 'Tracked to the end',
        caption: 'Everyone can see where every quote is. Amendments go back through approval.',
        panel: {
          type: 'timeline',
          events: [
            ['Requested', 'Mon 09:12'],
            ['Priced', 'Mon 09:31'],
            ['Approved', 'Mon 10:05'],
            ['Sent', 'Mon 10:07'],
            ['Accepted', 'Wed 14:40'],
          ],
        },
      },
    ],
  },
  applications: {
    product: 'Bursaries',
    company: 'Ubuntu Education Fund (demo)',
    reference: 'APP-2027-0412',
    steps: [
      {
        title: 'Applies on a phone',
        caption: 'A guardian completes the application online. No printing, no post office.',
        panel: {
          type: 'form',
          rows: [
            ['Learner', 'Lerato M. (demo)'],
            ['Grade (2027)', 'Grade 10'],
            ['School', 'Thaba Secondary (demo)'],
            ['Guardian', 'Parent, employed'],
            ['Household income', 'Under threshold'],
            ['Documents', '4 of 4 uploaded'],
          ],
        },
      },
      {
        title: 'Documents checked',
        caption: 'A checklist per applicant replaces the inbox and the filing cabinet.',
        panel: {
          type: 'table',
          columns: ['Document', 'Status', 'Checked by', ''],
          rows: [
            ['Certified ID', 'Verified', 'Administrator', '✓'],
            ['Latest school report', 'Verified', 'Administrator', '✓'],
            ['Proof of income', 'Verified', 'Administrator', '✓'],
            ['School fee invoice', 'Verified', 'Administrator', '✓'],
          ],
          totals: [['Verification', 'Complete']],
        },
      },
      {
        title: 'Rules applied',
        caption: 'Your eligibility rules run the same way every time.',
        panel: {
          type: 'adjust',
          field: 'Eligibility score',
          before: '-',
          after: '86 / 100',
          metric: 'Recommendation',
          metricBefore: 'Award',
          threshold: 'Committee review required for all awards',
        },
      },
      {
        title: 'Committee approves',
        caption: 'Trustees approve with full context, and every decision is recorded.',
        panel: {
          type: 'approval',
          approver: 'Bursary committee',
          note: 'Approved at the March sitting.',
        },
      },
      {
        title: 'Award letter sent',
        caption: 'Award letters and school payment schedules generated automatically.',
        panel: {
          type: 'send',
          document: 'Award-APP-2027-0412.pdf',
          to: 'guardian (via email and WhatsApp)',
        },
      },
      {
        title: 'Paid on time',
        caption: 'Instalments to the school are scheduled, tracked and reconciled.',
        panel: {
          type: 'timeline',
          events: [
            ['Applied', '12 Jan'],
            ['Verified', '19 Jan'],
            ['Approved', '3 Mar'],
            ['Term 1 paid', '5 Mar'],
            ['Term 2 scheduled', '15 Apr'],
          ],
        },
      },
    ],
  },
};

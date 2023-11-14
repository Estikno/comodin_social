import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: "Inici",
      href: getPermalink('/')
    },
    {
      text: "Nosaltres",
      href: getPermalink('/about')
    },
    {
      text: "Totes les ajudes",
      href: getPermalink('/services')
    },
    {
      text: 'Ajudes',
      links: [
        {
          text: 'IMV',
          href: getPermalink('/ajudes/imv'),
        },
        {
          text: 'P. Perdida Vivenda',
          href: getPermalink('/ajudes/perdidavivenda'),
        },
        {
          text: 'P. Deute Lloguer',
          href: getPermalink('/ajudes/deutelloguer'),
        },
        {
          text: 'P. Menors 16',
          href: getPermalink('/ajudes/menors'),
        },
      ],
    },
    /*{
      text: 'Pages',
      links: [
        {
          text: 'Features (Anchor Link)',
          href: getPermalink('/#features'),
        },
        {
          text: 'Services',
          href: getPermalink('/services'),
        },
        {
          text: 'Pricing',
          href: getPermalink('/pricing'),
        },
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Landing',
      links: [
        {
          text: 'Lead Generation',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Long-form Sales',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Click-Through',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Product Details (or Services)',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'Subscription',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },
    {
      text: 'Widgets',
      href: '#',
    },*/
  ],
  //actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
  ],
  secondaryLinks: [
  ],
  socialLinks: [
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Fet per <a class="text-blue-600 hover:underline dark:text-gray-200"> alumnes del MMPOL</a> · Tots els drets reservats.
  `,
};

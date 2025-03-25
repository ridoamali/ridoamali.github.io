import { HoverEffect } from './card-hover-effect';

export default function ProjectsSection() {
  return (
    <div
      className='mt-20 md:mt-40 max-w-screen-xl px-6 md:px-10 mx-auto'
      id='projects'
    >
      <h1
        className='text-3xl md:text-4xl text-center font-semibold tracking-wide underline underline-offset-8 decoration-cyan-400'
        data-aos='fade'
      >
        Projects
      </h1>

      <div
        className='mt-10 flex flex-col lg:flex-row gap-10 lg:gap-20'
        data-aos='fade-up'
      >
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}

export const projects = [
  {
    title: 'Ridotopup',
    description:
      'A platform dedicated to providing fast, reliable, and affordable game top-ups.',
    link: 'https://rido-topup.vercel.app/',
    tech: ['NextJs', 'TailwindCSS', 'PostgreSQL', 'Prisma', 'API'],
    url: '/images/topup.png',
  },
  {
    title: 'Ridocasing',
    description:
      'A sleek solution to create custom case your own.',
    link: 'https://caserido-dev.vercel.app/',
    tech: ['NextJs', 'TailwindCSS', 'PostgreSQL', 'API', 'Prisma'],
    url: '/images/ridocasing.png',
  },
  {
    title: 'Web Fashion Store',
    description: 'Personal portfolio fashion store.',
    link: 'https://webfashionso.vercel.app/',
    tech: ['React + Vite', 'TailwindCSS'],
    url: '/images/fashionrido.png',
  },
  {
    title: 'Login Next Auth',
    description: 'Implementation of next auth, prisma, and postgresql.',
    link: 'https://auth-version-three.vercel.app/auth/sign-in',
    tech: ['NextJs', 'TailwindCSS', 'Framer Motion', 'API'],
    url: '/images/loginrido.png',
  },
  {
    title: 'Cashier App',
    description: 'Cashier WebApp to manage orders in a cafe.',
    link: 'https://restaurant-pos-tawny-six.vercel.app/',
    tech: ['NextJs', 'TailwindCSS'],
    url: '/images/cashierrido.png',
  },
  {
    title: 'Expense Tracker',
    description:
      'App to enable users to effortlessly record and manage their expenses.',
    link: 'https://finance-dashboard-brown.vercel.app/',
    tech: ['NextJS', 'TailwindCSS', 'Animate'],
    url: '/images/financerido.png',
  },
];

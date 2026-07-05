import React from 'react'

const asset = (name) => `/images/${name}`

const teamNames = ['Firman Candra Ardian', 'Nur Azizah', 'Alifia Rizqul Ula']

const services = [
  { title: 'App Design', icon: asset('icon-1.png') },
  { title: 'Website Design', icon: asset('icon-2.png') },
  { title: 'HTML & CSS', icon: asset('icon-3.png') },
  { title: 'Logo Design', icon: asset('icon-4.png') },
]

const projects = [
  { image: asset('img-1.png'), className: 'md:col-span-2' },
  { image: asset('img-2.png'), className: 'md:col-span-1' },
  { image: asset('img-3.png'), className: 'md:col-span-1' },
  { image: asset('img-4.png'), className: 'md:col-span-1' },
  { image: asset('img-5.png'), className: 'md:col-span-1' },
]

const posts = [
  {
    date: 'Jun 05',
    title: 'Cloud Project Planning',
    image: asset('blog-img1.png'),
    text: 'Menyusun kebutuhan aplikasi, arsitektur layanan, dan rencana deploy agar proyek berjalan rapi dari awal.',
  },
  {
    date: 'Jun 12',
    title: 'Modern Web Interface',
    image: asset('blog-img2.png'),
    text: 'Membangun tampilan responsif berbasis komponen React dan utility class Tailwind yang mudah dikembangkan.',
  },
  {
    date: 'Jun 19',
    title: 'Team Collaboration',
    image: asset('blog-img3.png'),
    text: 'Membagi peran, mengevaluasi progres, dan menjaga kualitas hasil akhir melalui alur kerja yang jelas.',
  },
]

function SectionTitle({ lead, accent, light = false }) {
  return (
    <h2 className={`text-center text-3xl font-extrabold md:text-4xl ${light ? 'text-gold' : 'text-gold'}`}>
      {lead}{' '}
      <span className={`border-b-4 ${light ? 'border-white text-white' : 'border-ink text-ink'}`}>
        {accent}
      </span>
    </h2>
  )
}

function Header() {
  return (
    <header
      id="home"
      className="relative overflow-hidden bg-ink bg-cover bg-top text-white"
      style={{ backgroundImage: `url(${asset('banner-bg.png')})` }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-7">
        <a href="#home" className="text-xl font-extrabold uppercase tracking-wide text-white">
          Cloud Team
        </a>
        <div className="hidden items-center gap-7 text-sm font-semibold uppercase md:flex">
          {['Services', 'Portfolio', 'Blog', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-gold">
              {item}
            </a>
          ))}
        </div>
      </nav>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-28 pt-14 md:grid-cols-[1.2fr_0.8fr] md:pb-48 md:pt-24">
        <div>
          <p className="mb-4 text-xl font-medium text-white/90">Hello, kami adalah</p>
          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight text-white md:text-6xl">
            Firman Candra Ardian, Nur Azizah, Alifia Rizqul Ula
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            Tim pengembang web yang merancang antarmuka modern, responsif, dan siap digunakan untuk kebutuhan proyek cloud computing.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            {teamNames.map((name) => (
              <span key={name} className="rounded-md bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                {name}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-start justify-end gap-3 md:pt-8">
          {['Fb', 'Tw', 'In', 'Ig'].map((item) => (
            <a
              key={item}
              href="#contact"
              className="flex h-9 w-9 items-center justify-center rounded bg-white/70 text-sm font-bold text-ink hover:bg-white"
              aria-label={item}
            >
              {item}
            </a>
          ))}
        </div>
      </section>

      <a href="#portfolio" className="absolute bottom-12 left-5 md:left-[calc((100vw-72rem)/2+1.25rem)]">
        <span className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-gold/80" />
        <img src={asset('play-icon.png')} alt="Open portfolio" className="relative z-10 h-20 w-20" />
      </a>
    </header>
  )
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-20">
      <SectionTitle lead="Our" accent="Services" />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <article
            key={service.title}
            className="group flex aspect-square flex-col items-center justify-center rounded-full border-[6px] border-gold bg-white p-8 text-center shadow-soft transition hover:-translate-y-1"
          >
            <img src={service.icon} alt="" className="h-16 w-16 object-contain" />
            <h3 className={`mt-6 text-xl font-extrabold ${index === 0 ? 'text-gold' : 'text-ink'} group-hover:text-gold`}>
              {service.title}
            </h3>
          </article>
        ))}
      </div>
    </section>
  )
}

function Portfolio() {
  return (
    <section id="portfolio" className="bg-white px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionTitle lead="Our" accent="Portfolio" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.image} className={`group relative overflow-hidden rounded-md ${project.className}`}>
              <img src={project.image} alt="Portfolio project" className="h-full min-h-64 w-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition group-hover:bg-ink/60">
                <a
                  href="#contact"
                  className="translate-y-3 rounded bg-white px-7 py-3 text-sm font-extrabold uppercase text-ink opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100"
                >
                  See More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Blog() {
  return (
    <section
      id="blog"
      className="bg-ink bg-cover bg-center px-5 py-20"
      style={{ backgroundImage: `url(${asset('blog-bg.png')})` }}
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle lead="Our" accent="Blog" light />
        <p className="mx-auto mt-5 max-w-2xl text-center text-white/80">
          Catatan singkat pengembangan project, desain interface, dan kolaborasi tim.
        </p>
        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-md bg-white shadow-soft">
              <div className="min-h-72 bg-cover bg-center p-0" style={{ backgroundImage: `url(${post.image})` }}>
                <div className="mx-auto w-40 bg-gold py-3 text-center text-lg font-bold uppercase text-white">
                  {post.date}
                </div>
                <h3 className="px-5 pb-5 pt-52 text-xl font-extrabold text-white">{post.title}</h3>
              </div>
              <p className="m-0 p-5 text-sm font-medium leading-7 text-ink/80">{post.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="px-5 py-20">
      <div className="mx-auto max-w-4xl">
        <SectionTitle lead="Our" accent="Contact" />
        <form className="mx-auto mt-12 grid max-w-2xl gap-5">
          <input className="rounded-sm border border-ink/30 px-5 py-3" placeholder="Your Name" type="text" />
          <input className="rounded-sm border border-ink/30 px-5 py-3" placeholder="Your Email" type="email" />
          <input className="rounded-sm border border-ink/30 px-5 py-3" placeholder="Your Phone" type="tel" />
          <textarea className="min-h-32 rounded-sm border border-ink/30 px-5 py-4" placeholder="Your Message" />
          <button type="button" className="mx-auto rounded bg-ember px-10 py-4 font-bold text-white hover:bg-ink">
            Send Now
          </button>
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-10 md:flex-row md:items-center md:justify-between">
        <h2 className="text-2xl font-extrabold uppercase">Hire us for your projects</h2>
        <a href="#contact" className="rounded bg-ember px-8 py-3 text-center font-bold hover:bg-gold">
          Call Now
        </a>
      </div>
      <div className="border-t border-white/10 px-5 py-6 text-center text-sm text-white/70">
        2026 All Rights Reserved. Built with React and Tailwind CSS by {teamNames.join(', ')}.
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <Services />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
    </>
  )
}

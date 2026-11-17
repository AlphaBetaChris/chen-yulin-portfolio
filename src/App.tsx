import { Fragment, useEffect, useState } from 'react';
import { content, type Locale } from './content';

const email = 'swucyl@email.swu.edu.cn';
const phoneDisplay = '166-0137-4718';
const phoneHref = 'tel:+8616601374718';
const githubHandle = 'AlphaBetaChris';
const githubHref = `https://github.com/${githubHandle}`;

function SegmentedCopy({
  className,
  segments,
}: {
  className: string;
  segments: string[];
}) {
  return (
    <p className={className}>
      {segments.map((segment, index) => (
        <Fragment key={`${index}-${segment}`}>
          <span className="copy-segment">{segment}</span>
          {index < segments.length - 1 ? <wbr /> : null}
        </Fragment>
      ))}
    </p>
  );
}

function App() {
  const [locale, setLocale] = useState<Locale>('en');
  const copy = content[locale];

  useEffect(() => {
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en';
    document.title =
      locale === 'zh' ? '陈昱霖 · 个人主页' : 'Yulin Chen · Portfolio';
  }, [locale]);

  const toggleLocale = () => {
    setLocale((current) => (current === 'zh' ? 'en' : 'zh'));
  };

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        {copy.skipLink}
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label={copy.name}>
          <span className="wordmark-mark" aria-hidden="true">
            陈
          </span>
          <span>
            <strong>{copy.initials}</strong>
            <small>PORTFOLIO / 2026</small>
          </span>
        </a>

        <nav className="site-nav" aria-label={copy.navLabel}>
          {copy.navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="language-toggle"
          type="button"
          onClick={toggleLocale}
          aria-label={copy.languageAction}
        >
          <span className={locale === 'zh' ? 'is-active' : ''}>中</span>
          <span aria-hidden="true">/</span>
          <span className={locale === 'en' ? 'is-active' : ''}>EN</span>
        </button>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">{copy.hero.eyebrow}</p>
            <p className="hero-role">{copy.hero.role}</p>
            <h1 id="hero-title">{copy.name}</h1>
            <SegmentedCopy
              className="hero-tagline"
              segments={copy.hero.tagline}
            />
            <p className="hero-intro">{copy.hero.intro}</p>
            <div className="hero-actions">
              <a className="text-link text-link-dark" href="#about">
                {copy.hero.primaryAction}
                <span aria-hidden="true">↘</span>
              </a>
              <a className="text-link" href={`mailto:${email}`}>
                {copy.hero.secondaryAction}
                <span aria-hidden="true">→</span>
              </a>
              <a
                className="text-link"
                href={githubHref}
                target="_blank"
                rel="noreferrer"
              >
                {copy.contact.githubLabel}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <figure className="portrait-frame">
            <div className="portrait-index" aria-hidden="true">
              FIG. 01
            </div>
            <img src="./chen-yulin.jpg" alt={copy.hero.portraitAlt} />
            <figcaption>{copy.hero.portraitCaption}</figcaption>
          </figure>

          <p className="hero-edition" aria-hidden="true">
            PERSONAL
            <br />
            EDITION
          </p>
        </section>

        <section className="stat-rail" aria-label="Key facts">
          {copy.stats.map((stat, index) => (
            <div className="stat-item" key={stat.label}>
              <span className="stat-index" aria-hidden="true">
                0{index + 1}
              </span>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </section>

        <section className="editorial-section about-section" id="about">
          <header className="section-heading">
            <p>{copy.about.number} / PROFILE</p>
            <h2>{copy.about.title}</h2>
          </header>
          <div className="section-content about-content">
            <SegmentedCopy
              className="section-lead"
              segments={copy.about.lead}
            />
            <p className="section-body">{copy.about.body}</p>
            <dl className="profile-details">
              {copy.about.details.map((detail) => (
                <div key={detail.label}>
                  <dt>{detail.label}</dt>
                  <dd>{detail.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="editorial-section" id="education">
          <header className="section-heading">
            <p>{copy.education.number} / EDUCATION</p>
            <h2>{copy.education.title}</h2>
          </header>
          <div className="section-content">
            <article className="education-card">
              <div className="education-title">
                <div>
                  <h3>{copy.education.school}</h3>
                  <p>{copy.education.major}</p>
                </div>
                <time>{copy.education.period}</time>
              </div>
              <p className="section-body">{copy.education.admission}</p>
              <dl className="education-facts">
                <div>
                  <dt>{copy.education.rankingLabel}</dt>
                  <dd>{copy.education.ranking}</dd>
                </div>
                <div>
                  <dt>{copy.education.gpaLabel}</dt>
                  <dd>{copy.education.gpa}</dd>
                </div>
                <div>
                  <dt>{copy.education.languageLabel}</dt>
                  <dd>{copy.education.language}</dd>
                </div>
              </dl>
              <div className="coursework">
                <p>{copy.education.coursesLabel}</p>
                <ul>
                  {copy.education.courses.map((course) => (
                    <li key={course}>{course}</li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section className="editorial-section honors-section" id="honors">
          <header className="section-heading">
            <p>{copy.honors.number} / HONORS</p>
            <h2>{copy.honors.title}</h2>
          </header>
          <div className="section-content">
            <p className="section-intro">{copy.honors.intro}</p>
            <ol className="award-list">
              {copy.honors.awards.map((award, index) => (
                <li key={`${award.title}-${award.date}`}>
                  <span className="award-number" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3>{award.title}</h3>
                    <p>{award.result}</p>
                  </div>
                  {award.date && <time>{award.date}</time>}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="editorial-section projects-section" id="projects">
          <header className="section-heading">
            <p>{copy.projects.number} / PROJECTS</p>
            <h2>{copy.projects.title}</h2>
          </header>
          <div className="section-content">
            <SegmentedCopy
              className="section-intro"
              segments={copy.projects.intro}
            />
            <div className="project-grid">
              {copy.projects.items.map((project, index) => (
                <article
                  className={`project-card project-card-${index + 1}`}
                  key={project.title}
                >
                  <div className="project-topline">
                    <span>PROJECT / 0{index + 1}</span>
                    <span>{project.role}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <div className="project-copy">
                    <div>
                      <h4>{copy.projects.descriptionLabel}</h4>
                      <p>{project.description}</p>
                    </div>
                    <div>
                      <h4>{copy.projects.responsibilityLabel}</h4>
                      <p>{project.responsibility}</p>
                    </div>
                  </div>
                  <ul className="tag-list" aria-label={`${project.title} tags`}>
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="editorial-section skills-section" id="skills">
          <header className="section-heading">
            <p>{copy.skills.number} / TOOLKIT</p>
            <h2>{copy.skills.title}</h2>
          </header>
          <div className="section-content">
            <p className="section-intro">{copy.skills.intro}</p>
            <div className="skills-grid">
              {copy.skills.groups.map((group, index) => (
                <article key={group.title}>
                  <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-heading">
            <p>{copy.contact.number} / CONTACT</p>
            <h2>{copy.contact.title}</h2>
          </div>
          <div className="contact-content">
            <SegmentedCopy
              className="contact-lead"
              segments={copy.contact.lead}
            />
            <address>
              <div>
                <span>{copy.contact.emailLabel}</span>
                <a href={`mailto:${email}`}>{email}</a>
              </div>
              <div>
                <span>{copy.contact.phoneLabel}</span>
                <a href={phoneHref}>{phoneDisplay}</a>
              </div>
              <div>
                <span>{copy.contact.githubLabel}</span>
                <a
                  href={githubHref}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={copy.contact.githubLabel}
                >
                  {githubHandle}
                </a>
              </div>
            </address>
            <p className="contact-note">{copy.contact.note}</p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 {copy.name}</p>
        <p>{copy.footer.line}</p>
        <a href="#top">{copy.footer.backToTop} ↑</a>
      </footer>
    </div>
  );
}

export default App;

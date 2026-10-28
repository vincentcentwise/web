const features = [
  {
    number: "01",
    icon: "◫",
    title: "Student records",
    description:
      "Keep student profiles, class placements, guardians, and enrollment records organized in one secure place.",
  },
  {
    number: "02",
    icon: "▤",
    title: "Results & report cards",
    description:
      "Record continuous assessments and examinations, configure grading, and prepare student report cards.",
  },
  {
    number: "03",
    icon: "◷",
    title: "Attendance tracking",
    description:
      "Help teachers record daily attendance and give school administrators a clearer view of attendance trends.",
  },
  {
    number: "04",
    icon: "♧",
    title: "Parent communication",
    description:
      "Connect parents with school announcements, student progress, and important academic updates.",
  },
  {
    number: "05",
    icon: "▦",
    title: "Classes & timetables",
    description:
      "Organize classes, arms, subjects, teacher assignments, and lesson schedules from one workspace.",
  },
  {
    number: "06",
    icon: "⌁",
    title: "School insights",
    description:
      "Give school leaders a clearer picture of enrollment, academic performance, and day-to-day operations.",
  },
];

const activities = [
  { initials: "AO", name: "Attendance recorded", detail: "JSS 2 · Blue", time: "09:12 AM", color: "blue" },
  { initials: "RS", name: "Results updated", detail: "Mathematics · SS 1", time: "10:35 AM", color: "purple" },
  { initials: "PA", name: "Parent announcement", detail: "School-wide update", time: "11:20 AM", color: "green" },
];

async function getCopyrightYear() {
  "use cache"
  return new Date().getFullYear();
}

export default async function Home() {
  const year = await getCopyrightYear();

  return (
    <main>
      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#" className="brand" aria-label="SchoolHub home">
            <span className="brand-mark">S</span>
            <span>School<span className="brand-accent">Hub</span></span>
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#features">Features</a>
            <a href="#how-it-works">How it works</a>
            <a href="#schools">For schools</a>
          </nav>

          <div className="nav-actions">
            <a className="login-link" href="/login">Sign in</a>
            <a className="button button-small" href="/register-school">
              Get started <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              BUILT FOR MODERN SCHOOLS
            </div>

            <h1>
              Less paperwork.
              <br />
              <span>More progress.</span>
            </h1>

            <p className="hero-description">
              Manage students, track academic performance, organize teachers,
              and keep parents informed — all from one simple school platform.
            </p>

            <div className="hero-actions">
              <a className="button" href="/register-school">
                Get started with SchoolHub <span aria-hidden="true">→</span>
              </a>
              <a className="text-link" href="#features">
                Explore features <span aria-hidden="true">↓</span>
              </a>
            </div>

            <div className="trust-row">
              <div className="trust-icon">✓</div>
              <p>
                Designed for Nigerian secondary schools
                <span>JSS 1–3 · SSS 1–3</span>
              </p>
            </div>
          </div>

          <div className="dashboard-scene" aria-label="Illustrative SchoolHub dashboard preview">
            <div className="floating-tag tag-top">
              <span className="floating-check">✓</span>
              <span><strong>Everything connected</strong><small>One school workspace</small></span>
            </div>

            <div className="dashboard-window">
              <div className="dashboard-topbar">
                <div className="mini-brand">
                  <span className="brand-mark mini-mark">S</span>
                  <strong>SchoolHub</strong>
                </div>
                <span className="demo-label">DEMO PREVIEW</span>
              </div>

              <div className="dashboard-content">
                <aside className="dashboard-sidebar">
                  <span className="sidebar-caption">WORKSPACE</span>
                  <div className="sidebar-item active"><span>▦</span> Overview</div>
                  <div className="sidebar-item"><span>♙</span> Students</div>
                  <div className="sidebar-item"><span>▤</span> Academics</div>
                  <div className="sidebar-item"><span>◷</span> Attendance</div>
                  <div className="sidebar-item"><span>♧</span> Parents</div>
                  <div className="sidebar-bottom">School administration</div>
                </aside>

                <div className="dashboard-main">
                  <div className="dash-heading">
                    <div>
                      <span className="dash-kicker">MONDAY, 21 OCTOBER</span>
                      <h2>Good morning, Admin</h2>
                      <p>Here&apos;s what&apos;s happening at your school.</p>
                    </div>
                    <div className="admin-avatar">AD</div>
                  </div>

                  <div className="stat-grid">
                    <div className="stat-card">
                      <span className="stat-icon stat-blue">♙</span>
                      <span className="stat-label">Students</span>
                      <strong>1,248</strong>
                      <small>Across all classes</small>
                    </div>
                    <div className="stat-card">
                      <span className="stat-icon stat-green">✓</span>
                      <span className="stat-label">Attendance</span>
                      <strong>94.6%</strong>
                      <small>Today's overview</small>
                    </div>
                    <div className="stat-card">
                      <span className="stat-icon stat-purple">▤</span>
                      <span className="stat-label">Teachers</span>
                      <strong>56</strong>
                      <small>Staff directory</small>
                    </div>
                  </div>

                  <div className="dashboard-lower">
                    <div className="activity-panel">
                      <div className="panel-heading">
                        <strong>Recent activity</strong>
                        <span>Today</span>
                      </div>
                      {activities.map((activity) => (
                        <div className="activity-row" key={activity.name}>
                          <span className={`activity-avatar ${activity.color}`}>
                            {activity.initials}
                          </span>
                          <span className="activity-info">
                            <strong>{activity.name}</strong>
                            <small>{activity.detail}</small>
                          </span>
                          <small className="activity-time">{activity.time}</small>
                        </div>
                      ))}
                    </div>

                    <div className="performance-panel">
                      <strong>Academic overview</strong>
                      <span className="performance-subtitle">Illustrative performance</span>
                      <div className="chart">
                        {[38, 57, 45, 72, 54, 83, 65, 94, 72, 88, 63, 100].map(
                          (height, index) => (
                            <span
                              className={index === 11 ? "chart-bar chart-bar-active" : "chart-bar"}
                              style={{ height: `${height}%` }}
                              key={`${height}-${index}`}
                            />
                          ),
                        )}
                      </div>
                      <div className="chart-labels"><span>Week 1</span><span>Week 4</span></div>
                    </div>
                  </div>
                  <p className="demo-note">
                    <span>i</span> Illustrative preview — figures are sample data.
                  </p>
                </div>
              </div>
            </div>

            <div className="floating-tag tag-bottom">
              <span className="floating-shield">✓</span>
              <span><strong>School-focused access</strong><small>Built around school roles</small></span>
            </div>
          </div>
        </div>
      </section>

      <section className="benefit-strip" id="schools">
        <div className="container benefit-grid">
          <div className="benefit-item">
            <span className="benefit-symbol">↗</span>
            <div><strong>Work smarter</strong><span>Reduce repetitive admin tasks</span></div>
          </div>
          <div className="benefit-item">
            <span className="benefit-symbol">◎</span>
            <div><strong>Stay organized</strong><span>Keep school records in one place</span></div>
          </div>
          <div className="benefit-item">
            <span className="benefit-symbol">⌘</span>
            <div><strong>Stay connected</strong><span>Bring staff and parents closer</span></div>
          </div>
        </div>
      </section>

      <section className="features-section" id="features">
        <div className="container">
          <div className="section-heading">
            <span className="section-kicker">ONE PLATFORM. MANY POSSIBILITIES.</span>
            <h2>Everything your school needs<br />to move forward.</h2>
            <p>
              School administration shouldn&apos;t mean juggling spreadsheets,
              paper files, and disconnected tools.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.number}>
                <div className="feature-card-top">
                  <span className="feature-icon">{feature.icon}</span>
                  <span className="feature-number">{feature.number}</span>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <a href="/register-school" className="feature-link">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-section" id="how-it-works">
        <div className="container closing-panel">
          <div>
            <span className="section-kicker">A BETTER WAY TO RUN YOUR SCHOOL</span>
            <h2>Make room for what matters most.</h2>
            <p>
              Spend less time chasing records and more time supporting teachers,
              students, and families.
            </p>
          </div>
          <a className="button button-light" href="/register-school">
            Get started <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a href="#" className="brand footer-brand">
            <span className="brand-mark">S</span>
            <span>School<span className="brand-accent">Hub</span></span>
          </a>
          <p>Helping schools run better, one day at a time.</p>
          <span className="copyright">© {year} SchoolHub</span>
        </div>
      </footer>
    </main>
  );
}
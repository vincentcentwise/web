
import Link from "next/link";

const stats = [
  {
    label: "Total students",
    value: "1,248",
    change: "Student records overview",
    icon: "S",
    color: "blue",
  },
  {
    label: "Teaching staff",
    value: "64",
    change: "Teachers and instructors",
    icon: "T",
    color: "teal",
  },
  {
    label: "Today's attendance",
    value: "94.2%",
    change: "Illustrative attendance rate",
    icon: "A",
    color: "purple",
  },
  {
    label: "Active classes",
    value: "32",
    change: "Across JSS and SSS",
    icon: "C",
    color: "orange",
  },
];

const activities = [
  {
    initials: "AR",
    title: "Academic results",
    description: "Term results and report cards",
    time: "Academic module",
    color: "blue",
  },
  {
    initials: "AT",
    title: "Attendance records",
    description: "Daily student attendance",
    time: "Attendance module",
    color: "teal",
  },
  {
    initials: "ST",
    title: "Student records",
    description: "Admissions and student profiles",
    time: "Student module",
    color: "purple",
  },
  {
    initials: "CL",
    title: "Class management",
    description: "Classes and academic organization",
    time: "Class module",
    color: "orange",
  },
];

const modules = [
  {
    id: "students",
    icon: "S",
    title: "Students",
    description: "Manage admissions, student profiles, and enrollment.",
    href: "#students",
    color: "blue",
  },
  {
    id: "teachers",
    icon: "T",
    title: "Teachers",
    description: "Organize teaching staff and school responsibilities.",
    href: "#teachers",
    color: "teal",
  },
  {
    id: "attendance",
    icon: "A",
    title: "Attendance",
    description: "Track student presence and daily attendance.",
    href: "#attendance",
    color: "purple",
  },
  {
    id: "results",
    icon: "R",
    title: "Results",
    description: "Prepare assessments, scores, and report cards.",
    href: "#results",
    color: "orange",
  },
  {
    id: "classes",
    icon: "C",
    title: "Classes & subjects",
    description: "Organize JSS and SSS classes and subjects.",
    href: "#classes",
    color: "blue",
  },
  {
    id: "parents",
    icon: "P",
    title: "Parents & guardians",
    description: "Prepare parent profiles and family connections.",
    href: "#parents",
    color: "teal",
  },
];

export default function DashboardPage() {
  return (
    <main className="dashboard-shell">
      <aside className="dashboard-sidebar">
        <Link href="/" className="dashboard-brand">
          <span className="dashboard-brand-mark">S</span>
          <span>
            School<span>Hub</span>
          </span>
        </Link>

        <div className="sidebar-school">
          <div className="school-avatar">BF</div>
          <div className="sidebar-school-copy">
            <strong>Bright Future College</strong>
            <span>School workspace</span>
          </div>
          <span className="sidebar-school-chevron">⌄</span>
        </div>

        <p className="sidebar-label">WORKSPACE</p>

        <nav className="dashboard-nav" aria-label="Main navigation">
          <Link className="dashboard-nav-link active" href="/dashboard">
            <span className="nav-icon">▦</span>
            <span>Overview</span>
          </Link>
          <Link className="dashboard-nav-link" href="#students">
            <span className="nav-icon">♙</span>
            <span>Students</span>
          </Link>
          <Link className="dashboard-nav-link" href="#teachers">
            <span className="nav-icon">♧</span>
            <span>Teachers</span>
          </Link>
          <Link className="dashboard-nav-link" href="#classes">
            <span className="nav-icon">▤</span>
            <span>Classes & subjects</span>
          </Link>
          <Link className="dashboard-nav-link" href="#attendance">
            <span className="nav-icon">◷</span>
            <span>Attendance</span>
          </Link>
          <Link className="dashboard-nav-link" href="#results">
            <span className="nav-icon">▥</span>
            <span>Results & reports</span>
          </Link>
          <Link className="dashboard-nav-link" href="#parents">
            <span className="nav-icon">♧</span>
            <span>Parents & guardians</span>
          </Link>
        </nav>

        <p className="sidebar-label sidebar-label-bottom">SCHOOL</p>

        <nav className="dashboard-nav" aria-label="School settings">
          <Link className="dashboard-nav-link" href="#announcements">
            <span className="nav-icon">♧</span>
            <span>Announcements</span>
          </Link>
          <Link className="dashboard-nav-link" href="#settings">
            <span className="nav-icon">⚙</span>
            <span>School settings</span>
          </Link>
        </nav>

        <div className="sidebar-help">
          <div className="sidebar-help-icon">?</div>
          <strong>Need some help?</strong>
          <p>Your school workspace, organized in one place.</p>
          <Link href="/">Visit SchoolHub home ↗</Link>
        </div>

        <div className="sidebar-profile">
          <div className="profile-avatar">AD</div>
          <div className="sidebar-profile-copy">
            <strong>School Administrator</strong>
            <span>Administrator</span>
          </div>
          <span className="profile-menu">•••</span>
        </div>
      </aside>

      <section className="dashboard-main">
        <header className="dashboard-topbar">
          <div className="dashboard-breadcrumb">
            <span>School workspace</span>
            <span className="breadcrumb-separator">/</span>
            <strong>Overview</strong>
          </div>

          <div className="dashboard-top-actions">
            <span className="demo-indicator">
              <span />
              Dashboard preview
            </span>
            <button
              className="dashboard-icon-button"
              type="button"
              aria-label="Notifications preview"
              title="Notifications will be connected later"
            >
              ♧
              <span className="notification-dot" />
            </button>
            <div className="topbar-avatar">AD</div>
          </div>
        </header>

        <div className="dashboard-content">
          <section className="dashboard-welcome">
            <div>
              <span className="dashboard-eyebrow">SCHOOL ADMINISTRATION</span>
              <h1>Good morning, Administrator 👋</h1>
              <p>
                Here is an overview of your school and its academic activities.
              </p>
            </div>
            <div className="academic-year-badge">
              <span className="academic-year-icon">▦</span>
              <span>
                <small>Academic year</small>
                <strong>2026 / 2027</strong>
              </span>
              <span className="academic-year-arrow">⌄</span>
            </div>
          </section>

          <section className="dashboard-banner">
            <div className="banner-decoration banner-decoration-one" />
            <div className="banner-decoration banner-decoration-two" />
            <div className="banner-content">
              <span className="banner-kicker">WELCOME TO YOUR WORKSPACE</span>
              <h2>A more organized way to run your school.</h2>
              <p>
                Start by setting up your school records, academic classes, and
                teaching team.
              </p>
              <Link href="#setup" className="banner-button">
                Explore school setup <span>→</span>
              </Link>
            </div>
            <div className="banner-illustration" aria-hidden="true">
              <div className="illustration-window">
                <div className="illustration-window-top">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="illustration-window-content">
                  <div className="illustration-side" />
                  <div className="illustration-body">
                    <div className="illustration-line" />
                    <div className="illustration-line short" />
                    <div className="illustration-cards">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="illustration-chart">
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="dashboard-stats" aria-label="School statistics">
            {stats.map((stat) => (
              <article className="dashboard-stat-card" key={stat.label}>
                <div className="stat-card-top">
                  <span>{stat.label}</span>
                  <span className={`stat-icon ${stat.color}`}>
                    {stat.icon}
                  </span>
                </div>
                <strong className="stat-value">{stat.value}</strong>
                <span className="stat-description">{stat.change}</span>
              </article>
            ))}
          </section>

          <section className="dashboard-section" id="setup">
            <div className="dashboard-section-heading">
              <div>
                <h2>School management</h2>
                <p>Access the main areas of your school workspace.</p>
              </div>
              <span className="section-count">6 modules</span>
            </div>

            <div className="dashboard-module-grid">
              {modules.map((module) => (
                <Link
                  className="dashboard-module-card"
                  href={module.href}
                  key={module.id}
                  id={`${module.id}-module`}
                >
                  <span className={`module-icon ${module.color}`}>
                    {module.icon}
                  </span>
                  <span className="module-card-arrow">↗</span>
                  <strong>{module.title}</strong>
                  <p>{module.description}</p>
                  <span className="module-card-link">Open module →</span>
                </Link>
              ))}
            </div>
          </section>

          <section className="dashboard-lower-grid">
            <article className="dashboard-panel attendance-panel" id="attendance">
              <div className="dashboard-section-heading">
                <div>
                  <h2>Attendance overview</h2>
                  <p>Illustrative weekly attendance</p>
                </div>
                <span className="panel-menu">•••</span>
              </div>

              <div className="attendance-summary">
                <div>
                  <strong>94.2%</strong>
                  <span>Example attendance rate</span>
                </div>
                <span className="attendance-status">Sample data</span>
              </div>

              <div className="attendance-chart" aria-label="Sample weekly attendance chart">
                {[
                  { day: "Mon", height: 76 },
                  { day: "Tue", height: 88 },
                  { day: "Wed", height: 68 },
                  { day: "Thu", height: 94 },
                  { day: "Fri", height: 81 },
                  { day: "Sat", height: 34 },
                  { day: "Sun", height: 20 },
                ].map((item) => (
                  <div className="attendance-chart-column" key={item.day}>
                    <div className="attendance-bar-track">
                      <div
                        className={`attendance-bar ${item.day === "Thu" ? "highlight" : ""}`}
                        style={{ height: `${item.height}%` }}
                      />
                    </div>
                    <span>{item.day}</span>
                  </div>
                ))}
              </div>
              <p className="chart-disclaimer">
                Example figures only. Live attendance will appear after the
                attendance module is connected.
              </p>
            </article>

            <article className="dashboard-panel activity-panel">
              <div className="dashboard-section-heading">
                <div>
                  <h2>Quick access</h2>
                  <p>Continue managing your school</p>
                </div>
              </div>

              <div className="activity-list">
                {activities.map((activity, index) => (
                  <Link
                    href={
                      index === 0
                        ? "#results"
                        : index === 1
                          ? "#attendance"
                          : index === 2
                            ? "#students"
                            : "#classes"
                    }
                    className="activity-item"
                    key={activity.title}
                  >
                    <span className={`activity-avatar ${activity.color}`}>
                      {activity.initials}
                    </span>
                    <span className="activity-copy">
                      <strong>{activity.title}</strong>
                      <span>{activity.description}</span>
                    </span>
                    <span className="activity-arrow">→</span>
                  </Link>
                ))}
              </div>
            </article>
          </section>

          <section className="dashboard-setup-note" id="settings">
            <div className="setup-note-icon">i</div>
            <div>
              <strong>Your workspace is a preview</strong>
              <p>
                The figures and school name shown here are demonstration
                content. School registration, login, school-specific data,
                and live statistics still need to be connected to the backend.
              </p>
            </div>
          </section>

          <footer className="dashboard-footer">
            <span>© 2026 SchoolHub</span>
            <span>School management made more organized.</span>
          </footer>
        </div>
      </section>
    </main>
  );
}

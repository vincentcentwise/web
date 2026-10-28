
"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterSchoolPage() {
  const [schoolName, setSchoolName] = useState("");
  const [schoolEmail, setSchoolEmail] = useState("");
  const [adminName, setAdminName] = useState("");
  const [phone, setPhone] = useState("");
  const [stateName, setStateName] = useState("");
  const [subdomain, setSubdomain] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  function createSubdomain(value: string) {
    setSchoolName(value);
    setSubdomain(
      value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .slice(0, 40),
    );
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (password.length < 12) {
      setError("Choose a password with at least 12 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Your passwords do not match.");
      return;
    }

    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(subdomain)) {
      setError("Use letters, numbers, and single hyphens in the school address.");
      return;
    }

    setError(
      "The registration form is ready, but account creation is not connected yet. We will connect it securely to the SchoolHub API in the next step.",
    );
  }

  return (
    <main className="auth-page">
      <section className="auth-intro">
        <Link href="/" className="brand" aria-label="SchoolHub home">
          <span className="brand-mark">S</span>
          <span>
            School<span className="brand-accent">Hub</span>
          </span>
        </Link>

        <div className="auth-intro-copy">
          <span className="section-kicker">WELCOME TO SCHOOLHUB</span>
          <h1>Your school deserves a simpler way to work.</h1>
          <p>
            Bring student records, teachers, attendance, academic results,
            and parent communication into one organized school workspace.
          </p>

          <div className="auth-benefit">
            <span>✓</span>
            <div>
              <strong>Designed for Nigerian schools</strong>
              <p>Support for JSS 1–3 and SSS 1–3.</p>
            </div>
          </div>

          <div className="auth-benefit">
            <span>✓</span>
            <div>
              <strong>One school, one workspace</strong>
              <p>Prepare for school-specific access and branding.</p>
            </div>
          </div>

          <div className="auth-benefit">
            <span>✓</span>
            <div>
              <strong>Connected school operations</strong>
              <p>Build toward a shared, organized view of school activity.</p>
            </div>
          </div>
        </div>

        <p className="auth-footnote">
          SchoolHub · School management made more organized.
        </p>
      </section>

      <section className="auth-form-section">
        <div className="auth-form-card">
          <div className="auth-form-heading">
            <span className="section-kicker">GET STARTED</span>
            <h2>Register your school</h2>
            <p>
              Enter your school details and create the initial administrator
              account.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="schoolName">School name</label>
              <input
                id="schoolName"
                autoComplete="organization"
                required
                maxLength={120}
                placeholder="e.g. Bright Future College"
                value={schoolName}
                onChange={(event) => createSubdomain(event.target.value)}
              />
            </div>

            <div className="form-field">
              <label htmlFor="schoolEmail">School email address</label>
              <input
                id="schoolEmail"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
                placeholder="admin@school.com"
                value={schoolEmail}
                onChange={(event) => setSchoolEmail(event.target.value)}
              />
            </div>

            <div className="form-field">
              <label htmlFor="adminName">Administrator's full name</label>
              <input
                id="adminName"
                autoComplete="name"
                required
                maxLength={120}
                placeholder="Enter full name"
                value={adminName}
                onChange={(event) => setAdminName(event.target.value)}
              />
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="phone">Phone number</label>
                <input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  maxLength={30}
                  placeholder="+234..."
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>

              <div className="form-field">
                <label htmlFor="stateName">State</label>
                <select
                  id="stateName"
                  required
                  value={stateName}
                  onChange={(event) => setStateName(event.target.value)}
                >
                  <option value="">Select state</option>
                  {[
                    "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi",
                    "Bayelsa", "Benue", "Borno", "Cross River", "Delta",
                    "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT - Abuja",
                    "Gombe", "Imo", "Jigawa", "Kaduna", "Kano",
                    "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos",
                    "Nasarawa", "Niger", "Ogun", "Ondo", "Osun",
                    "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba",
                    "Yobe", "Zamfara",
                  ].map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="subdomain">Preferred school address</label>
              <div className="subdomain-input">
                <input
                  id="subdomain"
                  required
                  maxLength={40}
                  pattern="[a-z0-9]+(-[a-z0-9]+)*"
                  title="Use lowercase letters, numbers, and single hyphens."
                  placeholder="bright-future"
                  value={subdomain}
                  onChange={(event) =>
                    setSubdomain(event.target.value.toLowerCase())
                  }
                />
                <span>.schoolhub.example</span>
              </div>
              <p className="field-hint">
                This is a preview address. The final domain will be configured
                when subdomain routing is implemented.
              </p>
            </div>

            <div className="form-field">
              <label htmlFor="password">Create password</label>
              <input
                id="password"
                type="password"
                autoComplete="new-password"
                required
                minLength={12}
                maxLength={128}
                placeholder="At least 12 characters"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <div className="form-field">
              <label htmlFor="confirmPassword">Confirm password</label>
              <input
                id="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                minLength={12}
                maxLength={128}
                placeholder="Enter the password again"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
            </div>

            {error && (
              <div className="form-message" role="alert">
                {error}
              </div>
            )}

            <button className="button auth-submit" type="submit">
              Continue registration <span aria-hidden="true">→</span>
            </button>

            <p className="auth-terms">
              By continuing, you confirm that you are authorized to register
              this school.
            </p>
          </form>

          <div className="auth-switch">
            Already have an account? <Link href="/login">Sign in</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

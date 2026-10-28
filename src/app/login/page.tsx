

"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

type LoginResponse = {
  accessToken: string;
  tokenType: string;
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
  };
  school: {
    id: string;
    name: string;
    slug: string;
  };
  role: string;
};

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [schoolSlug, setSchoolSlug] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"error" | "success">(
    "error",
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [signedInUser, setSignedInUser] = useState<LoginResponse["user"] | null>(
    null,
  );
  const [signedInSchool, setSignedInSchool] =
    useState<LoginResponse["school"] | null>(null);
  const [signedInRole, setSignedInRole] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) return;

    setMessage("");
    setSignedInUser(null);
    setSignedInSchool(null);
    setSignedInRole("");
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          password,
          schoolSlug: schoolSlug.trim().toLowerCase(),
        }),
      });

      const data: unknown = await response.json().catch(() => null);

      if (!response.ok) {
        const errorData = data as { message?: string | string[] } | null;
        const apiMessage = errorData?.message;
        const errorMessage = Array.isArray(apiMessage)
          ? apiMessage.join(" ")
          : apiMessage;

        throw new Error(
          response.status === 401
            ? "Invalid email, password, or school. Check your details and try again."
            : errorMessage ||
                "Sign-in failed. Please try again shortly.",
        );
      }

      const result = data as LoginResponse;

      if (
        !result.accessToken ||
        !result.user?.email ||
        !result.school?.slug ||
        !result.role
      ) {
        throw new Error("The server returned an incomplete login response.");
      }

      // Keep the access token in component memory for now.
      // Do not put it in localStorage or sessionStorage.
      setSignedInUser(result.user);
      setSignedInSchool(result.school);
      setSignedInRole(result.role);
      setMessageType("success");
      setMessage(
        `Signed in successfully to ${result.school.name}.`,
      );
      setPassword("");
    } catch (error: unknown) {
      setMessageType("error");

      if (error instanceof TypeError) {
        setMessage(
          "Cannot reach the SchoolHub API. Check that the backend is running on port 4000 and try again.",
        );
      } else {
        setMessage(
          error instanceof Error
            ? error.message
            : "An unexpected error occurred. Please try again.",
        );
      }
    } finally {
      setIsSubmitting(false);
    }
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
          <span className="section-kicker">YOUR SCHOOL, CONNECTED</span>

          <h1>Everything your school needs, in one place.</h1>

          <p>
            Sign in to access your school workspace and keep your academic
            activities organized, from student records to results and
            communication with parents.
          </p>

          <div className="auth-benefit">
            <span aria-hidden="true">✓</span>
            <div>
              <strong>Your school workspace</strong>
              <p>Keep school information organized in one place.</p>
            </div>
          </div>

          <div className="auth-benefit">
            <span aria-hidden="true">✓</span>
            <div>
              <strong>Academic management</strong>
              <p>Support teaching, attendance, and student results.</p>
            </div>
          </div>

          <div className="auth-benefit">
            <span aria-hidden="true">✓</span>
            <div>
              <strong>Connected school community</strong>
              <p>Build better coordination between staff and families.</p>
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
            <span className="section-kicker">WELCOME BACK</span>
            <h2>Sign in to SchoolHub</h2>
            <p>
              Enter your account details to access your school workspace.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="schoolSlug">School slug</label>
              <input
                id="schoolSlug"
                name="schoolSlug"
                type="text"
                autoComplete="organization"
                required
                maxLength={100}
                pattern="[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*"
                title="Enter your school slug, for example demo-school."
                placeholder="demo-school"
                value={schoolSlug}
                onChange={(event) => setSchoolSlug(event.target.value)}
              />
              <small>For example, demo-school</small>
            </div>

            <div className="form-field">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="username"
                required
                maxLength={254}
                placeholder="you@school.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="form-field">
              <div className="login-password-heading">
                <label htmlFor="password">Password</label>
              </div>

              <div className="login-password-input">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  maxLength={128}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />

                <button
                  className="login-password-toggle"
                  type="button"
                  onClick={() => setShowPassword((current) => !current)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  aria-pressed={showPassword}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="login-options">
              <label className="remember-option">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(event) => setRememberMe(event.target.checked)}
                />
                <span>Remember me on this device</span>
              </label>
            </div>

            {message && (
              <div
                className="form-message"
                role={messageType === "error" ? "alert" : "status"}
                aria-live="polite"
              >
                {message}
              </div>
            )}

            {signedInUser && signedInSchool && (
              <div className="form-message" role="status">
                <p>
                  Welcome, {signedInUser.firstName} {signedInUser.lastName}.
                </p>
                <p>School: {signedInSchool.name}</p>
                <p>Role: {signedInRole}</p>
                <p>
                  Authentication succeeded. Your school dashboard and
                  persistent session are the next integration steps.
                </p>
              </div>
            )}

            <button
              className="button auth-submit"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing in..." : "Sign in"}
              {!isSubmitting && <span aria-hidden="true"> →</span>}
            </button>

            <p className="auth-terms">
              Only sign in using an account you are authorized to access.
            </p>
          </form>

          <div className="auth-switch">
            New to SchoolHub?{" "}
            <Link href="/register-school">Register your school</Link>
          </div>

          <div className="login-help">
            Having trouble signing in? Password recovery will be available
            when account authentication is implemented.
          </div>
        </div>
      </section>
    </main>
  );
}
  
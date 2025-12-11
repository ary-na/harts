// src/app/privacy/page.tsx
const Privacy = () => {
  return (
    <article>
      <header className= "bg-amber-400">
        <div className="container mx-auto max-w-3xl py-20 px-8 lg:px-0">
        <h1>Privacy & Data Policy 🔐</h1>
        <p className="italic text-sm">Last updated: December 2025</p>
        </div>
      </header>
    <div className="container mx-auto max-w-3xl py-10 px-8 lg:px-0">
      <section>
        <h2>1. Introduction 📖</h2>
        <p>
          Welcome to <strong>Harts</strong> (the “Site”, “we”, “us”, or “our”).
          This Privacy & Data Policy explains how we collect, use, disclose, and
          protect information when you visit or use our website
          (hidart.vercel.app) or any related services. By using our Site, you
          agree to the collection and use of information in accordance with this
          policy.
        </p>
        <p className="font-bold text-info">
          If you do not agree with this policy, please do not use the Site.
        </p>
      </section>

      <section>
        <h2>2. What Data We Collect 🗃️</h2>

        <section>
          <h3>2.1 Data You Provide 📝</h3>
          <p>
            When you use Harts (e.g., sign up, log in, purchase, contact us), we
            may collect:
          </p>
          <ul>
            <li>
              <strong>Username</strong> — when you register or log in.
            </li>
            <li>
              <strong>Email address</strong> — for account management, purchase
              receipts, communication.
            </li>
            <li>
              <strong>Password</strong> — stored securely (hashed), used for
              authentication.
            </li>
            <li>
              <strong>Billing or shipping address</strong> (if you order an
              artwork).
            </li>
            <li>
              <strong>Order & purchase details</strong> — which items you
              bought, quantity, date, payment processing data (where relevant).
            </li>
            <li>
              <strong>Any content you submit</strong> — messages, contact forms,
              user account preferences, etc.
            </li>
          </ul>
        </section>

        <section>
          <h3>2.2 Automatically Collected Data 🤖</h3>
          <p>When you visit the Site, we may automatically collect:</p>
          <ul>
            <li>
              <strong>IP address</strong> & geolocation (city-level,
              country-level) — for security, fraud detection, analytics.
            </li>
            <li>
              <strong>Device information</strong> — browser type and version,
              operating system, device type (desktop / mobile), screen
              resolution.
            </li>
            <li>
              <strong>Usage data</strong> — which pages you view (gallery pages,
              product pages), how long you stay, clicks, interactions.
            </li>
            <li>
              <strong>Cookies & similar technologies</strong> — see Section 6
              below.
            </li>
          </ul>
        </section>
      </section>

      <section>
        <h2>3. Why We Collect the Data 📌</h2>
        <p>We use the collected data for:</p>
        <ul>
          <li>
            <strong>User account management</strong> — registration, login,
            authentication, password reset.
          </li>
          <li>
            <strong>Order processing</strong> — fulfilling your purchase
            requests, shipping, billing, receipts.
          </li>
          <li>
            <strong>Site functionality &amp; user experience</strong> —
            displaying personalized content, remembering preferences,
            facilitating smooth navigation.
          </li>
          <li>
            <strong>Communications</strong> — responding to your inquiries,
            sending purchase confirmations or updates, optionally marketing or
            newsletters (only if you opt-in).
          </li>
          <li>
            <strong>Security and fraud prevention</strong> — detecting
            suspicious behavior, protecting against abuse.
          </li>
          <li>
            <strong>Analytics and performance</strong> — understanding how users
            interact with the site, improving content, optimizing performance
            and design.
          </li>
        </ul>
        <p>
          We will <strong>never</strong> process more data than needed for these
          purposes, and we do not sell or trade your personal data to third
          parties for marketing.
        </p>
      </section>

      <section>
        <h2>4. Legal &amp; Compliance Considerations ⚖️</h2>
        <p>
          Depending on your location or the location of the user, relevant
          data‑protection laws may apply (e.g. Privacy Act 1988 (Cth) &amp;
          Australian Privacy Principles, or international regulations like GDPR
          / CCPA if you accept international users). We endeavour to meet or
          exceed all applicable standards.
        </p>
        <p>
          If you are browsing from a country with strict data‑protection laws,
          you may have additional rights (see Section 9 below).
        </p>
      </section>

      <section>
        <h2>5. Data Sharing and Disclosure 🤝</h2>
        <p>We may share your data only in the following circumstances:</p>
        <ul>
          <li>
            With <strong>service providers</strong> (e.g. payment processors,
            shipping partners) <em>only as needed</em> to fulfill an order —
            under strict confidentiality and only the data required for the
            service (e.g. shipping address, order details).
          </li>
          <li>
            With <strong>law enforcement or legal authorities</strong>, if
            required by law (e.g. compliance with legal obligations, fraud
            prevention).
          </li>
          <li>
            In the case of a <strong>merger, acquisition, or sale</strong> of
            Harts — user data may be transferred, but we will inform you and
            provide opt‑out if required.
          </li>
          <li>
            Aggregated &amp; anonymized data (non-personally-identifiable) may
            be used for analytics or reporting.
          </li>
        </ul>
        <p>
          We will <strong>never</strong> sell, rent, or trade your personal
          information for advertising or marketing.
        </p>
      </section>

      <section>
        <h2>6. Cookies &amp; Tracking Technologies 🍪</h2>
        <p>We use cookies and similar technologies for:</p>
        <ul>
          <li>Session management (keeping you logged in).</li>
          <li>Site functionality (e.g. shopping cart, user preferences).</li>
          <li>Analytics (to understand site usage).</li>
        </ul>
        <p>
          <strong>You can disable cookies</strong> through your browser
          settings, but please note that this may impact your ability to use
          certain features (e.g. login, shopping cart, remembering preferences).
        </p>
      </section>

      <section>
        <h2>7. Data Storage &amp; Security 🛡️</h2>
        <ul>
          <li>
            We store your data securely using industry‑standard encryption and
            hashing (especially for passwords).
          </li>
          <li>
            Access to your personal data is restricted to authorized personnel
            only.
          </li>
          <li>We use secure transport (HTTPS) in transit.</li>
          <li>
            If there is a data breach or security incident, we will act promptly
            to notify affected users, as required by law or best practice.
          </li>
          <li>
            We do <strong>not</strong> store sensitive information (like full
            credit‑card numbers) unless necessary, and in that case only via
            secure third‑party payment processors.
          </li>
        </ul>
      </section>

      <section>
        <h2>8. Data Retention &amp; Deletion ⏳</h2>
        <p>
          We keep your account and order data as long as you maintain your
          account.
        </p>
        <p>
          If you request account deletion, we will permanently delete your
          personal data (except aggregated anonymized data used for analytics).
        </p>
        <p>
          You can also request partial data deletion (e.g. delete contact info,
          delete order history) — contact us using the details below.
        </p>
      </section>

      <section>
        <h2>9. Your Rights ✋</h2>
        <p>Depending on your jurisdiction, you may have the right to:</p>
        <ul>
          <li>Access personal data we hold about you.</li>
          <li>Correct/ update inaccurate or incomplete data.</li>
          <li>Request deletion of your data (“right to be forgotten”).</li>
          <li>Object to or restrict processing.</li>
          <li>Obtain a copy or portable version of your data.</li>
          <li>Revoke consent (for optional processing, marketing).</li>
        </ul>
        <p>
          If you live in Australia, the UK, EU, California or other regulated
          areas — contact us if you wish to exercise these rights.
        </p>
      </section>

      <section>
        <h2>10. Age &amp; Children Policy 🚫</h2>
        <p>Harts is intended for users 13 years old and above.</p>
        <p>
          We do <strong>not knowingly</strong> collect personal data from
          children under 13.
        </p>
        <p>If we become aware of such data, we will promptly delete it.</p>
      </section>

      <section>
        <h2>11. International Transfer of Data 🌍</h2>
        <p>
          Your information may be stored and processed in servers located
          outside your country (e.g. hosted on Vercel, databases in US/Asia,
          etc).
        </p>
        <p>By using the Site, you consent to data transfer across borders.</p>
        <p>We maintain adequate safeguards to protect your data.</p>
      </section>

      <section>
        <h2>12. Changes to This Policy 🔄</h2>
        <p>
          We may update this Privacy Policy from time to time (for example, if
          we change data‑handling practices, or legal requirements change).
        </p>
        <p>When we do, we will update the “Last updated” date.</p>
        <p>
          We recommend you review this page periodically. Continued use of Hart
          after changes will mean you accept the new policy.
        </p>
      </section>

      <section>
        <h2>13. Contact Us ✉️</h2>
        <p>
          If you have questions, concerns, or want to exercise your data rights,
          contact us at:
        </p>
        <ul>
          <li>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:your-email@example.com"
              className="underline text-blue-600 hover:text-blue-800"
            >
              admin@hart.com
            </a>
          </li>
        </ul>
      </section>
      </div>
    </article>
  );
};

export default Privacy;

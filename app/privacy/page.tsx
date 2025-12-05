export default function Privacy() {
  return (
    <div className="bg-neutral-900 text-white min-h-screen">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 pt-32 pb-16">
        <p className="text-primary-pink font-semibold tracking-wide uppercase text-sm mb-4">
          Legal
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-serif text-white">
          Privacy Policy
        </h1>
        <p className="text-lg text-neutral-500 mb-16">
          Last Updated: November 28, 2025
        </p>

        <div className="space-y-16 text-lg text-neutral-400 leading-relaxed">
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 font-serif">
              1. Introduction
            </h2>
            <p>
              Velkos Ltd (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use HotBot, our AI-powered communication and conversation-coaching application (&ldquo;Service&rdquo;). By using the Service, you consent to the practices described in this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6 font-serif">
              2. Information We Collect
            </h2>
            <h3 className="text-2xl font-bold text-white mb-4">2.1 Personal Information</h3>
            <p className="mb-4">
              We collect the following personal information when you create an account or use the Service:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Email address and name</li>
              <li>Account credentials</li>
              <li>Payment information (processed securely by third-party providers)</li>
            </ul>
            <p className="mb-8">We do not store your payment card information on our servers.</p>

            <h3 className="text-2xl font-bold text-white mb-4">2.2 Conversation Data</h3>
            <p className="mb-4">
              When you use HotBot, you may enter text or other content (&ldquo;Conversation Data&rdquo;). This information is collected only to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Process your AI requests</li>
              <li>Generate responses and coaching insights</li>
              <li>Sync your conversations across devices</li>
              <li>Allow you to revisit your history within the app</li>
            </ul>
            <p className="mb-8 text-white font-semibold">
              We do NOT use your Conversation Data to train, fine-tune, or improve AI models. Your conversations are never included in training datasets.
            </p>

            <h3 className="text-2xl font-bold text-white mb-4">2.3 Usage Data</h3>
            <p className="mb-4">
              We may collect technical information automatically, such as:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Device type</li>
              <li>Operating system</li>
              <li>App version</li>
              <li>Crash logs</li>
              <li>Basic analytics (session duration, feature usage)</li>
            </ul>
            <p>This data is used solely to maintain and improve the Service.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6 font-serif">
              3. How We Use Your Information
            </h2>
            <p className="mb-4">We use collected data to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Provide and operate the Service</li>
              <li>Sync your account and conversations across devices</li>
              <li>Process AI requests in real time</li>
              <li>Personalize your user experience</li>
              <li>Communicate with you</li>
              <li>Process payments securely</li>
              <li>Diagnose and resolve technical issues</li>
            </ul>
            <p className="text-white font-semibold">We do not sell your data or share it with advertisers.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6 font-serif">
              4. Data Storage & Security
            </h2>
            <p className="mb-4">
              We use Google Cloud Platform (GCP) infrastructure with industry-standard security measures:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>All data is encrypted in transit (TLS 1.2+) and at rest (AES-256)</li>
              <li>Authentication is handled via Firebase Authentication</li>
              <li>Conversation history and metadata are stored securely in Cloud SQL (PostgreSQL)</li>
              <li>Access is restricted to authorized personnel only</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6 font-serif">
              5. Subprocessors & Third-Party Services
            </h2>
            <p className="mb-4">We rely on trusted vendors to operate HotBot:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><span className="text-white font-semibold">Google Cloud Platform (GCP)</span> – Hosting and infrastructure</li>
              <li><span className="text-white font-semibold">Firebase Authentication</span> – Identity management</li>
              <li><span className="text-white font-semibold">Stripe</span> – Payment processing (if applicable)</li>
            </ul>
            <p>These providers may process data in the EU, EEA, UK, or United States. Their privacy policies can be found on their respective sites.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6 font-serif">
              6. International Data Transfers
            </h2>
            <p>
              Because our infrastructure is cloud-based, your data may be processed outside your country of residence. We rely on GDPR-compliant Data Processing Agreements and Standard Contractual Clauses where required. By using the Service, you consent to these transfers.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6 font-serif">
              7. Data Retention
            </h2>
            <p className="mb-4">We retain your data while your account remains active.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Conversation Data is stored until you delete it or delete your account</li>
              <li>Analytics data may be retained for up to 24 months</li>
              <li>Backup copies may exist for up to 30 days</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6 font-serif">
              8. Your Rights
            </h2>
            <p className="mb-4">Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Access your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Export your conversation history</li>
              <li>Withdraw consent</li>
            </ul>
            <p>
              You can request these through in-app settings (where available) or by contacting{' '}
              <a href="mailto:support@velkos.org" className="text-primary-pink hover:underline">
                support@velkos.org
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6 font-serif">
              9. Account Deletion
            </h2>
            <p className="mb-4">If you delete your account:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Your personal information is removed from active systems</li>
              <li>Your Conversation Data is permanently deleted</li>
              <li>Backups containing your data are removed automatically within 30 days</li>
            </ul>
            <p className="text-white font-semibold">Deletion cannot be undone.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6 font-serif">
              10. Cookies & Tracking
            </h2>
            <p className="mb-4">Our website may use:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Essential cookies for basic functionality</li>
              <li>Analytics cookies for usage statistics</li>
            </ul>
            <p>We do not use advertising or marketing trackers. You can disable cookies in your browser.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6 font-serif">
              11. Children&apos;s Privacy
            </h2>
            <p>
              The Service is not intended for individuals under the age of 16. We do not knowingly collect information from children. If such data is discovered, we will delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6 font-serif">
              12. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy periodically. Changes take effect upon posting. Significant changes may be communicated via email or in-app notification.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6 font-serif">
              13. Contact Us
            </h2>
            <p>
              For any questions about this Privacy Policy, contact us at:{' '}
              <a href="mailto:support@velkos.org" className="text-primary-pink hover:underline">
                support@velkos.org
              </a>
            </p>
            <p className="mt-4 text-neutral-500">Velkos Ltd</p>
          </section>
        </div>
      </div>
    </div>
  );
}

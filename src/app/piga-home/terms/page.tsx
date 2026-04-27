import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Piga Home",
  description:
    "The terms governing your use of Piga Home and AssisConnect services.",
};

const lastUpdated = "27 April 2026";
const effectiveDate = "27 April 2026";

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 text-gray-800">
      <header className="mb-10 border-b border-gray-200 pb-6">
        <h1 className="text-4xl font-bold text-gray-900">Terms of Service</h1>
        <p className="mt-2 text-sm text-gray-500">
          <strong>Last updated:</strong> {lastUpdated} &nbsp;·&nbsp;{" "}
          <strong>Effective:</strong> {effectiveDate}
        </p>
      </header>

      <article className="prose prose-gray max-w-none space-y-6 text-base leading-relaxed">
        <section>
          <p>
            These Terms of Service (&quot;<strong>Terms</strong>&quot;) form a
            legally binding agreement between you (&quot;<strong>you</strong>
            &quot;, &quot;<strong>your</strong>&quot;) and{" "}
            <strong>Assis Tech Ltd</strong> (&quot;<strong>we</strong>&quot;,
            &quot;<strong>us</strong>&quot;, &quot;<strong>our</strong>&quot;)
            governing your access to and use of the <strong>Piga Home</strong>{" "}
            mobile application and related services (collectively, the
            &quot;Service&quot;).
          </p>
          <p>
            By creating an account or using Piga Home, you agree to these
            Terms. If you do not agree, do not use the Service.
          </p>
        </section>

        <section>
          <h2 className="mt-8 text-2xl font-semibold text-gray-900">
            1. Eligibility
          </h2>
          <p>
            You must be at least 18 years old and legally able to enter into a
            binding contract to use Piga Home. By using the Service, you
            represent and warrant that you meet these requirements.
          </p>
        </section>

        <section>
          <h2 className="mt-8 text-2xl font-semibold text-gray-900">
            2. Your account
          </h2>
          <ul className="ml-6 list-disc">
            <li>
              You are responsible for maintaining the confidentiality of your
              account credentials and for all activity that occurs under your
              account.
            </li>
            <li>
              You agree to provide accurate, complete information when creating
              your account and to keep that information up to date.
            </li>
            <li>
              You must notify us immediately at{" "}
              <a
                href="mailto:benkaimugul@gmail.com"
                className="text-blue-600 hover:underline"
              >
                benkaimugul@gmail.com
              </a>{" "}
              if you suspect any unauthorized use of your account.
            </li>
            <li>
              We reserve the right to refuse, suspend, or terminate accounts
              that violate these Terms or that we reasonably believe are being
              used for fraud or abuse.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mt-8 text-2xl font-semibold text-gray-900">
            3. The Service
          </h2>
          <p>
            Piga Home provides Voice-over-IP (VoIP) calling, prepaid wallet
            top-ups, mobile airtime top-ups, and subscription calling plans to
            destinations in supported countries. Service availability,
            destinations, and pricing may change.
          </p>
          <p>
            <strong>Not a replacement for emergency services:</strong> Piga Home
            does <strong>not</strong> support emergency calls (e.g. 999, 911,
            112). You must have an alternative means to contact emergency
            services at all times.
          </p>
        </section>

        <section>
          <h2 className="mt-8 text-2xl font-semibold text-gray-900">
            4. Pricing, payments, and refunds
          </h2>
          <ul className="ml-6 list-disc">
            <li>
              <strong>Pay-as-you-go calls:</strong> charged per minute against
              your wallet balance. Rates are displayed in the app before you
              place a call.
            </li>
            <li>
              <strong>Subscriptions:</strong> billed monthly or annually in
              advance via Stripe. Subscriptions auto-renew until you cancel.
            </li>
            <li>
              <strong>Wallet top-ups and airtime purchases:</strong> processed
              immediately and are{" "}
              <strong>non-refundable once delivered</strong>. Failed deliveries
              (e.g. unsuccessful airtime top-up) will be refunded to your
              wallet.
            </li>
            <li>
              <strong>Cancellations:</strong> you may cancel a subscription at
              any time from the app. Cancellation takes effect at the end of
              the current billing period; we do not refund partial periods.
            </li>
            <li>
              All prices are inclusive of any applicable taxes unless stated
              otherwise.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mt-8 text-2xl font-semibold text-gray-900">
            5. Acceptable use
          </h2>
          <p>You agree not to:</p>
          <ul className="ml-6 list-disc">
            <li>
              Use the Service for unlawful purposes, including fraud, harassment,
              spam, or unauthorized telemarketing
            </li>
            <li>
              Use the Service to make calls that you do not have a lawful right
              to make (e.g. recorded calls in jurisdictions requiring consent)
            </li>
            <li>
              Attempt to interfere with, reverse-engineer, decompile, or
              circumvent any part of the Service
            </li>
            <li>
              Resell, sublicense, or commercially redistribute the Service
              without our prior written consent
            </li>
            <li>
              Use the Service in a way that could damage, disable, overload, or
              impair our infrastructure
            </li>
            <li>
              Use multiple accounts or referral codes to abuse promotional
              bonuses
            </li>
          </ul>
          <p>
            We may suspend or terminate accounts that violate this Section
            without notice and without refund.
          </p>
        </section>

        <section>
          <h2 className="mt-8 text-2xl font-semibold text-gray-900">
            6. Intellectual property
          </h2>
          <p>
            All content, software, trademarks, and other materials in the
            Service are the property of Assis Tech Ltd or its licensors. We
            grant you a limited, non-exclusive, non-transferable, revocable
            license to use the Service for personal, non-commercial purposes in
            accordance with these Terms.
          </p>
        </section>

        <section>
          <h2 className="mt-8 text-2xl font-semibold text-gray-900">
            7. Third-party services
          </h2>
          <p>
            The Service relies on third parties including Stripe (payments),
            Reloadly (airtime), Google (sign-in and push notifications), and
            our email delivery provider. Your use of those services is also
            governed by their respective terms and privacy policies. We are
            not responsible for the acts or omissions of third-party providers.
          </p>
        </section>

        <section>
          <h2 className="mt-8 text-2xl font-semibold text-gray-900">
            8. Disclaimer of warranties
          </h2>
          <p>
            The Service is provided <strong>&quot;as is&quot;</strong> and{" "}
            <strong>&quot;as available&quot;</strong> without warranties of any
            kind, whether express or implied, including (without limitation)
            warranties of merchantability, fitness for a particular purpose,
            non-infringement, or uninterrupted operation. We do not warrant
            that the Service will be error-free, secure, or always available.
          </p>
        </section>

        <section>
          <h2 className="mt-8 text-2xl font-semibold text-gray-900">
            9. Limitation of liability
          </h2>
          <p>
            To the maximum extent permitted by law, Assis Tech Ltd, its
            directors, employees, and agents will not be liable for any
            indirect, incidental, special, consequential, or punitive damages,
            or any loss of profits or revenues, arising out of or in connection
            with your use of (or inability to use) the Service. Our total
            aggregate liability for any direct damages will not exceed the
            greater of (a) the amount you paid us in the 12 months preceding
            the event giving rise to the claim, or (b) GBP £100.
          </p>
          <p>
            Nothing in these Terms excludes or limits liability that cannot be
            excluded under applicable law (e.g. liability for death or personal
            injury caused by negligence, or for fraud).
          </p>
        </section>

        <section>
          <h2 className="mt-8 text-2xl font-semibold text-gray-900">
            10. Indemnification
          </h2>
          <p>
            You agree to indemnify and hold harmless Assis Tech Ltd from any
            claims, losses, damages, liabilities, and expenses (including
            reasonable legal fees) arising from your breach of these Terms or
            your misuse of the Service.
          </p>
        </section>

        <section>
          <h2 className="mt-8 text-2xl font-semibold text-gray-900">
            11. Termination
          </h2>
          <p>
            You may stop using the Service or delete your account at any time
            from within the app or by contacting us at{" "}
            <a
              href="mailto:benkaimugul@gmail.com"
              className="text-blue-600 hover:underline"
            >
              benkaimugul@gmail.com
            </a>
            . We may suspend or terminate your access to the Service at any
            time, with or without notice, if we believe you have violated these
            Terms.
          </p>
          <p>
            Sections 6, 8, 9, 10, 12, and 13 survive termination of these
            Terms.
          </p>
        </section>

        <section>
          <h2 className="mt-8 text-2xl font-semibold text-gray-900">
            12. Governing law and dispute resolution
          </h2>
          <p>
            These Terms are governed by the laws of England and Wales. Any
            dispute arising out of or in connection with these Terms will be
            subject to the exclusive jurisdiction of the courts of England and
            Wales, except where you have rights under the laws of your country
            of residence that cannot lawfully be excluded.
          </p>
        </section>

        <section>
          <h2 className="mt-8 text-2xl font-semibold text-gray-900">
            13. Changes to these Terms
          </h2>
          <p>
            We may update these Terms from time to time. The &quot;Last
            updated&quot; date at the top of this page indicates when they were
            most recently revised. Material changes will be notified through the
            app or by email. Your continued use of the Service after a change
            takes effect constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section>
          <h2 className="mt-8 text-2xl font-semibold text-gray-900">
            14. Contact
          </h2>
          <p>
            <strong>Assis Tech Ltd</strong>
            <br />
            19 Rigby Street, Manchester, WA3 3DN, United Kingdom
            <br />
            Email:{" "}
            <a
              href="mailto:benkaimugul@gmail.com"
              className="text-blue-600 hover:underline"
            >
              benkaimugul@gmail.com
            </a>
          </p>
        </section>
      </article>

      <footer className="mt-16 border-t border-gray-200 pt-6 text-sm text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} Assis Tech Ltd · Piga Home is a
          product of Assis Tech Ltd.
        </p>
      </footer>
    </main>
  );
}

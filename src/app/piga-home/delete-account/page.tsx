import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delete Your Piga Home Account",
  description:
    "How to permanently delete your Piga Home account and associated personal data.",
};

export default function DeleteAccountPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 text-gray-800">
      <header className="mb-10 border-b border-gray-200 pb-6">
        <h1 className="text-4xl font-bold text-gray-900">
          Delete Your Piga Home Account
        </h1>
        <p className="mt-3 text-base text-gray-600">
          You can permanently delete your Piga Home account and the personal
          data associated with it at any time. This page explains how.
        </p>
      </header>

      <article className="prose prose-gray max-w-none space-y-6 text-base leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900">
            Option 1 — From inside the app
          </h2>
          <ol className="ml-6 list-decimal">
            <li>Open the Piga Home app and sign in.</li>
            <li>
              Go to <strong>Account</strong>.
            </li>
            <li>
              Scroll down and tap <strong>Delete Account</strong>.
            </li>
            <li>Confirm the deletion when prompted.</li>
          </ol>
          <p>
            Your account will be deleted within 30 days. You will receive an
            email confirmation when the deletion is complete.
          </p>
        </section>

        <section>
          <h2 className="mt-8 text-2xl font-semibold text-gray-900">
            Option 2 — By email (no app required)
          </h2>
          <p>
            If you cannot access the app, you can request account deletion by
            email:
          </p>
          <ol className="ml-6 list-decimal">
            <li>
              Send an email to{" "}
              <a
                href="mailto:benkaimugul@gmail.com?subject=Piga%20Home%20Account%20Deletion%20Request"
                className="text-blue-600 hover:underline"
              >
                benkaimugul@gmail.com
              </a>{" "}
              <strong>from the email address registered to your Piga
              Home account</strong>.
            </li>
            <li>
              Use the subject line: <em>Piga Home Account Deletion Request</em>.
            </li>
            <li>
              Include your full name as it appears on your account so we can
              verify your identity.
            </li>
          </ol>
          <p>
            We will reply to confirm the deletion within 30 days of receiving
            your request.
          </p>
        </section>

        <section>
          <h2 className="mt-8 text-2xl font-semibold text-gray-900">
            What happens when you delete your account
          </h2>
          <p>
            When your account is deleted, the following data is permanently
            removed:
          </p>
          <ul className="ml-6 list-disc">
            <li>Your profile information (name, email, country, profile picture)</li>
            <li>Your authentication credentials and active sessions</li>
            <li>Your wallet balance (any unused balance is forfeited)</li>
            <li>Your contacts list (if previously stored)</li>
            <li>Your push notification token</li>
            <li>Your saved preferences and biometric login flag</li>
          </ul>
        </section>

        <section>
          <h2 className="mt-8 text-2xl font-semibold text-gray-900">
            What we are required to retain
          </h2>
          <p>
            By law, we must retain certain records even after account deletion:
          </p>
          <ul className="ml-6 list-disc">
            <li>
              <strong>Billing and call records</strong> — retained for 6 years
              from the date of the transaction (UK statutory requirement for
              accounting and tax purposes).
            </li>
            <li>
              <strong>Records related to legal disputes or fraud
              investigations</strong> — retained until those matters are
              resolved.
            </li>
          </ul>
          <p>
            These retained records are stored securely, accessed only when
            legally required, and are anonymised wherever possible.
          </p>
        </section>

        <section>
          <h2 className="mt-8 text-2xl font-semibold text-gray-900">
            Active subscriptions
          </h2>
          <p>
            If you have an active subscription, please cancel it from within
            the app or your Stripe customer portal{" "}
            <strong>before</strong> deleting your account. Deleting your
            account does not automatically refund unused subscription days.
          </p>
        </section>

        <section>
          <h2 className="mt-8 text-2xl font-semibold text-gray-900">
            Questions?
          </h2>
          <p>
            For any questions about account deletion or your data, contact us
            at{" "}
            <a
              href="mailto:benkaimugul@gmail.com"
              className="text-blue-600 hover:underline"
            >
              benkaimugul@gmail.com
            </a>
            .
          </p>
          <p>
            See our{" "}
            <a
              href="/piga-home/privacy"
              className="text-blue-600 hover:underline"
            >
              Privacy Policy
            </a>{" "}
            for more information about how we handle your personal data.
          </p>
        </section>
      </article>

      <footer className="mt-16 border-t border-gray-200 pt-6 text-sm text-gray-500">
        <p>
          <strong>Assis Tech Ltd</strong> · 19 Rigby Street, Manchester, WA3
          3DN, United Kingdom
        </p>
        <p className="mt-2">
          &copy; {new Date().getFullYear()} Assis Tech Ltd · Piga Home is a
          product of Assis Tech Ltd.
        </p>
      </footer>
    </main>
  );
}

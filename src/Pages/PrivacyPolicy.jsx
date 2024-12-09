import React from 'react';
const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-900 text-gray-800 py-10 px-5 sm:px-10 lg:px-20">
      <div className="max-w-4xl mx-auto bg-gray-200 rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Privacy Policy</h1>
        <p className="mb-6 text-lg">
          Welcome to the Foneshack Privacy Policy. We prioritize your privacy and strive to ensure that your personal information remains secure. This policy outlines the types of data we collect, how we use it, who we share it with, and your rights regarding your information.
        </p>
        <p className="mb-6 text-lg">
          By using our website or services, you agree to the terms outlined below. We recommend reviewing this policy regularly, as updates may occur to reflect changes in our practices or legal requirements.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Information Collection and Usage</h2>
            <div className="mb-4">
              <h3 className="text-lg font-medium">1.1 Personal Information You Provide Directly</h3>
              <p>
                We collect personal information that you provide to us directly when you engage with Foneshack services. This includes:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Contact Information: Such as your name, email address, phone number, and mailing address when you create an account, schedule a shipment, or contact us for support.</li>
                <li>Payment Information: Including credit card numbers, billing address, and other financial information needed to process payments for our services.</li>
                <li>Identity Verification: In certain cases, we may request proof of identity to verify your account or shipment, in compliance with regulatory requirements.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium">1.2 Automatically Collected Information</h3>
              <p>
                When you visit our website, certain information is collected automatically through cookies and other tracking technologies. This includes:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Device and Usage Information: Such as your IP address, browser type, device type, operating system, and information about your browsing behavior on our site.</li>
                <li>Log Information: Including timestamps of visits, pages viewed, and any clicks or interactions on the website.</li>
                <li>Cookies and Tracking Data: We use cookies, web beacons, and similar technologies to remember your preferences, analyze site traffic, and provide tailored content.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p>
              Foneshack uses your information to provide efficient and personalized services. Specific uses include:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Service Provision: To process your orders, confirm transactions, and deliver products.</li>
              <li>Account Management: To create and manage your customer account, verify your identity, and enable secure account access.</li>
              <li>Customer Support: To respond to your inquiries, resolve issues, and enhance customer satisfaction through personalized assistance.</li>
              <li>Marketing and Communication: To send you promotional materials, service updates, and offers.</li>
              <li>Legal Compliance and Security: To comply with legal obligations and enforce our terms of service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Information Sharing and Disclosure</h2>
            <p>
              Foneshack does not sell or rent your personal information. We may share your information under specific conditions:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>With Service Providers: Third-party providers performing essential functions like payment processing and order fulfillment.</li>
              <li>Legal Requirements: Disclosure when required by law or to protect the rights and safety of Foneshack and its users.</li>
              <li>Business Transfers: Information may be transferred during mergers, acquisitions, or sales of assets.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Security of Your Information</h2>
            <p>
              We implement a variety of security measures, including encryption and access control, to protect your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Retention of Information</h2>
            <p>
              Foneshack retains personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Your Rights and Choices</h2>
            <p>You have rights to access, correct, delete, or opt out of marketing communications. For any requests, contact us.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
            <p>
              If you have any questions or concerns regarding this Privacy Policy, please contact us:
            </p>
            <p className="mt-4">
              <strong>Address:</strong> Roseau Office, UK<br />
              <strong>Phone:</strong> 767 440 3565 <br />
              <strong>Email:</strong> roseau@thefoneshack.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
 
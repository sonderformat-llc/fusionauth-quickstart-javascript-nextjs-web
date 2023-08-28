import './globals.css';
import type { Metadata } from 'next';
import Image from 'next/image';
import LoginButton from '../components/LoginButton';

import { getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]/route';

export const metadata: Metadata = {
  title: 'FusionAuth Next.js with NextAuth.js',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body>
        <div id="page-container">
          <div id="page-header">
            <div id="logo-header">
              <Image
                src="https://fusionauth.io/assets/img/samplethemes/changebank/changebank.svg"
                alt="change bank logo"
                width="257"
                height="55"
              />
              <LoginButton session={session} />
            </div>

            <div id="menu-bar" className="menu-bar">
              {session ? (
                <>
                  <a
                    href="/makechange"
                    className="menu-link"
                    style={{ textDecorationLine: 'underline' }}
                  >
                    Make Change
                  </a>
                  <a
                    href="/account"
                    className="menu-link"
                    style={{ textDecorationLine: 'underline' }}
                  >
                    Account
                  </a>
                </>
              ) : (
                <>
                  <a className="menu-link">About</a>
                  <a className="menu-link">Services</a>
                  <a className="menu-link">Products</a>
                  <a
                    className="menu-link"
                    style={{ textDecorationLine: 'underline' }}
                  >
                    Home
                  </a>
                </>
              )}
            </div>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}

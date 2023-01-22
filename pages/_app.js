import { AuthProvider } from "@/context/AuthContext";
import DashboardLayout from "@/layout/dashboard-layout";
import "@/styles/globals.css";
import { Inter } from "@next/font/google";

import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

const openRoutes = ["/", "/invitation-code", "/auth/signup", "/auth/signin"];

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <div className='max-w-md mx-auto'>
      <Head>
        <title>Audio</title>
      </Head>
      {!openRoutes.includes(router.pathname) ? (
        <AuthProvider>
          <DashboardLayout className={inter.className}>
            <Component {...pageProps} />
          </DashboardLayout>
        </AuthProvider>
      ) : (
        <Component {...pageProps} />
      )}
    </div>
  );
}

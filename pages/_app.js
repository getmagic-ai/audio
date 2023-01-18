import DashboardLayout from "@/layout/dashboard-layout";
import "@/styles/globals.css";
import { Inter } from "@next/font/google";

import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

const openRoutes = ["/", "/invitation-code", "/signup", "/signin"];

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <React.Fragment>
      <Head>
        <title>Audio</title>
      </Head>
      {!openRoutes.includes(router.pathname) ? (
        <DashboardLayout className={inter.className}>
          <Component {...pageProps} />
        </DashboardLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </React.Fragment>
  );
}

import { AuthProvider } from "../context/AuthContext";
import DashboardLayout from "../layout/dashboard-layout";
import "../styles/globals.css";
import { Poppins } from "@next/font/google";

import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { QueryClient, useQuery, QueryClientProvider } from "react-query";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const openRoutes = ["/", "/invitation-code", "/auth/signup", "/auth/signin"];

// Created a client
const queryClient = new QueryClient();
export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <div className='max-w-md mx-auto'>
      <Head>
        <title>Audio</title>
      </Head>
      {!openRoutes.includes(router.pathname) ? (
        <div className='h-screen overflow-hidden'>
          <AuthProvider>
            <QueryClientProvider client={queryClient}>
              <DashboardLayout className={poppins.className}>
                <Component {...pageProps} />
              </DashboardLayout>
            </QueryClientProvider>
          </AuthProvider>
        </div>
      ) : (
        <Component {...pageProps} />
      )}
    </div>
  );
}

export const fetchAudioData = async () => {
  // Creating a GET method call here, will be passed as an argument to useQuery elsewhere to get the data
  console.log(
    "logging API token from env..." + process.env.NEXT_PUBLIC_API_TOKEN
  );
  const res = await fetch(
    "https://kollaboratenocodb.herokuapp.com/api/v1/db/data/v1/audio/audio_master_dev?limit=100&shuffle=0&offset=0",
    {
      method: "GET",
      headers: {
        acccept: "application/json",
        "xc-token": process.env.NEXT_PUBLIC_API_TOKEN,
      },
    }
  );
  return res.json();
};

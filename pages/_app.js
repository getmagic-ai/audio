import { AuthProvider } from "@/context/AuthContext";
import "@/styles/globals.css";
import { Poppins } from "@next/font/google";

import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppLayout from "@/components/Layout";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const openRoutes = [
  "/",
  "/invitation-code",
  "/auth/signup",
  "/auth/signin",
  "/waitlist",
];

// Created a client
const queryClient = new QueryClient();
export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <div className='bg-black min-h-screen'>
      <Head>
        <title>Waveforms.io</title>
      </Head>
      {!openRoutes.includes(router.pathname) ? (
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <AppLayout className={poppins.className}>
              <div className='bg-black min-h-screen'>
                <Component {...pageProps} />
              </div>
            </AppLayout>
          </QueryClientProvider>
        </AuthProvider>
      ) : (
        <Component {...pageProps} />
      )}
    </div>
  );
}
export const fetchAudioData = async () => {
  // Creating a GET method call here, will be passed as an argument to useQuery elsewhere to get the data
  // console.log(
  //   "logging API token from env..." + process.env.NEXT_PUBLIC_API_TOKEN
  // );

  const res = await fetch(
    "https://kollaboratenocodb.herokuapp.com/api/v1/db/data/v1/audio/audio_master_dev?limit=700&shuffle=0&offset=0", /*Limit had to be updated, it simply wasn't puilling in the data. Took me a long time @PrathmeshSadake, lets fix this properly*/
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

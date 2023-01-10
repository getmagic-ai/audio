import "../styles/globals.css";
import { QueryClient, useQuery, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export const fetchAudioData = async () => {
  console.log("logging API token from env..." + process.env.API_TOKEN);
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

import "../styles/globals.css";
import { QueryClient, useQuery, QueryClientProvider } from "@tanstack/react-query"; // importing the latest version (v4) of the QueryClient and QueryClientProvider
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"; //importating the latest verison (v4) of the dev tools, setting to default off during developemtn
import React from "react";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}> {/*providing the query client to the whole app @PrathmeshSadake please note its usable everywhere*/}
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false}/> {/*setting intial open to false*/}
    </QueryClientProvider>
  );
}

export const fetchAudioData = async () => { //creating a GET method call here, will be passed as an argument to useQuery elsewhere to get the data
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

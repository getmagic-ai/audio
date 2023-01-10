import "../styles/globals.css";
import { QueryClient, useQuery, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export const fetchAudioData = async () => {
  const res = await fetch(
    "https://kollaboratenocodb.herokuapp.com/api/v1/db/data/v1/audio/audio_master_dev?limit=100&shuffle=0&offset=0",
    {
      method: "GET",
      headers: {
        acccept: "application/json",
        "xc-token": "fOA42NYOS1Fdu3lNN2Am4lT94eUeoKElmEVfZ_hc",
      },
    }
  );
  return res.json();
};


export default function App({ Component, pageProps }) {

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />;
    </QueryClientProvider>
  );
}

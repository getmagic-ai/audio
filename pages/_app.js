import DashboardLayout from "@/Layout/dashboard-layout";
import "@/styles/globals.css";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <DashboardLayout className={inter.className}>
      <Component {...pageProps} />
    </DashboardLayout>
  );
}

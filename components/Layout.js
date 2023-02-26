import Navbar from "./Navbar";

export default function AppLayout({ children }) {
  return (
    <div className='max-w-5xl min-h-screen mx-auto bg-black'>
      <Navbar />
      <main className='flex-1'>
        <div className='py-6 pb-24 px-4 sm:px-6'>{children}</div>
      </main>
    </div>
  );
}

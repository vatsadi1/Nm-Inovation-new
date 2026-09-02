import { ScrollToTop } from './ScrollToTop';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#080C14] text-[#F8F9FA] selection:bg-blue-600 selection:text-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}

import { Toaster } from 'sonner';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import './globals.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        {children}
        <Footer />
        <Toaster
          toastOptions={{
            style: { fontFamily: 'Inter, sans-serif' },
            duration: 3000,
          }}
          richColors
        />
      </body>
    </html>
  );
};

export default RootLayout;

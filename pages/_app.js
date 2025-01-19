import '../styles/globals.css';
import { Lato, Roboto } from 'next/font/google';

// Initialize the fonts
const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
});

function BringBackPH({ Component, pageProps }) {
  return (
    <div className={`${lato.variable} ${roboto.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}

export default BringBackPH;

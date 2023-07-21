import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

import { Saira } from 'next/font/google';
import { ToastContainer } from 'react-toastify';

import { FilterContextProvider } from '@/context/filterContext';
import { CartContextProdiver } from '@/context/CartContext';
import { GitHubIcon, Header } from '@/components';
import Template from './templateBase';
import { Footer } from '@/components/Footer';

const saira = Saira({
    weight: ['300', '400', '500', '600'],
    subsets: ['latin']
});

export const metadata = {
    title: 'Aplicação capputeeeno',
    description: 'Uma listagem de produtos lindos pra você...'
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={saira.className}>
                <FilterContextProvider>
                    <CartContextProdiver>
                        <Header />
                        <ToastContainer />
                        <Template>{children}</Template>
                    </CartContextProdiver>
                </FilterContextProvider>

                <Footer.Root>
                    <Footer.Link
                        passHref
                        href={
                            'https://github.com/Julio-Freitas/challenge-capputeeno'
                        }
                    >
                        <GitHubIcon />
                    </Footer.Link>
                </Footer.Root>
            </body>
        </html>
    );
}

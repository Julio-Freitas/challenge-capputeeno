import { FilterContextProvider } from '@/context/filterContext';
import './globals.css';
import { Saira } from 'next/font/google';
import { Header } from '@/components';
import Template from './templage';
import { CartContextProdiver } from '@/context/CartContext';

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
                        <Template>{children}</Template>
                    </CartContextProdiver>
                </FilterContextProvider>
            </body>
        </html>
    );
}

import Link, { LinkProps } from 'next/link';

interface FooterLinkProps extends LinkProps {
    children: React.ReactNode;
}

export const FooterLink = ({ children, ...props }: FooterLinkProps) => (
    <Link {...props}>{children}</Link>
);

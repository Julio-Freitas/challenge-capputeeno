import Image from 'next/image';
import * as S from './style';
import { ProductCardProps } from './type';
import { formatCentsInReal } from '@/utils';
import Link from 'next/link';
export const ProductCard = ({ id, image, price, title }: ProductCardProps) => (
    <S.ProductItem>
        <Link
            href={{
                pathname: '/produto',
                query: { id }
            }}
            passHref
        >
            <>
                <Image
                    width={256}
                    height={300}
                    src={image}
                    alt={title}
                    title={`${title} by ${price}`}
                />
                <h3>{title}</h3>
                <p>{formatCentsInReal(+price)}</p>
            </>
        </Link>
    </S.ProductItem>
);

import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getDetailsOption } from '@/queryOptions/getDetailsOption.tsx';

export const Details: FC = () => {
    const { id } = useParams<{ id: string }>();

    return <></>;
};

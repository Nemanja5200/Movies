import { useSuspenseQuery } from '@tanstack/react-query';
import { getDetailsOption } from '@/queryOptions/getDetailsOption.tsx';

export const useDetails = (id: string | undefined) => {
    const { data } = useSuspenseQuery(getDetailsOption(Number(id)));

    return {
        data,
    };
};

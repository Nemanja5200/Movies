import { queryOptions } from '@tanstack/react-query';
import { tmdbService } from '@/service/tmdbService.ts';
import { getTime } from '@/utils/getTime.ts';

export const getDetailsOption = (id: number) => {
    return queryOptions({
        queryKey: ['details', id],
        queryFn: () => tmdbService.getDetailsData(id),
        staleTime: getTime(5),
    });
};

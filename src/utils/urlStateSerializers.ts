import { FilterParams } from '@/types/Filter';

export const createPageSerializer = (min = 1, max = 500) => ({
    serialize: (value: number) => value.toString(),
    deserialize: (value: string) => {
        const parsed = parseInt(value, 10);
        return parsed >= min && parsed <= max ? parsed : null;
    },
    validate: (value: number) => value >= min && value <= max,
});

export const filterParamsSerializer = {
    serialize: (value: FilterParams) => {
        const cleanValue = Object.fromEntries(
            Object.entries(value).filter(
                ([, v]) =>
                    v !== undefined &&
                    v !== null &&
                    (Array.isArray(v) ? v.length > 0 : true) &&
                    (typeof v === 'string' ? v.trim() !== '' : true)
            )
        );
        return JSON.stringify(cleanValue);
    },
    deserialize: (value: string): FilterParams | null => {
        try {
            return JSON.parse(value) as FilterParams;
        } catch {
            return null;
        }
    },
    validate: (value: FilterParams) =>
        typeof value === 'object' && value !== null,
};

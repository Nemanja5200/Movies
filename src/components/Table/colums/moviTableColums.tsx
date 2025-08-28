import { ColumnDef } from '@tanstack/react-table';
import { Movie } from '@/types/Movies.ts';
import {
    PosterImage,
    PosterPlaceholder,
} from '@/components/Table/style/Table.style.ts';

export const movieTableColumns: ColumnDef<Movie>[] = [
    {
        accessorKey: 'poster',
        header: 'Poster',
        cell: ({ getValue }) => {
            const posterPath = getValue() as string | null;
            return posterPath ? (
                <PosterImage
                    src={`https://image.tmdb.org/t/p/w92${posterPath}`}
                    alt="Movie poster"
                />
            ) : (
                <PosterPlaceholder>No Image</PosterPlaceholder>
            );
        },
    },
    {
        accessorKey: 'title',
        header: 'Title',
    },
    {
        accessorKey: 'overview',
        header: 'Overview',
        cell: ({ getValue }) => {
            const overview = getValue() as string;
            return overview?.length > 100
                ? `${overview.substring(0, 100)}...`
                : overview;
        },
    },
    {
        accessorKey: 'id',
        header: 'ID',
    },
];

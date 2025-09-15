import { FC } from 'react';
import { Movie } from '@/types/Movies.ts';
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
} from '@tanstack/react-table';
import {
    StyledTable,
    TableHeader,
    TableHeaderRow,
    TableHeaderCell,
    TableBody,
    TableRow,
    PosterCell,
    TitleCell,
    TableCell,
    OverviewCell,
    IdCell,
} from './style/Table.style.ts';
import { movieTableColumns } from '@/components/Table/colums/moviTableColums.tsx';
import { MovieHistoryItem } from '@/types/HistoryWidget.ts';
import { IMAGE_BASE_URL } from '@/utils/constants/Links.ts';

interface TableProps {
    movies: Movie[];
    handleRowClick: (id: number) => void;
    addToHistory: (movie: MovieHistoryItem) => void;
}

export const Table: FC<TableProps> = ({
    movies,
    handleRowClick,
    addToHistory,
}) => {
    const table = useReactTable({
        data: movies,
        columns: movieTableColumns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <StyledTable>
            <TableHeader>
                {table.getHeaderGroups().map(headerGroup => (
                    <TableHeaderRow key={headerGroup.id}>
                        {headerGroup.headers.map(header => (
                            <TableHeaderCell key={header.id}>
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                          header.column.columnDef.header,
                                          header.getContext()
                                      )}
                            </TableHeaderCell>
                        ))}
                    </TableHeaderRow>
                ))}
            </TableHeader>
            <TableBody>
                {table.getRowModel().rows.map(row => (
                    <TableRow
                        key={row.id}
                        onClick={() => {
                            addToHistory({
                                id: row.original.id,
                                title: row.original.title,
                                poster: `${IMAGE_BASE_URL}${row.original.poster}`,
                            });
                            handleRowClick(row.original.id);
                        }}
                    >
                        {row.getVisibleCells().map(cell => {
                            const CellComponent =
                                cell.column.id === 'poster'
                                    ? PosterCell
                                    : cell.column.id === 'title'
                                      ? TitleCell
                                      : cell.column.id === 'overview'
                                        ? OverviewCell
                                        : cell.column.id === 'id'
                                          ? IdCell
                                          : TableCell;

                            return (
                                <CellComponent key={cell.id}>
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </CellComponent>
                            );
                        })}
                    </TableRow>
                ))}
            </TableBody>
        </StyledTable>
    );
};

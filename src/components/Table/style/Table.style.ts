import styled from 'styled-components';

export const StyledTable = styled.table`
    width: 80%;
    margin: 0 auto;
    border-collapse: collapse;
    color: #ffffff;
    font-family: 'Poppins', sans-serif;
    overflow-x: auto;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(255, 255, 255, 0.1);
    background: #1a1d23;
    border: 1px solid gold;
`;

export const TableHeader = styled.thead`
    background: #2a2d35;
    position: sticky;
    top: 0;
    z-index: 10;
`;

export const TableHeaderRow = styled.tr`
    border-bottom: 2px solid gold;
`;

export const TableHeaderCell = styled.th`
    padding: 16px 12px;
    text-align: left;
    font-weight: 600;
    font-size: 0.9rem;
    color: #11a9c8;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-right: 1px solid gold;

    &:last-child {
        border-right: none;
    }

    &:hover {
        background: rgba(17, 169, 200, 0.1);
        cursor: pointer;
    }
`;

export const TableBody = styled.tbody`
    background: transparent;
`;

export const TableRow = styled.tr`
    border-bottom: 1px solid gold;
    transition: background-color 0.2s ease;

    &:hover {
        background: rgba(17, 169, 200, 0.05);
    }

    &:last-child {
        border-bottom: none;
    }
`;

export const TableCell = styled.td`
    padding: 12px;
    font-size: 0.9rem;
    color: #e0e0e0;
    border-right: 1px solid gold;
    vertical-align: top;

    &:last-child {
        border-right: none;
    }
`;

export const PosterCell = styled(TableCell)`
    width: 150px;
    text-align: center;
    padding: 8px;
`;

export const TitleCell = styled(TableCell)`
    font-weight: 600;
    color: #ffffff;
    min-width: 150px;
`;

export const OverviewCell = styled(TableCell)`
    max-width: 300px;
    line-height: 1.4;
    color: #b0b0b0;
`;

export const IdCell = styled(TableCell)`
    width: 80px;
    text-align: center;
    font-family: 'Courier New', monospace;
    color: #11a9c8;
    font-size: 0.8rem;
`;

export const PosterImage = styled.img`
    width: 60px;
    height: auto;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    transition: transform 0.2s ease;

    &:hover {
        transform: scale(1.05);
    }
`;

export const PosterPlaceholder = styled.div`
    width: 60px;
    height: 90px;
    background: linear-gradient(135deg, #2a2d35, #1a1d23);
    border: 2px dashed rgba(17, 169, 200, 0.3);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    color: #11a9c8;
    text-align: center;
    margin: 0 auto;
`;

export const ResponsiveStyledTable = styled(StyledTable)`
    @media (max-width: 768px) {
        font-size: 0.8rem;
        width: 95%;

        ${TableHeaderCell}, ${TableCell} {
            padding: 8px 6px;
        }

        ${PosterImage} {
            width: 40px;
        }

        ${PosterPlaceholder} {
            width: 40px;
            height: 60px;
        }

        ${OverviewCell} {
            max-width: 200px;
        }
    }

    @media (max-width: 480px) {
        width: 100%;

        ${TableHeaderCell}, ${TableCell} {
            padding: 6px 4px;
        }

        ${OverviewCell} {
            max-width: 150px;
        }
    }
`;

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BreadcrumbContainer = styled.nav`
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
    font-size: 0.875rem;
    position: absolute;
    top: 90px;
    left: 20px;
    right: 0;
    z-index: 10;

    @media (max-width: 31.313em) {
        top: 160px;
        left: 20px;
    }
`;

export const BreadcrumbLink = styled(Link)`
    color: #e0e0e0;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
        color: gold;
        text-decoration: underline;
    }
`;

export const BreadcrumbCurrent = styled.span`
    color: #e0e0e0;
    font-weight: 500;
`;

export const BreadcrumbSeparator = styled.span`
    margin: 0 0.5rem;
    color: gold;
    user-select: none;
`;

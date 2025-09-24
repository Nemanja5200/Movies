import { FC } from 'react';
import {
    SearchBarContainerStyle,
    SearchButton,
    SearchWrapper,
    SearchInput, // Import SearchInput instead of SearchBar
} from '@/components/SearchBar/styles/SearchBar.style.tsx';
import { SearchBarProps } from '@/types/ComponentProps.ts';

export const SearchBar: FC<SearchBarProps> = ({ value, onChange }) => {
    return (
        <SearchBarContainerStyle>
            <SearchWrapper>
                <SearchButton>🔍</SearchButton>
                <SearchInput
                    type="text"
                    placeholder="Search movies..."
                    value={value}
                    onChange={onChange}
                />
            </SearchWrapper>
        </SearchBarContainerStyle>
    );
};

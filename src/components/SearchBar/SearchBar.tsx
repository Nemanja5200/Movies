import { FC, useState } from 'react';
import {
    SearchBarContainerStyle,
    SearchButton,
    SearchWrapper,
    SearchInput, // Import SearchInput instead of SearchBar
} from '@/components/SearchBar/styles/SearchBar.style.tsx';

export const SearchBar: FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        console.log('Searching for:', searchTerm);

    };

    return (
        <SearchBarContainerStyle>
            <SearchWrapper>
                <SearchInput
                    type="text"
                    placeholder="Search movies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <SearchButton onClick={handleSearch}>
                    🔍
                </SearchButton>
            </SearchWrapper>
        </SearchBarContainerStyle>
    );
};
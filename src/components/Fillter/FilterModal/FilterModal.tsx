import { FC } from 'react';
import {
    ApplyButton,
    ClearButton,
    CloseButton,
    FilterOption,
    FilterOptionsGrid,
    FilterSection,
    FilterTitle,
    ModalBody,
    ModalContainer,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    RangeSlider,
    YearSelect,
} from '@/components/Fillter/FilterModal/styles/FilterModal.style.ts';

import CloseIcon from '@/assets/icons/CloseIcon.svg?react';
import { FilterParams, GenreId, TMDBSortOption } from '@/types/Filter.ts';
import { generateYearOptions } from '@/utils/genereteYears.ts';

import { SORTING_OPTIONS, SORT_DISPLAY_NAMES } from '@/types/Filter';
import { GENRE_LIST } from '@/utils/constants/GenresList.ts';

interface FilterSections {
    showGenres?: boolean;
    showYear?: boolean;
    showRating?: boolean;
    showSort?: boolean;
}

interface FilterModalProps {
    isModal: boolean;
    onClose: () => void;
    toggleGenre?: (genreId: GenreId) => void;
    filterParams: FilterParams;
    updateFilter: <K extends keyof FilterParams>(
        key: K,
        value: FilterParams[K]
    ) => void;
    onClear: () => void;
    onApply: () => void;
    prefetchFilter?: () => Promise<void>;
    prefetchChartData?: (year: number) => Promise<void>;
    sections?: FilterSections;
}

export const FilterModal: FC<FilterModalProps> = ({
    isModal,
    onClose,
    toggleGenre,
    filterParams,
    updateFilter,
    onClear,
    onApply,
    prefetchFilter,
    prefetchChartData,
    sections = {
        showGenres: true,
        showRating: true,
        showYear: true,
        showSort: true,
    },
}) => {
    return (
        <>
            <ModalOverlay $isOpen={isModal}>
                <ModalContainer $isOpen={isModal}>
                    <ModalHeader>
                        <h2>Filter</h2>
                        <CloseButton onClick={onClose}>
                            <CloseIcon />
                        </CloseButton>
                    </ModalHeader>
                    <ModalBody>
                        {/* Genres */}
                        {sections.showGenres && (
                            <FilterSection>
                                <FilterTitle>Genres</FilterTitle>
                                <FilterOptionsGrid>
                                    {GENRE_LIST.map(genre => (
                                        <FilterOption key={genre.id}>
                                            <input
                                                type="checkbox"
                                                checked={
                                                    filterParams.genres?.includes(
                                                        genre.id
                                                    ) || false
                                                }
                                                onChange={() =>
                                                    toggleGenre
                                                        ? toggleGenre(genre.id)
                                                        : null
                                                }
                                            />
                                            {genre.name}
                                        </FilterOption>
                                    ))}
                                </FilterOptionsGrid>
                            </FilterSection>
                        )}

                        {/* Year */}
                        {sections.showYear && (
                            <FilterSection>
                                <FilterTitle>Release Year</FilterTitle>
                                <YearSelect
                                    value={filterParams.year || ''}
                                    onChange={async e => {
                                        updateFilter(
                                            'year',
                                            e.target.value
                                                ? parseInt(e.target.value)
                                                : undefined
                                        );
                                        if (prefetchChartData) {
                                            await prefetchChartData(
                                                Number(e.target.value)
                                            );
                                        }
                                    }}
                                >
                                    <option value="">All Years</option>
                                    {generateYearOptions().map(year => (
                                        <option key={year} value={year}>
                                            {year}
                                        </option>
                                    ))}
                                </YearSelect>
                            </FilterSection>
                        )}

                        {/* Rating */}
                        {sections.showRating && (
                            <FilterSection>
                                <FilterTitle>
                                    Minimum Rating:{' '}
                                    {filterParams.ratingMin || 0}
                                </FilterTitle>
                                <RangeSlider>
                                    <input
                                        type="range"
                                        min="0"
                                        max="10"
                                        step="0.5"
                                        value={filterParams.ratingMin || 0}
                                        onChange={e =>
                                            updateFilter(
                                                'ratingMin',
                                                parseFloat(e.target.value)
                                            )
                                        }
                                    />
                                </RangeSlider>
                            </FilterSection>
                        )}

                        {/* Sort */}
                        {sections.showSort && (
                            <FilterSection>
                                <FilterTitle>Sort By</FilterTitle>
                                <YearSelect
                                    value={
                                        filterParams.sortBy ||
                                        SORTING_OPTIONS.POPULARITY_DESC
                                    }
                                    onChange={e =>
                                        updateFilter(
                                            'sortBy',
                                            e.target.value as TMDBSortOption
                                        )
                                    }
                                >
                                    {Object.values(SORTING_OPTIONS).map(
                                        option => (
                                            <option key={option} value={option}>
                                                {SORT_DISPLAY_NAMES[option]}
                                            </option>
                                        )
                                    )}
                                </YearSelect>
                            </FilterSection>
                        )}

                        <ModalFooter>
                            <ClearButton onClick={onClear}>
                                Clear All
                            </ClearButton>

                            <ApplyButton
                                onClick={onApply}
                                onMouseEnter={prefetchFilter}
                            >
                                Apply Filter
                            </ApplyButton>
                        </ModalFooter>
                    </ModalBody>
                </ModalContainer>
            </ModalOverlay>
        </>
    );
};

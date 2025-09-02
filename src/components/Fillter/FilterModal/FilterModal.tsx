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

export const FilterModal: FC = () => {
    return (
        <>
            <ModalOverlay $isOpen={true}>
                <ModalContainer $isOpen={true}>
                    <ModalHeader>
                        <h2>Filter</h2>
                        <CloseButton>
                            <CloseIcon />
                        </CloseButton>
                    </ModalHeader>
                    <ModalBody>
                        {/*{Genres}*/}
                        <FilterSection>
                            <FilterTitle>Genres</FilterTitle>
                            <FilterOptionsGrid>
                                <FilterOption key={'Genres'}>
                                    <input type="checkbox" />
                                    {'Genres'}
                                </FilterOption>
                            </FilterOptionsGrid>
                        </FilterSection>

                        {/*{Year}*/}
                        <FilterSection>
                            <FilterTitle>Release Year</FilterTitle>
                            <YearSelect value={'2020'}>
                                <option value="">All Years</option>
                            </YearSelect>
                        </FilterSection>

                        {/*{Ratings}*/}
                        <FilterSection>
                            <FilterTitle>Minimum Rating: {'0'}</FilterTitle>
                            <RangeSlider>
                                <input
                                    type="range"
                                    min="0"
                                    max="10"
                                    step="0.5"
                                    value={'5'}
                                />
                            </RangeSlider>
                        </FilterSection>

                        {/*{Sort By}*/}
                        <FilterSection>
                            <FilterTitle>Sort By</FilterTitle>
                            <YearSelect>
                                <option value="popularity.desc">
                                    Most Popular
                                </option>
                                <option value="popularity.asc">
                                    Least Popular
                                </option>
                                <option value="vote_average.desc">
                                    Highest Rated
                                </option>
                                <option value="vote_average.asc">
                                    Lowest Rated
                                </option>
                                <option value="release_date.desc">
                                    Newest First
                                </option>
                                <option value="release_date.asc">
                                    Oldest First
                                </option>
                            </YearSelect>
                        </FilterSection>

                        <ModalFooter>
                            <ClearButton>Clear All</ClearButton>
                            <ApplyButton>Apply Filters</ApplyButton>
                        </ModalFooter>
                    </ModalBody>
                </ModalContainer>
            </ModalOverlay>
        </>
    );
};

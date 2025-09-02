import { FC } from 'react';
import {
    FillterContainerStyle,
    FilterButtonWithIcon,
    SvgContainer,
} from '@/components/Fillter/FilterBtn/styles/FilterBtn.style.ts';
import FilterIcon from '@/assets/icons/FilterIcon.svg?react';

export const FilterBtn: FC = () => {
    return (
        <>
            <FillterContainerStyle>
                <FilterButtonWithIcon>
                    <SvgContainer>
                        <FilterIcon />
                    </SvgContainer>
                </FilterButtonWithIcon>
            </FillterContainerStyle>
        </>
    );
};

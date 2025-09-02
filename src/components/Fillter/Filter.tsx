import { FC } from 'react';
import {
    FillterContainerStyle,
    FilterButtonWithIcon,
    SvgContainer,
} from '@/components/Fillter/styles/Filter.style.ts';
import FilterIcon from '@/assets/icons/FilterIcon.svg?react';

export const Filter: FC = () => {
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

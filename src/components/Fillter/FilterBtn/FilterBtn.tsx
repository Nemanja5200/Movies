import { FC } from 'react';
import {
    FillterContainerStyle,
    FilterButtonWithIcon,
    SvgContainer,
} from '@/components/Fillter/FilterBtn/styles/FilterBtn.style.ts';
import FilterIcon from '@/assets/icons/FilterIcon.svg?react';
interface FilterBtnProps {
    onClick?: () => void;
}

export const FilterBtn: FC<FilterBtnProps> = ({ onClick }) => {
    return (
        <>
            <FillterContainerStyle>
                <FilterButtonWithIcon onClick={onClick}>
                    <SvgContainer>
                        <FilterIcon />
                    </SvgContainer>
                </FilterButtonWithIcon>
            </FillterContainerStyle>
        </>
    );
};

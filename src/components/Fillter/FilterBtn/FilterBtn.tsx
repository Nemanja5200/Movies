import { FC } from 'react';
import {
    FillterContainerStyle,
    FilterButtonWithIcon,
    SvgContainer,
} from '@/components/Fillter/FilterBtn/styles/FilterBtn.style.ts';
import FilterIcon from '@/assets/icons/FilterIcon.svg?react';
import { FilterBtnPropsType } from '@/types/ComponentProps.ts';

export const FilterBtn: FC<FilterBtnPropsType> = ({
    onClick,
    className,
    isActive,
}) => {
    console.log(isActive);
    return (
        <FillterContainerStyle className={className}>
            <FilterButtonWithIcon onClick={onClick} $isActive={isActive}>
                <SvgContainer>
                    <FilterIcon />
                </SvgContainer>
            </FilterButtonWithIcon>
        </FillterContainerStyle>
    );
};

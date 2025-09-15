import { FC } from 'react';
import {
    WidgetContainer,
    WidgetImg,
} from '@/components/HistoryWidget/styles/HistoryWidget.style.ts';
import WidgetIcon from '@/assets/icons/WidgetIcon.svg?react';

export const HistoryWidget: FC = () => {
    return (
        <>
            <WidgetContainer>
                <WidgetIcon />
            </WidgetContainer>
        </>
    );
};

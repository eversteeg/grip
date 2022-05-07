import { ContentCellProps, ContentCell as KContentCell } from 'faralley-ui-kit';
import React, { FunctionComponent } from 'react';
import useSelector from '../../../state/useSelector';

const ContentCell: FunctionComponent<ContentCellProps> = ({
    hasNegativeAmountColor = true,
    textLinesLimit = 2,
    hasLineThrough = false,
    hasTooltip = false,
    isCurrency = false,
    isBold = false,
    isDisabled = false,
    isImage = false,
    isTime = false,
    textColor = '',
    timeFormat = 'HH:mm',
    value,
}) => {
    const locale = useSelector(({ language }) => language.locale);

    return (
        <KContentCell
            hasLineThrough={hasLineThrough}
            hasNegativeAmountColor={hasNegativeAmountColor}
            hasTooltip={hasTooltip}
            isBold={isBold}
            isCurrency={isCurrency}
            isDisabled={isDisabled}
            isImage={isImage}
            isTime={isTime}
            locale={locale}
            textColor={textColor}
            textLinesLimit={textLinesLimit}
            timeFormat={timeFormat}
            value={value}
        />
    );
};

export default ContentCell;

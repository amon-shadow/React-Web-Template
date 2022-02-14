import { Tooltip } from '@mui/material';
import { withStyles } from '@mui/styles';
import React from 'react';

const LightTooltip = withStyles((theme) => ({
    tooltip: {
        color: 'rgba(255, 255, 255, 0.99)',
        fontSize: 12,
    },
}))(Tooltip);

interface CustomToolTipProps {
    title: string,
    placement?: any
    children: React.ReactElement;
}

export function CustomToolTip(props: CustomToolTipProps) {
    return (
        <LightTooltip
            title={props.title}
            disableTouchListener
            placement={props.placement}>
            {props.children}
        </LightTooltip>
    )
}

CustomToolTip.defaultProps = {
    placement: "top-start"
}
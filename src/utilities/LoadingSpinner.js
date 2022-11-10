import React from 'react';
import { CircularProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        position: 'relative',

    },
    top: {
        color: '#ffffff',
    },
    bottom: {
        color: '#864f61',
        animationDuration: '1000ms',
        
        position: 'absolute',
        left: 0,
    },
});

export default function LoadingSpinnerNoPadding() {
    const classes = useStyles();

    return (
        //TODO - fix placement of spinner
        <div className="flex flex-row content-center align-middle justify-center">
            <div className="">
                <div className={classes.root}>
                <CircularProgress
                        variant="determinate"
                        value={100}
                        className={classes.top}
                        size={50}
                        thickness={4}
                    />
                    <CircularProgress
                        variant="indeterminate"
                        disableShrink
                        className={classes.bottom}
                        size={50}
                        thickness={4}
                    />
                </div>
            </div>
        </div>
    )
}

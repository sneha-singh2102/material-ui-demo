import React from 'react'
import Grid from '@mui/material/Grid';
import { gridWrapperStyles } from './GridWrapperStyles';

const GridWrapper = ({ children }) => {

    return (
        <Grid item xs={12} sx={gridWrapperStyles}>
            {children}
        </Grid>
    )
}

export default GridWrapper
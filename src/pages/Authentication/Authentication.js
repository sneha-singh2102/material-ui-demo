import React from 'react'
import Grid from '@mui/material/Grid';
import CommonButton from '../../components/CommonButton/CommonButton';

const Authentication = () => {

     const handleClick = () => {
        alert('Button clicked!');
      };

    const buttonStyles = {
        fontSize: '0.875rem',
        fontWeight: 600,
        textTransform: 'capitalize',
        borderRadius: 2.5,
        '&.MuiButton-contained': {
            backgroundColor: '#009be5',
            '&:hover': {
                backgroundColor: '#006db3'
            },
        },
        '&.MuiButton-outlined': {
            color: 'green',
            borderColor: 'green',
            '&:hover': {
                backgroundColor: 'transparent'
            },
        },
    };

    return (
        <Grid item xs={8}>
            This is authentication page.
            <CommonButton
                sx={buttonStyles}
                variant="contained"
            >
                Add user
            </CommonButton>
            <CommonButton onClick={handleClick}
                sx={buttonStyles}
                variant="outlined"
            >
                Add user
            </CommonButton>
        </Grid>
    )
}

export default Authentication
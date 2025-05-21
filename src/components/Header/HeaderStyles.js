export const headerStyles = {
    wrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#009be5',
        paddingTop: '10px',
    },
    topRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'end',
        alignItems: 'center',
        marginBottom: '20px',
        '*': {
            marginRight: '5px',
        },
    },
    middleRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '5px',
        marginLeft: '20px',
    },
    link: {
        margin: '0px',
        fontWeight: '500',
        fontSize: '26px',
        letterSpacing: '0.5px',
        color: 'rgba(255, 255, 255, 0.7)',
        "&:hover": {
            color: '#fff',
            cursor: 'pointer',
        },
    },
    webButton: {
        marginRight: '5px',
        color: 'white',
            borderColor: 'white',
            '&:hover': {
              borderColor: 'white',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
    },
};
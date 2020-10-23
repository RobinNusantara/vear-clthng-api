import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
    table: {
        maxWidth: 700,
    },
    productImage: {
        width: 100,
        height: 130,
        border: ` 1px solid ${theme.palette.secondary.main}`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    productName: {
        fontWeight: 'bold',
    },
    productColor: {
        marginTop: theme.spacing(1),
    },
}));

export default useStyles;

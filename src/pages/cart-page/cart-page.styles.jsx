import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    content: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'right',
        marginTop: theme.spacing(2),
    },
    button: {
        marginTop: theme.spacing(2),
    },
}));

export default useStyles;

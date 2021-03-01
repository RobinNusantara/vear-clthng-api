import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: theme.palette.secondary.main,
    marginBottom: theme.spacing(1),
  },
  input: {
    fontSize: 14,
    margin: 'auto',
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    borderRadius: theme.spacing(0.5),
    textTransform: (props) => props.isCapitalize ? 'capitalize' : 'uppercase', 
  },
  [theme.breakpoints.down('sm')]: {
    label: {
      fontSize: 12,
    },
  },
}));

export default useStyles;

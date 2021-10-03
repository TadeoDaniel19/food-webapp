import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  user: {
    fontSize: '12px',
    paddingTop: '5px',
    fontWeight: 'bold',
  },
  labelSize: {
    fontWeight: 'bold',
    fontSize: '18px',
  },
  dataLabel: {
    fontSize: '18px',
    paddingBottom: '3px',
  },
  formTextfield: {
    width: '100%',
    margin: 0,
    '&:disabled': {
      border: '1px solid #9A9895',
    },
  },
  numberField: {
    width: '100%',
    '& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
      display: 'none',
    },
    '& input': {
      '-moz-appearance': 'textfield',
    },
  },
}));

export default useStyles;

import { createMuiTheme, makeStyles } from '@material-ui/core';

export const theme = createMuiTheme({
    palette: {
        type: 'dark'
    }
});

export const useStyles = makeStyles((theme) => ({
    container: {
    display: 'flex',
    flexWrap: 'wrap',
    },
    textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
    }
}));

    
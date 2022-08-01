import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette:
  {
    primary: {
        main: "rgb(29, 161, 242)",
        dark: "rgb(26, 145, 218)",
        contrastText: "#fff"
    },
    secondary: {
      light: '#7f7f7f',
      main: '#D4D6D7',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export default theme;
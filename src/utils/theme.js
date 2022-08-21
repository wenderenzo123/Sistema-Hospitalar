import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

const theme = createTheme({
    palette:{
        primary:{
            main: "#1B262C",
        },
        secondary:{
            main: "#0F4C75",
        },
        error:{
            main: red.A400,
        },
        background: {
            default: "#1B262C"
          }
    }
}) 

export default theme
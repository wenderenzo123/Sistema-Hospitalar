import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { mainListItems, secondaryListItems } from "./listItems";
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import LocalHospitalRoundedIcon from '@mui/icons-material/LocalHospitalRounded';
import mdTheme from "../../src/utils/theme";
import { alpha } from "@mui/material";
import { useRouter } from "next/router";

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    "& .MuiDrawer-paper": {
        position: "relative",
        whiteSpace: "nowrap",
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: "border-box",
        ...(!open && {
            overflowX: "hidden",
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up("sm")]: {
                width: theme.spacing(9),
            },
        }),
    },
}));

// const mdTheme = createTheme({
//   palette:{
//     primary:{
//         main: "#1B262C",
//     },
//     secondary:{
//         main: "#0F4C75",
//     },
//     error:{
//         main: "#f30909",
//     }
// }
// });
type DashboardLayoutProps = {
    children: React.ReactNode,
};
export default function DashboardContent({ children }: DashboardLayoutProps) {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };
    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: "flex"}}>
                <CssBaseline />
                <AppBar position="absolute" open={open}>
                    <Toolbar
                        sx={{
                            pr: "24px", // Mantem o padding quando o drawer e fechado
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: "36px",
                                ...(open && { display: "none" }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            Dashboard
                        </Typography>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <Toolbar
                        sx={{
                            backgroundColor: mdTheme.palette.primary.main,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            px: [1],
                        }}
                    >
                        <Toolbar sx={{
                            p:1
                        }}>
                            <LocalHospitalRoundedIcon style={{ color: "white" }} />
                            <Typography variant="h5" style={{ color: "white" }}>HEALTH</Typography>
                        </Toolbar>
                        <IconButton onClick={toggleDrawer} style={{ color: "white" }}>
                            <MenuOpenRoundedIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List
                        style={{
                            backgroundColor: mdTheme.palette.primary.main,
                            opacity: 0.99,
                            color: "grey",
                        }}
                        component="nav"
                    >
                        {mainListItems}
                        <Divider sx={{ my: 1 }} />
                        {secondaryListItems}
                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === "light"
                                ? mdTheme.palette.secondary.main
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: "100vh",
                        width: "100vw",
                        overflow: "auto",
                    }}
                    >
                    <Toolbar />
                    <Box sx={{
                        p: 4,
                        }}>
                        {children}
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

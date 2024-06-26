import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ListSubheader from '@mui/material/ListSubheader';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import StarBorder from '@mui/icons-material/StarBorder';
import { useNavigate } from 'react-router-dom';
import User from './user'
import Board from './board'
import Banner from './main/banner'
import Pick from './main/pick'
import Reservation from './main/reservation'
import SearchRecommend from './search/searchRecommend'
import Notice from './customerCenter/notice'
import Login from './login'
import { FaUser } from "react-icons/fa";
import { PiSoccerBallFill } from "react-icons/pi";
import { FaThLarge } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";

const index = (props) => {

    const drawerWidth = 240;
    const navigate = useNavigate();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);
    const [open, setOpen] = React.useState(Array.from({ length: 3 }, () => false));
    const [content, setContent] = React.useState("");

    const handleClick = () => {
        setOpen(!open);
    };

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const drawer = (
        <div>
            <Toolbar>
                <div className='flex items-center'>
                    <img src="/svg/Logo.svg" onClick={() => navigate("/")} className='cursor-pointer' />
                    <div className='ml-2 font-bold text-xs'>관리자 페이지</div>
                </div>
            </Toolbar>
            <Divider />
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        김포운통장
                    </ListSubheader>
                }
            >

                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                        <FaUser className='w-5 h-5' />
                    </ListItemIcon>
                    <ListItemText primary="회원" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={open} timeout="auto" unmountOnExit onClick={() => setContent("")}>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                {/* <StarBorder /> */}
                                <div className='text-xl font-bold'>-</div>
                            </ListItemIcon>
                            <ListItemText primary="회원 관리" />
                        </ListItemButton>
                    </List>
                </Collapse>

                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                        <PiSoccerBallFill className='w-6 h-6' />
                    </ListItemIcon>
                    <ListItemText primary="메인" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={open} timeout="auto" unmountOnExit onClick={() => setContent("banner")}>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <div className='text-xl font-bold'>-</div>
                            </ListItemIcon>
                            <ListItemText primary="배너" />
                        </ListItemButton>
                    </List>
                </Collapse>

                <Collapse in={open} timeout="auto" unmountOnExit onClick={() => setContent("pick")}>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <div className='text-xl font-bold'>-</div>
                            </ListItemIcon>
                            <ListItemText primary="PICK" />
                        </ListItemButton>
                    </List>
                </Collapse>

                <Collapse in={open} timeout="auto" unmountOnExit onClick={() => setContent("reservation")}>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <div className='text-xl font-bold'>-</div>
                            </ListItemIcon>
                            <ListItemText primary="예약" />
                        </ListItemButton>
                    </List>
                </Collapse>

            </List>

            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <FaThLarge className='w-5 h-5' />
                </ListItemIcon>
                <ListItemText primary="게시판" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={open} timeout="auto" unmountOnExit onClick={() => setContent("board")}>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <div className='text-xl font-bold'>-</div>
                        </ListItemIcon>
                        <ListItemText primary="게시판 관리" />
                    </ListItemButton>
                </List>
            </Collapse>


            <Divider />
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                        <FaSearch className='w-5 h-5' />
                    </ListItemIcon>
                    <ListItemText primary="검색" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={open} timeout="auto" unmountOnExit onClick={() => setContent("searchRecommend")}>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <div className='text-xl font-bold'>-</div>
                            </ListItemIcon>
                            <ListItemText primary="추천 검색어" />
                        </ListItemButton>
                    </List>
                </Collapse>

                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                        <FaQuestion className='w-5 h-5' />
                    </ListItemIcon>
                    <ListItemText primary="고객센터" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={open} timeout="auto" unmountOnExit onClick={() => setContent("notice")}>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <div className='text-xl font-bold'>-</div>
                            </ListItemIcon>
                            <ListItemText primary="공지사항" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return !localStorage.getItem('adminLogin') ? <Login /> : (
        <div className='flex'>
            <Box className="w-full" sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}
                >
                    <Toolbar sx={{ backgroundColor: '#007CFF' }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            {content == "" ? "회원 관리" : content == "banner" ? "배너 관리" : content == "pick" ? "PICK 관리" :
                            content == "reservation" ? "예약 관리" : content == "board" ? "게시판 관리" : content == "searchRecommend" ? "검색어 관리" : "공지사항 관리"}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onTransitionEnd={handleDrawerTransitionEnd}
                        onClose={handleDrawerClose}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box className='w-full'
                    component="main"
                    sx={{ p: 3 }}
                >
                    <Toolbar />
                    {content == "" && <User />}
                    {content == "banner" && <Banner />}
                    {content == "pick" && <Pick />}
                    {content == "reservation" && <Reservation />}
                    {content == "board" && <Board />}
                    {content == "searchRecommend" && <SearchRecommend />}
                    {content == "notice" && <Notice />}
                </Box>
            </Box>
        </div>
    )
}

export default index
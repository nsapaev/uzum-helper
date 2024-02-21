import style from './Dashboard.module.scss'
import {Outlet} from "react-router-dom";
import SidebarDashboard from "./sidebar/Sidebar.tsx";
import { FaUserCircle } from "react-icons/fa";

import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';


const styleModal = {
    position: 'absolute' as 'absolute',
    top: 0,
    right: 0,
    transform: 'translate(0%, 0%)',
    width: 300,
    height: "100vh",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Dashboard() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className={style.dashboard}>
                <header className={style.dashboard__header}> <div onClick={handleOpen}> <FaUserCircle/> </div> </header>
                <nav className={style.dashboard__sidebar}>
                    <SidebarDashboard/>
                </nav>
                <main className={style.dashboard__main}> main </main>

            <Outlet/>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={styleModal}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            Text in a modal
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                    </Box>
                </Fade>
            </Modal>

        </div>
    )
}
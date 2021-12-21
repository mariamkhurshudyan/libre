import {useState} from "react";
import {Button, Drawer} from "@mui/material";

const Sidebar = () => {
    const [open,setOpen] = useState(false)
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpen(open);
    };
    return (
        <div>
            <>
                <Button onClick={toggleDrawer( true)}>Open</Button>
                <Drawer
                    open={open}
                    onClose={toggleDrawer(false)}
                >
                </Drawer>
                </>
        </div>
    );
};

export default Sidebar;
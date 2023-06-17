import {Box, Typography, useTheme, Button} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";
import {useState} from "react";
import LineChart from "../../components/LineChart";
import Modal from '@mui/material/Modal';
import { tokens } from "../../theme";
import CategoryIcon from '@mui/icons-material/Category';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

const Line = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    return (
        <Box m="20px">
            <Header title="Pie Chart" subtitle="Simple pie chart"/>
            <Box sx={{
            }}>
                <Button onClick={handleOpen}>
                    <Typography color={colors.grey[100]}>
                        Sort by
                    </Typography>
                </Button>
                <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" sx={{

                }}>
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Sort By
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                    </Box>
                </Modal>
            </Box>
    
            <Box height="75vh">
                <LineChart/>
                
            </Box>
        </Box>
    )
}

export default Line;
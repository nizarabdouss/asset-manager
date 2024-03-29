import {Box, Typography, useTheme} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataAssets } from "../../data/mockData2";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";


const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { field: "id", headerName: "ID" },
        { field: "name", headerName: "Asset Name", flex: 1, cellClassName: "name-column--cell" },
        { field: "category", headerName: "Category", flex: 1 },
        { field: "purchaseDate", headerName: "Purchase Date", flex: 1 },
        { field: "purchasePrice", headerName: "Purchase Price", flex: 1 },
        { field: "currentValue", headerName: "Current Value", flex: 1 },
        { field: "lastMaintenance", headerName: "Last Maintenance", flex: 1 },
        { field: "insuranceProvider", headerName: "Insurance Provider", flex: 1 },
        { field: "policyExpiry", headerName: "Policy Expiry", flex: 1 },
      ];
      

    return(
        <Box m="20px">
            <Header title="ASSETS" subtitle="Manage my assets"/>
            <Box
                m="40px 0 0 0" height="75vh" sx={{
                    "& .MuiDataGrid-root":{
                        border: "none",
                    },
                    "& .MuiDataGrid-cell":{
                        borderBottom: "none",
                    },
                    "& .name-column--cell":{
                        color: colors.greenAccent[300]
                    },
                    "& .MuiDataGrid-columnHeaders":{
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller":{
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer":{
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700]
                    },
                }}
            >
                <DataGrid
                    rows={mockDataAssets}
                    columns={columns}
                />
            </Box>
        </Box>
    )
}

export default Team;
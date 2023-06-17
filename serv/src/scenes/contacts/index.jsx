import {Box, Typography, useTheme} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataAssetContacts } from "../../data/mockData2";
import Header from "../../components/Header";


const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        { field: "assetName", headerName: "Asset Name", flex: 1 },
        { field: "dealerEmail", headerName: "Dealer Email", flex: 1 },
        { field: "purchaseLocation", headerName: "Purchase Location", flex: 1 },
        { field: "appraisalContact", headerName: "Appraisal Contact", flex: 1 },
        { field: "maintenanceContact", headerName: "Maintenance Contact", flex: 1 }
    ];
      

    return(
        <Box m="20px">
            <Header title="TEAM" subtitle="Managing the Team Members"/>
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
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text":{
                        color: `${colors.grey[100]} !important`,
                    },
                }}
            >
                <DataGrid
                    rows={mockDataAssetContacts}
                    columns={columns}
                    components={{ Toolbar: GridToolbar}}
                />
            </Box>
        </Box>
    )
}

export default Contacts;
import { Box, IconButton, useTheme } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { DataGrid, GridToolbar, GridColDef } from "@mui/x-data-grid";
import { EditNote, DeleteOutline } from "@mui/icons-material";
import { tokens } from "theme";

interface Props {
  columns: GridColDef[];
  rows: object[];
  slug: string;
  lastColumn?: GridColDef;
}

const DataTable = (props: Props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleDelete = (id: number) => {
    //delete the item
    //axios.delete(`api/${slug}/id`)
    console.log(id + " has bee deleted");
  };

  const defaultActionColumn: GridColDef = {
    field: "action",
    headerName: "Actions",
    width: 200,
    renderCell: (params) => {
      return (
        <Box display="flex" gap="10px">
          <IconButton>
            <Link to={`/${props.slug}/${params.row.id}`}>
              <EditNote
                style={{
                  fontSize: "20px",
                  color: colors.yellowAccent[400],
                }}
              />
            </Link>
          </IconButton>
          <IconButton onClick={() => handleDelete(params.row.id)}>
            <DeleteOutline
              style={{
                fontSize: "20px",
                color: colors.redAccent[400],
              }}
            />
          </IconButton>
        </Box>
      );
    },
  };

  const lastColumn = props.lastColumn || defaultActionColumn;

  return (
    <Box sx={{ marginTop: "1.5rem" }}>
      <DataGrid
        sx={{
          backgroundColor: colors.primary[400],
          padding: "20px",
          "& .MuiDataGrid-toolbarContainer": {
            flexDirection: "row-reverse",
            color: colors.greenAccent[100],
          },
          "& .MuiButtonBase-root": {
            color: colors.greenAccent[100],
          },
        }}
        rows={props.rows}
        columns={[...props.columns, lastColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default DataTable;

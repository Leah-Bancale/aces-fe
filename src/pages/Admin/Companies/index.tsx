import React from "react";
import { Box, useTheme } from "@mui/material";
import { Header, DataTable } from "components/export";
import { tokens } from "theme";
import { GridColDef } from "@mui/x-data-grid";
import { mockCompanies } from "data/mockAdminData";
import { companyColumn } from "constant/columnHeaders";

const Companies = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const customLastColumn: GridColDef = {
    field: "status",
    headerName: "Status",
    width: 150,
    renderCell: (params) => {
      const isVerified = params.row.verified;

      return (
        <Box
          sx={{
            backgroundColor: isVerified
              ? colors.greenAccent[500]
              : colors.redAccent[500],
            color: colors.greenAccent[100],
            padding: "6px 12px",
            borderRadius: "4px",
            fontWeight: "bold",
          }}
        >
          {isVerified ? "Verified User" : "Not Verified"}
        </Box>
      );
    },
  };

  return (
    <Box m="1.5rem 2.5rem">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Header title="Companies" subtitle="List of Affiliated Companies" />
      </Box>
      <DataTable
        slug="companies"
        columns={companyColumn}
        rows={mockCompanies}
        lastColumn={customLastColumn}
      />
    </Box>
  );
};

export default Companies;

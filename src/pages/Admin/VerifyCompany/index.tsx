import React from "react";
import { Box, Button, useTheme } from "@mui/material";
import { Header, DataTable } from "components/export";
import { tokens } from "theme";
import { GridColDef } from "@mui/x-data-grid";
import { applyVerificationCompanies } from "data/mockAdminData";
import { verifyColumns } from "constant/columnHeaders";

const VerifyCompanies = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const customLastColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <Box display="flex" gap="1rem">
          <Button
            variant="contained"
            size="medium"
            style={{
              backgroundColor: colors.greenAccent[500],
              color: colors.greenAccent[100],
            }}
          >
            Accept
          </Button>
          <Button
            variant="contained"
            size="medium"
            style={{
              backgroundColor: colors.redAccent[500],
              color: colors.greenAccent[100],
            }}
          >
            Decline
          </Button>
        </Box>
      );
    },
  };

  return (
    <Box m="1.5rem 2.5rem">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Header
          title="Verification List"
          subtitle="Companies applying for partnership"
        />
      </Box>
      <DataTable
        slug="companies"
        columns={verifyColumns}
        rows={applyVerificationCompanies}
        lastColumn={customLastColumn}
      />
    </Box>
  );
};

export default VerifyCompanies;

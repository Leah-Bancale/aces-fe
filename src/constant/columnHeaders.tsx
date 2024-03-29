import React from "react";

import { GridColDef } from "@mui/x-data-grid";
import placeholder from "../assets/placeholder.webp";

export const companyColumn: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "avatar",
    width: 100,
    renderCell: (params) => {
      const imgSrc = params.row.img || placeholder; // Placeholder image source
      return (
        <img
          src={imgSrc}
          alt=""
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      );
    },
  },
  {
    field: "companyName",
    type: "string",
    headerName: "Company name",
    width: 150,
  },
  {
    field: "companyAddress",
    type: "string",
    headerName: "Company Address",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    headerName: "Phone",
    type: "string",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    type: "string",
    width: 200,
  },
];

export const alumniColumns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "avatar",
    width: 100,
    renderCell: (params) => {
      const imgSrc = params.row.img || placeholder; // Placeholder image source

      return (
        <img
          src={imgSrc}
          alt=""
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      );
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 150,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    headerName: "Phone",
    type: "string",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    type: "string",
    width: 200,
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 150,
    type: "boolean",
  },
];

export const verifyColumns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "avatar",
    width: 100,
    renderCell: (params) => {
      const imgSrc = params.row.img || placeholder;

      return (
        <img
          src={imgSrc}
          alt=""
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      );
    },
  },
  {
    field: "FullName",
    type: "string",
    headerName: "Full Name",
    width: 200,
    valueGetter: (params) =>
      `${params.row["First Name"]} ${params.row["Last Name"]}`,
  },
  {
    field: "company",
    type: "string",
    headerName: "Company Name",
    width: 200,
  },
  {
    field: "addresss",
    type: "string",
    headerName: "Address",
    width: 200,
  },
  {
    field: "moa_file",
    headerName: "MOA File_Upload",
    type: "string",
    width: 100,
  },
  {
    field: "email",
    headerName: "Email ",
    type: "string",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    type: "string",
    width: 200,
  },
];

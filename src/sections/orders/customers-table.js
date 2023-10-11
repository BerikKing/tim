import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Checkbox, FormControlLabel } from "@mui/material";

const bgDarkBlue = {
  darkBlue: "#252e3e",
};
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: bgDarkBlue.darkBlue,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(order, trackCode, ProductName, Receiver, Weight, ShippingCost, PaymentStatus,day, Action, dsd) {
  return {order, trackCode, ProductName, Receiver, Weight, ShippingCost, PaymentStatus,day, Action, dsd };
}

const rows = [
  createData("1", "LV668867798CN", "Куртка", "Кожа", "Asan", 24, "43", "$4.0", "01.10.2023", "Жолда"),
  createData("2", "ZN304903503HK", "Cумка", "Кожа", "Дина", 2, "3", "$4.0", "04.10.2023", "Келді"),
  createData("3", "CN0002332718RU9", "Кроссовка", "ткань", "Сәрсен", 6, "23", "$4.0", "29.09.2023", "?"),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }} 
      aria-label="customized table">
        <TableHead>
          <TableRow>
            
            <StyledTableCell >#</StyledTableCell>
            <StyledTableCell align="center"><Checkbox /></StyledTableCell>
            <StyledTableCell align="center">Трек-код</StyledTableCell>
            <StyledTableCell align="center">Тауар атауы / Категория</StyledTableCell>
            <StyledTableCell align="center">Сипаттамасы</StyledTableCell>
            <StyledTableCell align="center">Алушы</StyledTableCell>
            <StyledTableCell align="center">Салмақ(кг)</StyledTableCell>
            <StyledTableCell align="center">Жеткізу құны($)</StyledTableCell>
            <StyledTableCell align="center">Төлем күйі</StyledTableCell>
            <StyledTableCell align="center">Күн</StyledTableCell>
            <StyledTableCell align="center">Әрекет</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.order}>
              <StyledTableCell component="th"
               scope="row">
                {row.order}
              </StyledTableCell>
              <StyledTableCell align="center"><Checkbox /></StyledTableCell>
              <StyledTableCell align="center">{row.trackCode}</StyledTableCell>
              <StyledTableCell align="center">{row.ProductName}</StyledTableCell>
              <StyledTableCell align="center">{row.Receiver}</StyledTableCell>
              <StyledTableCell align="center">{row.Weight}</StyledTableCell>
              <StyledTableCell align="center">{row.ShippingCost}</StyledTableCell>
              <StyledTableCell align="center">{row.PaymentStatus}</StyledTableCell>
              <StyledTableCell align="center">{row.day}</StyledTableCell>
              <StyledTableCell align="center">{row.Action}</StyledTableCell>
              <StyledTableCell align="center">{row.dsd}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

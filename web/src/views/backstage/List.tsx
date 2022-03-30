import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Typography,
  Pagination,
  Grid,
  Fab,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/system";
import CatImg from "../../static/carousel/cat1.jpg";

const Img = styled("img")`
  width: 5rem;
  height: 5rem;
  object-fit: contain;
`;

const AddBtn = styled(Fab)`
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  z-index: 2;
`;

const description = `【可調節防潑水魔術氈雨衣】
  帽子設計
  帽簷設計功能再升級
  三片立體版型
  空間大可放入耳朵`;
const rows = [
  {
    imgLink: CatImg,
    id: "0",
    name: "可調節防潑水魔術氈雨衣-淺藍1",
    price: 250,
    category: "寵物用品, 狗, 外出",
    rate: 2.5,
    description,
  },
  {
    imgLink: CatImg,
    id: "1",
    name: "可調節防潑水魔術氈雨衣-淺藍2",
    price: 250,
    category: "寵物用品, 狗, 外出",
    rate: 2.5,
    description,
  },
  {
    imgLink: CatImg,
    id: "2",
    name: "可調節防潑水魔術氈雨衣-淺藍3",
    price: 250,
    category: "寵物用品, 狗, 外出",
    rate: 2.5,
    description,
  },
  {
    imgLink: CatImg,
    id: "3",
    name: "可調節防潑水魔術氈雨衣-淺藍4",
    price: 250,
    category: "寵物用品, 狗, 外出",
    rate: 2.5,
    description,
  },
];

function DeleteDialog() {
  return (
    <Dialog open fullWidth maxWidth="xs" onClose={() => {}}>
      <DialogContent sx={{ textAlign: "center", mt: 3 }}>確定要刪除嗎？</DialogContent>
      <DialogActions sx={{ justifyContent: "center", mb: 3 }}>
        <Button variant="contained" onClick={() => {}}>
          確定
        </Button>
        <Button variant="outlined" onClick={() => {}}>
          取消
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default function List() {
  return (
    <Grid container>
      <DeleteDialog />
      <Grid container item>
        <TableContainer>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>商品圖片</TableCell>
                <TableCell>商品 ID</TableCell>
                <TableCell>商品名稱</TableCell>
                <TableCell>價格</TableCell>
                <TableCell>類別</TableCell>
                <TableCell>評價</TableCell>
                <TableCell>商品介紹</TableCell>
                <TableCell>編輯</TableCell>
                <TableCell>刪除</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <Img src={row.imgLink} />
                  </TableCell>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>{row.rate}</TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      sx={{
                        textOverflow: "ellipsis",
                        width: "10rem",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {row.description}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <IconButton>
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid container item justifyContent="center" sx={{ mt: 4 }}>
        <Pagination count={10} />
      </Grid>
      <AddBtn color="primary">
        <AddIcon />
      </AddBtn>
    </Grid>
  );
}

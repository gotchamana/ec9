import React, { useState } from "react";
import { styled } from "@mui/system";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  Typography,
  Rating,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import CatImg1 from "../../static/carousel/cat1.jpg";

export const SubmitBtn = styled(Button)`
  width: 14rem;
  height: 2.5rem;
  border-radius: 10px;
`;

const Img = styled("img")`
  width: 5rem;
  height: 5rem;
  object-fit: cover;
`;

function Items() {
  return (
    <Grid container sx={{ my: 2 }}>
      <Grid item xs={3} display="flex" justifyContent="center" alignItems="center">
        <Img src={CatImg1} />
      </Grid>
      <Grid item xs={5} display="flex" justifyContent="center" alignItems="center">
        <Typography variant="body1">可調節防潑水魔術氈雨衣-淺藍</Typography>
      </Grid>
      <Grid item xs={4} display="flex" justifyContent="center" alignItems="center">
        <Rating value={2} />
      </Grid>
    </Grid>
  );
}

export default function ReviewDialog() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog fullWidth maxWidth="md" open={open} onClose={handleClose}>
        <DialogContent>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val) => (
            <Items key={val} />
          ))}
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", my: 2 }}>
          <SubmitBtn variant="contained" onClick={handleClose}>
            {t("button.submit")}
          </SubmitBtn>
          <SubmitBtn variant="outlined" onClick={handleClose}>
            {t("button.cancel")}
          </SubmitBtn>
        </DialogActions>
      </Dialog>
    </div>
  );
}

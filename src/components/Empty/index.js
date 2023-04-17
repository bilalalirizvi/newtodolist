import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Empty = ({
  title,
  description,
  onClick,
  buttonText,
  isDelete,
  handleDelete,
}) => {
  const COLORS = useSelector((state) => state.Theme.theme);
  return (
    <Stack alignItems={"center"} spacing={2}>
      <Typography sx={{ color: COLORS.text }} variant="h6">
        Empty {title}!
      </Typography>
      <Typography sx={{ color: COLORS.text }} variant="h5">
        {description}
      </Typography>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" color="success" onClick={onClick}>
          {buttonText}
        </Button>

        {isDelete && (
          <Button variant="outlined" color="error" onClick={handleDelete}>
            Delete Project
          </Button>
        )}
      </Stack>
    </Stack>
  );
};

export default Empty;

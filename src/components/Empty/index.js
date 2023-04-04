import { Button, Stack, Typography } from "@mui/material";
import React from "react";

const Empty = ({
  title,
  description,
  onClick,
  buttonText,
  isDelete,
  handleDelete,
}) => {
  return (
    <Stack alignItems={"center"} spacing={2}>
      <Typography variant="h6">Empty {title}!</Typography>
      <Typography variant="h5">{description}</Typography>
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

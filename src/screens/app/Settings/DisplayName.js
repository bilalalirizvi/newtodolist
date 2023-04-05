import React, { useState } from "react";
import { Stack, TextField, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { MyButton, TextFieldLabel } from "../../../components";
import { updateDisplayName } from "../../../store/actions/setting";

const DisplayName = () => {
  const AUTH = useSelector((state) => state.Auth);
  const SETTING = useSelector((state) => state.Setting);
  const [displayName, setDisplayName] = useState(AUTH?.user?.displayName);
  const [displayNameError, setDisplayNameError] = useState(false);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    let newName = displayName.trim()?.toLowerCase();
    let oldName = AUTH?.user?.displayName?.toLowerCase();
    if (newName !== oldName) {
      if (newName !== "") {
        dispatch(
          updateDisplayName({
            name: displayName,
          })
        );
      } else {
        setMessage("Please fill the text field");
        setDisplayNameError(true);
      }
    } else {
      setMessage("Matched name");
      setDisplayNameError(true);
    }
  };

  return (
    <>
      <Typography mb={5} variant="h5">
        Edit Display Name
      </Typography>
      <Stack direction="column">
        <TextFieldLabel text={"Enter your name"} />
        <TextField
          fullWidth
          sx={{
            width: { xs: "100%", sm: "400px", md: "400px" },
            "& > *": {
              height: "40px",
            },
          }}
          type="text"
          focused={false}
          error={displayNameError}
          value={displayName}
          onChange={(e) => {
            setDisplayName(e.target.value);
            setDisplayNameError(false);
          }}
        />
        {displayNameError && (
          <Typography
            sx={{
              fontSize: "12px",
              color: "red",
              marginLeft: "15px",
              marginTop: "3px",
            }}
          >
            {message}
          </Typography>
        )}
      </Stack>
      <Stack mt={10}>
        <MyButton
          text={"Save"}
          onClick={handleClick}
          loading={SETTING?.loading}
        />
      </Stack>
    </>
  );
};

export default DisplayName;

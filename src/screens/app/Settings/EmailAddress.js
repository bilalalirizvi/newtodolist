import React, { useState } from "react";
import { Stack, TextField, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { MyButton, TextFieldLabel } from "../../../components";
import { updateEmail } from "../../../store/actions/setting";
import { validateEmail } from "../../../constants/others";

const EmailAddress = () => {
  const AUTH = useSelector((state) => state.Auth);
  const SETTING = useSelector((state) => state.Setting);
  const [email, setEmail] = useState(AUTH?.user?.email);
  const [emailError, setEmailError] = useState(false);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    let newEmail = email.trim().toLowerCase();
    let oldEmail = AUTH?.user?.email?.toLowerCase();
    if (newEmail !== oldEmail) {
      if (validateEmail(newEmail)) {
        dispatch(
          updateEmail({
            email: newEmail,
          })
        );
      } else {
        newEmail === ""
          ? setMessage("Please fill the text field")
          : setMessage("Invalid email address");
        setEmailError(true);
      }
    } else {
      setMessage("Matched email");
      setEmailError(true);
    }
  };

  return (
    <>
      <Typography mb={5} variant="h5">
        Edit Email Address
      </Typography>
      <Stack direction="column">
        <TextFieldLabel text={"Enter your email address"} />
        <TextField
          fullWidth
          sx={{
            width: "400px",
            "& > *": {
              height: "40px",
            },
          }}
          type="email"
          focused={false}
          error={emailError}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError(false);
          }}
        />
        {emailError && (
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

export default EmailAddress;

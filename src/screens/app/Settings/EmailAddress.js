// import React, { useState } from "react";
// import { Stack, TextField, Typography } from "@mui/material";
// import { useSelector, useDispatch } from "react-redux";
// import { CustomButton, TextFieldLabel } from "../../components";
// import { updateEmail } from "../../redux/actions/settingActions";

// const validateEmail = (email) => {
//   return String(email)
//     .toLowerCase()
//     .match(
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );
// };

// const EmailAddress = () => {
//   const authState = useSelector((state) => state.auth.admin);
//   const settingState = useSelector((state) => state.settings);
//   const [email, setDisplayName] = useState(authState?.email);
//   const [emailError, setEmailError] = useState(false);
//   const [message, setMessage] = useState("");
//   const dispatch = useDispatch();

//   const handleClick = () => {
//     let newEmail = email.trim().toLowerCase();
//     let oldEmail = authState?.email?.toLowerCase();
//     if (newEmail !== oldEmail) {
//       if (validateEmail(newEmail)) {
//         dispatch(
//           updateEmail({
//             email: newEmail,
//             docId: authState.docId,
//           })
//         );
//       } else {
//         newEmail === ""
//           ? setMessage("Please fill the text field")
//           : setMessage("Invalid email address");
//         setEmailError(true);
//       }
//     } else {
//       setMessage("Matched email");
//       setEmailError(true);
//     }
//   };

//   return (
//     <>
//       <Typography mb={5} variant="h5">
//         Edit Email Address
//       </Typography>
//       <Stack direction="column">
//         <TextFieldLabel text={"Enter your email address"} />
//         <TextField
//           fullWidth
//           sx={{
//             width: "400px",
//             "& > *": {
//               height: "40px",
//             },
//           }}
//           type="email"
//           focused={false}
//           error={emailError}
//           value={email}
//           onChange={(e) => {
//             setDisplayName(e.target.value);
//             setEmailError(false);
//           }}
//         />
//         {emailError && (
//           <Typography
//             sx={{
//               fontSize: "12px",
//               color: "red",
//               marginLeft: "15px",
//               marginTop: "3px",
//             }}
//           >
//             {message}
//           </Typography>
//         )}
//       </Stack>
//       <Stack mt={10}>
//         <CustomButton
//           text={"Save"}
//           onClick={handleClick}
//           loading={settingState.emailBtnLoading}
//         />
//       </Stack>
//     </>
//   );
// };

// export default EmailAddress;

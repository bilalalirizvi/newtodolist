// import React, { useState } from "react";
// import { Stack, TextField, Typography } from "@mui/material";
// import { useSelector, useDispatch } from "react-redux";
// import { CustomButton, TextFieldLabel } from "../../components";
// import { updatePassword } from "../../redux/actions/settingActions";

// const Password = () => {
//   const settingState = useSelector((state) => state.settings);
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [passwordError, setPasswordError] = useState({
//     error: false,
//     message: "",
//   });
//   const [confirmPasswordError, setConfirmPasswordError] = useState({
//     error: false,
//     message: "",
//   });
//   const dispatch = useDispatch();

//   const handleClick = () => {
//     if (password.length < 6) {
//       setPasswordError({
//         error: true,
//         message: "Password must be atleast 6 characters",
//       });
//       return;
//     }
//     if (confirmPassword.length < 6) {
//       setConfirmPasswordError({
//         error: true,
//         message: "Password must be atleast 6 characters",
//       });
//       return;
//     }
//     if (password !== confirmPassword) {
//       setConfirmPasswordError({
//         error: true,
//         message: "Passwords do not match",
//       });
//       return;
//     }
//     dispatch(updatePassword(password));
//   };

//   return (
//     <>
//       <Typography mb={5} variant="h5">
//         Edit Email Address
//       </Typography>
//       <Stack direction="column" mb={3}>
//         <TextFieldLabel text={"Password"} />
//         <TextField
//           fullWidth
//           sx={{
//             width: "400px",
//             "& > *": {
//               height: "40px",
//             },
//           }}
//           type="text"
//           focused={false}
//           error={passwordError.error}
//           value={password}
//           onChange={(e) => {
//             setPassword(e.target.value);
//             setPasswordError({ ...password, error: false });
//           }}
//         />
//         {passwordError.error && (
//           <Typography
//             sx={{
//               fontSize: "12px",
//               color: "red",
//               marginLeft: "15px",
//               marginTop: "3px",
//             }}
//           >
//             {passwordError.message}
//           </Typography>
//         )}
//       </Stack>
//       <Stack direction="column">
//         <TextFieldLabel text={"Confirm Password"} />
//         <TextField
//           fullWidth
//           sx={{
//             width: "400px",
//             "& > *": {
//               height: "40px",
//             },
//           }}
//           type="text"
//           focused={false}
//           error={confirmPasswordError.error}
//           value={confirmPassword}
//           onChange={(e) => {
//             setConfirmPassword(e.target.value);
//             setConfirmPasswordError({ ...password, error: false });
//           }}
//         />
//         {confirmPasswordError.error && (
//           <Typography
//             sx={{
//               fontSize: "12px",
//               color: "red",
//               marginLeft: "15px",
//               marginTop: "3px",
//             }}
//           >
//             {confirmPasswordError.message}
//           </Typography>
//         )}
//       </Stack>
//       <Stack mt={10}>
//         <CustomButton
//           text={"Save"}
//           onClick={handleClick}
//           loading={settingState.passwordBtnLoading}
//         />
//       </Stack>
//     </>
//   );
// };

// export default Password;
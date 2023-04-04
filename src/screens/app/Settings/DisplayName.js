// import React, { useState } from "react";
// import { Stack, TextField, Typography } from "@mui/material";
// import { useSelector, useDispatch } from "react-redux";
// import { CustomButton, TextFieldLabel } from "../../components";
// import { updateDisplayName } from "../../redux/actions/settingActions";

// const DisplayName = () => {
//   const authState = useSelector((state) => state.auth.admin);
//   const settingState = useSelector((state) => state.settings);
//   const [displayName, setDisplayName] = useState(authState?.displayName);
//   const [displayNameError, setDisplayNameError] = useState(false);
//   const [message, setMessage] = useState("");
//   const dispatch = useDispatch();

//   const handleClick = () => {
//     let newName = displayName.trim()?.toLowerCase();
//     let oldName = authState?.displayName?.toLowerCase();
//     if (newName !== oldName) {
//       if (newName !== "") {
//         dispatch(
//           updateDisplayName({
//             name: displayName,
//             docId: authState.docId,
//           })
//         );
//       } else {
//         setMessage("Please fill the text field");
//         setDisplayNameError(true);
//       }
//     } else {
//       setMessage("Matched name");
//       setDisplayNameError(true);
//     }
//   };

//   return (
//     <>
//       <Typography mb={5} variant="h5">
//         Edit Display Name
//       </Typography>
//       <Stack direction="column">
//         <TextFieldLabel text={"Enter your name"} />
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
//           error={displayNameError}
//           value={displayName}
//           onChange={(e) => {
//             setDisplayName(e.target.value);
//             setDisplayNameError(false);
//           }}
//         />
//         {displayNameError && (
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
//           loading={settingState.displayNameBtnLoading}
//         />
//       </Stack>
//     </>
//   );
// };

// export default DisplayName;

import React, { useEffect, useState } from "react";
import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { MyButton } from "../../../components";
import swal from "sweetalert";
import { updatePicture } from "../../../store/actions/setting";

const ProfilePicture = () => {
  const COLORS = useSelector((state) => state.Theme.theme);
  const AUTH = useSelector((state) => state.Auth);
  const SETTING = useSelector((state) => state.Setting);
  const [photo, setPhoto] = useState(null);
  const [photoError, setPhotoError] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setPhoto(null);
  }, [AUTH?.user?.photoUrl]);

  const handlePhoto = (event) => {
    setPhotoError(false);
    setPhoto(null);
    const photo = event.currentTarget.files[0];
    const types = ["image/png", "image/jpeg", "image/jpg"];
    if (types.includes(photo.type)) {
      setPhotoError(false);
      setPhoto(photo);
      const src = URL.createObjectURL(photo);
      setImageSrc(src);
    } else {
      setPhotoError(true);
    }
  };

  const handleClick = () => {
    if (photo) {
      dispatch(
        updatePicture({
          file: photo,
        })
      );
    } else {
      photoError
        ? swal("", "Invalid type", "error")
        : swal("", "Choose picture", "error");
    }
  };

  return (
    <>
      <Typography mb={5} variant="h5">
        Edit Profile Picture
      </Typography>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Avatar
          alt={AUTH?.displayName}
          src={imageSrc || AUTH?.user?.photoUrl}
          sx={{ width: "80px", height: "80px", color: "black" }}
        />
        <Stack>
          <Typography
            mb={1}
            sx={{ fontWeight: 500, fontSize: "14px", display: "flex" }}
          >
            Profile Picture &nbsp;
            <Box
              component="span"
              sx={{
                fontWeight: 400,
                fontSize: "13px",
                display: { xs: "none", sm: "flex", md: "flex" },
              }}
            >
              (.jpg, .jpeg, .png)
            </Box>
          </Typography>
          <Typography
            mb={2}
            sx={{
              fontWeight: 400,
              fontSize: "13px",
              display: { xs: "block", sm: "none", md: "none" },
            }}
          >
            (.jpg, .jpeg, .png)
          </Typography>
          <Stack direction="row" alignItems="center">
            <Button
              variant="outlined"
              component="label"
              sx={{
                height: "30px",
                textTransform: "initial",
                border: `1px solid ${COLORS.primary}`,
                color: COLORS.primary,
                flexShrink: 0,
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              Upload
              <input
                hidden
                accept=".jpg, .jpeg, .png"
                type="file"
                onChange={handlePhoto}
              />
            </Button>
          </Stack>
          <Stack>
            {photo?.name.length > 0 && (
              <Typography mt={1} sx={{ fontSize: "14px" }} title={photo?.name}>
                {photo?.name}
              </Typography>
            )}
            {photoError && (
              <Typography mt={1} sx={{ fontSize: "12px", color: "red" }}>
                Invalid type (accept .jpg, .jpeg, .png)
              </Typography>
            )}
          </Stack>
        </Stack>
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

export default ProfilePicture;

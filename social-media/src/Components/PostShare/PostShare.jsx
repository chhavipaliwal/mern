import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadPost, uploadImage } from "../../actions/uploadAction";
import Icon from "@iconify/react";

const PostShare = () => {
  const loading = useSelector((state) => state.postReducer.uploading);
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const dispatch = useDispatch();
  const desc = useRef();
  const { user } = useSelector((state) => state.authReducer.authData);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const onImageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };
  const reset = () => {
    setImage(null);
    desc.current.value = "";
  };
};

import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadPost, uploadImage } from "../../actions/uploadAction";
import { Icon } from "@iconify/react";

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
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (image) {
      const data = new FormData();
      const filename = Date.now() + image.name;
      data.append("name", filename);
      data.append("file", image);
      newPost.image = filename;
      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }
    dispatch(uploadPost(newPost));
    reset();
  };
  return (
    <div className="PostShare">
      <img
        src={
          user.profilePicture
            ? serverPublic + user.profilePicture
            : serverPublic + "defaultProfile.png"
        }
        alt=""
      />
      <div>
        <input
          type="text"
          placeholder={`What's on your mind ${user.username}?`}
          ref={desc}
        />
        <div className="postOptions">
          <div className="option" onClick={() => imageRef.current.click()}>
            <Icon icon="material-symbols:image" width="24" height="24" />
            Photo
          </div>
          <div className="option">
            <Icon icon="material-symbols:video-call" width="24" height="24" />
            Video
          </div>
          <button className="button ps-button" onClick={handleSubmit}>
            {loading ? "Uploading..." : "Share"}
          </button>
          <input
            style={{ display: "none" }}
            type="file"
            ref={imageRef}
            onChange={onImageChange}
          />
        </div>
      </div>
    </div>
  );
};
export default PostShare;

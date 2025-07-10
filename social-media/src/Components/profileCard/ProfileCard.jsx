import { useSelector } from "react-redux";
import Link from react-router-dom;

const ProfileCard = ({location}) => {
    const { user } = useSelector((state) => state.authReducer.authData);
    const posts = useSelector((state) => state.postReducer.posts);
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
    
    return (
        <div>
        <div className="ProfileCard">
        <div className="ProfileImages">
            <img src={user.coverPicture ? serverPublic +user.coverPicture :serverPublic + "profileCover.jpg"} alt="Profile Cover" />
            <img src={user.profilePicture ? serverPublic +user.profilePicture : serverPublic + "defaultProfile.png"} alt="Profile" />
        </div>
        <div className="ProfileName">
            <h3>{user.firstname} {user.lastname}</h3>
            <span>{user.worksAt?user.worksAt : "Write about yourself...."}</span>
        </div>
        <div className="followStatus">
            <hr/>
            <div className="follow">
                <span>{users.followers.length} </span>
                <span>Followers</span>
            </div>
            <div className="v1"></div>
            <div className="follow">
                <span>{user.following.length} Following</span>
            </div>

            {location === "profilePage" && (
                <>
                    <div className="v1"></div>
                    <div className="follow">
                        <span>{posts.filter((post) => post.userId === user._id).length} Posts</span>
                    </div>
                </>
                )}
        </div>
        <hr/>
        </div>
        {
            location ==="profilePage"?' ':
            <Link to={`/profile/${user._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <button className="button">My Profile</button>
            </Link> 
        }
    </div>
    );
    }
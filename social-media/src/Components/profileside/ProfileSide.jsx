import LogoSearch from "../logoSearch/LogoSearch";
import ProfileCard from "../profileCard/ProfileCard";
import FollowersCard from "../followersCard/FollowersCard";

const ProfileSide = () => {
  return (
    <div className="profileSide">
      <LogoSearch />
      <ProfileCard location="homepage" />
      <FollowersCard />
    </div>
  );
};
export default ProfileSide;

import React from 'react';
import ProfileSide from '../../Components/profileSide/ProfileSide';
import PostSide from '../../Components/PostSide/PostSide';
import RightSide from '../../Components/RightSide/RightSide';

const Home = () => {
  return (
    <div
      className="relative grid gap-4"
      style={{ gridTemplateColumns: '18rem auto 20rem' }}
    >
      <div className="animate-slide-in-left">
        <ProfileSide />
      </div>
      <div className="animate-fade-in">
        <PostSide />
      </div>
      <div className="animate-slide-in-right">
        <RightSide />
      </div>
    </div>
  );
};

export default Home;

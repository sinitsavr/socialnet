import React from 'react';
import Preloader from '../common/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if(!props.profile){
    return <Preloader/>
  }
  return (
    <div>
      <div>
        <img src={props.profile.photos.large} alt="" />
        <ProfileStatus status={"Hello"}/>
      </div>
    </div>
  );
}

export default ProfileInfo;

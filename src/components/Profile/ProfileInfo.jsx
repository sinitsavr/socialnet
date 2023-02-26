import React from 'react';
import Preloader from '../common/Preloader';
// import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {
  if(!profile){
    return <Preloader/>
  }
  let alt_descriptionBlock = `photo_${profile.userId}`;
  return (
    <div>
      <div>
        <img src={profile.photos.large} alt={alt_descriptionBlock} />
        <ProfileStatusWithHooks status={status}
        updateStatus={updateStatus}/>
      </div>
    </div>
  );
}

export default ProfileInfo;

import React from 'react';
import Preloader from '../common/Preloader';
// import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
  if(!props.profile){
    return <Preloader/>
  }
  let alt_descriptionBlock = `photo_${props.profile.userId}`;
  return (
    <div>
      <div>
        <img src={props.profile.photos.large} alt={alt_descriptionBlock} />
        <ProfileStatusWithHooks status={props.status}
        updateStatus={props.updateStatus}/>
      </div>
    </div>
  );
}

export default ProfileInfo;

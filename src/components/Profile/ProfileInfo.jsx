import React from 'react';
import Preloader from '../common/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if(!props.profile){
    return <Preloader/>
  }
  let alt_descriptionBlock = `photo_${props.profile.userId}`;
  return (
    <div>
      <div>
        <img src={props.profile.photos.large} alt={alt_descriptionBlock} />
        <ProfileStatus status={props.status}
        updateStatus={props.updateStatus}/>
      </div>
    </div>
  );
}

export default ProfileInfo;

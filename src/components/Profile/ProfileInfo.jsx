import React from 'react';
import Preloader from '../common/Preloader';

const ProfileInfo = (props) => {
  if(!props.profile){
    return <Preloader/>
  }
  return (
    <div>
      <div>
        <img src={props.profile.photos.large} alt="" />
      </div>
    </div>
  );
}

export default ProfileInfo;

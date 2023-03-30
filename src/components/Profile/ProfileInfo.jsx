import React from 'react';
import Preloader from '../common/Preloader';
// import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import pic from "./../../assets/imeges/pic.png"
import style from './Profile.module.css'

const ProfileInfo = (props) => {
  if(!props.profile){
    return <Preloader/>
  }

  let alt_descriptionBlock = `photo_${props.profile.userId}`;
  const onMainPhotoSelected = (event) => {
    if (event.target.files.length) {
      props.savePhoto(event.target.files[0])
    }
  }
  return (
    <div>
      <div>
        <img src={props.profile.photos.small !== null ? props.profile.photos.small : pic} alt={alt_descriptionBlock}  className={style.mainPhoto}/>
        ...Avatar + description и userId_ {props.profile.userId}
        {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}
        />}
        <ProfileStatusWithHooks status={props.status}
        updateStatus={props.updateStatus}/>
      </div>
    </div>
  );
}

export default ProfileInfo;

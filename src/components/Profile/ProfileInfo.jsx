import React, {useState} from 'react';
import Preloader from '../common/Preloader';
// import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import pic from "./../../assets/imeges/pic.png"
import style from './Profile.module.css'
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = (props) => {
  let [editMode, setEditMode] = useState(false);
  let {profile, saveProfile} = props;
  if(!profile){
    return <Preloader/>
  }

  let alt_descriptionBlock = `photo_${profile.userId}`;

  const onMainPhotoSelected = (event) => {
    if (event.target.files.length) {
      props.savePhoto(event.target.files[0])
    }
  }
  const handleSubmit = (formData, setStatus, setSubmitting, goToViewMode) => {
    saveProfile( formData, setStatus, setSubmitting, goToViewMode); 
  }
  return (
    <div>
      <div className={style.descriptionBlock}>
        <img src={profile.photos.small !== null ? profile.photos.small : pic} alt={alt_descriptionBlock}  className={style.mainPhoto}/>
        
       {profile.userId}

        {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}
        />}
        <div className={style.profileBlock}>
          {editMode ? <ProfileDataForm profile={profile}
          handleSubmit={handleSubmit}
        goToViewMode={()=> setEditMode(false)}/> :
       <ProfileData profile={profile}
       isOwner={props.isOwner}
       goToEditMode={()=>setEditMode(true)}/>} 
        
        <ProfileStatusWithHooks status={props.status}
        updateStatus={props.updateStatus}/>
      </div>
      </div>
    </div>
  );
}
const ProfileData = ({profile, isOwner, goToEditMode}) =>{
  return(
    <div>
      <div>
        {isOwner && <button onClick={goToEditMode}>Edit</button>}
      </div>
      <div>
        <b>Full name</b> : {profile.fullName}
      </div>
      <div>
            <b> Looking for a job</b>: {profile.lookingForAJob
            ? 'yes' : 'no'}
         </div>

         {profile.lookingForAJob &&
         <div>
            <b> My professional skills</b>: {profile.lookingForAJobDescription}
         </div>}

         <div>
            <b> About me</b>: {profile.aboutMe}
         </div>

         <div>
            <b> Contacts</b>:
            {Object.keys( profile.contacts ).map( key => {
               return <Contacts
                  key={key}
                  contactTitle={key}
                  contactValue={profile.contacts[key]} />
            } )}
         </div>

      </div>)
}


const Contacts = ({contactTitle, contactValue}) => {

   return (
      <div className={style.contact}>
         <b> {contactTitle}</b>: {contactValue}
      </div>)
}

export default ProfileInfo;

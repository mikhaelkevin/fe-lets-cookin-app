/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import style from '../../../styles/module-css/Profile.module.css';

import ProfileMenu from '../../atomics/user/ProfileMenu';
import ProfileModal from '../../atomics/user/ProfileModal';
import InputBox from '../../global/InputBox';
import Dropzone from '../../global/Dropzone';

function ProfileMenus() {
  // Modal statement
  const [changeProfile, setChangeProfile] = useState(false);
  const [changePassword, setChangePassword] = useState(false);

  // Change profile statement
  const [image, setImage] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <>
      <ProfileMenu data={{ menuTitle: 'Edit Profile', buttonClass: 'btn-outline-warning' }} openModal={() => setChangeProfile(true)} />
      <ProfileMenu data={{ menuTitle: 'Change Password', buttonClass: 'btn-outline-warning' }} openModal={() => setChangePassword(true)} />
      <ProfileMenu data={{ menuTitle: 'Logout', buttonClass: 'btn-danger' }} />
      <ProfileModal show={changeProfile} closeModal={() => setChangeProfile(false)} modalTitle="Change Profile">
        <div className={style.profileModal}>
          <form>
            <div className={style.dropzone}>
              <Dropzone data={(item) => setImage(item?.image)} />
            </div>
            <InputBox data={{ name: 'Name', type: 'text', placeholder: 'Name' }} />
            <InputBox data={{ name: 'Email', type: 'text', placeholder: 'example@gmail.com' }} />
            <InputBox data={{ name: 'Phone Number', type: 'text', placeholder: 'Phone Number' }} />
          </form>
        </div>
      </ProfileModal>
      <ProfileModal show={changePassword} closeModal={() => setChangePassword(false)} modalTitle="Change Password">
        <div className={style.profileModal}>
          <form>
            <InputBox data={{ name: 'Old password', type: 'password', placeholder: 'Old password' }} />
            <InputBox data={{ name: 'New password', type: 'password', placeholder: 'New password' }} />
            <InputBox data={{ name: 'Confirm new password', type: 'password', placeholder: 'Confirm new password' }} />
          </form>
        </div>
      </ProfileModal>
    </>
  );
}

export default ProfileMenus;

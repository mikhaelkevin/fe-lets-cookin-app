/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from '../../../styles/module-css/Profile.module.css';

import ProfileMenu from '../../atomics/user/ProfileMenu';
import ProfileModal from '../../atomics/user/ProfileModal';
import InputBox from '../../global/InputBox';
import Dropzone from '../../global/Dropzone';

function ProfileMenus({ data }) {
  const {
    name, email, phonenumber,
  } = data;

  // Modal statement
  const [changeProfile, setChangeProfile] = useState(false);
  const [changePassword, setChangePassword] = useState(false);

  // Change profile statement
  const [tempImage, setTempImage] = useState([]);
  const [tempName, setTempName] = useState('');
  const [tempEmail, setTempEmail] = useState('');
  const [tempPhoneNumber, setTempPhoneNumber] = useState('');

  // Change password statement
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <>
      <ProfileMenu data={{ menuTitle: 'Edit Profile', buttonClass: 'btn-outline-warning' }} openModal={() => setChangeProfile(true)} />
      <ProfileMenu data={{ menuTitle: 'Change Password', buttonClass: 'btn-outline-warning' }} openModal={() => setChangePassword(true)} />
      <ProfileMenu data={{ menuTitle: 'Logout', buttonClass: 'btn-danger' }} />
      <ProfileModal show={changeProfile} closeModal={() => setChangeProfile(false)} modalTitle="Change Profile">
        <div className={style.profileModal}>
          <form>
            <div className={style.dropzone}>
              <Dropzone data={(item) => setTempImage(item?.image)} />
            </div>
            <InputBox
              data={{
                name: 'Name',
                type: 'text',
                placeholder: 'Name',
                value: name,
              }}
              event={(item) => setTempName(item)}
            />
            <InputBox
              data={{
                name: 'Email',
                type: 'text',
                placeholder: 'example@gmail.com',
                value: email,
              }}
              event={(item) => setTempEmail(item)}
            />
            <InputBox
              data={{
                name: 'Phone Number',
                type: 'text',
                placeholder: 'Phone Number',
                value: phonenumber,
              }}
              event={(item) => setTempPhoneNumber(item)}
            />
          </form>
        </div>
      </ProfileModal>
      <ProfileModal show={changePassword} closeModal={() => setChangePassword(false)} modalTitle="Change Password">
        <div className={style.profileModal}>
          <form>
            <InputBox
              data={{
                name: 'Old password',
                type: 'password',
                placeholder: 'Old password',
                autoComplete: 'true',
              }}
              event={(item) => setOldPassword(item)}
            />
            <InputBox
              data={{
                name: 'New password',
                type: 'password',
                placeholder: 'New password',
                autoComplete: 'true',
              }}
              event={(item) => setNewPassword(item)}
            />
            <InputBox
              data={{
                name: 'Confirm new password',
                type: 'password',
                placeholder: 'Confirm new password',
                autoComplete: 'true',
              }}
              event={(item) => setConfirmPassword(item)}
            />
          </form>
        </div>
      </ProfileModal>
    </>
  );
}

ProfileMenus.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    phonenumber: PropTypes.string,
  }),
};

ProfileMenus.defaultProps = {
  data: {
    image: '',
    name: '',
    email: '',
    password: '',
    phonenumber: '',
  },
};

export default ProfileMenus;

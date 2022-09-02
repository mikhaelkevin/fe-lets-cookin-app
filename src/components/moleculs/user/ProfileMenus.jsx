import React from 'react';
import ProfileMenu from '../../atomics/user/ProfileMenu';

function ProfileMenus() {
  return (
    <>
      <ProfileMenu data={{ link: '/profile-picture', menuTitle: 'Change picture', buttonClass: 'btn-outline-warning' }} />
      <ProfileMenu data={{ link: '/information', menuTitle: 'Edit profile', buttonClass: 'btn-outline-warning' }} />
      <ProfileMenu data={{ link: '/login', menuTitle: 'Logout', buttonClass: 'btn-danger' }} />
    </>
  );
}

export default ProfileMenus;

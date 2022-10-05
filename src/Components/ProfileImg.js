import React from 'react'
import styled from 'styled-components'

function ProfileImg() {
  return (
        <ProfileImgCom>
          <img src='/images/profile-img.jpg' alt='not available' />
        </ProfileImgCom>
  )
}

export default ProfileImg

const ProfileImgCom = styled.div`
  img {
    width: 40px;
    margin-top: 20px;
    position: absolute;
    right: 300px;
    border-radius: 100px;
  }
`
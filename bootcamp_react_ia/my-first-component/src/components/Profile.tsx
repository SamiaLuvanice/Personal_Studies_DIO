import React from 'react'
import { Skills } from './Skills'

const Profile: React.FC = () => {
  return (
    <>
        <img
          src="https://media.licdn.com/dms/image/v2/D4E03AQGyUpZM7kYlTw/profile-displayphoto-scale_400_400/B4EZvIAx_nGkAg-/0/1768587207433?e=1782345600&v=beta&t=B2eDrdokiJu-avdJOEGOwwnk1N9g9J1BJoksvm9w1fY"
          alt="Sâmia Luvanice"
          aria-label="Profile Picture"
          width="300px"
        height="300px"
      />
      <h3>Sâmia Luvanice</h3>
      <p>Desenvolvedora de Software</p>
      <Skills />
      </>
    )
  }


export default Profile

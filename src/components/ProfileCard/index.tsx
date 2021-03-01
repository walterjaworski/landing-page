import React from 'react'

import { GrGithub } from 'react-icons/gr'
import { FaDribbble, FaTwitter } from 'react-icons/fa'

import * as S from './styles'
import { Author } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const icons = {
  twitter: <FaTwitter />,
  github: <GrGithub />,
  dribbble: <FaDribbble />
}

// type socialLinks = {
//   slug: string
//   link: string
// }

const ProfileCard: React.FC<Author> = ({
  name,
  role,
  photo,
  // socialLinks,
  description
}) => (
  <S.Card key={name}>
    <S.Image
      src={getImageUrl(photo.url)}
      alt={photo.alternativetext}
      loading="lazy"
    />
    <S.Name>{name}</S.Name>
    <S.Role>{role}</S.Role>
    {/* <S.SocialLinks>
      {socialLinks.map((item) => (
        <S.Link key={item.link}>
          <a href={item.link} title={item.slug}>
            {icons[item.slug]}
          </a>
        </S.Link>
      ))}
    </S.SocialLinks> */}
    <S.Description>{description}</S.Description>
  </S.Card>
)

export default ProfileCard

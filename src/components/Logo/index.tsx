import React from 'react'
import { LogoProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'
import * as S from './styles'

const Logo = ({ alternativetext, url }: LogoProps) => (
  <S.LogoWrapper src={getImageUrl(url)} alt={alternativetext} />
)

export default Logo

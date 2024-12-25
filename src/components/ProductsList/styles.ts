import styled from 'styled-components'

import { Props } from '.'
import { cores } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'massas'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'black' ? cores.fundo : cores.branca};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? cores.branca : cores.fundo};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 24px;
  margin-top: 40px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.salmao};
`

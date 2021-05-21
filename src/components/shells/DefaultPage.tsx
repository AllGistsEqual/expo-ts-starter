import React from 'react'
import styled from 'styled-components/native' // eslint-disable-line import/no-extraneous-dependencies

export type DefaultPageProps = {
    children: React.ReactNode
}

const DefaultPage = ({ children }: DefaultPageProps): React.ReactElement => (
    <StyledPage>{children}</StyledPage>
)

const StyledPage = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`

export default DefaultPage

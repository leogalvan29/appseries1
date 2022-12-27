import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from '@emotion/styled'

const InfoActor = ({personaje}) => {

    const {image, name} = personaje.person
    console.log(personaje)

  return (
    <div css={css` 
    
       width: 200px;
       height: 326px;
       background-color: #3d948b;
    `}>
    <img src={ image === null ? 'no hay imagen' : image.medium} alt="" css={css`
    
        width: 100%;
    `}/>
    <div css={css`
    
    `}>

        <p css={css`
        text-align: center;
        color: white;
        `}>{name}</p>

    </div>



    </div>
  )
}

export default InfoActor
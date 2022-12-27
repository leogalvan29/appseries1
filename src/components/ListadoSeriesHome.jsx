import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { useState } from 'react'
import {Link} from 'react-router-dom'


const ListadoSeriesHome = ({titulo}) => {
   // console.log(titulo)
    const {name, image , url , id } = titulo
   
   console.log(titulo)
 
   
    
 

   
  return (
    <>
      <div css={css`
         width: 230px;
         height: 369px;
         margin-top: 100px;
      
      `}>
       
      <Link to={`/infoserie/${id}`} css={css`
       
          text-decoration: none;
          font-size: 20px;
          color: #3d948b;
      `}>

      <img src={image.medium} alt="" css={css`
      box-shadow: 1px 4px 17px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 1px 4px 17px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 1px 4px 17px 0px rgba(0,0,0,0.75);
      
      `}/>
     <p>{name}</p>
      </Link>
      
       
      
        
      </div>
    </>
  )
}

export default ListadoSeriesHome

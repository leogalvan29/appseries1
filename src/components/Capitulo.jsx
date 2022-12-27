import React from 'react'
/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

const Capitulo = ({capitulo, infoCapitulo, setInfoCapitulo}) => {
  const {image, name, season} = capitulo

 //console.log(capitulo)



const {id} = useParams() 

useEffect(() => {

  obtenerInfoCapitulo()

},[])


const obtenerInfoCapitulo = async () => {
 const data = await fetch(`https://api.tvmaze.com/episodes/${id}`)
 const datos = await (data.json())
 console.log(datos)

 setInfoCapitulo(datos)
}


console.log(infoCapitulo)


  return (
    <div css={css`


box-shadow: 1px 4px 17px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 1px 4px 17px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 1px 4px 17px 0px rgba(0,0,0,0.75);
border-radius: 5px;
    
         @media(min-width: 576px){
              width: 230px;
              height: 250px;
         }
        @media(min-width: 768px){
            width:270px;
            height: 250px;
           
        }
    
    
    `}>

<Link to={`/pagecapitulo/${id}`}>
        <img src={image === null || image === undefined ? 'Sin imagen' : image.medium} alt=""  css={css`
        
            width: 100%;
            height: 150px;
            border-radius: 5px 5px 0px 0px;
        
        `}/>
        <p css={css`
        
          text-align: center;
           font-size: 14px;
           color: #3d948b;
        `}>{name}</p>
        <p css={css`
        text-align: center;
        margin-top: 10px;
        `}>Season {season}</p>

        </Link>
    </div>
  )
}

export default Capitulo
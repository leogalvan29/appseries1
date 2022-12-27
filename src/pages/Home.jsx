import React from 'react'
import Buscador from '../components/Buscador'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { useState } from 'react'
import { useEffect } from 'react'
import ListadoSeriesHome from '../components/ListadoSeriesHome'

/** @jsxImportSource @emotion/react */

const Home = () => {

    const [nombre, setNombre] = useState('')
    const [serie, setSerie] = useState([])

     const handleSubmit = (e) => {
        e.preventDefault()
        //console.log('enviando datos')
        

        if([serie].includes('')) {
           // console.log('todos los campos son obligatorios')
            return
        } 
        

            fetch(`https://api.tvmaze.com/search/shows?q=${nombre}`)
            .then(res => res.json())
            .then(data => {
               console.log(data)
            //    Object.fromEntries(Object.entries(data).filter(value => null))
            //    const datos = Object.fromEntries(Object.entries(data).filter(value => null))
            //    console.log(datos)
           
            const datos = data.filter(e => e.show.image !== null) 
            //const datosComedia = data.filter(e => e.show.languaje )
           // console.log(datos)
            
               setSerie(datos)

               
            })
            setNombre('')
            
           

        

        
      
     }
  //console.log(serie)
     
     
  return (
    <div css={css`
    
       width: 100%;
       min-height: 100vh;
       height: auto;
       background-color: #f2f2f2;
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: flex-start;
       padding-top: 100px;

       @media(min-width: 1140px){
          width: 100%;
       } 
    
    `}>
      <form onSubmit={handleSubmit} 
       css={css`

        width: 90%;
        margin: 0px auto;
        padding-top: 5px;
       @media(min-width: 768px){

        max-width: 600px;
       height: 120px;
       display: flex;
       justify-content: center;
       flex-direction: column;

       }
       width: 100%;
       height: 120px;
       display: flex;
       justify-content: center;
       flex-direction: column;

       
       `}
      >
        <input 
        type="text" 
        css={css`
          width: 90%;
          margin: 0px auto;
          height: 50px;
          font-size: 24px;
        `}
        
        onChange={(e) => setNombre(e.target.value)} 
        value={nombre}
        id="nombre"
        
        />
        <button type='submit'
        css={css`
        width: 90%;
        margin: 0px auto;
        height: 50px;
        background-color: #71c5bd;
        color: #fff;
        position: relative;
        top: 15px;
        font-size: 20px;
        border: 1px solid #71c5bd;
        
        `}
        >Buscar Serie</button>
      </form>

      <div css={css`
       
          width: 90%;
          margin: 0px auto;
          display: grid;
          grid-template-columns:1fr ;
          justify-items: center;
         
          @media(min-width:576px){
              grid-template-columns: 1fr 1fr;
          }
          @media(min-width:768px){

          width: 90%;
          margin: 0px auto;
          display: grid;
          grid-template-columns:1fr 1fr 1fr ;
          justify-items: center;

          } 
          @media(min-width: 1110px){
            grid-template-columns:1fr 1fr 1fr 1fr;
          }
      
      `}>
      {
          serie.map((titulo) => (
            
            <ListadoSeriesHome
            key={titulo.show.id} 
            titulo={titulo.show}
            />
          ))
      }

      </div>
     
  
      
    </div>
  )
}

export default Home

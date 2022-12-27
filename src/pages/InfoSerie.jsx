import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Capitulo from '../components/Capitulo'
import { useRef } from 'react'
import InfoActor from '../components/InfoActor'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const InfoTxtSerie = styled.div`
 
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 90%;
   margin: 0px auto;
   @media(min-width: 768px){
    width: 60%;
    
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    right: 3%;
   } 

   

`

const InfoSerie = () => {

     const navigate = useNavigate()
     const [datosSerie, setDatosSerie] = useState([])
     const [capitulos, setCapitulos] = useState([])
     const [personaje, setPersonaje] = useState([])
     const [infoCapitulo, setInfoCapitulo] = useState([])
    
    //console.log(useParams())

    const {id} = useParams()
    //console.log(id) 

 useEffect(() => {
    // el problema se puede resolver con una funcion asincrona a diferencia de usar fetch esto evita peticiones antes de cargar el usefect
      obtenerDatos()
      obtenerCapitulos()
      obtenerActores()
      
     
     
     
 },[])


   //obtiene los datos de la serie
    const obtenerDatos = async () => {
         //console.log('obteniendo datos')
       const data = await  fetch(`https://api.tvmaze.com/shows/${id}`)
       const users = await(data.json())
       //console.log(users)
       setDatosSerie([users])
      
    }
 //obtiene los capitulos de la serie
    const obtenerCapitulos = async () => {
        const data = await fetch(`https://api.tvmaze.com/shows/${id}/episodes`)
        const cap = await (data.json())
        //console.log(cap)
        
        setCapitulos(cap)
        
    }
//obtiene los actores
    const obtenerActores = async () => {
        const data = await fetch(`https://api.tvmaze.com/shows/${id}/cast`)
        const actores = await (data.json()) 
        console.log(actores)
        setPersonaje(actores)
    }




   
       
       
    

    console.log(datosSerie)
    //console.log(capitulos) 

   
  
  return (
    <div css={css`
       padding: 30px 0px;
       width: 90%;
       margin: 0px auto;
       height: auto;
       display: flex;
       flex-direction: column;
       align-items: center;
       @media(min-width: 768px){
         padding-top: 0px;
       } 
      

       
    `}>
        
        {
            datosSerie.map((serie) => (
                <li css={css`

                   list-style: none;
                   height: auto;
                   display: flex;
                   flex-direction: column;
                   align-items: center;
                   max-width: 90%;
                   margin: 0px auto;
                   margin-bottom: 100px;
                   
                   @media(min-width: 768px){
                  flex-direction: row;
                  justify-content: space-around;
                  align-items: center;
                  min-height: 400px;
                  height: auto;
       }
                `} key={serie.id}> 
                    <img src={serie.image.medium} alt="" css={css`
                      box-shadow: 1px 4px 17px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 1px 4px 17px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 1px 4px 17px 0px rgba(0,0,0,0.75);
                    
                    `}/>
                    <InfoTxtSerie>
                         <h3 css={css`
                            font-size: 24px;
                            color: #3d948b;
                            font-family: 'Open sans' , sans-serif;

                            
                         `}>Nombre: {serie.name}</h3>
                         <p css={css`
                            max-width: 100%;
                            width:100%;
                            margin: 0px auto;
                            line-height: 30px;
                            
                         `}>{serie.summary}</p> 
                         <h4 css={css`
                         
                         color: #3d948b;
                         
                         `}>Language: {serie.language}</h4>
                    </InfoTxtSerie>
                </li>

            ))
        }


          <div css={css`
               width: 90%;
                 margin: 0px auto;
                 height: auto;
                 display: grid;
                 grid-template-columns: 1fr;
                 justify-items: center;
                 gap: .5rem;
                 @media(min-width:576px){
                    grid-template-columns: 1fr 1fr;
                    gap: 1rem;

                 } 
                 @media(min-width: 991px){
                     grid-template-columns: 1fr 1fr 1fr 1fr;
                     gap: 1rem;
                     
                 }
                 
        
        
        `}>

              {
                  capitulos.map((capitulo) => (
                 
                     
                      <Capitulo key={capitulo.id}
                          capitulo={capitulo}
                          infoCapitulo={infoCapitulo}
                          setInfoCapitulo={setInfoCapitulo}
                      >


                      </Capitulo>
                     
                    
                   
                   




                  ))
              }

        </div>

        <div css={css`
          
            width: 90%;
            margin: 0px auto;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            justify-content: center;
            margin-top: 100px;
        
        `}>


        {
            personaje.map((personaje) =>(
              
               <InfoActor
               
               personaje={personaje}
               />
               
               
                
            ))
        }

        </div>

        <button onClick={() => navigate('/')} css={css`

         width: 150px;
         height: 30px;
         margin: 0px auto;
         margin-top: 30px;
         color: #fff;
         background-color: #3d948b;
         border: none;
        
              @media(min-width: 768px){
                margin-top: 50px;
                width: 400px;
                height: 35px;
                background-color: #3d948b;
                color: #fff; 
                border: 1px solid #3d948b;
              }
        
        `}>Buscar nuevamente</button>
        
        
    
    </div>
  )
}

export default InfoSerie

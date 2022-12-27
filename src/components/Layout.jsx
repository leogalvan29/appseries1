import React from 'react'
import { Outlet,Link } from 'react-router-dom'
/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Logo from '../image/tvm-header-logo.png'

const Encabezado = styled.header`
    
     width: 100%;
     height: 80px;
     background-color: #3f3f3f;
     display: flex;
     justify-content: flex-start;
     align-items: center;
     @media(max-width:768px){
       justify-content: center;
     } 
     

`

const Logotipo = styled.img`
    width: 154px;
    height: 48px;
 
    
    @media(min-width: 768px){
        
     position: relative;
     left: 100px;
    }

`

const Navegacion = styled.nav`
     
    width: 100%;
    height: 40px;
    background-color: #3d948b;
    display: flex;
    justify-content: center;
    align-items: center;
    
      
`



const Layout = () => {
  return (
    <>
      <Encabezado>
       <Logotipo src={Logo}></Logotipo>
      

      </Encabezado>
      <Navegacion>

<Link to='/' css={css`
      text-decoration: none;
      color: #fff;
      text-transform: uppercase;
      margin: 0px 5px;
      font-size: 14px;
      font-weight: 300;

 `}>Inicio</Link>
 <Link to='/people' css={css`
    text-decoration: none;
    color: #fff;
    text-transform:uppercase;
    margin: 0px 5px;
    font-size: 14px;
    font-weight: 300;
 `}>People</Link>

</Navegacion>
     
       <Outlet/>
       <h1>footer</h1>
    </>
  )
}

export default Layout

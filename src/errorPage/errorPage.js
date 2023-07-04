import React from 'react'
import Stars from '../animations/stars/star';
import * as S from "./errorPage.style"
import { Link } from 'react-router-dom';


function ErrorPage() {
    
    return (

        <S.backgroundError>
            
        <Stars/>
        <h1>Error404</h1>
        <button>
            <Link to="/">back to home</Link>
        </button>
        </S.backgroundError>
        
    );
  }
  
  export default ErrorPage;
  
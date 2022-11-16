import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    padding:30px 100px;
    justify-content: space-between;
    height:20%;
    background: #ba274a ;
    p{
      color:#fff;
      font-size: 2rem;
    }
    ul{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    ul li { 
     list-style: none;
     margin-left: 20px;
     color:#fff;
     cursor: pointer;
     font-size: 1rem;
     font-weight: bold;
     &:hover{
        filter: brightness(0.9);
     }
    }
`
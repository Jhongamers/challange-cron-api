import styled from "styled-components";

export const Container = styled.div`
    width:250px;
    overflow: hidden;
    border: 1px solid #ccc;
    background: #fff;
    a{
        text-decoration: none;
        font-family: Arial, Helvetica, sans-serif;
        color:#000;
    }
    `

export const ImageContainer = styled.div`
    img{
        overflow: hidden;
        width: 300px;
        height:200px;
    }
    `

export const CardContent = styled.div`
        margin: 1rem;
        margin-top: 0.3rem;
       
 `

export const CardTitle = styled.div`
        margin-bottom:0.5rem;
        cursor:pointer;          
    `
    
export const CardBody = styled.div`
           margin-top:0.3rem;
           h3{
        margin-top:0.3rem;
        font-family: Arial, Helvetica, sans-serif;
        
    }  
`
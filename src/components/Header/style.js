import styled from "styled-components";

export const Section = styled.section`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-bottom: 2px solid;
margin-bottom: 50px;
box-shadow: -1px 8px 25px -8px rgba(0,0,0,0.56);
-webkit-box-shadow: -1px 8px 25px -8px rgba(0,0,0,0.56);
-moz-box-shadow: -1px 8px 25px -8px rgba(0,0,0,0.56);
`

export const Logo = styled.header`
height: 80px;
width:100%;
display: flex;
align-items: center;
justify-content: center;
h2{
    font-size: clamp(1rem, 8vw, 2.5rem);
}
`

export const Menu = styled.menu`
width: 100%;
min-height: 50px;
display: flex;
align-items: center;
justify-content: flex-end;


`

export const Button = styled.button`
background: none;
margin-right:30px;
position: relative;
p{
    font-size: 24px;
    cursor: pointer;
}
span{
    position: absolute;
    font-size: 16px;
    width: 20px;
    border-radius: 50%;
    top: -5px;
    background: #c0392b;
    color: #fff;

}
`
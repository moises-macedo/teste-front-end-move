import styled from "styled-components";



export const Ul = styled.ul`
width: 95%;
display: flex;
align-items: center;
justify-content: space-between;
margin: 5px;
border: 2px solid;
border-radius: 5px;

`

export const LiImg = styled.section`
display: flex;
align-items: center;
justify-content: center;
height: 80px;
width: 80px;
img{
    width: 75px;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: cover;
    border-radius: 10px;
    border: 2px solid transparent;
}
`

export const Li = styled.li`


&:nth-child(4){
    button{
        background: none;
    }
    p{
        cursor: pointer;
        margin-right: 10px;
        color: #c0392b;
    }
}
`
export const Container = styled.div`
width: 100%;
min-height:450px;
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;
`


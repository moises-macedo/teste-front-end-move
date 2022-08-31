import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;
z-index: 10;
position: absolute;
top: 0;
left: 0;
background: rgba(0, 0, 0, 0.8);
overflow-y: none;
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);

`

export const Section = styled.section`
width: 100%;
max-width: 450px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
background: #fff;
min-height: 600px;
`

export const Ul = styled.section`
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
export const Title = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    h2{
        font-size: clamp(1rem, 8vw, 2rem);
    }


`
export const Main = styled.main`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
min-height: 500px;
h3{
    min-height: 450px;
}


.paginationBttns{
    display: flex;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    li{
        margin: 5px;
        a{
            cursor: pointer;
        }
    }
}

`
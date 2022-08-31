import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-around;
`

export const Ul = styled.ul`

    height:400px;
    margin: 10px;
    width: 100%;
    max-width: 300px;    
    border-radius: 10px;
    position: relative;
    
    

  &:hover{    
    li{
        p{
            opacity: 1;
            transition: opacity 0.5s
        }

    }
  }
`
export const LiDescription = styled.li`
width: 85%;
display: flex;
align-items: center;
position: absolute;
p{
    opacity: 0;
    font-weight: 200;    
    margin-left: 10px;    

}
&:nth-child(1){
    top: 20px;
    p{
        font-size: 18px;
        color: #fff;
        background: rgba(0, 0, 0, 0.7);
        width: 100%;
        max-width: 250px;
        display: flex;
        align-items: center;
        justify-content: start;
        padding: 5px;
        border-radius: 10px;
        font-weight: bold;
    }

}
&:nth-child(3){
    top: 60px;
    p{
        font-size: 18px;
        color: #fff;
        background: rgba(0, 0, 0, 0.8);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        width: 100%;
        max-width: 150px;
        display: flex;
        align-items: center;
        justify-content: start;
        padding: 5px;
        border-radius: 10px;
        font-weight: bold;
    }


}
&:nth-child(4){
    bottom: 20px;
    p{
        font-size: 20px;
        color: #fff;
        background: rgba(0, 0, 0, 0.8);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        width: 100%;
        max-width: 100px;
        display: flex;
        align-items: center;
        justify-content: start;
        padding: 5px;
        border-radius: 10px;
        font-weight: bold;
    }


}
&:nth-child(5){
    width: 100%;
    button{
        background: none;
    }
    p{  
        cursor: pointer;
        position: absolute;
        bottom: 40px;
        right:10px;
        font-size: 24px;
        color: #c0392b;
        
    }

}
`

export const LiImg = styled.li`
width: 100%;
display: flex;
align-items: center;
justify-content: center;

img{
    
    width: 300px;
    height: 400px;
    border-radius:10px;
    margin-top: 10px;
    margin-bottom: 10px;
    object-fit: cover;
    z-index: -1;
   
}
`
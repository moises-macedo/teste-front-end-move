import CardProvider from "./Card"

const Provider = ({children})=>{
    return(
        <CardProvider>
            {children}
        </CardProvider>
    )
}
export default Provider
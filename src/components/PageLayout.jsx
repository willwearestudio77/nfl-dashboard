import GameList from "./GameList"
import Header from "./Header"
import NoGame from "./NoGame"
import { Container } from "@mui/material"
function PageLayout(){
    return(
        <>
            <Container maxWidth="sm"> 
            <Header/>
            <NoGame/>
            <GameList/>
            </Container>
           
        </>
    )
}
export default PageLayout
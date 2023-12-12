import { useContext } from 'react'
import { NewDatesContext } from '../contexts/Context'
import BetAccordion from './BetDropDown'




function GameList() {
    const { games } = useContext(NewDatesContext)
        console.log(games)
    return (
        <>

            <ul className="games-list">
            
                {games.map(gameObject => (
                    <li key={gameObject.game.id}>
                        <div className="teams">
                            <div className="home-team" >
                                

                                    <img src={gameObject.teams.home.logo} />
                                

                                <p>{gameObject.teams.home.name}</p>
                                <span>{gameObject.scores.home.total}</span>
                            </div>
                            <div className="away-team">
                                <img src={gameObject.teams.away.logo} />
                                <p>{gameObject.teams.away.name}</p>
                                <span>{gameObject.scores.away.total}</span>
                            </div>
                        </div>
                        <div className="game-type">
                            <p>{gameObject.game.stage}</p>
                            <p>{gameObject.game.date.time}</p>
                            <p>Timezone:{gameObject.game.date.timezone}</p>
                            <p>Status:{gameObject.game.status.long}</p>
                            

                        </div>
                        <BetAccordion gameKey={gameObject}/>

                    </li>

                ))}
                

            </ul>

        </>
    )

}
export default GameList
import { useState, useEffect } from 'react'

function GameList() {
    const urlTime = new Date()
    const urlDate = `${urlTime.getFullYear()}-${urlTime.getMonth() + 1}-0${urlTime.getDate()}`
    console.log(urlDate)
    const urlSeason = urlTime.getFullYear()
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c63ddf1572msh0c03caa004e043cp11c563jsna6ae1c78f16f',
            'X-RapidAPI-Host': 'api-american-football.p.rapidapi.com'
        }
    };
    const URL = `https://api-american-football.p.rapidapi.com/games?date=2023-10-08&league=1&season=${urlSeason}&timezone=America%2FNew_York`;
    const [game, setGame] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(URL, options);
            const result = await response.text();
            const gamesResult = JSON.parse(result)
            const games = gamesResult.response;
            setGame(games)
        
}
fetchData();
    }, []);

console.log(game)
return (
    <ul>
        {game.map(gameObject => (
          <li key={gameObject.game.id}>
            {gameObject.game.stage}
            <div>
                {gameObject.teams.home.name}
            </div>
            <div>
                {gameObject.teams.away.name}
            </div>
            </li>
        ))}
    </ul>
)
    
}
export default GameList
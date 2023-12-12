import React, { createContext, useState, useCallback, useEffect } from "react";
import dayjs from "dayjs";


export const NewDatesContext = createContext({
  dates: '',
  years: '',
  games: [],
  dateValue: () => { },
  idValue:()=> {},
  gameid: [],
  betData:[],
  bookmakers:[],
});

export const NewDatesProvider = ({ children }) => {
  
  
  const todaysDate = dayjs();
  const formattedDate = todaysDate.format("YYYY-MM-DD")
  const formattedYear = todaysDate.format("YYYY")


  const [dates, setDates] = useState(``);
  const [years, setYears] = useState(``);
  const [games, setGames] = useState([]);
  const [gameid, setgameId] = useState('');
  const [URL, setURL] = useState(`https://api-american-football.p.rapidapi.com/games?date=${formattedDate}&league=1&season=${formattedYear}&timezone=America%2FNew_York`);
  const [betURL,setBetURL]= useState('');
  const [betData,setBetData]= useState([]);
  const [bookmakers,setBookmakers] = useState([]);
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c63ddf1572msh0c03caa004e043cp11c563jsna6ae1c78f16f',
      'X-RapidAPI-Host': 'api-american-football.p.rapidapi.com'
    }
  };
  const betOptions ={
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'c63ddf1572msh0c03caa004e043cp11c563jsna6ae1c78f16f',
        'X-RapidAPI-Host': 'api-american-football.p.rapidapi.com'
      }
  }






  const dateValue = useCallback(async (data) => {
    try {
      const formattedDate = data.format("YYYY-MM-DD");
      const formattedYear = data.format('YYYY');
      setDates(formattedDate);
      setYears(formattedYear);
    } catch (error) {
      console.error(error);
    }
  }, []);

  

  useEffect(() => {
    // This code will run every time dates or years change
    const updateURL = `https://api-american-football.p.rapidapi.com/games?date=${dates}&league=1&season=${years}&timezone=America%2FNew_York`;
    setURL(updateURL);
  }, [dates, years]);

  

  useEffect(() => {
    // This code will run every time URL changes
    const fetchData = async () => {
      try {
        const resp = await fetch(URL, options);
        if (!resp.ok) throw new Error("Failed to fetch");
        const gamesData = await resp.json();
        setGames(gamesData.response);
        
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
    
  }, [URL]);
  // useEffect(()=>{
  //   games.map(g => setgameId([...gameid,g.games.id]))
  // },[games])
  const idValue = useCallback(async (idData) =>{
    try{
      const selectedId = idData 
      console.log(selectedId)
      setgameId(selectedId)
    } catch (error){
      console.log(error)
    }
  },[] )
  
  useEffect(() => {
    // This code will run every time gameid changes
    const updateBetURL = `https://api-american-football.p.rapidapi.com/odds?game=${gameid}`;
    setBetURL(updateBetURL);
    console.log(betURL)
  }, [gameid]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(betURL, betOptions);
        if (!resp.ok) throw new Error("Failed to fetch");
        const bettingData = await resp.json();
        setBetData(bettingData);
      } catch (error) {
        console.error(error);
      }
    }
  
    fetchData();
  
  }, [betURL]);
  
  



  return (
    <NewDatesContext.Provider value={{ dateValue, dates, years, games, gameid,idValue ,betData,bookmakers}}>
      {children}
    </NewDatesContext.Provider>
  );
};
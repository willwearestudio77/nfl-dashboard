import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useContext, useEffect, useState } from 'react'
import { NewDatesContext } from '../contexts/Context'
import { List, ListItem, ListItemText } from '@mui/material';
import { nanoid } from 'nanoid';

const betId = nanoid();
const getColorClass = (value) => {
  if (value > 2) {
    return 'green-background';
  } else if (value > 1 && value <= 2) {
    return 'yellow-background';
  } else {
    return 'red-background';
  }
};

export default function BetAccordion({ gameKey }) {
  const { idValue, betData } = useContext(NewDatesContext);
  let content;
  if (betData.response[0]) {
    const bookmakersArray = betData.response[0].bookmakers
    
    content = bookmakersArray.map((bookmaker) => {
      const betsArray = bookmaker.bets;
      const firstOne = betsArray.slice(0,1);
      return (

      <Accordion key={bookmaker.id}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{bookmaker.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {firstOne.map((bet) => {
            const valuesArray =  bet.values
            
            
            return(<List key={bet.id} >
            <ListItem key={bet.id}>
              <ListItemText
                primary={bet.name}
              />
              <List>
              {valuesArray.map(value =>(
                 <ListItem className={getColorClass(value.odd)}  key={nanoid()}><strong>{value.value}</strong><span>{value.odd}</span></ListItem>
                 
              ))}
              </List>
            </ListItem>

          </List>)})}
        </AccordionDetails>
      </Accordion>
  )})
  } else {
    content = <ListItem key={gameKey}><ListItemText primary="No betting information" /></ListItem>
  }


  return (


    <div>
      <Accordion onChange={() => { idValue(gameKey.game.id); console.log(betData) }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Betting</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {content}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
import React from 'react';
import { List, ListItem } from 'material-ui/List';
import { darkBlack } from 'material-ui/styles/colors';


const PairStationList = ({marioAndLuigi, itchyAndScratchy, tomAndJerry, scoobyAndShaggy}) => (
    <List>
        <ListItem
            primaryText="Mario and Luigi"
            secondaryText={
                <div>
                    <p><span style={{color: darkBlack}}>Developer 1: </span> { marioAndLuigi[0] }</p>
                    <p><span style={{color: darkBlack}}>Developer 2: </span> { marioAndLuigi[1] }</p>
                </div>
                }
            secondaryTextLines={2}
        />
        <ListItem
            primaryText="Itchy and Scratchy"
            secondaryText={
                <div>
                    <p><span style={{color: darkBlack}}>Developer 1: </span> { itchyAndScratchy[0] }</p>
                    <p><span style={{color: darkBlack}}>Developer 2: </span> { itchyAndScratchy[1] }</p>
                </div>
                }
            secondaryTextLines={2}
        />
        <ListItem
            primaryText="Tom and Jerry"
            secondaryText={
                <div>
                    <p><span style={{color: darkBlack}}>Developer 1: </span> { tomAndJerry[0] }</p>
                    <p><span style={{color: darkBlack}}>Developer 2: </span> { tomAndJerry[1] }</p>
                </div>
                }
            secondaryTextLines={2}
        />
        <ListItem
            primaryText="Scooby and Shaggy"
            secondaryText={
                <div>
                    <p><span style={{color: darkBlack}}>Developer 1: </span> { scoobyAndShaggy[0] }</p>
                    <p><span style={{color: darkBlack}}>Developer 2: </span> { scoobyAndShaggy[1] }</p>
                </div>
                }
            secondaryTextLines={2}
        />
    </List>
)

export default PairStationList
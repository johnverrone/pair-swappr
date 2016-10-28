import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

const PeopleList = ({developers}) => (   
    <List>
        {developers.map(developer =>
            <ListItem
                key={developer}
                leftCheckbox={<Checkbox />}
                primaryText={developer}
            />
        )}
    </List>
)

export default PeopleList
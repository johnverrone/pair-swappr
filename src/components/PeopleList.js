import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

const PeopleList = () => (   
    <List>
        <ListItem
            leftCheckbox={<Checkbox />}
            primaryText="Margo"
        />
        <ListItem
            leftCheckbox={<Checkbox />}
            primaryText="John"
        />
        <ListItem
            leftCheckbox={<Checkbox />}
            primaryText="Yuriy"
        />
        <ListItem
            leftCheckbox={<Checkbox />}
            primaryText="Anushka"
        />
        <ListItem
            leftCheckbox={<Checkbox />}
            primaryText="Chad"
        />
        <ListItem
            leftCheckbox={<Checkbox />}
            primaryText="Sydney"
        />
        <ListItem
            leftCheckbox={<Checkbox />}
            primaryText="Chip"
        />
        <ListItem
            leftCheckbox={<Checkbox />}
            primaryText="Neil"
        />
        <ListItem
            leftCheckbox={<Checkbox />}
            primaryText="Sheen"
        />
        <ListItem
            leftCheckbox={<Checkbox />}
            primaryText="Omie"
        />
    </List>
)

export default PeopleList
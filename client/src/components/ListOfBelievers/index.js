import React from "react";
import { List } from 'semantic-ui-react'
import "./style.css";
function ListOfBelievers() {
  return (
    <div>
        <List id="cursive" style={{listStyleType: "none"}}>
            <List.Item>Bill Bobson</List.Item>
            <List.Item>Bob Billson</List.Item>
            <List.Item>Chuck Steak</List.Item>
            <List.Item>Beef Testosterone</List.Item>
        </List>
    </div>
    
  );
}

export default ListOfBelievers;

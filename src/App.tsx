import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Provider, defaultTheme, Button, Flex, ListBox, Item, Text} from '@adobe/react-spectrum';

function App() {
  return (
    <Provider theme={defaultTheme}>
      <div style={{ display: "flex", height: "300px", backgroundColor: "#eeeeee", borderStyle: "solid", borderWidth: "2px", borderColor: "black", padding: "10px", overflow: "hidden"}}>
        <Flex maxHeight="300px">
          <ListBox minWidth="static-size-400">
            <Item>
              <Text>A</Text>
            </Item>
            <Item>
              <Text>B</Text>
            </Item>
            <Item>
              <Text>B</Text>
            </Item>
            <Item>
              <Text>C</Text>
            </Item>
            <Item>
              <Text>E</Text>
            </Item>
            <Item>
              <Text>F</Text>
            </Item>
            <Item>
              <Text>G</Text>
            </Item>
            <Item>
              <Text>H</Text>
            </Item>
            <Item>
              <Text>I</Text>
            </Item>
            <Item>
              <Text>J</Text>
            </Item>
            <Item>
              <Text>K</Text>
            </Item>
          </ListBox>
        </Flex>
        <Flex maxHeight="100%">
          <ListBox minWidth="static-size-400">
            <Item>
              <Text>A</Text>
            </Item>
            <Item>
              <Text>B</Text>
            </Item>
            <Item>
              <Text>B</Text>
            </Item>
            <Item>
              <Text>C</Text>
            </Item>
            <Item>
              <Text>E</Text>
            </Item>
            <Item>
              <Text>F</Text>
            </Item>
            <Item>
              <Text>G</Text>
            </Item>
            <Item>
              <Text>H</Text>
            </Item>
            <Item>
              <Text>I</Text>
            </Item>
            <Item>
              <Text>J</Text>
            </Item>
            <Item>
              <Text>K</Text>
            </Item>
          </ListBox>
        </Flex>
        <Flex height="100%">
          <ListBox minWidth="static-size-400">
            <Item>
              <Text>A</Text>
            </Item>
            <Item>
              <Text>B</Text>
            </Item>
            <Item>
              <Text>B</Text>
            </Item>
            <Item>
              <Text>C</Text>
            </Item>
            <Item>
              <Text>E</Text>
            </Item>
            <Item>
              <Text>F</Text>
            </Item>
            <Item>
              <Text>G</Text>
            </Item>
            <Item>
              <Text>H</Text>
            </Item>
            <Item>
              <Text>I</Text>
            </Item>
            <Item>
              <Text>J</Text>
            </Item>
            <Item>
              <Text>K</Text>
            </Item>
          </ListBox>
        </Flex>
      </div>
    </Provider>
  );
}

export default App;

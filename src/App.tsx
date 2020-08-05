import React, { useEffect } from 'react';
import {DOMRefValue} from '@react-types/shared';
import './App.css';

import {Provider, defaultTheme, Button, Flex, ListBox, Item, Text} from '@adobe/react-spectrum';
import { ResizeObserver } from 'resize-observer';

function App() {
  const containerRef = React.createRef<HTMLDivElement>()
  const listContainerRef = React.createRef<DOMRefValue<HTMLDivElement>>();

  const toggleSize = () => {
    console.log("Toggle it", containerRef.current?.style.height);
    if( containerRef.current ) {
      if( containerRef.current.style.height === "700px" ) {
        containerRef.current.style.height = "300px";
      } else {
        containerRef.current.style.height = "700px";
      }  
    }
  }

  useEffect( () => {
    console.log("Mounted")
    console.log("Container-ref", containerRef.current)
    console.log("List-Container-ref", listContainerRef.current?.UNSAFE_getDOMNode())

    const container = containerRef.current
    const listContainer = listContainerRef.current?.UNSAFE_getDOMNode()

    if( container && listContainer ) {
      const resizeObserver = new ResizeObserver((entries) => {
        listContainer.style.maxHeight = entries[0].contentRect.height+"px";
      });
      resizeObserver.observe(container )
      return () => { resizeObserver.disconnect() }
    }
  })

  return (
    <Provider theme={defaultTheme}>
      <div ref={containerRef} style={{ display: "flex", height: "700px", borderStyle: "solid", borderWidth: "2px", borderColor: "black", padding: "10px", overflow: "hidden"}}>
      <Flex maxHeight="300px">
          <Text>Max-Height: 300px</Text>
          <ListBox minWidth="150px">
            { Array.from(new Array(1000)).map( (v,idx) => {
              return <Item>
                <Text>IDX: {idx}</Text>
              </Item>
            }) }
          </ListBox>
        </Flex>
        <Flex>
          <Text>None</Text>
          <ListBox minWidth="150px">
            { Array.from(new Array(100)).map( (v,idx) => {
              return <Item>
                <Text>IDX: {idx}</Text>
              </Item>
            }) }
          </ListBox>
        </Flex>
        <Flex maxHeight="700px">
          <Text>Max-Height: 700px</Text>
          <ListBox minWidth="150px">
            { Array.from(new Array(100)).map( (v,idx) => {
              return <Item>
                <Text>IDX: {idx}</Text>
              </Item>
            }) }
          </ListBox>
        </Flex>
        <Flex maxHeight="100%">
          <Text>MaxHeight: 100%</Text>
          <ListBox minWidth="150px">
          { Array.from(new Array(100)).map( (v,idx) => {
              return <Item>
                <Text>IDX: {idx}</Text>
              </Item>
            }) }
          </ListBox>
        </Flex>
        <Flex height="700px">
          <Text>Height: 700px</Text>
          <ListBox minWidth="150px">
          { Array.from(new Array(100)).map( (v,idx) => {
              return <Item>
                <Text>IDX: {idx}</Text>
              </Item>
            }) }
          </ListBox>
        </Flex>
        <Flex height="100%">
          <Text>Height: 100%</Text>
          <ListBox minWidth="150px">
          { Array.from(new Array(100)).map( (v,idx) => {
              return <Item>
                <Text>IDX: {idx}</Text>
              </Item>
            }) }
          </ListBox>
        </Flex>
        <Flex ref={listContainerRef}>
          <Text>ObserverAdjusted</Text>
          <ListBox minWidth="150px">
          { Array.from(new Array(100)).map( (v,idx) => {
              return <Item>
                <Text>IDX: {idx}</Text>
              </Item>
            }) }
          </ListBox>
        </Flex>
      </div>
      <Button variant="primary" onPress={toggleSize}> Toggle Size</Button>
    </Provider>
  );
}

export default App;

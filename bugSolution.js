// bugSolution.js
import React from 'react';
import MyComponent from './MyComponent'; // Correct import path

export default function App() {
  return (
    <MyComponent name="React Native" />
  );
}

// MyComponent.js
import React from 'react';
import {Text} from 'react-native';

const MyComponent = ({name}) => {
  return (
    <Text>Hello, {name}!</Text> 
  );
};

export default MyComponent;
import React from 'react'
import { Outlet } from 'react-router-dom'
import Profile from './Profile'
import { render } from '@testing-library/react';

class About extends React.Component {
  constructor(props){
    super(props)
    console.log("aboutConstructor");}
  componentDidMount() {
    console.log("about ComponentDidMount");
  }
  componentWillUnmount( ) { console.log( "About will unmount" ); }
  render(){
    console.log("about render");
  return (
    <div>About
      <Outlet /> 
    </div>
  )
}
}
export default About

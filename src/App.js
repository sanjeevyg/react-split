import React from 'react'
import SplitScreen from './SplitScreen'
import LeftHandComponent from './Components/LeftHandComponent'
import RightHandComponent from './Components/RightHandComponent'

export default function App() {
  return (
      <SplitScreen leftWeight={1} rightWeight={2}>
          <LeftHandComponent name="Sanjeev Yogi"/>
          <RightHandComponent role="Software Engineer"/>
      </SplitScreen>
  )
}

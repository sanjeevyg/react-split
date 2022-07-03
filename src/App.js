import React from 'react'
import SplitScreen from './SplitScreen'

const LeftHandComponent = ({name}) => {
    return <h1 style={{background: "red"}}>{name}</h1>
}
const RightHandComponent = ({role}) => {
    return <h1 style={{background: "green"}}>{role}</h1>
}

export default function App() {
  return (
      <SplitScreen leftWeight={1} rightWeight={2}>
          <LeftHandComponent name="Sanjeev Yogi"/>
          <RightHandComponent role="Software Engineer"/>
      </SplitScreen>
  )
}

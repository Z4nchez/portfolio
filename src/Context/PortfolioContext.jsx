import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

export const PortfolioContext = createContext();

export function PortfolioContextProvider(props) {

    const [menuH, setMenuH] = useState(false)
    const [scrollH, setScrollH] = useState(false)

  return (
    <PortfolioContext.Provider value={{menuH, scrollH, setScrollH, setMenuH}}>
        {props.children}
    </PortfolioContext.Provider>
  )
}

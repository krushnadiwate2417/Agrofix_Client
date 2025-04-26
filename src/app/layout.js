"use client"
import GlobalContext from "@/context/GlobalContext"
import Header from "../components/Header"
import { useState } from "react"
import './globals.css';


export default function RootLayout({ children }) {

  const [isAdmin,setIsAdmin] = useState(false);
  const [orderedProduct,setOrderedProduct] = useState(null);

  return (
    <html lang="en">
      <body>
        <GlobalContext.Provider value={{isAdmin,setIsAdmin,orderedProduct,setOrderedProduct}}>
        <Header/>
        {children}
        </GlobalContext.Provider>
      </body>
    </html>
  )
}

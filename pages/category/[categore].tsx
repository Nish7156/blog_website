import React, { useEffect, useState } from 'react'
import NavTabs from '../../components/NavTabs'
import { featchCategories } from '../../http';

function categore() {

    const [TabsVal ,setTabsVal]= useState([]);
    console.log(TabsVal,"tabs");
    
  
    useEffect( ()=>{
  
      const response=  featchCategories()
      .then((response) => {
        console.log(response,"jj")
        setTabsVal(response.data.data)
      })
      .catch((err) => console.log(err));
  
    },[])
  return (
    <>
    <NavTabs navtabs={TabsVal}/>

    </>
  )
}

export default categore
import React from 'react';
import Head from 'next/head';
import RestaurantHeaderP from '../components/Restaurant/RestaurantHeaderP';
import RestaurantHeroP from '../components/Restaurant/RestaurantHeroP';
import RestaurantBody from '../components/Restaurant/RestaurantBody';
import RestaurantFooter from '../components/Restaurant/RestaurantFooter';



const restaurant_front = () => {
  return (
    <div>
     <Head>
     <title> CEO Restaurant</title>
     <meta name="description" content="نرم افزار رستوران" />
     <meta name="theme-color" content="#142028"/>
     <link rel="icon" href="/images/1.png" />
     <link rel='manifest' href='/manifest.json' />
     </Head>
    
    <RestaurantHeaderP/>
    <RestaurantHeroP/>

    <RestaurantBody/>
    <RestaurantFooter/>


    </div>
  )
}

export default restaurant_front
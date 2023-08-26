import { Fragment } from 'react';
import Head from 'next/head';

import Restaurants from '../components/restaurants/restaurants-comp';

function RestaurantsPage() {
  return (
    <Fragment>
      <Head>
        <title>Restaurants</title>
        <meta name='restaurants us' content='this is a simple restaurants page' />
      </Head>
      <Restaurants/>
    </Fragment>
  );
}

export default RestaurantsPage;

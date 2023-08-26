import { Fragment } from 'react';
import Head from 'next/head';

import Attractions from '../components/attractions/attractions-comp';

function AttractionsPage() {
  return (
    <Fragment>
      <Head>
        <title>Attractions</title>
        <meta name='attractions us' content='this is a simple attractions page' />
      </Head>
      <Attractions/>
    </Fragment>
  );
}

export default AttractionsPage;

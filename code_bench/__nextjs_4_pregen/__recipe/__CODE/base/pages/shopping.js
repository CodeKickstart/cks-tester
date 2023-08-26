import { Fragment } from 'react';
import Head from 'next/head';

import Shopping from '../components/shopping/shopping-comp';

function ShoppingPage() {
  return (
    <Fragment>
      <Head>
        <title>Shopping</title>
        <meta name='shopping us' content='this is a simple shopping page' />
      </Head>
      <Shopping/>
    </Fragment>
  );
}

export default ShoppingPage;

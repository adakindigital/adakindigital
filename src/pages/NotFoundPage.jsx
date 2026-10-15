import React from 'react';
import PageHero from '../components/page/PageHero';
import Button from '../components/shell/Button';

const NotFoundPage = () => (
  <PageHero title="This page does not exist." intro="It may have moved in the redesign.">
    <Button to="/">Go to the home page</Button>
  </PageHero>
);

export default NotFoundPage;

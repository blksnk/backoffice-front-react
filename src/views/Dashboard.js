import React, { useState } from 'react';
import { connect } from 'react-redux';

import s from '../stylesheets/Dashboard.module.scss';

import ModelsList from './ModelsList.js';
import ModelContent from './ModelContent.js';

const Dashboard = ({ history, db, ...props }) => {
  console.log(db);
  return (
    <main id={s.page}>
      <ModelsList />
      <ModelContent modelName="client" />
    </main>
  );
};

export default connect(({ db }) => ({ db }))(Dashboard);

import React from 'react';
import { connect } from 'react-redux';
import { selectModelName } from '../store/root/actions.js';

import { Column } from '../components/Layout.js';

const ModelsList = ({ history, db, dispatch, ...props }) => {
  const onClick = (name) => dispatch(selectModelName(name));
  return (
    <Column columnTitle="Models">
      <ul>
        {db.modelNames.map((name, index) => {
          return (
            <li key={index}>
              <button onClick={() => onClick(name)}>{name}</button>
            </li>
          );
        })}
      </ul>
    </Column>
  );
};

export default connect(({ db }) => ({ db }))(ModelsList);

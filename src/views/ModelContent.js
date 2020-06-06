import React, { Fragment } from 'react';
import s from '../stylesheets/ModelContent.module.scss';
import { connect } from 'react-redux';
import { Column } from '../components/Layout.js';

function generateTitle(modelName) {
  return `${modelName} - Model contents`;
}

const ModelContent = ({ db, selectedModelName }) => {
  const list = db.data[selectedModelName];
  return (
    <Column index={1} columnTitle={generateTitle(selectedModelName)}>
      <div id={s.content}>{list ? <List list={list} /> : null}</div>
    </Column>
  );
};

const List = ({ list }) => {
  const { _id, __v, ...filtered } = list[0];
  const fields = Object.keys(filtered);
  return (
    <div id={s.list_container}>
      <Head fields={fields} />
      <ul id={s.list}>
        {list.map((item, index) => (
          <Row key={`list_item_${index}`} {...{ item, index }} />
        ))}
      </ul>
    </div>
  );
};

const Head = ({ fields }) => {
  return (
    <div>
      {fields.map((field, i) => (
        <span key={`list_head_${i}}`}>{field}</span>
      ))}
    </div>
  );
};

const Row = ({ item, index }) => {
  const { _id, __v, ...filtered } = item;
  const values = Object.values(filtered);
  return (
    <li className={s.list_item}>
      {values.map((val, i) => (
        <span key={`list_item_${index}_${i}}`}>{val}</span>
      ))}
    </li>
  );
};

export default connect(({ db, selectedModelName }) => ({
  db,
  selectedModelName,
}))(ModelContent);

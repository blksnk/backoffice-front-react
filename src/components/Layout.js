import React from 'react';
import s from '../stylesheets/Layout.module.scss';
import {
  color_1,
  color_2,
  color_3,
  color_4,
  color_5,
} from '../stylesheets/_variables.scss';

const colors = [color_1, color_2, color_3, color_4, color_5];

export const Column = ({ columnTitle, index, children, ...props }) => {
  return (
    <div className={s.column} style={{ backgroundColor: colors[index || 0] }}>
      <div className={s.column_title}>
        <h2 title={columnTitle}>{columnTitle}</h2>
      </div>

      <div className={s.content}>{children}</div>
    </div>
  );
};

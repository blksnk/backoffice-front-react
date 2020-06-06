import { ca1p } from '../helpers.js';
import { DB_SET, SELECT_MODEL_NAME } from './types.js';

export const dbSet = (db) => ca1p(DB_SET, db);
export const selectModelName = (name) => ca1p(SELECT_MODEL_NAME, name);

import { DB } from './fetch.js';
import { log } from './log.js';
import { dbSet, selectModelName } from '../store/root/actions.js';

export async function initFetch(dispatch) {
  try {
    const modelNames = await DB.methods.getModelNames();

    //fetch all models content

    let [data, shemas] = await Promise.all([
      Promise.all(modelNames.map((name) => DB.model.getList(name))),
      Promise.all(modelNames.map((name) => DB.model.getShema(name))),
    ]);

    data = arrayToObject(modelNames, data);
    shemas = arrayToObject(modelNames, shemas);
    log(shemas);

    dispatch(
      dbSet({
        modelNames,
        data,
        shemas,
      })
    );
    dispatch(selectModelName(modelNames[0]));
  } catch (e) {
    console.error(e);
  }
}

const arrayToObject = (names, content) => {
  return Object.fromEntries(names.map((name, index) => [name, content[index]]));
};

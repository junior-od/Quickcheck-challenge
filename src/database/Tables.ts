import {database} from './Database';

export const createUserTable = async () => {
  await database.transaction((tx: any) => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT NOT NULL, lastname TEXT NOT NULL, username TEXT NOT NULL UNIQUE, password TEXT NOT NULL)',
      [],
      (_sqlTxn: any, _res: any) => {
        // console.log('table created successfully');
      },
      (_error: any) => {
        // console.log('error on creating table ' + error.message);
      },
    );
  });
};

import {database} from './Database';

export const registerUser = async (
  firstname: string,
  lastname: string,
  username: string,
  password: string,
) => {
  await database.transaction((txn: any) => {
    txn.executeSql(
      'INSERT INTO users (firstname,lastname,username,password) VALUES (?,?,?,?)',
      [firstname, lastname, username, password],
      (_sqlTxn: any, _res: any) => {
        return Promise.resolve(`${firstname} registered successfully`);
      },
      (error: any) => {
        return Promise.reject(`error: ${error.message}`);
      },
    );
  });
};

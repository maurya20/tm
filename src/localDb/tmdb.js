import localForage from "localforage";
import { dbName } from "../constants";

export class TmDb {
  constructor() {}

  static async updateInToDb(tmObj) {
    try {
      const newTmObj = await localForage.setItem(dbName, tmObj);
      // This code runs once the value has been loaded
      // from the offline store.
      return newTmObj;
    } catch (err) {
      // This code runs if there were any errors.
      console.log(err);
    }
  }

  static async readFromTmDb() {
    try {
      const tmObj = await localForage.getItem(dbName);
      return tmObj;
    } catch (err) {
      console.log(err);
    }
  }
}

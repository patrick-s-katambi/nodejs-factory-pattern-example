import makeDb from "./factory";

const database = makeDb();

export type Tdatabase = typeof database;

export default database;

import { v4 as uuidv4 } from "uuid";
export const createUser = (user) => (users = [...users, { ...user, _id: uuidv4() }]);
export const findUserByUsername = (username) => users.find((user) => user.username === username);
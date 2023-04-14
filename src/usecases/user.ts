import { User } from "../domain/user";

type UserCreateEvent = {
  loginId: User["loginId"];
  password: User["password"];
};

type UserUpdateEvent = {
  loginId: User["loginId"];
  password: User["password"];
};

export type UserReadHandlerFindById = (id: User["id"]) => User;
export type UserCreateHandler = (payload: UserCreateEvent) => User;
export type UserUpdateHandler = (payload: UserUpdateEvent) => User;
export type UserDeleteHandler = (id: User["id"]) => User;

export type UserRepository = {
  getById: UserReadHandlerFindById;
  create: UserCreateHandler;
  update: UserUpdateHandler;
  delete: UserDeleteHandler;
};

import { User } from "../domain/user";
import { UsecaseHandler } from "../interfaces/BaseUsecase";

// 中(controller)に渡す情報の外枠を定義
type UserCreateEvent = {
  loginId: User["loginId"];
  password: User["password"];
};

type UserUpdateEvent = {
  targetId: User["id"];
  loginId: User["loginId"];
  password: User["password"];
};

export type UserReadHandlerFindById = (id: User["id"]) => Promise<User>;
export type UserCreateHandler = (payload: UserCreateEvent) => Promise<User>;
export type UserUpdateHandler = (payload: UserUpdateEvent) => Promise<User>;
export type UserDeleteHandler = (id: User["id"]) => Promise<User>;

export type UserRepository = {
  getById: UserReadHandlerFindById;
  create: UserCreateHandler;
  update: UserUpdateHandler;
  delete: UserDeleteHandler;
};

// 外(domain)から得られる情報
type getProps = {
  id: number;
};
type getResult = User;

type createProps = {
  loginId: string;
  password: string;
};
type createResult = User;

type updateProps = {
  targetId: number;
  loginId: string;
  password: string;
};
type updateResult = User;

type deleteProps = { id: number };
type deleteResult = User;

// usecaseの作成
export const getUserUsecase: UsecaseHandler<
  getProps,
  UserRepository,
  getResult
> = (props, repository) => {
  return repository.getById(props.id);
};

export const createUserUsecase: UsecaseHandler<
  createProps,
  UserRepository,
  createResult
> = (props, repository) => {
  return repository.create(props);
};

export const updateUserUsecase: UsecaseHandler<
  updateProps,
  UserRepository,
  updateResult
> = (props, repository) => {
  return repository.update(props);
};

export const deleteUserUsecase: UsecaseHandler<
  deleteProps,
  UserRepository,
  deleteResult
> = (props, repository) => {
  return repository.delete(props.id);
};

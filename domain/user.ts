import zod from "zod";

export const userSchema = zod.object({
  id: zod.number(),
  loginId: zod.string(),
  password: zod.string().max(20).min(6),
  createdAt: zod.date(),
  updatedAt: zod.date(),
  deletedAt: zod.date().nullable(),
});

export type User = zod.infer<typeof userSchema>;

export type UserReadEvent = {
  targetId: User["id"];
};
export type UserCreateEvent = {
  loginId: User["loginId"];
  password: User["password"];
};
export type UserUpdateEvent = {
  targetId: User["id"];
  loginId: User["loginId"];
  password: User["password"];
};
export type UserDeleteEvent = {
  targetId: User["id"];
};

type UserHandler = <Payload>(payload: Payload) => User;
export type UserReadEventHandler = UserHandler;
export type UserCreateEventHandler = (payload: UserCreateEvent) => User;
export type UserUpdateEventHandler = (payload: UserUpdateEvent) => User;
export type UserDeleteEventHandler = UserHandler;

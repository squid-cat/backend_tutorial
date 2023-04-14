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

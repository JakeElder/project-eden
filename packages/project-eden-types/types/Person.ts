import { object, string, Infer } from "superstruct";

export const PersonStruct = object({
  name: string(),
});

export type Person = Infer<typeof PersonStruct>;

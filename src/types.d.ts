import { z } from "zod";
import { loginSchema } from "./schemas/login-schema";

export type LoginType = z.infer<typeof loginSchema>;

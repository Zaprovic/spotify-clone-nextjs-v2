import { SVGProps } from "react";
import { z } from "zod";
import { loginSchema } from "./schemas/login-schema";

export type LoginType = z.infer<typeof loginSchema>;

export interface svgProps extends SVGProps<SVGSVGElement> {}

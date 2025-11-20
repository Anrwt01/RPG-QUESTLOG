import { z } from "zod";

export const signinSchema = z.object({
    email: z.string().trim().toLowerCase().email("Invalid email format"),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters long")
        .max(64, "Password too long"),    
});
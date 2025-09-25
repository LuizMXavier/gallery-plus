import { z } from "zod";

export const albumNewFormSchema = z.object({
    title: z.string
})

import {z} from "zod"

export const photoNewFormSchema = z.object({
    title: z.string().min(1, {message: "Campo obrigatório"}).max(255)
})
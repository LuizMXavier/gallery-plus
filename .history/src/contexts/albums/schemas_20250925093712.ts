import { z } from "zod";

export const albumNewFormSchema = z.object({
    title: z.string().min(1, {message: "Campo Obrigatório"}).max(255),
    photosIds: z.array(z.string().uuid()).optional(),
})

export type AlbumNewFormSchema = z.infer<t>

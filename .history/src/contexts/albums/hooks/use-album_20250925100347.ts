import { api } from "../../../helpers/api";
import type { Album } from "../models/album";
import type { AlbumNewFormSchema } from "../schemas";


export default function useAlbum() {
    async function createAlbum(payload: AlbumNewFormSchema) {
        try {
            const {data: album} = await api.post<Album>("/albums", {
                title: payload.title,
            });

            if(payload.photosIds && payload.photosIds.length > 0) {
                await Promise.all (
                    payload.photosIds.map((photoId) => {
                        return api.put(`/photos/`)
                    })
                )
            }
        }
    }
}
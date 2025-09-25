import type { AlbumNewFormSchema } from "../schemas";


export default function useAlbum() {
    async function createAlbum(payload: AlbumNewFormSchema) {
        try {
            const {data: album} = await api.post<A>
        }
    }
}
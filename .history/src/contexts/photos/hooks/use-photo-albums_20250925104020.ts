import { useQueryClient } from "@tanstack/react-query";
import { api } from "../../../helpers/api";

export default function usePhotoAlbums() {
    const queryClient = useQueryClient();

    async function managePhotoOnALbum(photoId: string, albumsIds: string[]) {
        try {
            await api.put(`photos/${photoId}/albums`, {
                albumsIds
            });

            queryClient.invalidateQueries({queryKey: ["photo", photoId]});
        } cat
    }
}
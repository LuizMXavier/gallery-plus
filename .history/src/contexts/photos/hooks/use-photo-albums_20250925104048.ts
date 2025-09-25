import { useQueryClient } from "@tanstack/react-query";
import { api } from "../../../helpers/api";
import { toast } from "sonner";

export default function usePhotoAlbums() {
    const queryClient = useQueryClient();

    async function managePhotoOnALbum(photoId: string, albumsIds: string[]) {
        try {
            await api.put(`photos/${photoId}/albums`, {
                albumsIds
            });

            queryClient.invalidateQueries({queryKey: ["photo", photoId]});
        } catch (error) {
            toast.error("Erro ao gerenciar álbuns da ")
        }
    }
}
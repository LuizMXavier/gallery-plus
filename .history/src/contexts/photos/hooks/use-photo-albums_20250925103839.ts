import { useQueryClient } from "@tanstack/react-query";

export default function usePhotoAlbums() {
    const queryClient = useQueryClient();

    async function managePhotoOnALbum(photoId: string, albumsIds: string[]) {
        
    }
}
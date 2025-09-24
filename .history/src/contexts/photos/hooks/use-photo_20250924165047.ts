import { useQuery } from "@tanstack/react-query";
import type { Photo } from "../models/photo";
import { fetcher } from "../../../helpers/api";
import type { PhotoNewFormSchema } from "../schemas";

interface PhotoDetailResponse extends Photo {
    nextPhotoId?: string;
    previousPhotoId?: string;
}

export default function usePhoto(id?: string) {
    const {data, isLoading} = useQuery<PhotoDetailResponse>({
        queryKey:["photo", id],
        queryFn: () => fetcher(`/photos/${id}`),
        enabled: !!id,
    });

    async function createPhoto(payload:PhotoNewFormSchema) {
        try {
            const {data: photo} = await api.post<Photo>("/photos", {
                title: payload.title,
            });

            await api.post(
                `/photos/${photo.id}/image`,
                
            )
        }        
    }

    return {
        photo: data,
        nextPhotoId: data?.nextPhotoId,
        previousPhotoId: data?.previousPhotoId,
        isLoadingPhoto: isLoading,
    }
}
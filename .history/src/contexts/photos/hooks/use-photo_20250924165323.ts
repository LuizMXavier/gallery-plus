import { useQuery } from "@tanstack/react-query";
import type { Photo } from "../models/photo";
import { api, fetcher } from "../../../helpers/api";
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
                {
                    file: payload.file[0],
                },
                {
                    headers: {
                        "Content-Type":"multpart/form-data",
                    },
                }
            );
            if(payload.albumsIds) {
                await api.put(``)
            }
        }catch (error) {
            throw error
        }        
    }

    return {
        photo: data,
        nextPhotoId: data?.nextPhotoId,
        previousPhotoId: data?.previousPhotoId,
        isLoadingPhoto: isLoading,
    }
}
import type { Photo } from "../models/photo";

interface PhotoDetailResponse extends Photo {
    nextPhotoId?: string;
    previousPhotoId?: string;
}

export default function usePhoto(id?: string) {
    
}
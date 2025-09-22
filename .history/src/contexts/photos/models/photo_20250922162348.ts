import { Album } from "../../albums/models/album";

export interface Photo {
    id:string;
    title: string;
    imageId: string;
    album: Album[];
    
}
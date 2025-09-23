import type { Photo } from "../../photos/models/photo";
import type { Album } from "../models/album";
interface ALbumsListSelectableProps {
    loading?: boolean;
    albums: ALbum[];
    photo: Photo;
}
import type { Photo } from "../../photos/models/photo";

interface ALbumsListSelectableProps {
    loading?: boolean;
    albums: ALbum[];
    photo: Photo;
}
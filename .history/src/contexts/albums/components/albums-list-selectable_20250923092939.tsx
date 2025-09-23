import type { Photo } from "../../photos/models/photo";
import type { Album } from "../models/album";


interface ALbumsListSelectableProps {
    loading?: boolean;
    albums: Album[];
    photo: Photo;
}

export default function AlbumsListSelectable({}: ALbumsListSelectableProps) {
    return (
        <ul className="flex flex-col gap-4">
            <li className="flex items-center justi">

            </li>

        </ul>
    )
}
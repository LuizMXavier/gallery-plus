import type { Photo } from "../../photos/models/photo";
import type { Album } from "../models/album";
import Text from "../../../components/text";
import InputCheckbox from "../../../components/input-checkbox";
import Divider from "../../../components/divider";
import Skeleton from "../../../components/skeleton";

interface ALbumsListSelectableProps {
  loading?: boolean;
  albums: Album[];
  photo: Photo;
}

export default function AlbumsListSelectable({
  albums,
  loading,
  photo
}: ALbumsListSelectableProps) {
    function isChecked(albumId: string) {
        return photo?.albums?.some((album) => album.id === albumId)
    }
    function handlePhotoOnAlbuns(albumId: string){
        let albumsIds = [];
    }
    if(isChecked(albumId)) {
        albumsId = photo.albums.filter((album) => album.id !==  )
    }
  return (
    <ul className="flex flex-col gap-4">
      {!loading && albums?.length > 0 && albums.map((album, index) => (
        <li key={album.id}>
          <div className="flex items-center justify-between gap-1">
            <Text variant="paragraph-large" className="truncate">
              {album.title}
            </Text>
            <InputCheckbox />
          </div>
          {index !== albums.length -1 && <Divider className="mt-4" />}
        </li>
      ))}
      {loading && 
        Array.from({length: 5}).map((_, index) => (
            <li key={`albums-list-${index}`}>   
                <Skeleton className="h-[2.5rem]"/>
            </li>
        ))
      }
    </ul>
  );
}

import type { Photo } from "../models/photo";
import PhotoWidget from "./photo-widget";

interface PhotosListProps {
  photos: Photo[];
  loading?: boolean;
}

export default function PhotoList({ photos, loading }: PhotosListProps) {
  return (
    <div>
      <div className="grid grid-colds-5 gap-9">
        {!loading && photos?.length > 0 && photos.map((photo) => (
          <PhotoWidget photo={photo} key={photo.id} />
        ))}
        {!}
      </div>
    </div>
  );
}

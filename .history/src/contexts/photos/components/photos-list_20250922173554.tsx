import type { Photo } from "../models/photo";
import PhotoWidget from "./photo-widget";
import Text from "../../../components/text";

interface PhotosListProps {
  photos: Photo[];
  loading?: boolean;
}

export default function PhotoList({ photos, loading }: PhotosListProps) {
  return (
    <div>
        <Text
            as="div"
            variant="paragraph-large"
            className="flex items-center justify-end gap-1 text-accent-span"
        >
            

        </Text>
      {!loading && photos?.length > 0 && (
        <div className="grid grid-colds-4 gap-9">
          {photos.map((photo) => (
            <PhotoWidget photo={photo} key={photo.id} />
          ))}
        </div>
      )}
      {!loading && (
        <div className="grid grid-colds-4 gap-9">
          {Array.from({ length: 10 }).map((_, index) => (
            <PhotoWidget
              key={`photo-loading-${index}`}
              photo={{} as Photo}
              loading
            />
          ))}
          ;
        </div>
      )}

      {!loading && photos.length === 0 && (
        <div className="flex justify-center items-center h-full">
          <Text variant="paragraph-large">Nenhuma foto encontrada</Text>
        </div>
      )}
    </div>
  );
}

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
        {!loading && photos?.length > 0 && photos.map((photo) => (
        <div className="grid grid-colds-5 gap-9">  
          <PhotoWidget photo={photo} key={photo.id} />
        ))}
        {!loading  && Array.from({length:10}).map((_,index) => (
            <PhotoWidget 
                key={`photo-loading-${index}`}
                photo={{} as Photo}
                loading
            />
        ))};
      </div>
      {!loading && photos.length === 0 && (
        <div className="flex justify-center items-center h-full">
            <Text variant="paragraph-large">Nenhuma foto encontrada</Text>
        </div>
        )}
    </div>
  );
}

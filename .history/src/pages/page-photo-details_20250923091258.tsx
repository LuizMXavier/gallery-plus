import { useParams } from "react-router";
import Text from "../components/text";
import type { Photo } from "../contexts/photos/models/photo";
import Container from "../components/container";
import Skeleton from "../components/skeleton";
import PhotosNavigator from "../contexts/photos/components/photos-navigator";

export default function PagePhotoDetails() {
  const { id } = useParams();
  const isLoadingPhoto = false;
  const photo = {} as Photo;
  return (
    <Container>
      <header className="flex items-center justify-between gap-8">
        {!isLoadingPhoto ? (
          <Text variant="heading-large">{photo?.title}</Text>
        ) : (
          <Skeleton className="w-48 h-8" />
        )}
        <PhotosNavigator loading={isLoadingPhoto}/>
      </header>
      <div className="grid grid-cols-[21rem] gap-24">
        div
        
      </div>
    </Container>
  );
}

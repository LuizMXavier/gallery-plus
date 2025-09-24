import Container from "../components/container";
import AlbumsFilter from "../contexts/albums/components/albums-filter";
import useAlbums from "../contexts/albums/hooks/use-albums";
import PhotoList from "../contexts/photos/components/photos-list";
import usePhotos from "../contexts/photos/hooks/use-photos";

const {albums, isLoadingAlbums} = useAlbums();
const {photos, isLoadingPhotos} = usePhotos();

export default function PageHome() {
  return (
    <Container>
      <AlbumsFilter
        albums={albums}
        loading={isLoadingAlbums}
        className="mb-9"
      />
      <div className="grid grid-cols-5 gap-9">
        <PhotoList
          photos={}
        />
      </div>
    </Container>
  );
}

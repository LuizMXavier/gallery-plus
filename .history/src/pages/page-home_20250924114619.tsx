import Container from "../components/container";
import AlbumsFilter from "../contexts/albums/components/albums-filter";
import useAlbums from "../contexts/albums/hooks/use-albums";
import PhotoList from "../contexts/photos/components/photos-list";

const {albums, isLoadingAlbums} = useAlbums();

export default function PageHome() {
  return (
    <Container>
      <AlbumsFilter
        albums={albums}
        className="mb-9"
      />
      <div className="grid grid-cols-5 gap-9">
        <PhotoList
          photos={[
            {
              id: "123",
              title: "Olá mundo",
              imageId: "portrait-tower.png",
              albums: [
                { id: "3421", title: "Album1" },
                { id: "123", title: "Album2" },
                { id: "456", title: "Album3" },
              ],
            },
          ]}
        />
      </div>
    </Container>
  );
}

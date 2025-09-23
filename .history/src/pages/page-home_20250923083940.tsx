import Container from "../components/container";
import AlbumsFilter from "../contexts/albums/components/albums-filter";
import PhotoList from "../contexts/photos/components/photos-list";

export default function PageHome() {
  return (
    <Container>
      <AlbumsFilter
        albums={[
          { id: "3421", title: "Album1" },
          { id: "123", title: "Album2" },
          { id: "456", title: "Album3" },
        ]}
        className="mb-9"
      />
      <div>
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
      
    </Container>
  );
}

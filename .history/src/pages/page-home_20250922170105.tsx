import Container from "../components/container";
import Text from "../components/text";
import PhotoWidget from "../contexts/photos/components/photo-widget";

export default function PageHome() {
  return (
    <Container>
      <div className="grid grid-cols-4 gap-9">
        <PhotoWidget
          photo={{
            id: "123",
            title: "Olá mundo",
            imageId: "portrait-tower.png",
            albums: [
              { id: "3421", title: "Album1" },
              { id: "123", title: "Album2" },
              { id: "456", title: "Album3" },
            ],
          }}
        />
        <PhotoWidget/>
      </div>
    </Container>
  );
}

import Container from "../components/container";
import PhotoWidget from "../contexts/photos/components/photo-widget";
import PhotoList from "../contexts/photos/components/photos-list";
import type { Photo } from "../contexts/photos/models/photo";

export default function PageHome() {
  return (
    <Container>
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
          
          }
        ]}
      />
          photo={{
            
        />
        <PhotoWidget photo={{} as Photo} loading/>
      </div>
    </Container>
  );
}

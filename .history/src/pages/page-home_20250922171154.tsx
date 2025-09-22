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

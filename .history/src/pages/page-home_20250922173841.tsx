import Container from "../components/container";
import PhotoList from "../contexts/photos/components/photos-list";

export default function PageHome() {
  return (
    <Container>
      <PhotoList
        photos={[    
        ]}
      />
    </Container>
  );
}

import type { Photo } from "../../photos/models/photo";
import type { Album } from "../models/album";
import Text from "../../../components/text";
import InputCheckbox from "../../../components/input-checkbox";
import Divider from "../../../components/divider";

interface ALbumsListSelectableProps {
  loading?: boolean;
  albums: Album[];
  photo: Photo;
}

export default function AlbumsListSelectable({}: ALbumsListSelectableProps) {
  return (
    <ul className="flex flex-col gap-4">
      <li className="flex items-center justify-between gap-1">
        <Text variant="paragraph-large" className="truncate">
          Natureza
        </Text>
        <InputCheckbox />
        <Divider className="mt-4"/>
      </li>
      <li className="flex items-center justify-between gap-1">
        <Text variant="paragraph-large" className="truncate">
          Natureza
        </Text>
        <InputCheckbox />
        <Divider className="mt-4"/>
      </li>
    </ul>
  );
}

import ImageFilePreview from "../../../components/image-preview";
import type { Photo } from "../models/photo";

interface PhotoWidgetProps {
    photo: Photo;
    loading?: boolean;
}

export default function PhotoWidget({photo, loading}: PhotoWidgetProps) {
    return (
        <div className="flex flex-col gap-4">
            {!loading ? (
                <ImageFilePreview
                    src={photo.imageId}
                    title={photo.title}
                    imageClassName="w-["
            )

            }
        </div>
    )
}
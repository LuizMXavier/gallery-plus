import ImageFilePreview from "../../../components/image-preview";
import type { Photo } from "../models/photo";
import Skeleton from "../../../components/skeleton";

interface PhotoWidgetProps {
    photo: Photo;
    loading?: boolean;
}

export default function PhotoWidget({photo, loading}: PhotoWidgetProps) {
    return (
        <div className="flex flex-col gap-4">
            {!loading ? (
                <ImageFilePreview
                    src={`/images/${photo.imageId}`}
                    title={photo.title}
                    imageClassName="w-[10.875rem] h-[10.875rem] rounded lg"/>

            ): (
                <Skeleton className="w-[10.875rem] h-[10.875rem] rounded lg"/>
            )}

            <div className="flex flex-col gap-2">
                {!loading}
            </div>
        </div>
    )
}
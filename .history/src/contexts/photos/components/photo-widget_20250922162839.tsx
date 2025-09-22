import type { Photo } from "../models/photo";

interface PhotoWidgetProps {
    photo: Photo;
    loading?: boolean;
}

export default function PhotoWidget({photo, loading}: PhotoWidgetProps) {
    return (
        <div className="">

        </div>
    )
}
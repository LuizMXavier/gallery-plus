import ButtonIcon from "../../../components/button-icon";
import ArrowLeftIcon from "../../../assets/icons/chevron-left.svg?react";
import Skeleton from "../../../components/skeleton";
import { useNavigate } from "react-router";

interface PhotosNavigatorProps extends React.ComponentProps<"div">{
    previousPhotoId?: string;
    nextPhotoId?: string;
    loading?: boolean;
}

export default function PhotosNavigator({
    previousPhotoId,
    nextPhotoId,
    loading,
    ...props
}: PhotosNavigatorProps) {
    const navigate = useNavigate();
    return (
        <div className="flex gap-2">
            {!loading ? (
                <>
                    <ButtonIcon
                        icon={ArrowLeftIcon}
                        variant="secondary"
                        disabled={!previousPhotoId}
                        onClick={}
                    />
                </>
            ): (
                <>
                    <Skeleton className="w-10 h-18"/>
                    <Skeleton className="w-20 h-18"/>
                </>
            )}
        </div>
    )
}
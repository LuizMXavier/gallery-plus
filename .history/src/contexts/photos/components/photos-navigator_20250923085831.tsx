import ButtonIcon from "../../../components/button-icon";
import ArrowLeftIcon from "../../../assets/icons/chevron-left.svg?react";

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
    return (
        <div className="flex gap-2">
            {!loading ? (
                <>
                    <ButtonIcon
                        icon={ArrowLeftIcon}
                        variant="secondary"
                        disabled={!previousPhotoId}
                    />
                </>
            ): (
                
            )}
        </div>
    )
}
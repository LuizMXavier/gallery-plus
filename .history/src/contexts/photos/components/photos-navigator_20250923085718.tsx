import ButtonIcon from "../../../components/button-icon";
import 

interface PhotosNavigatorProps extends React.ComponentProps<"div">{
    previousPhotoId?: string;
    nextPhotoId?: string;
    loading?: boolean;
}
ArrowLeftIcon
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
                    />
                </>
            )}
        </div>
    )
}
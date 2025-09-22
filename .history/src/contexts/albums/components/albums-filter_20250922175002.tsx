import Button from "../../../components/button";
import Text from "../../../components/text";
import type{ Album } from "../models/album";
import cx import 

interface AlbumsFilterProps extends React.ComponentProps<"div"> {
    albums: Album[];
    loading?: boolean;
}

export default function AlbumsFilter({albums, loading, className, ...props}: AlbumsFilterProps) {
    return (
        <div className={cx("flex items-center gap-3.5 overflow-x-auto", className)}{...props}>
            <Text variant="heading-small">Álbuns</Text>
            <div className="flex gap-3">
                <Button variant="ghost" size="sm" className="cursor-pointer">
                    Todos
                </Button>
            </div>
        </div>
    )
}
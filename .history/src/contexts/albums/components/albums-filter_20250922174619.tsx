
interface AlbumsFilterProps {
    albums: Album[];
    loading?: boolean;
}

export default function AlbumsFilter({albums, loading}: AlbumsFilterProps) {
    return (
        <div className="flex items-center gap-3.5 overflow-x-auto">
            <Text></Text>
        </div>
    )
}
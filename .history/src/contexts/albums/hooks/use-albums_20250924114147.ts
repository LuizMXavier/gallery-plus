import { useQuery } from "@tanstack/react-query";

export default function useAlbums() {
    const {data, isLoading} = useQuery<Album[]>({
        queryKey: ["albums"]
    })
}
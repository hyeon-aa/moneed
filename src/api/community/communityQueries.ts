import {community as communityApi} from "../community/communityApi"
import { useQuery } from "@tanstack/react-query";

export const useGetTop5PostsQuery = () => {
    return useQuery({
      queryKey: ["top5"],
      queryFn: communityApi.getTop5
    });
}
import { http } from "../request";

export const community = {
    getTop5 : async () => {
        const response = await http.get<string>(`/categories/posts/top-posts?size=5`);
        return response.data;
      },
    
}
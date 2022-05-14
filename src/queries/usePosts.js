import { useQuery } from "react-query";
import { getPosts } from "../api/posts";

export const usePosts = () => useQuery("posts", getPosts);

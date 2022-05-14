import { useQuery } from "react-query";
import { getAuthorInfo } from "../api/authorInfo";

export const useAuthorInfo = () => useQuery("authorInfo", getAuthorInfo);

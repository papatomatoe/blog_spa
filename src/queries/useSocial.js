import { useQuery } from "react-query";
import { getSocials } from "../api/socials";

export const useSocial = () => useQuery("social", getSocials);

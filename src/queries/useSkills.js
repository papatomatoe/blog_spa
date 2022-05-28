import { useQuery } from "react-query";
import { getSkills } from "../api/skills";

export const useSkills = () => useQuery("skills", getSkills);

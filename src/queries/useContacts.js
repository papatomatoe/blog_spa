import { useQuery } from "react-query";
import { getContacts } from "../api/contact";

export const useContacts = () => useQuery("contacts", getContacts);

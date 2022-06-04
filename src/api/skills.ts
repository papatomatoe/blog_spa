import { API_URL } from '../constants/api';

const getAdaptedSkills = (response: any): string[] => {
  return response.map((el: any) => el.attributes.skill);
};

export const getSkills = async (): Promise<string[]> => {
  const response = await fetch(`${API_URL}/skills`);
  const data = await response.json();
  return data.data ? getAdaptedSkills(data.data) : data;
};

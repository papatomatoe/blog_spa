interface IMenu {
  id: number;
  link: string;
  title: string;
}

export interface MainMenuProps {
  menuData: IMenu[];
  isActive: boolean;
}

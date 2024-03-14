import {
  FooterType,
  LayoutType,
  MenuStyle,
  NavStyle,
  ThemeDirection,
  ThemeMode,
  ThemeStyle,
} from '../../../shared/constants/AppEnums';
import {PrimaryColor, SidebarColor} from '../../../shared/constants/AppConst';

export const DarkSidebar = {
  sidebarBgColor: PrimaryColor,
  sidebarTextColor: SidebarColor,
  sidebarHeaderColor: PrimaryColor,
  sidebarMenuSelectedBgColor: SidebarColor,
  sidebarMenuSelectedTextColor: PrimaryColor,
  mode: ThemeMode.DARK,
};

const defaultConfig = {
  sidebar: {
    borderColor: '#757575',
    menuStyle: MenuStyle.CURVED_MENU,
    isSidebarBgImage: false,
    sidebarBgImage: 1,
    colorSet: DarkSidebar,
    sidebarMenuSelectedColor: DarkSidebar.sidebarMenuSelectedBgColor,
  },
  locale: {
    code: 'en',
    name: 'English',
    icon: 'uk',
  },
  themeStyle: ThemeStyle.MODERN,
  direction: ThemeDirection.LTR,
  themeMode: ThemeMode.SEMI_DARK,
  footerType: FooterType.FLUID,
  navStyle: NavStyle.MINI_SIDEBAR_TOGGLE,
  layoutType: LayoutType.FULL_WIDTH,
  footer: true,
  rtlLocale: ['ar'],
};
export default defaultConfig;

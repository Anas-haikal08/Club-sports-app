// import {AiOutlineCluster} from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import { CUSTOMER_ROLES } from 'src/shared/constants/AppConst';
import { FcStatistics } from "react-icons/fc";
import { TbBuildingStadium } from "react-icons/tb";


const routesConfig = [
  {
    id: 'Home',
    title: 'Home',
    messageId: 'tab0.sideBarName',
    icon: <FcStatistics />,
    type: 'item',
    path: '/Home',
    permissionKey: CUSTOMER_ROLES.Administrators,
  },
  {
    id: 'Clubs management',
    title: 'Clubs management',
    messageId: 'tab1.sideBarName',
    icon: <TbBuildingStadium />,
    type: 'group',
    permissionKey: CUSTOMER_ROLES.Administrators,
    children: [
      {
        id: 'Clubs',
        title: 'Clubs',
        messageId: 'tab1.tab11',
        type: 'item',
        path: '/Clubs-Management/Clubs',
        permissionKey: CUSTOMER_ROLES.Administrators,
      },
      {
        id: 'Add-Club',
        title: 'Add-Club',
        messageId: 'tab1.tab12',
        type: 'item',
        path: '/Clubs-Management/Add-Club',
        permissionKey: CUSTOMER_ROLES.Administrators,
      },
    ],
  },
  {
    id: 'users',
    title: 'users',
    messageId: 'tab2.sideBarName',
    icon: <FiUsers />,
    type: 'item',
    path: '/users',
    permissionKey: CUSTOMER_ROLES.Administrators,
  },
];
export default routesConfig;
// import {AiOutlineCluster} from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import { CUSTOMER_ROLES } from 'src/shared/constants/AppConst';
import { FcStatistics } from "react-icons/fc";
import { TbBuildingStadium } from "react-icons/tb";
import { GrTransaction } from "react-icons/gr";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { PiSoccerBallDuotone } from "react-icons/pi";


const routesConfig = [
  // {
  //   id: 'MyClub',
  //   title: 'My Club',
  //   messageId: 'tab0.sideBarName',
  //   icon: <FcStatistics />,
  //   type: 'item',
  //   path: 'MyClub',
  //   permissionKey: CUSTOMER_ROLES.Administrators,
  // },
  {
    id: 'Club management',
    title: 'Club management',
    messageId: 'tab1.sideBarName',
    icon: <TbBuildingStadium />,
    type: 'group',
    permissionKey: CUSTOMER_ROLES.Administrators,
    children: [
      {
        id: 'Club',
        title: 'My Club',
        messageId: 'tab1.tab11',
        type: 'item',
        path: '/Club-Management/Club',
        permissionKey: CUSTOMER_ROLES.Administrators,
      },
      {
        id: 'Add-Field',
        title: 'Add-Field',
        messageId: 'tab1.tab12',
        type: 'item',
        path: '/Club-Management/Add-Field',
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
  {
    id: 'Sports',
    title: 'Sports',
    messageId: 'Sports.sideBarName',
    icon: <PiSoccerBallDuotone />,
    type: 'item',
    path: '/sports',
    permissionKey: CUSTOMER_ROLES.Administrators,
  },
  {
    id: 'Plans',
    title: 'Plans',
    messageId: 'Plans.sideBarName',
    icon: <FaMoneyCheckDollar />,
    type: 'item',
    path: '/plans',
    permissionKey: CUSTOMER_ROLES.Administrators,
  }, {
    id: 'Subscriptions',
    title: 'Subscriptions',
    messageId: 'Subscriptions.sideBarName',
    icon: <FaMoneyCheckDollar />,
    type: 'item',
    path: '/subscriptions',
    permissionKey: CUSTOMER_ROLES.Administrators,
  },
  {
    id: 'Transactions',
    title: 'Transactions',
    messageId: 'trans.sideBarName',
    icon: <GrTransaction />,
    type: 'item',
    path: '/transactions',
    permissionKey: CUSTOMER_ROLES.Administrators,
  },
];
export default routesConfig;
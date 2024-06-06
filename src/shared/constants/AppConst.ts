import urlJoin from 'url-join';

export const initialUrl = '/MyClub'; // this url will open after login
export const AUTH_TOKEN: string = 'app-auth-token';
export const Default_Language: string = 'app-language';
export const FCM_TOKEN_KEY = 'fcm-token';
export const LANGUAGE_HEADER_KEY = 'language-key';

export const PrimaryColor = '#00513f';
export const SidebarColor = '#fff';
export const UPLOAD_ICON_VALIDATE = [
  'image/svg+xml',
  'image/vnd.microsoft.icon',
  'image/gif',
  'image/jpg',
  'image/jpeg',
  'image/png',
  'image/bmp',
  'image/webp',
];

export const formatDateTime: string = 'YYYY-MM-DD hh:mm A';
export const formatDateWithSecondsTime: string = 'YYYY-MM-DD hh:mm:ss A';
export const formatDate: string = 'YYYY/M/DD';
export const formatTime: string = 'hh:mm a';

export const passwordRegex: any =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{12,}$/;

export const remoteServiceBaseUrl = process.env.REACT_APP_PUBLIC_BASE;

export const remoteServiceBaseApiUrl = urlJoin(
  `${process.env.REACT_APP_PUBLIC_BASE}`,
);

export const PRODUCT_NUMBER_IN_ONE_PAGE = 10;
export const PAGE_NUMBER = 1;

export const apiKeyGoogleMap =
  'AIzaSyC_MPgcB-GAIUYap_caF_lQdB1UqFIEhMg&callback=initMap&v=weekly';

export const INDEX_PAGE_SIZE_DEFAULT = 10;
export const INDEX_PAGE_SIZE_OPTIONS = ['10', '20', '30', '40'];

export const UPLOAD_PICTURE_VALIDATE = [
  'image/gif',
  'image/jpg',
  'image/jpeg',
  'image/png',
  'image/bmp',
  'image/webp',
];
export const UPLOAD_FILE_VALIDATE = ['text/plain', 'application/pdf'];

export const CUSTOMER_ROLES = {
  Administrators: 'Administrators',
};

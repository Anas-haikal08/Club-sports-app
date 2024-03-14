import {useEffect} from 'react';
import AppPageMetadata from 'src/domain/core/AppPageMetadata';
import {useBreadcrumbContext} from 'src/domain/utility/AppContextProvider/BreadcrumbContextProvider';
import {useIntl} from 'react-intl';
import IntlMessages from 'src/domain/utility/IntlMessages';

interface ITab121Props {}

const Tab121: React.FC<ITab121Props> = (props) => {
  const {setBreadcrumb}: any = useBreadcrumbContext();
  const {messages} = useIntl();

  useEffect(() => {
    setBreadcrumb([
      {
        text: <IntlMessages id='tab1.sideBarName' />,
        url: '/Clubs-Management/Add-Club',
      },
      {
        text: <IntlMessages id='tab1.tab120' />,
        url: '/Clubs-Management/Add-Club',
      },
      {
        text: <IntlMessages id='tab1.tab121' />,
        url: '/tab-1/tab-1.tab-1-2-0/tab-1-2-1',
      },
    ]);
  }, []);

  return (
    <AppPageMetadata title={messages['tab1.tab121'].toString()}>
      <IntlMessages id='tab1.tab121' />
    </AppPageMetadata>
  );
};

export default Tab121;

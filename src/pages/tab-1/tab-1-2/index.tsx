import {useEffect} from 'react';
import AppPageMetadata from 'src/domain/core/AppPageMetadata';
import {useBreadcrumbContext} from 'src/domain/utility/AppContextProvider/BreadcrumbContextProvider';
import {useIntl} from 'react-intl';
import IntlMessages from 'src/domain/utility/IntlMessages';

interface ITab12Props {}

const Tab12: React.FC<ITab12Props> = (props) => {
  const {setBreadcrumb}: any = useBreadcrumbContext();
  const {messages} = useIntl();

  useEffect(() => {
    setBreadcrumb([
      {
        text: <IntlMessages id='tab1.sideBarName' />,
        url: '/Clubs-Management/Add-Club',
      },
      {
        text: <IntlMessages id='tab1.tab12' />,
        url: '/Clubs-Management/Add-Club',
      },
    ]);
  }, []);

  return (
    <AppPageMetadata title={messages['tab1.tab12'].toString()}>
      <IntlMessages id='tab1.tab12' />
    </AppPageMetadata>
  );
};

export default Tab12;

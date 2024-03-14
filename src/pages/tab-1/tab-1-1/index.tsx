import {useEffect} from 'react';
import AppPageMetadata from 'src/domain/core/AppPageMetadata';
import {useBreadcrumbContext} from 'src/domain/utility/AppContextProvider/BreadcrumbContextProvider';
import {useIntl} from 'react-intl';
import IntlMessages from 'src/domain/utility/IntlMessages';

interface ITab11Props {}

const Tab11: React.FC<ITab11Props> = (props) => {
  const {setBreadcrumb}: any = useBreadcrumbContext();
  const {messages} = useIntl();

  useEffect(() => {
    setBreadcrumb([
      {
        text: <IntlMessages id='tab1.sideBarName' />,
        url: '/Clubs-Management/Clubs',
      },
      {
        text: <IntlMessages id='tab1.tab11' />,
        url: '/Clubs-Management/Clubs',
      },
    ]);
  }, []);

  return (
    <AppPageMetadata title={messages['tab1.tab11'].toString()}>
      <IntlMessages id='tab1.tab11' />
    </AppPageMetadata>
  );
};

export default Tab11;

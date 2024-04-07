import { useEffect } from 'react';
import AppPageMetadata from 'src/domain/core/AppPageMetadata';
import { useBreadcrumbContext } from 'src/domain/utility/AppContextProvider/BreadcrumbContextProvider';
import { useIntl } from 'react-intl';
import IntlMessages from 'src/domain/utility/IntlMessages';

interface ITab0Props {}

const Tab0: React.FC<ITab0Props> = (props) => {
  const { setBreadcrumb }: any = useBreadcrumbContext();
  const { messages } = useIntl();

  useEffect(() => {
    setBreadcrumb([
      {
        text: <IntlMessages id="tab0.sideBarName" />,
        url: '/Home',
      },
    ]);
  }, []);

  return (
    <AppPageMetadata title={messages['tab0.sideBarName'].toString()}>
      <IntlMessages id="tab0.sideBarName" />
    </AppPageMetadata>
  );
};

export default Tab0;
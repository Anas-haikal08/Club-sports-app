export interface ModalDTOS {
  visible?: boolean;
  values?: any;
  errors?: any;
  setVisible: Function;
  setTitleSuccess?: Function;
  setVisibleSuccess?: Function;
  onCancel?: Function;
  title: any;
  okText?: any;
  cancelText?: any;
  TitleSuccess?: any;
  handleChange?: any;
  handleSave?: any;
  messageError?: any;
}

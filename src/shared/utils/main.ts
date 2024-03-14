import {DefaultOptionType} from 'antd/lib/select';
import {message} from 'antd';
import type {RcFile} from 'antd/es/upload/interface';
import {ILocales} from '../common-dtos/locales';

class utils {
  getBase64 = (img: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () =>
      callback(reader.result?.toString() || ''),
    );
    reader.readAsDataURL(img);
  };

  beforeUpload = (file: RcFile) => {
    const isJpgOrPng =
      file.type === 'image/jpeg' ||
      file.type === 'image/png' ||
      file.type === 'image/svg' ||
      file.type === 'image/svg+xml' ||
      file.type === 'image/jpg';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG/SVG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };
  isEmptyValue(value: any) {
    return (
      typeof value === 'undefined' ||
      typeof value === undefined ||
      value === null ||
      value === '' ||
      value.length === 0 ||
      value === 'undefined' ||
      value === undefined
    );
  }

  /*check only Object*/
  isEmptyObject(obj: any) {
    for (let key in obj) {
      // eslint-disable-next-line no-prototype-builtins
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  }

  getTableColumns(obj: any) {
    if (!this.isEmptyObject(obj))
      return Object.keys(obj).map((key: any) => {
        return {
          title: key,
          dataIndex: key,
          key: key,
        };
      });
  }

  selectorSearchInValues(input: string, option: DefaultOptionType | undefined) {
    return (
      option?.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    );
  }

  cloneObject(obj: any) {
    if (!this.isEmptyObject(obj)) {
      return JSON.parse(JSON.stringify(obj));
    } else {
      return null;
    }
  }

  cloneArray(array: Array<any>) {
    if (!this.isEmptyValue(array)) {
      return JSON.parse(JSON.stringify(array));
    } else {
      return null;
    }
  }
  downloadFile = (linkSource: any, filename: any) => {
    const downloadLink = document.createElement('a');
    const fileName = `${filename}`;
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    document.body.appendChild(downloadLink);
    window.open(downloadLink.href);
    document.body.removeChild(downloadLink);
  };
  getCookieValue(key: string): string | null {
    var equalities = document.cookie.split('; ');
    for (var i = 0; i < equalities.length; i++) {
      if (!equalities[i]) {
        continue;
      }

      var splitted = equalities[i].split('=');
      if (splitted.length !== 2) {
        continue;
      }

      if (decodeURIComponent(splitted[0]) === key) {
        return decodeURIComponent(splitted[1] || '');
      }
    }

    return null;
  }

  handleChangeLocales = (
    values: any,
    setFieldValue: (key: string, value: any) => void,
    fieldKey: string,
    languageId: string,
    localeKey: string,
    localeValue: string,
  ) => {
    if (!MainUtils.isEmptyValue(values)) {
      let temp = values;
      const findIndex = temp?.findIndex(
        (locale: ILocales) =>
          locale.languageId === languageId && locale.localeKey === localeKey,
      );
      if (findIndex > -1) {
        temp[findIndex] = {
          languageId: languageId,
          localeKey: localeKey,
          localeValue: localeValue,
        };
      } else {
        temp.push({
          languageId: languageId,
          localeKey: localeKey,
          localeValue: localeValue,
        });
      }
      setFieldValue(fieldKey, temp);
    } else {
      setFieldValue(fieldKey, [
        {
          languageId: languageId,
          localeKey: localeKey,
          localeValue: localeValue,
        },
      ]);
    }
  };

  getLocaleValue = (values: any, languageId: string, localeKey: string) => {
    return values?.find(
      (locale: ILocales) =>
        locale.languageId === languageId && locale.localeKey === localeKey,
    )?.localeValue;
  };

  filterOptions = (input: any, option: any, label?: any) => {
    return label
      ? (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
      : option?.children[1]?.toLowerCase()?.indexOf(input.toLowerCase()) >= 0;
  };
}

const MainUtils = new utils();
export default MainUtils;

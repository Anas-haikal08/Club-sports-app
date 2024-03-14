import MainUtils from 'src/shared/utils/main';

const hasPermission = (permissionKey: Array<string> | string | undefined) => {
  const userRolesName = ['Administrators'];
  return (
    (!MainUtils.isEmptyValue(permissionKey) &&
      !MainUtils.isEmptyValue(
        userRolesName?.filter((permission: string) =>
          permissionKey?.includes(permission),
        ),
      )) ||
    MainUtils.isEmptyValue(permissionKey)
  );
};
export default hasPermission;

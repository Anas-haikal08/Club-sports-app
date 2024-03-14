import React, {useEffect} from 'react';
import {useCookies} from 'react-cookie';
import {AUTH_TOKEN} from '../../../shared/constants/AppConst';
import {useDispatch} from 'react-redux';
import {setAuthenticated} from 'src/domain/app/redux/auth/auth-slice';

const AuthProvider = (props: {children: React.ReactNode}) => {
const [cookies] = useCookies([AUTH_TOKEN]);
const dispatch = useDispatch();

useEffect(() => {
if (cookies[AUTH_TOKEN]) {
dispatch(setAuthenticated(true));
} else {
dispatch(setAuthenticated(false));
}
}, [cookies, dispatch]);

return <>{props.children}</>;
};

export default AuthProvider;
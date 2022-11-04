import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { MIN_LENGTH_LOGIN_DATA } from '../../constants/primitives';

const Auth = (props) => {
    const { isLoading, sendLoginData } = props;

    const [login, setLogin] = useState(props.login);
    const [password, setPassword] = useState(props.password);
    const [errors, setErrors] = useState({
        login: false,
        password: false
    });

    const handleChangeLogin = useCallback((newLogin) => {
        setLogin(newLogin);
    }, [login]);

    const handleChangePassword = useCallback((newPassword) => {
        setPassword(newPassword);
    }, [password]);

    const handleSubmit = useCallback(() => {
        const isValidLogin = isValidString(login);
        const isValidPassword = isValidString(password);

        if (!isValidLogin || !isValidPassword) {
            setErrors({
                login: isValidLogin,
                password: isValidPassword
            });

            return;
        }

        sendLoginData(login, password);
    }, [login, password]);

    const isValidString = (str) => {
        return str.length >= MIN_LENGTH_LOGIN_DATA;
    };

    const getInputClassNames = useCallback((name) =>
        cx('input', errors[name] && 'input__error'),
        [errors]);

    return (
      <div className='auth'>
          <input
              name='login'
              value={login}
              placeholder='Имя пользователя'
              className={getInputClassNames('login')}
              onChange={handleChangeLogin} />
          <input
              name='password'
              value={password}
              placeholder='Пароль'
              className={getInputClassNames('login')}
              onChange={handleChangePassword} />
          <button
              name='submit'
              type='submit'
              disabled={isLoading}
              onClick={handleSubmit}>
              Войти
          </button>
      </div>
    );
};

Auth.propTypes = {
    login: PropTypes.string,
    password: PropTypes.string,
    isLoading: PropTypes.bool.isRequired,
    sendLoginData: PropTypes.func.isRequired
};

export default Auth;

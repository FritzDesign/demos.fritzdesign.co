import { useEffect, useState } from 'react';

interface Fields {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const useValidateFields = (fields: Fields) => {
  const [isValid, setIsValid] = useState({
    email: false,
    passwordLength: false,
    passwordHasCapital: false,
    passwordHasSymbol: false,
    passwordsMatch: false,
    all: false
  });

  useEffect(() => {
    if (
      fields.email.includes('@') &&
      fields.email.includes('.') &&
      fields.email.charAt(fields.email.length - 1) !== '.' &&
      fields.email.charAt(fields.email.length - 2) !== '.' &&
      fields.email.charAt(fields.email.length - 1) !== '@' &&      fields.email.charAt(fields.email.length - 1) !== '.' &&
      fields.email.charAt(fields.email.length - 2) !== '@' &&
      fields.email.lastIndexOf('.') > fields.email.indexOf('@')
    ) {
      if (!isValid.email) {
        setIsValid((prev) => ({ ...prev, email: true }));
      }
    } else {
      if (isValid.email) {
        setIsValid((prev) => ({ ...prev, email: false }));
      }
    }

    if (fields.password.length >= 8) {
      if (!isValid.passwordLength) {
        setIsValid((prev) => ({ ...prev, passwordLength: true }));
      }
    } else {
      if (isValid.passwordLength) {
        setIsValid((prev) => ({ ...prev, passwordLength: false }));
      }
    }

    if (
      fields.password.match(
        /^(?=.*[-\#\$\.\%\&\@\!\+\=\<\>\*\(\)\;\'\:\"\{\}])/
      )
    ) {
      if (!isValid.passwordHasSymbol) {
        setIsValid((prev) => ({ ...prev, passwordHasSymbol: true }));
      }
    } else {
      if (isValid.passwordHasSymbol) {
        setIsValid((prev) => ({ ...prev, passwordHasSymbol: false }));
      }
    }

    if (fields.password.toLowerCase() !== fields.password) {
      if (!isValid.passwordHasCapital) {
        setIsValid((prev) => ({ ...prev, passwordHasCapital: true }));
      }
    } else {
      if (isValid.passwordHasCapital) {
        setIsValid((prev) => ({ ...prev, passwordHasCapital: false }));
      }
    }

    if (fields.password === fields.confirmPassword && isValid.passwordLength) {
      if (!isValid.passwordsMatch) {
        setIsValid((prev) => ({ ...prev, passwordsMatch: true }));
      }
    } else {
      if (isValid.passwordsMatch) {
        setIsValid((prev) => ({ ...prev, passwordsMatch: false }));
      }
    }
    if (
      isValid.email &&
      isValid.passwordLength &&
      isValid.passwordHasCapital &&
      isValid.passwordHasSymbol &&
      isValid.passwordsMatch
    ) {
      if (!isValid.all) {
        setIsValid((prev) => ({ ...prev, all: true }));
      }
    } else {
      if (isValid.all) {
        setIsValid((prev) => ({ ...prev, all: false }));
      }
    }
  }, [{ ...fields }, { ...isValid }]);

  return { ...isValid };
};

export default useValidateFields;
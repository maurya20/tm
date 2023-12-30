import localForage from "localforage";

const handleErrors = (err) => {
  console.log(err);
};

export const useLocalDb = ({ fallbackValue = undefined } = {}) => {
  const getItem = (name, callback) =>
    localForage
      .getItem(name)
      .then((val) => {
        const value = val || fallbackValue;
        callback(value);
        return value;
      })
      .catch(handleErrors);

  const setItem = (name, value, callback) =>
    localForage
      .setItem(name, value)
      .then(() => getItem(name, callback))
      .catch(handleErrors);

  return { setItem, getItem };
};

import {grey, dark, black} from '@constants/colors';

export const defaultsNavOptions = (isLightTheme) => ({
  headerStyle: {
    backgroundColor: isLightTheme ? grey : dark,
    height: 30,
  },
  headerTintColor: black,
});

// Version anterior:
/*
export const defaultsNavOptions = {
  headerStyle: {
    backgroundColor: grey,
    height: 30,
  },
  headerTintColor: black,
};
*/
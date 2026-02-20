import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import prettierConfig from 'eslint-config-prettier';

export default [
  ...nextCoreWebVitals,
  {
    rules: {
      'react-hooks/error-boundaries': 'off',
    },
  },
  prettierConfig,
];

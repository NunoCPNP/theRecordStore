import { jsx as _jsx } from "@emotion/react/jsx-runtime";
import { Global, css } from '@emotion/react';
export const GlobalStyles = () => {
    return (_jsx(Global, { styles: css `
        @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500;600;700&display=swap');

        :root {
          --black: #262533;
          --white: #fffafa;

          --accent-color-a: #3d5a80;
          --accent-color-b: #98c1d9;
          --accent-color-c: #e0fbfc;
          --accent-color-d: #ee6c4d;
          --accent-color-e: #293241;

          /* Typography */
          --baseFontSize: 1.6rem;
          --smallFontSize: 1.28rem;
          --smallestFontSize: 0.819rem;
          --heading-1: 3.125rem;
          --heading-2: 2.5rem;
          --heading-3: 2rem;
          --heading-4: var(--baseFontSize);
          --heading-5: var(--smallFontSize);
          --heading-6: 1.024rem;
          --heading-7: var(--smallestFontSize);
        }

        *,
        *::after,
        *::before {
          margin: 0px;
          padding: 0px;
          box-sizing: inherit;
        }

        html {
          line-height: 1.15;
          text-size-adjust: 100%;
          font-size: 62.5%;
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-size: var(--baseFontSize);
          color: var(--white);
          background-color: var(--accent-color-e);
          font-family: 'Exo 2', sans-serif;
          box-sizing: border-box;
        }
      ` }));
};
//# sourceMappingURL=GlobalStyles.js.map
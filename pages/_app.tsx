

import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

// import "../styles/globals.scss"
// import type { AppProps } from "next/app"
// import { wrapper } from "../store/store"
// import { Provider } from "react-redux"
//
// export default function App({ Component, ...rest }: AppProps) {
//   const { store, props } = wrapper.useWrappedStore(rest)
//   const { pageProps } = props
//
//   return (
//     <Provider store={store}>
//       <Component {...pageProps} />
//     </Provider>
//   )
// }

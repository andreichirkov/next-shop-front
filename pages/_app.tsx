import "../styles/globals.scss"
import type { AppProps } from "next/app"
import { QueryClientProvider, QueryClient, Hydrate } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { useState } from "react"
import { config } from "../lib/react-query-config"

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient(config))

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
        <ReactQueryDevtools />
      </Hydrate>
    </QueryClientProvider>
  )
}

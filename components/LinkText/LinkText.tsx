import ArrowIcon from "./arrow.svg"

interface LinkTextProps {
  url: string
  urlText: string
}

export default function LinkText({ url, urlText }: LinkTextProps): JSX.Element {
  return (
    <a
      href={url}
      className="px-4 link:text-with-arrow uppercase">
      <span>{urlText}</span>
      <ArrowIcon />
    </a>
  )
}

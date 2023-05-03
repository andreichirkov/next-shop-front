import ArrowIcon from "./arrow.svg"

interface LinkTextProps {
  url: string
  urlText: string
}

export default function LinkText({ url, urlText }: LinkTextProps): JSX.Element {
  return (
    <a href={url} className="px-2 h-8 uppercase font-medium link:text-with-arrow">
      <span>{urlText}</span>
      <ArrowIcon className="w-6 h-6" />
    </a>
  )
}

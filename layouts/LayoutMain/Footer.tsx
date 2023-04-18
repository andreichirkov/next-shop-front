import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface FooterProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
    > {}

export const Footer = ({...props}: FooterProps):JSX.Element => {
  return (
    <footer className='bg-neutral-700' {...props}>
      Футер
    </footer>
  )
}
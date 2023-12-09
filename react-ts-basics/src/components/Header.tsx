import { type ReactNode, type FC } from 'react'

interface HeaderProps {
  image: {
    src: string
    alt: string
  }
  children: ReactNode
}

const Header: FC<HeaderProps> = ({ image, children }) => {
  return (
    <section>
      {/* <img src={image.src} alt={image.alt} /> */}
      <img {...image} /> //you can destruct this way. This is a general REACT
      shortcut which will simply take all key value pairs in an object and
      spread them as props, as key value pairs.
      {children}
    </section>
  )
}

export default Header

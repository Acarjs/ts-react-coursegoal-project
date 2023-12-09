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
      <img {...image} /> //you can destruct this way
      {children}
    </section>
  )
}

export default Header

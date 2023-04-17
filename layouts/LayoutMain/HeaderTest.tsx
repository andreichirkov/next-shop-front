import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

export const HeaderTest = props => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const array = [
    { isOpened: false, text: "bla1" },
    { isOpened: false, text: "bla12bla12bla12 bla12bla12bla12bla12bla12" }
  ]
  const [menu, setMenu] = useState(array)

  const variants = {
    expanded: {
      height: "auto",
      backdropFilter: "saturate(0) blur(0)",
      backgroundColor: "rgba(0, 0, 0, 1)",
      transition: {
        // when: "beforeChildren",
        // staggerChildren: 2
        delayChildren: 2
      }
    },
    collapsed: {
      height: 40,
      backdropFilter: "saturate(180%) blur(20px)",
      backgroundColor: "rgba(0, 0, 0, .8)"
      // transition: {
      //   when: "afterChildren"
      // }
    }
  }

  const variantsChildren = {
    expanded: {
      opacity: 1,
      // height: "auto"
      // backgroundColor: "red"
    },
    collapsed: {
      opacity: 0,
      // height: 0
      // backgroundColor: "green"
    }
  }

  const toggle = num => {
    setIsOpen(true)

    if (num === 0) {
      setMenu([
        { isOpened: true, text: "bla1" },
        { isOpened: false, text: "bla12bla12bla12 bla12bla12bla12bla12bla12" }
      ])
    } else {
      setMenu([
        { isOpened: false, text: "bla1" },
        { isOpened: true, text: "bla12bla12bla12 bla12bla12bla12bla12bla12" }
      ])
    }
  }

  const closeMenu = () => {
    setIsOpen(false)
    setMenu([
      { isOpened: false, text: "bla1" },
      { isOpened: false, text: "bla12bla12bla12 bla12bla12bla12bla12bla12" }
    ])
  }

  return (
    <header className="fixed z-1 w-full">
      <motion.nav
        layout
        onMouseLeave={() => closeMenu()}
        className="w-full "
        variants={variants}
        animate={isOpen ? "expanded" : "collapsed"}>


        <div className="container px-container h-10  grid items-center grid-cols-[1fr_220px_1fr]">
          <span className="border border-amber-500" onClick={() => toggle(0)}>
            left
          </span>
          <span className="border border-amber-500">logo</span>
          <span className="border border-amber-500" onClick={() => toggle(999)}>
            right
          </span>
        </div>

      </motion.nav>
    </header>
  )
}

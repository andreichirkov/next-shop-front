import {LayoutGroup, motion} from "framer-motion"
import {useEffect, useState} from "react";

function ToggleContent({ text }) {

  return (
    <motion.div layout >
      <motion.h2 layout>{text}</motion.h2>

    </motion.div>
  )
}

export const HeaderTestAgain = () => {
  const [menu, setMenu] = useState([
    { isOpened: false, text: "bla1" },
    { isOpened: false, text: "bla12bla12bla12 bla12bla12bla12bla12bla12" }
  ])

  useEffect(() => {

  }, [menu])
  
  return (
    <div>
      <div>
        <button>button</button>
      </div>
      <LayoutGroup>
        {menu.map(m => (
          <ToggleContent text={m.text} key={m.text} />
        ))}
      </LayoutGroup>
    </div>
  )
}
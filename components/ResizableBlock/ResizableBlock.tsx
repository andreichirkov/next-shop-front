import useMeasure from "react-use-measure"
import { AnimatePresence, motion, Variants } from "framer-motion"
import { ReactNode } from "react"

interface ResizableBlockProps {
  variants: Variants
  children: ReactNode
  isOpen: boolean
  DURATION: number
}

export function ResizableBlock({
  children,
  variants,
  isOpen,
  DURATION
}: ResizableBlockProps) {
  let [measureElementRef, { height }] = useMeasure()

  const heightAndClipPathVariants = {
    expanded: {
      height,
      // clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      clipPath: "circle(100% at 30px 0px)",
      transition: {
        clipPath: {
          delay: DURATION / 2,
          duration: DURATION * 1.2
        }
      }
    },
    collapsed: {
      height,
      // clipPath: 'polygon(0 0, 0 0, 0 0, 0 0)',
      clipPath: "circle(0% at 30px 0px)"
    }
  }

  return (
    <motion.div
      data-component="ResizableBlock"
      variants={heightAndClipPathVariants}
      initial={"collapsed"}
      animate={isOpen ? "expanded" : "collapsed"}
      transition={{ ease: "anticipate" }}
      className="relative overflow-hidden px-container">
      <AnimatePresence initial={false}>
        <motion.div
          key={JSON.stringify(children, ignoreCircularReferences())}
          variants={variants}
          initial={"collapsed"}
          animate={"expanded"}
          exit={"collapsed"}>
          <div
            ref={measureElementRef}
            className={`${height ? "absolute" : "relative"}`}>
            {children}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}

/*
  Replacer function to JSON.stringify that ignores
  circular references and internal React properties.

  https://github.com/facebook/react/issues/8669#issuecomment-531515508

  It is to use Children as key.
*/
const ignoreCircularReferences = () => {
  const seen = new WeakSet()
  return (key, value) => {
    if (key.startsWith("_")) return // Don't compare React's internal props.
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) return
      seen.add(value)
    }
    return value
  }
}

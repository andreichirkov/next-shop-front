import useMeasure from "react-use-measure"
import {AnimatePresence, motion, Variants} from "framer-motion"
import {ReactNode} from "react";

interface ResizableBlockProps {
  variants: Variants
  children: ReactNode
}

export function ResizableBlock({ children, variants }: ResizableBlockProps) {
  let [measureElementRef, { height }] = useMeasure()

  return (
    <motion.div
      data-component="ResizableBlock"
      animate={{ height: height || 0 }}
      transition={{ ease: 'anticipate' }}
      className="relative overflow-hidden">
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

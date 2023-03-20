import cn from "classnames"

const ModalSmall = ({ children, visible, setVisible }) => {
  return (
    <div
      className={cn(
        "text-white absolute -bottom-12 -left-0 bg-neutral-600 rounded-lg p-2",
        {
          ['hidden']: !visible
        }
      )}
      data-component="ModalSmall">
      {children}
      <div onClick={() => setVisible(false)}>Крестик</div>
    </div>
  )
}

export default ModalSmall

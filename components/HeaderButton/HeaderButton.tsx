import ModalSmall from "../ModalSmall/ModalSmall"
import { useState } from "react"

function HeaderButton({ children }) {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <div className="relative" data-component="HeaderButton">
      <button
        className="relative text-white px-2 h-8 rounded-lg hover:bg-neutral-600 "
        onClick={() => setIsModalVisible(true)}>
        {children}
      </button>
      {/*<ModalSmall visible={isModalVisible} setVisible={setIsModalVisible}>*/}
      {/*  Модалка*/}
      {/*</ModalSmall>*/}
    </div>
  )
}

export default HeaderButton

import React from 'react'
import ReactModal, { Props as ModalProps } from 'react-modal'

const Modal: React.FC<ModalProps> = props => {
  return (
    <ReactModal
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          padding: 0,
          background: 'none',
          border: 'none'
        },

        overlay: {
          backgroundColor: 'rgba(0, 0, 0, .7)'
        }
      }}
      {...props}
    />
  )
}

export { Modal }

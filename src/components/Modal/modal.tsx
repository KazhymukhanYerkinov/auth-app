import classNames from 'classnames';

type PropsType = {
  onCloseModal: () => void
  isOpen: boolean
}

const Modal: React.FC<PropsType> = ({ onCloseModal, isOpen }) => {

  const cls = classNames('modal', {'open': isOpen});

  return (
    <div className = {cls}>
      <div className = 'modal__inner'>

        <div className = 'modal__desc'> Вы действительно хотите выйти? </div>

        <div className = 'modal__footer'>
          <button className = 'button button__cancel' onClick = { onCloseModal }> Нет </button>
          <button className = 'button button__ok'> Да </button>
        </div>
        
      </div>
    </div>
  )
}

export default Modal;
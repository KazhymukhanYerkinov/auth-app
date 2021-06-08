import classNames from 'classnames';

type PropsType = {
  onCloseModal: () => void
  handleLogout: () => void
  isOpen: boolean
}

const Modal: React.FC<PropsType> = ({ onCloseModal, isOpen, handleLogout }) => {

  const cls = classNames('modal', {'open': isOpen});

  return (
    <div className = {cls}>
      <div className = 'modal__inner'>

        <div className = 'modal__desc'> Вы действительно хотите выйти? </div>

        <div className = 'modal__footer'>
          <button className = 'button button__cancel' onClick = { onCloseModal }> Нет </button>
          <button className = 'button button__ok' onClick = { handleLogout }> Да </button>
        </div>
        
      </div>
    </div>
  )
}

export default Modal;
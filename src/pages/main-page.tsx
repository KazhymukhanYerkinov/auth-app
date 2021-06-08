import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { compose } from 'redux';
import { Modal } from "../components";
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { logout } from '../redux/auth-reducer';
import { selectEmail, selectUsername } from '../selectors/auth-selector';


const MainPage = () => {


  const dispatch = useDispatch();
  const email = useSelector(selectEmail);
  const username = useSelector(selectUsername);


  const [isOpen, setIsOpen] = React.useState(false);

  const onOpenModal = () => {
    setIsOpen(true);
  }

  const onCloseModal = () => {
    setIsOpen(false)
  }

  const handleLogout = () => {
    onCloseModal();
    dispatch(logout());
  }

  return (
    <div className='main'>
      <div className='main__inner'>
        <div className='main__title'> Welcome to Main Page </div>
        <div className='main__title'> {email}, {username} </div>
        <button className='button button__logout' onClick={onOpenModal}> logout </button>

        <Modal
          isOpen={isOpen}
          onCloseModal={onCloseModal} 
          handleLogout={handleLogout} 
        />
      </div>
    </div>
  )
}

export default compose<React.ComponentType>(
  withAuthRedirect,
)(MainPage);


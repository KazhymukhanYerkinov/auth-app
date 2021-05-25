import React from 'react';
import { Modal } from "../components";



const MainPage = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const onOpenModal = () => {
        setIsOpen(true);
    }

    const onCloseModal = () => {
        setIsOpen(false)
    }

    return (
        <div className = 'main'>
            <div className = 'main__inner'>
                <div className = 'main__title'> Welcome to Main Page </div>
                <button className = 'button button__logout' onClick = { onOpenModal }> logout </button>

                <Modal onCloseModal = { onCloseModal } isOpen = { isOpen }/>
            </div>
        </div>
    )
}

export default MainPage;


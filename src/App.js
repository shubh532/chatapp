import SignUp from './Components/Authentications/SignUp';
import { useSelector } from 'react-redux';
import ChatApp from './Components/Chat/FullPage';
import Modal from './UI Components/Modal';
import AddGroupUser from './Components/Chat/AddGroupUser';

function App() {

  const isAuthorizes = useSelector(state => state.Authentication.isAuthorized)
  const showModal = useSelector(state => state.Modal.showModal)
  console.log(isAuthorizes, "authorization")

  return (
    <div className='h-[44rem]'>
      {isAuthorizes ?
        <ChatApp /> :
        <SignUp />}
      {showModal && <Modal><AddGroupUser /></Modal>}

    </div>
  );
}

export default App;

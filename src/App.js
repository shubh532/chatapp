import SignUp from './Components/Authentications/SignUp';
import { useSelector } from 'react-redux';
import ChatApp from './Components/Chat/FullPage';

function App() {

  const isAuthorizes = useSelector(state => state.Authentication.isAuthorized)
  console.log(isAuthorizes, "authorization")

  return (
    <div className='h-[44.7rem]'>
      {isAuthorizes ?
        <ChatApp /> :
        <SignUp />}

    </div>
  );
}

export default App;

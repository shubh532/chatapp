import SignUp from './Components/Authentications/SignUp';
import Home from './Components/Chat/Home';
import { useSelector } from 'react-redux';
import ChatApp from './Components/Chat/FullPage';

function App() {

  // const isAuthorizes = useSelector(state => state.Authentication.isAuthorized)
  // console.log(isAuthorizes, "authorization")

  return (
    <div className='h-[44.7rem]'>
      {/* {isAuthorizes ?
        <Home /> :
        <SignUp />} */}
      <ChatApp />
    </div>
  );
}

export default App;

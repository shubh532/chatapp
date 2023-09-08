import SignUp from './Components/Authentications/SignUp';
import Home from './Components/Chat/Home';
import { useSelector } from 'react-redux';

function App() {

  const isAuthorizes = useSelector(state => state.Authentication.isAuthorized)
  console.log(isAuthorizes, "authorization")

  return (
    <div className='h-[44.7rem]'>
      {isAuthorizes ?
        <Home /> :
        <SignUp />}
    </div>
  );
}

export default App;

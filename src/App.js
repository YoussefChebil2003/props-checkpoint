import './App.css';
import Profile from './components/profile/Profile';
import profilePicture from './assets/img/Youssef Chebil photo.jpg'

function App() {
  let bio = "A hardworking engineering student and a learning FullStack Developer at GoMyCode"
  let name="Youssef Chebil"
  function alertName(){alert(name)}
  return (
    <div className="App">
      <Profile name={name} profession="Student" bio={bio} alertName={alertName}>{profilePicture}</Profile>
    </div>
  );
}

export default App;

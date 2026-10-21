import Header from './components/Header';
import Footer from "./components/Footer";
import Greeting from './components/Greeting';
import ProfileCard from './components/ProfileCard';
import './App.css';
import CounterApp from './components/CounterApp';
import UserForm from './components/UserForm';

function App() {

  const profiles = [
    {
      name: "Arjun Kumar",
      role: "Frontend Developer",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Sneha Verma",
      role: "UI/UX Designer",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  ];

  return (
    // <div>
    //   <h1>Welcome to My First React App!</h1>
    //   <h2>My name is Naved Joya</h2>
    //   <Hello />
    //   <h1>My React Project</h1>
    //   <p>
    //     I am a BCA student learning
    //     MERN Stack Development.
    //   </p>
    //   <p>This app is built using React.</p>
    // </div>
  //  <div className="App">
  //     <h1>My React Project</h1>
  //     <Hello />
  //     <p>I am learning MERN Stack Development.</p>
  //     <button onClick={() => alert('Hello Naved!')}>
  //       Click Me
  //     </button>
  //   </div>
     <div>
      <Header />

      <main style={{ padding: "20px" }}>
        <h2>Welcome to My React App!</h2>
        <p>This is my first modular React layout.</p>

        <hr />

        <h2>Task 2: Greetings with Props</h2>
        <Greeting
          name="Priya"
          topic="React Components"
        />
        <Greeting
          name="Rohan"
          topic="JSX & Props"
        />

        <hr />

        <h2>Task 3: Profile Cards</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          {profiles.map((profile) => (
            <ProfileCard
              key={profile.name}
              name={profile.name}
              role={profile.role}
              image={profile.image}
            />
          ))}
      
        </div>

        <hr />

        <h2>Task 1: Counter App</h2>
        <CounterApp />

        <hr />

        <h2>Task 2: User Registration Form</h2>
        <UserForm />

      </main>

      <Footer />
      </div>
  
  );
  }
  export default App;

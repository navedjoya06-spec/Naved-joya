
import React, { useEffect, useState } from "react";
import "./App.css";

// DAY 1: Basic component
function Hello() {
  return (
    <div className="demo-card">
      <span className="tag">DAY 1</span>
      <h3>Hello, React! 👋</h3>
      <p>This is my first React component.</p>
    </div>
  );
}

// DAY 2: Header and Footer
function Header() {
  return (
    <header className="top-header">
      <div className="brand-mark">NJ</div>
      <div>
        <h2>Naved Joya</h2>
        <p>React Learning Lab</p>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Naved Joya · Built with React</p>
    </footer>
  );
}

// DAY 2: Props and reusable components
function Greeting({ name, topic }) {
  return (
    <div className="demo-card">
      <h3>Hello, {name}!</h3>
      <p>You are learning {topic} today.</p>
    </div>
  );
}

function ProfileCard({ name, role, initials }) {
  return (
    <div className="profile-card">
      <div className="avatar">{initials}</div>
      <h3>{name}</h3>
      <p>{role}</p>
      <span className="profile-status">React learner</span>
    </div>
  );
}

// DAY 3: Counter using useState
function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div className="demo-card">
      <h3>Counter App</h3>
      <p className="counter-number">{count}</p>
      <div className="button-row">
        <button className="btn btn-secondary" onClick={() => setCount(count - 1)}>
          − Decrease
        </button>
        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
          + Increase
        </button>
        <button className="btn btn-light" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
      <p className="muted">The number updates using useState.</p>
    </div>
  );
}

// DAY 3: Registration form with live preview
function UserForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    course: "React",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="two-column">
      <form className="demo-card form-card" onSubmit={handleSubmit}>
        <h3>Student Registration</h3>
        <label htmlFor="student-name">Full name</label>
        <input
          id="student-name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <label htmlFor="student-email">Email address</label>
        <input
          id="student-email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          required
        />

        <label htmlFor="student-course">Course</label>
        <select
          id="student-course"
          name="course"
          value={form.course}
          onChange={handleChange}
        >
          <option>React</option>
          <option>JavaScript</option>
          <option>HTML & CSS</option>
          <option>Node.js</option>
        </select>

        <button className="btn btn-primary" type="submit">
          Register Student
        </button>
        {submitted && (
          <p className="success-message">Registration preview submitted!</p>
        )}
      </form>

      <div className="demo-card preview-card">
        <span className="tag">LIVE PREVIEW</span>
        <h3>{form.name || "Your name"}</h3>
        <p>{form.email || "Your email will appear here"}</p>
        <div className="course-pill">{form.course}</div>
        <p className="muted">
          Changes in the form appear here automatically.
        </p>
      </div>
    </div>
  );
}

// DAY 3: Event handling and state
function StatePlayground() {
  const [message, setMessage] = useState("Click a button to change this message.");
  const [theme, setTheme] = useState("mint");

  return (
    <div className={`demo-card playground ${theme}`}>
      <h3>Event Handling Playground</h3>
      <p>{message}</p>
      <div className="button-row">
        <button
          className="btn btn-primary"
          onClick={() => setMessage("Great job! Button clicked successfully.")}
        >
          Say Hello
        </button>
        <button
          className="btn btn-light"
          onClick={() => setMessage("React events are working!")}
        >
          Change Message
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => setTheme(theme === "mint" ? "lavender" : "mint")}
        >
          Change Style
        </button>
      </div>
    </div>
  );
}

// DAY 4: Fetch users API with useEffect
function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchUsers() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Could not load users.");
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError("Users load nahi hue. Internet check karke refresh karein.");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
    return () => controller.abort();
  }, []);

  if (loading) return <div className="demo-card">Loading users...</div>;
  if (error) return <div className="demo-card error-message">{error}</div>;

  return (
    <div className="api-grid">
      {users.map((user) => (
        <div className="api-card" key={user.id}>
          <div className="avatar">{user.name.charAt(0)}</div>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p className="muted">{user.company.name}</p>
          <a href={`mailto:${user.email}`}>Contact user ↗</a>
        </div>
      ))}
    </div>
  );
}

// DAY 4: Fetch posts API with useEffect
function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function fetchPosts() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );

        if (!response.ok) {
          throw new Error("Could not load posts.");
        }

        const data = await response.json();
        if (active) setPosts(data);
      } catch {
        if (active) setError("Posts load nahi hue. Internet check karein.");
      } finally {
        if (active) setLoading(false);
      }
    }

    fetchPosts();
    return () => {
      active = false;
    };
  }, []);

  if (loading) return <div className="demo-card">Loading posts...</div>;
  if (error) return <div className="demo-card error-message">{error}</div>;

  return (
    <div className="posts-list">
      {posts.map((post) => (
        <article className="post-card" key={post.id}>
          <span className="post-number">
            POST {String(post.id).padStart(2, "0")}
          </span>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </article>
      ))}
    </div>
  );
}

// DAY 5: Login form and conditional welcome
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");

  function handleLogin(event) {
    event.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("Please fill in both fields.");
      return;
    }

    setError("");
    setLoggedIn(true);
  }

  function handleLogout() {
    setLoggedIn(false);
    setPassword("");
  }

  if (loggedIn) {
    return (
      <div className="demo-card welcome-card">
        <div className="welcome-icon">✓</div>
        <h3>Welcome back!</h3>
        <p>You are signed in locally as <strong>{email}</strong>.</p>
        <p className="muted">
          This is a learning demo; it does not connect to a real account.
        </p>
        <button className="btn btn-secondary" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    );
  }

  return (
    <form className="demo-card form-card login-card" onSubmit={handleLogin}>
      <div className="login-symbol">NJ</div>
      <h3>Welcome back</h3>
      <p className="muted">Enter any email and password to test the demo.</p>

      <label htmlFor="login-email">Email address</label>
      <input
        id="login-email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="you@example.com"
        required
      />

      <label htmlFor="login-password">Password</label>
      <input
        id="login-password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Enter password"
        required
      />

      {error && <p className="error-message">{error}</p>}
      <button className="btn btn-primary full-width" type="submit">
        Login →
      </button>
    </form>
  );
}

// DAY 5: Parent-child event handling
function ChildButton({ onAction }) {
  return (
    <button className="btn btn-primary" onClick={onAction}>
      Send message to parent
    </button>
  );
}

function ParentChildDemo() {
  const [message, setMessage] = useState("Waiting for child component...");

  return (
    <div className="demo-card">
      <h3>Parent & Child Components</h3>
      <p>{message}</p>
      <ChildButton
        onAction={() => setMessage("Message received from the child component!")}
      />
    </div>
  );
}

const navItems = [
  { id: "overview", label: "Overview", number: "00" },
  { id: "day1", label: "Day 1 · Basics", number: "01" },
  { id: "day2", label: "Day 2 · Props", number: "02" },
  { id: "day3", label: "Day 3 · State", number: "03" },
  { id: "day4", label: "Day 4 · API", number: "04" },
  { id: "day5", label: "Day 5 · Events", number: "05" },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState("overview");

  function renderContent() {
    switch (activeTab) {
      case "day1":
        return (
          <>
            <SectionHeading
              eyebrow="DAY 01 / FOUNDATIONS"
              title="React Basics"
              description="Start with reusable components and your first React UI."
            />
            <Hello />
          </>
        );

      case "day2":
        return (
          <>
            <SectionHeading
              eyebrow="DAY 02 / COMPONENTS"
              title="Props & Layout"
              description="Pass data into reusable components and build a consistent layout."
            />
            <div className="demo-card">
              <h3>Greetings with Props</h3>
              <div className="two-column">
                <Greeting name="Priya" topic="React Components" />
                <Greeting name="Rohan" topic="JSX & Props" />
              </div>
            </div>
            <h3 className="subheading">Student Profile Cards</h3>
            <div className="profile-grid">
              <ProfileCard name="Arjun Kumar" role="Frontend Developer" initials="AK" />
              <ProfileCard name="Sneha Verma" role="UI Designer" initials="SV" />
              <ProfileCard name="Naved Joya" role="BCA Student" initials="NJ" />
            </div>
          </>
        );

      case "day3":
        return (
          <>
            <SectionHeading
              eyebrow="DAY 03 / INTERACTIVITY"
              title="State & Forms"
              description="Use useState to update the UI when users interact with it."
            />
            <CounterApp />
            <h3 className="subheading">Registration with Live Preview</h3>
            <UserForm />
            <h3 className="subheading">Dynamic State Playground</h3>
            <StatePlayground />
          </>
        );

      case "day4":
        return (
          <>
            <SectionHeading
              eyebrow="DAY 04 / USEEFFECT"
              title="Working with APIs"
              description="Fetch remote data, show loading states, and handle errors."
            />
            <h3 className="subheading">Users API</h3>
            <UserList />
            <h3 className="subheading">Posts API · First 10 posts</h3>
            <Posts />
          </>
        );

      case "day5":
        return (
          <>
            <SectionHeading
              eyebrow="DAY 05 / EVENTS"
              title="Login & Events"
              description="Practice form events, conditional rendering, and child-to-parent events."
            />
            <LoginForm />
            <h3 className="subheading">Parent and Child</h3>
            <ParentChildDemo />
          </>
        );

      default:
        return (
          <>
            <section className="hero">
              <div className="hero-copy">
                <span className="hero-label">
                  <span className="status-dot" /> WEEK 03 · PRACTICAL WORK
                </span>
                <h1>Learn React.<br /><em>Build something real.</em></h1>
                <p>
                  Five days of hands-on practice, from your first component
                  to API integration and interactive forms.
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => setActiveTab("day1")}
                >
                  Start learning <span>→</span>
                </button>
              </div>
              <div className="hero-art">
                <div className="orbit orbit-one" />
                <div className="orbit orbit-two" />
                <div className="react-symbol">⚛</div>
                <div className="float-card float-top">{"<Component />"}</div>
                <div className="float-card float-bottom">useState · useEffect</div>
                <span className="art-caption">BUILD · TEST · LEARN</span>
              </div>
            </section>

            <div className="stats-grid">
              <div className="stat-card">
                <span>Learning days</span><strong>05</strong><small>One project</small>
              </div>
              <div className="stat-card">
                <span>Core concepts</span><strong>08+</strong><small>React fundamentals</small>
              </div>
              <div className="stat-card">
                <span>Practice demos</span><strong>10+</strong><small>Interactive examples</small>
              </div>
            </div>

            <SectionHeading
              eyebrow="YOUR LEARNING PATH"
              title="Explore the five days"
              description="Select any day to open its tasks and try the working demos."
            />
            <div className="day-grid">
              {[
                { id: "day1", num: "01", title: "React Basics", desc: "Components and JSX", icon: "✳" },
                { id: "day2", num: "02", title: "Props & Layout", desc: "Reusable UI and props", icon: "▦" },
                { id: "day3", num: "03", title: "State & Forms", desc: "Counter and form inputs", icon: "↗" },
                { id: "day4", num: "04", title: "API Integration", desc: "Fetch users and posts", icon: "⌘" },
                { id: "day5", num: "05", title: "Events & Login", desc: "Events and conditional UI", icon: "◎" },
              ].map((day) => (
                <button
                  className="day-card"
                  key={day.id}
                  onClick={() => setActiveTab(day.id)}
                >
                  <div className="day-card-top">
                    <span className="day-icon">{day.icon}</span>
                    <span className="day-number">{day.num}</span>
                  </div>
                  <h3>{day.title}</h3>
                  <p>{day.desc}</p>
                  <span className="card-link">Open lesson ↗</span>
                </button>
              ))}
            </div>

            <div className="note-banner">
              <div className="note-icon">✦</div>
              <div>
                <h3>Practice makes progress</h3>
                <p>Try every button, submit the forms, and explore each day to understand the concepts.</p>
              </div>
            </div>
          </>
        );
    }
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="brand-mark">NJ</div>
          <div>
            <strong>NAVED JOYA</strong>
            <span>REACT LEARNING LAB</span>
          </div>
        </div>

        <div className="sidebar-label">WORKSPACE</div>
        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeTab === item.id ? "active" : ""}`}
              onClick={() => setActiveTab(item.id)}
            >
              <span className="nav-number">{item.number}</span>
              <span>{item.label}</span>
              {activeTab === item.id && <span className="nav-arrow">↗</span>}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="mini-profile">
            <div className="avatar avatar-small">NJ</div>
            <div><strong>Naved Joya</strong><span>BCA · React learner</span></div>
          </div>
          <div className="sidebar-version">WEEK 03 <span>•</span> VERSION 1.0</div>
        </div>
      </aside>

      <main className="main-area">
        <div className="main-topbar">
          <div className="breadcrumb">Workspace <span>/</span> <strong>{navItems.find((item) => item.id === activeTab)?.label || "Overview"}</strong></div>
          <div className="topbar-right"><span className="live-dot" /> Learning mode <span className="topbar-avatar">NJ</span></div>
        </div>
        <div className="content-area">
          {renderContent()}
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;






// import "./App.css";
// import CounterApp from "./components/CounterApp.js";
// import Footer from "./components/Footer.js";
// import Greeting from "./components/Greeting.js";
// import Header from "./components/Header.js";
// import LoginForm from "./components/LoginForm.js";
// import Posts from "./components/Posts.js";
// import ProfileCard from "./components/ProfileCard.js";
// import UserForm from "./components/UserForm.js";
// import UserList from "./components/UserList.js";
// import Welcome from "./components/Welcome.js";
// import TitleChanger from "./components/TitleChanger.js";
// import EffectCounter from "./components/EffectCounter.js";
// import Timer from "./components/Timer.js";

// const profiles = [
//   {
//     id: 1,
//     name: "Arjun Kumar",
//     role: "Frontend Developer",
//     image: "https://randomuser.me/api/portraits/men/32.jpg",
//   },
//   {
//     id: 2,
//     name: "Sneha Verma",
//     role: "UI/UX Designer",
//     image: "https://randomuser.me/api/portraits/women/44.jpg",
//   },
// ];

// function TaskSection({ day, task, title, children }) {
//   return (
//     <section className="task-section" aria-labelledby={`${day}-task-${task}`}>
//       <p className="task-label">{day} · Task {task}</p>
//       <h2 id={`${day}-task-${task}`}>{title}</h2>
//       {children}
//     </section>
//   );
// }

// function App() {
//   return (
//     <div className="app-shell">
//       <Header />

//       <main className="page-content">
//         <Welcome />

//         <section className="day-heading" id="day-2">
//           <p>Week 3</p>
//           <h2>Day 2: JSX & Components</h2>
//         </section>

//         <TaskSection day="Day 2" task="1" title="Custom Header & Footer">
//           <p>Header aur Footer reusable components hain aur poore portfolio ko wrap karte hain.</p>
//         </TaskSection>

//         <TaskSection day="Day 2" task="2" title="Greetings with Props">
//           <div className="greeting-grid">
//             <Greeting name="Priya" topic="React Components" />
//             <Greeting name="Rohan" topic="JSX & Props" />
//           </div>
//         </TaskSection>

//         <TaskSection day="Day 2" task="3" title="Profile Cards">
//           <div className="profile-grid">
//             {profiles.map((profile) => (
//               <ProfileCard key={profile.id} {...profile} />
//             ))}
//           </div>
//         </TaskSection>

//         <section className="day-heading" id="day-3">
//           <p>Week 3</p>
//           <h2>Day 3: State & useState</h2>
//         </section>

//         <TaskSection day="Day 3" task="1" title="Counter App">
//           <CounterApp />
//         </TaskSection>

//         <TaskSection day="Day 3" task="2" title="Dynamic Registration Form">
//           <UserForm />
//         </TaskSection>

//         <section className="day-heading" id="day-4">
//           <p>Week 3</p>
//           <h2>Day 4: useEffect Hook</h2>
//         </section>

//         <TaskSection day="Day 4" task="1" title="Fetch User Data">
//           <UserList />
//         </TaskSection>

//         <TaskSection day="Day 4" task="2" title="Display Posts Dynamically">
//           <Posts />
//         </TaskSection>

//         <section className="day-heading" id="day-5">
//           <p>Week 3</p>
//           <h2>Day 5: Events & Conditional Rendering</h2>
//         </section>

//         <TaskSection day="Day 5" task="1" title="Login Form UI">
//           <LoginForm />
//         </TaskSection>

//         <TaskSection day="Day 5" task="2" title="Conditional Welcome Message">
//           <p>Login karte hi form hide ho jaata hai aur welcome message show hota hai.</p>
//         </TaskSection>
//       </main>

//       <Footer />
//     </div>
//   );
// }

// export default App;




// // // import Header from './components/Header';
// // // import Footer from "./components/Footer";
// // // import Greeting from './components/Greeting';
// // // import ProfileCard from './components/ProfileCard';
// // // import './App.css';
// // // import CounterApp from './components/CounterApp';
// // // import UserForm from './components/UserForm';

// // // function App() {

// // //   const profiles = [
// // //     {
// // //       name: "Arjun Kumar",
// // //       role: "Frontend Developer",
// // //       image: "https://randomuser.me/api/portraits/men/32.jpg"
// // //     },
// // //     {
// // //       name: "Sneha Verma",
// // //       role: "UI/UX Designer",
// // //       image: "https://randomuser.me/api/portraits/women/44.jpg"
// // //     }
// // //   ];

// // //   return (
// // //     // <div>
// // //     //   <h1>Welcome to My First React App!</h1>
// // //     //   <h2>My name is Naved Joya</h2>
// // //     //   <Hello />
// // //     //   <h1>My React Project</h1>
// // //     //   <p>
// // //     //     I am a BCA student learning
// // //     //     MERN Stack Development.
// // //     //   </p>
// // //     //   <p>This app is built using React.</p>
// // //     // </div>
// // //   //  <div className="App">
// // //   //     <h1>My React Project</h1>
// // //   //     <Hello />
// // //   //     <p>I am learning MERN Stack Development.</p>
// // //   //     <button onClick={() => alert('Hello Naved!')}>
// // //   //       Click Me
// // //   //     </button>
// // //   //   </div>
// // //      <div>
// // //       <Header />

// // //       <main style={{ padding: "20px" }}>
// // //         <h2>Welcome to My React App!</h2>
// // //         <p>This is my first modular React layout.</p>

// // //         <hr />

// // //         <h2>Task 2: Greetings with Props</h2>
// // //         <Greeting
// // //           name="Priya"
// // //           topic="React Components"
// // //         />
// // //         <Greeting
// // //           name="Rohan"
// // //           topic="JSX & Props"
// // //         />

// // //         <hr />

// // //         <h2>Task 3: Profile Cards</h2>
// // //         <div
// // //           style={{
// // //             display: "flex",
// // //             flexWrap: "wrap",
// // //             justifyContent: "center"
// // //           }}
// // //         >
// // //           {profiles.map((profile) => (
// // //             <ProfileCard
// // //               key={profile.name}
// // //               name={profile.name}
// // //               role={profile.role}
// // //               image={profile.image}
// // //             />
// // //           ))}
      
// // //         </div>

// // //         <hr />

// // //         <h2>Task 1: Counter App</h2>
// // //         <CounterApp />

// // //         <hr />

// // //         <h2>Task 2: User Registration Form</h2>
// // //         <UserForm />

// // //       </main>

// // //       <Footer />
// // //       </div>
  
// // //   );
// // //   }
// // //   export default App;

// // // import TitleChanger from "./components/TitleChanger";
// // // import EffectCounter from "./components/EffectCounter";
// // // import UserList from "./components/UserList";
// // // import Posts from "./components/Posts";
// // // import Timer from "./components/Timer";

// // // function App() {
// // //   return (
// // //     <div>
// // //       <h1>Week 3 - Day 4: React useEffect Tasks</h1>

// // //       <TitleChanger />
// // //       <hr />

// // //       <EffectCounter />
// // //       <hr />

// // //       <UserList />
// // //       <hr />

// // //       <Posts />
// // //       <hr />

// // //       <Timer />
// // //     </div>
// // //   );
// // // }

// // // export default App;
// // import "./App.css";
// // import CounterApp from "./components/CounterApp.js";
// // import Footer from "./components/Footer.js";
// // import Greeting from "./components/Greeting.js";
// // import Header from "./components/Header.js";
// // import LoginForm from "./components/LoginForm.js";
// // import Posts from "./components/Posts.js";
// // import ProfileCard from "./components/ProfileCard.js";
// // import UserForm from "./components/UserForm.js";
// // import UserList from "./components/UserList.js";
// // import Welcome from "./components/Welcome.js";

// // const profiles = [
// //   {
// //     id: 1,
// //     name: "Arjun Kumar",
// //     role: "Frontend Developer",
// //     image: "https://randomuser.me/api/portraits/men/32.jpg",
// //   },
// //   {
// //     id: 2,
// //     name: "Sneha Verma",
// //     role: "UI/UX Designer",
// //     image: "https://randomuser.me/api/portraits/women/44.jpg",
// //   },
// // ];

// // function TaskSection({ day, task, title, children }) {
// //   return (
// //     <section className="task-section" aria-labelledby={`${day}-task-${task}`}>
// //       <p className="task-label">{day} · Task {task}</p>
// //       <h2 id={`${day}-task-${task}`}>{title}</h2>
// //       {children}
// //     </section>
// //   );
// // }

// // function App() {
// //   return (
// //     <div className="app-shell">
// //       <Header />

// //       <main className="page-content">
// //         <Welcome />

// //         <section className="day-heading" id="day-2">
// //           <p>Week 3</p>
// //           <h2>Day 2: JSX & Components</h2>
// //         </section>

// //         <TaskSection day="Day 2" task="1" title="Custom Header & Footer">
// //           <p>Header aur Footer reusable components hain aur poore portfolio ko wrap karte hain.</p>
// //         </TaskSection>

// //         <TaskSection day="Day 2" task="2" title="Greetings with Props">
// //           <div className="greeting-grid">
// //             <Greeting name="Priya" topic="React Components" />
// //             <Greeting name="Rohan" topic="JSX & Props" />
// //           </div>
// //         </TaskSection>

// //         <TaskSection day="Day 2" task="3" title="Profile Cards">
// //           <div className="profile-grid">
// //             {profiles.map((profile) => (
// //               <ProfileCard key={profile.id} {...profile} />
// //             ))}
// //           </div>
// //         </TaskSection>

// //         <section className="day-heading" id="day-3">
// //           <p>Week 3</p>
// //           <h2>Day 3: State & useState</h2>
// //         </section>

// //         <TaskSection day="Day 3" task="1" title="Counter App">
// //           <CounterApp />
// //         </TaskSection>

// //         <TaskSection day="Day 3" task="2" title="Dynamic Registration Form">
// //           <UserForm />
// //         </TaskSection>

// //         <section className="day-heading" id="day-4">
// //           <p>Week 3</p>
// //           <h2>Day 4: useEffect Hook</h2>
// //         </section>

// //         <TaskSection day="Day 4" task="1" title="Fetch User Data">
// //           <UserList />
// //         </TaskSection>

// //         <TaskSection day="Day 4" task="2" title="Display Posts Dynamically">
// //           <Posts />
// //         </TaskSection>

// //         <section className="day-heading" id="day-5">
// //           <p>Week 3</p>
// //           <h2>Day 5: Events & Conditional Rendering</h2>
// //         </section>

// //         <TaskSection day="Day 5" task="1" title="Login Form UI">
// //           <LoginForm />
// //         </TaskSection>

// //         <TaskSection day="Day 5" task="2" title="Conditional Welcome Message">
// //           <p>Login karte hi form hide ho jaata hai aur welcome message show hota hai.</p>
// //         </TaskSection>
// //       </main>

// //       <Footer />
// //     </div>
// //   );
// // }

// // export default App;







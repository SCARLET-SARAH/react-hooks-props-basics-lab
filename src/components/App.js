import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

const user = {
  name: 'Liza',
  bio: 'I am a web developer',
  github: 'https://github.com/liza',
  linkedin: 'https://www.linkedin.com/in/liza/'
};

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} />
      <About bio={user.bio} github={user.github} linkedin={user.linkedin}  />
    </div>
  );
}

export default App;

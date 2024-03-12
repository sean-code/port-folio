import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/navbar/NavBar";
import { Home } from "./components/landing/Home";
import { Skills } from "./components/skills/Skills";
import { Languages } from "./components/languages/Languages";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import Project from './components/projects/Projects';
import { About } from './components/about/About';
import { useState } from 'react';
import ChatWindow  from './components/chatWindow/chatWindow';

const App = () => {

  const [showChat, setShowChat] = useState(false);
  const toggleChat = () => setShowChat(!showChat);


  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Languages />
      <Project />
      <Contact />
      <Footer />


      <div className="chat-icon" onClick={toggleChat}>
        <img src="https://storage.googleapis.com/quickchat-files/appquickchat/media/chat_avatars/custom_widget_9cletrxgr8_bd2ba647.gif" 
          alt="Chat Icon"
          />
      </div>
      <ChatWindow showChat={showChat} toggleChat={toggleChat} />
    </div>
  );
}

export default App;

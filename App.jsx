import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <UserProfile name="Davies" age={27} bio="Front-end Developer" />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;

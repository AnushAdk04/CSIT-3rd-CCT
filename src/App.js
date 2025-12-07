import Card from "./Card";
import ColorBox from "./ColorBox";
import Counter from "./Counter";
import Footer from "./Footer";
import Header from "./Header";
import ListItem from "./ListItem";
import Student from "./Student";

function App() {
  return (
    <>
    <ColorBox/>
    <Counter/>
    <Header/>
    <ListItem/>
    <Card/>
    <Student name="Ram" age={30} isStudent="true"/>
    <Footer/>
    </>
  );
}

export default App;

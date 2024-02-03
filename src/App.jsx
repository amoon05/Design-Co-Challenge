import styles from "./App.module.css"
import { Navbar } from "./Parts/Navbar/Navbar";
import { Body } from "./Parts/Body/Body";
import { Footer } from "./Parts/Footer/Footer";

function App() {

  return ( 
    <div className={styles.App}>
      <Navbar />
      <Body />
      <Footer />
    </div>
  )
}

export default App
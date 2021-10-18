import DropArea from "./components/DropArea/DropArea"
import "./styles.scss"

function App() {
  return (
    <div className="App">
      <section className="content">
        <h3>Image Converter</h3>
        <div className="input-container">
          <DropArea />
        </div>
      </section>
    </div>
  )
}

export default App

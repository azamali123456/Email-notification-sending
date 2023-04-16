import "./App.css";
import Main from "./components/main";
import Swal from "sweetalert2";
function App() {
  // Swal.fire({
  //   icon: "success",
  //   title: "Yay...",
  //   text: "You have successfully added a new task!",
  // });

  return (
    <div class="container-fluid">
      <div className="main">
        <Main />
      </div>
    </div>
  );
}
export default App;

import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/sidebar";


export default function App(){
  return(
    <div className="flex ">
<Sidebar />
<Main/>
    </div>
  )
}
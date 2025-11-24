import Card from "./components/card";
import team from './components/team'

function App() {
  return (
    <div className="flex gap-2 flex-wrap m-2 justify-center items-center">
      {team.map((member) => (
        <Card name={member.name}
        
         role={member.role} 
         about={member.about} />
      ))}
    </div>
  );
}

export default App;

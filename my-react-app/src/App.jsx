import Student from './Student.jsx';
function App() {
  return (
    <>
      <Student name="SpongeBob" age={30} isStudent={true}/>
      <Student name="Sandy" age={10} isStudent={false}/>
      <Student name="Patrick"/>
    </>
    
  );
  
}

export default App

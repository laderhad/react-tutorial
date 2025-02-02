import List from './List.jsx';

function App() {
  const fruits= [
    {id: 1, name: "Apple", calories: 95},
    {id: 2, name: "Banana", calories: 105},
    {id: 3, name: "Orange", calories: 62},
    {id: 4, name: "Grapes", calories: 62}

  ];
  const vegetables= [
    {id: 5, name: "Carrot", calories: 41},
    {id: 6, name: "Broccoli", calories: 55},
    {id: 7, name: "Cabbage", calories: 22},
    {id: 8, name: "Spinach", calories: 23}
  ];
  return (
    <>
      {fruits.length>0 && <List category="Fruits" items={fruits} />}
      {vegetables.length>0 && <List category="Vegetables" items={vegetables} />}
    </>
  );
  
}

export default App

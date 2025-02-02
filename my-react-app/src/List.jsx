function List() {
    const fruits = [{id:1,name:'Apple',calories:95},
                    {id:2,name:'Banana',calories:105},
                    {id:3,name:'Orange',calories:62},
                    {id:4,name:'Mango',calories:202},
                    {id:5,name:'Pineapple',calories:452}];
    // fruits.sort((a,b)=>a.name.localeCompare(b.name));//alphabetical order
    //fruits.sort((a,b)=>b.name.localeCompare(a.name));//reverse alphabetical order
    fruits.sort((a,b)=>a.calories-b.calories);//numeric order
    const lowCalFruits=fruits.filter(fruit=>fruit.calories<100);
    // const listItems=fruits.map(fruit=><li key={fruit.id}>
    //     {fruit.name}:&nbsp;
    //     <b>{fruit.calories}</b></li>);
    const listItems=lowCalFruits.map(lowCalFruit=><li key={lowCalFruit.id}>
        {lowCalFruit.name}:&nbsp;
        <b>{lowCalFruit.calories}</b></li>);
    return (<ol>{listItems}</ol>);

}
export default List;
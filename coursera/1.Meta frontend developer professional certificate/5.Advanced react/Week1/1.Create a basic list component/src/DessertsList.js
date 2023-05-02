function DessertsList(props) {
  // Implement the component here.

  const lowCalorie = props.data.filter(dessert => dessert.calories < 500)
    .sort((a, b) => a.calories - b.calories)
    .map(dessert => <li>{dessert.name} - {dessert.calories} cal</li>);
  
  return <ul>{lowCalorie}</ul>;
}

export default DessertsList;

const App = () => (
 <div>
 	<h2>My Grocery List</h2>
 	<GroceryList groceryItems={['Milk', 'Eggs']}/>

 </div>

);

class GroceryListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			done: false
		};
	}
	onListItemClick () {
		this.setState({
			done: !this.state.done
		});
	}
	render() {
		var style = {
			textDecoration: this.state.done ? 'line-through' : 'none'
		};
		return (
		<li style = {style} onClick={this.onListItemClick.bind(this)}> {this.props.item} </li>
		)
	}
}

const GroceryList = (props) => (
  	<ul>
		{ props.groceryItems.map( item => <GroceryListItem item={item} /> )}
	</ul>
)



ReactDOM.render(<App />, document.querySelector("#app"));


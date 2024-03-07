import { Component } from "react";
import User from "./User";
import classes from "./Users.module.css";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];
class Users extends Component {
  // NO HOOKS IN CLASS BASED COMPONENTS.
  // Instead you use constructor.
  constructor() {
    super();
    // State MUST be an object.
    // SINGLE State
    this.state = {
      showUsers: true,
    };
  }
  toggleUsersHandler() {
    // setState() => this.state change value function.
    // No needs to overwrite the state (...prevState).
    /* this.setState({showUsers: true});*/
    // Could also be a callBack function
    this.setState((currState) => {
      return {
        showUsers: !currState.showUsers,
      };
    });
  }
  render() {
    const usersList = (
      <ul>
        {DUMMY_USERS.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
/*  const [showUsers, setShowUsers] = useState(true);
  const toggleUsersHandler = () => {
    setShowUsers((curState) => !curState);
  }; */
/* const usersList = (
    <ul>
      {DUMMY_USERS.map((user) => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  ); */
/*  return (
    <div className={classes.users}>
      <button onClick={toggleUsersHandler}>
        {showUsers ? 'Hide' : 'Show'} Users
      </button>
      {showUsers && usersList}
    </div>
  ); */
// };

export default Users;

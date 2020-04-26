import React from 'react'
import './styles/MemoR.css'

function UserInfoNormal(props) {
  const { name, avatar } = props;
  console.log("NORMAL COMPONENT RENDERING");
  return (
    <div className="user-info">
      <img src={avatar} alt={`${name}'s avatar`} />
      <span>{name}</span>
    </div>
  );
}

const UserInfoMemo = React.memo(props => {
  const { name, avatar } = props;
  console.log("MEMO COMPONENT RENDERING");

  return (
    <div className="user-info">
      <img src={avatar} alt={`${name}'s avatar`} />
      <span>{name}</span>
    </div>
  );
});

class MemoR extends React.Component {
  state = {
    search: ""
  };

  render() {
    return (
      <div className="App">
        <h1 />
        <div>
          <input
            type="text"
            onChange={e => this.setState({ search: e.target.value })}
            value={this.state.search}
            placeholder="Search"
          />
        </div>
        <UserInfoNormal
          name="Normal User"
          avatar="https://via.placeholder.com/75x75"
        />
        <UserInfoMemo
          name="Memo User"
          avatar="https://via.placeholder.com/75x75"
        />
      </div>
    );
  }
}
export default MemoR
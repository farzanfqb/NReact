import React from "react";
class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
    };
    console.log("profileConstructor");
  }
  async componentDidMount() {
    setTimeout(() => console.log("profile ComponentDidMount"), 1000);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      console.log("profile ComponentDidUpdate");
    }
  }
  render() {
    console.log("profileClassRender");
    const { count, count2 } = this.state;

    return <><h1>ProfileClassComponent count2 is {count2}</h1>
      <button onClick={() => {
        this.setState({ count: count + 1 });
      }}>hit me</button>
      <h2>{count}</h2></>
  }
}
export default ProfileClass;

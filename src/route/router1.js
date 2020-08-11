import React from 'react'
// import C from "./importComponent";
class Route1 extends React.Component{
  constructor(props){
    super(props)
    this.state={
      C:null
    }
  }
  componentDidMount(){
    import("./importComponent").then(res=>{
      this.setState({
        C:res.default
      })
    })
  }
  render(){
    let C = this.state.C
    return (
      <div>
      {C?
      <C></C>:"route1"}
      {/* <C /> */}
      route1
    </div>
    )
  }
}
export default Route1
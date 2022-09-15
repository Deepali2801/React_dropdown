import React from "react";

class SelectItem extends  React.Component{
    constructor(){
        super();
    
        this.state={
            value:0,
          

 array:[{name:"Yes",value:1},{name:"Probably not",value:2}]       }
    }
   handleChange = ( event ) => {
console.log(event.target.value);
this.setState({value:event.target.value})
  };

render(){
  
    return(
       <div
        className="color_background">
          <h1 className="select_class">Should you use a dropdown ?</h1>
         <select
        className="select_class"
        onChange={this.handleChange}
        onMouseOver={this.handleChange}
        value={this.state.value}
        id="variation-select"
      >
        <option className="select_option" value={0}>Select</option>;
    {this.state.array.map((itm, ind) => {
            return (
              <option key={ind} value={itm.value}>
                {itm.name}
              </option>
            );
          })}
      </select>
   
       </div>
    );    
}
}

export default SelectItem;
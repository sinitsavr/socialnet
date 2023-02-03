import React from 'react';

class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status:this.props.status
  }
  activateEditMode= ()=>{
    // debugger;
    // console.log('this', this);
    this.setState({editMode: true})
    this.props.updateStatus()
  }
  deActivateEditMode (){
    this.setState({editMode: false})
    this.props.updateStatus(this.state.status)
  }
  onStatusChange = (e)=>{
    this.setState({
      status: e.currentTarget.value
    })
    
  }
  render()
  {
  return (
    <div>
      {!this.state.editMode && 
        <div>
      <span onDoubleClick={this.activateEditMode}>{this.props.status || "noStatus"}</span>
    </div>
    }
    {this.state.editMode &&
    <div>
      <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateEditMode} value={this.state.status}/>
    </div>
    }
    </div>
  )}
}

export default ProfileStatus;

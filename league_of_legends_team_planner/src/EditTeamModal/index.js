import React from 'react';
import Selection from '../Selection';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class EditTeamModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  handleChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    this.toggle();
    let newTeam = await fetch('http://localhost:3001/team/'+this.props.team._id,{
      method: 'PUT',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': "application/json"
      }
    })
    let newTeamParsed = await newTeam.json();
    this.props.updateTeam(newTeamParsed);
  }
  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>Edit Team</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <form onSubmit={this.handleSubmit}>
            <input type="text" name="name" placeholder="Team Name" onChange={this.handleChange}></input>
            <input type="submit" value="Edit Team!"></input>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default EditTeamModal;

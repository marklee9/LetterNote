import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import CreateNotebookContainer from '../notebooks/create_notebook_container';
import NotebookIndexContainer from '../notebooks/index/notebooks_index_container';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.modal) {
      return null;
    }
    
    let component;
    switch (this.props.modal) {
			case "createNotebook":
				component = <CreateNotebookContainer />;
				break;
			case "notebookIndex":
        component = <NotebookIndexContainer />;
				break;
			default:
				return null;
		}

    if (this.props.modal === 'createNotebook') {
      return (
      <div className="fade-modal-background" onClick={this.props.closeModal}>
        <div className="fade-modal-child" onClick={e => e.stopPropagation()}>
          {component}
        </div>
      </div>
      );
    }

    if (this.props.modal === 'notebookIndex') {
      return (
        <div className="slide-modal-background" onClick={this.props.closeModal}>
          <div className="slide-modal-child" onClick={e => e.stopPropagation()}>
            {component}
          </div>
        </div>
      );
    }
  } 
}

const msp = state => ({
  modal: state.ui.modal
});

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(Modal);
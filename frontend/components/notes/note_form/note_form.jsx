import ReactQuill from "react-quill";
import React from 'react';
import { debounce } from 'lodash';

class NoteForm extends React.Component {
	constructor(props) {
    super(props);
    this.state = { name: "" };

		if (this.props.form === 'new') {
      this.state = { title: "", body: "" };
    } 
    else if (!this.props.form) {
      this.state = { title: "", body: "" };
    } else {
			this.state = this.props.note;
    }
   
		this.handleChangeBody = this.handleChangeBody.bind(this);
		this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.actionNote = this.actionNote.bind(this);
    this.handleTagSubmit = this.handleTagSubmit.bind(this);
    this.handleTagNameChange = this.handleTagNameChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.workingNote !== nextProps.workingNote) {
      return this.setState(nextProps.note);
    }
  }
  
	handleChangeBody(value) {
		this.setState({ body: value }, debounce(this.actionNote, 1000));
	}

	handleChangeTitle(e) {
    this.setState({ title: e.target.value }, 
      debounce(this.actionNote, 1000));
	}

	actionNote() {
    this.state.notebook_id = this.props.currentNotebookId;
		if (this.props.workingNote) {
			return this.props.updateNote(this.state);
    } else {
      this.props.createNote(this.state);
		}
  }

  openModal(field) {
    return (e) => {
      e.preventDefault();
      this.props.openModal(field);
    };
  }

  openModal2(field) {
    return (e) => {
      e.preventDefault();
      if (this.props.currentNotebookId) {
        this.props.createNote({
          title: 'New Note',
          body: '',
          notebook_id: this.props.currentNotebookId
        }).then(() => {
          let noteId = Math.max(...Object.keys(this.props.allNotes));
          this.props.fetchWorkingNote(this.props.allNotes[noteId]);
        });
      } else { 
        this.props.openModal(field);
      }
    };
  }

  getNotebookTitle() {
    let notebook = Object.values(this.props.notebooks).filter((notebook) => notebook.id === this.props.note.notebook_id)[0];
    return <div className="notebook-section">
        <div className="notebook-img"></div>
        <div className="notebook-title">
          <span><strong>{notebook.title}</strong></span>
        </div>
			</div>;
  }

  renderTags() {
    let notesTagging = Object.values(this.props.taggings).filter((tagging) => tagging.note_id === this.props.note.id);
    let allTags = [];
    notesTagging.forEach((tagging) => {
      allTags.push(this.props.tags[tagging.tag_id]);
    });
    let tags = allTags.map((tag) => {
      if (tag) {
        return <div className="tags">
            <span className="current-tag">
              {tag.name}
            </span>
          </div>
        }
      }
    );

    return <div className="notebook-section">
      <div className="tag-img"></div>
      <div className="notebook-title">
        {tags}
        <div>
          {this.addTags()}
        </div>
      </div>
    </div>;
  }

  addTags() {
    return <form className="tag-form" onSubmit={this.handleTagSubmit}>
      <input onChange={this.handleTagNameChange} value={this.state.name} className="tag-form-input" type="text" maxlength="30" placeholder="+" />
    </form>;
  }

  handleTagSubmit(e) {
    e.preventDefault();
    let tagsArray = Object.values(this.props.tags);
    let tagId;

    // if tag name already exist, only create tagging.
    if (tagsArray.some((tag) => tag.name === this.state.name)) {
      tagsArray.forEach((tag) => {
        if (tag.name === this.state.name) { tagId = tag.id; }
      }); 
      this.props.createTagging({
          tag_id: tagId,
          note_id: this.props.workingNote
        });
    // if tag name doesn't exist, create tag and tagging.
    } else {
      this.props.createTag({
        name: this.state.name,
        user_id: this.props.currentUserId
      }).then(() => {
        this.props.tags.forEach((tag) => {
          if (tag.name === this.state.name) {tagId = tag.id;}
        });
        this.props.createTagging({
          tag_id: tagId,
          note_id: this.props.workingNote
        });
      });
    }

    this.setState({name: ""});
  }

  handleTagNameChange(e) {
    this.setState({ name: e.target.value });
  }

  renderDelete() {
    return <div className="notebook-section">
				<div onClick={this.openModal("deleteNote")} className="notebook-trash"></div>
			</div>;
  }
  
	render() {
    if (this.props.workingNote) {
      return (
        <div className="quill-outer-container">
          <div className="quill-container">
            <div className="tool-container">
              {this.renderDelete()}
              <div>
                {this.getNotebookTitle()}
                {this.renderTags()}
              </div>
            </div>
            <input
              value={this.state.title}
              onChange={this.handleChangeTitle}
              className="note-title"
              type="text"
              placeholder="Title your note"
              autofocus
            />
            <ReactQuill
              value={this.state.body}
              onChange={this.handleChangeBody}
            />
          </div>
        </div>
      );
    }

    if (Object.keys(this.props.allNotes).length === 0) {
      return (
        <div className="quill-outer-container">
          <div className="quill-select-notebook">
            <h1>You don't have any notebooks</h1>
            <div className='linebreak'></div>
              <button className='create' onClick={this.openModal("createNotebook")} />
            <h1>Click to create notebook</h1>
          </div>
        </div>
      );
    } else if (this.props.currentNotebookId) {
      return <div className="quill-outer-container">
        <div className="quill-select-notebook">
          <h1>Create a new note by pressing the button</h1>
          <div className='linebreak'></div>
          <button className='open' onClick={this.openModal2("notebookIndex")} />
        </div>
      </div>;
    } else if (!this.props.form && !this.props.currentNotebookId) {
      return (
        <div className="quill-outer-container">
          <div className="quill-select-notebook">
            <h1>Pick your notebook and Create a new note</h1>
            <div className='linebreak'></div>
            <button className='open2' onClick={this.openModal2("notebookIndex")} />
          </div>
        </div>
      );
    }
	}
}

export default NoteForm;
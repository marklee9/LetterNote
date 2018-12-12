import ReactQuill from "react-quill";
import React from 'react';
import { debounce } from 'lodash';
import NoteTag from './note_tag';
import Promise from 'promise';

class NoteForm extends React.Component {
	constructor(props) {
    super(props);
    this.state = { name: "", expanded:false };

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
    this.expandButton = this.expandButton.bind(this);
    this.expandNote = this.expandNote.bind(this);
  }

  componendDidMount() {
    this.props.fetchTags();
    this.props.fetchAllTaggings();
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
    let notebook = Object.values(this.props.notebooks).filter((nb) => nb.id === this.props.note.notebook_id)[0];
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

    // Getting all the taggings associated with current note.
    notesTagging.forEach((tagging) => {
      allTags.push(this.props.tags[tagging.tag_id]);
    });

    let tags = allTags.map((tag) => {
      if (tag) {
        // finding tagging.id
        let taggingId = notesTagging.filter((tagging) => tagging.tag_id === tag.id)[0].id;
        let { fetchTags, fetchAllTaggings, deleteTagging} = this.props;

        return <NoteTag taggingId={taggingId} fetchTags={fetchTags} update={fetchAllTaggings} deleteTagging={deleteTagging} tagName={tag.name}></NoteTag>;
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
      <input onChange={this.handleTagNameChange} value={this.state.name} className="tag-form-input" type="text" maxlength="30" placeholder=" +" />
    </form>;
  }

  handleTagSubmit(e) {
    e.preventDefault();
    let tagsArray = Object.values(this.props.tags);
    let tag_id;

    // if tag name already exist, only create tagging.
    console.log(tagsArray);
    for (let i = 0; i < tagsArray.length; i++) {
      let tag = tagsArray[i];
        if (tag.name === this.state.name) {
          tag_id = tag.id;
          this.props.createTagging({
            tag_id,
            note_id: this.props.workingNote
          }).then(() => this.props.fetchTags());
          this.setState({name: ""});
          return;
      }
    }
    
    // if tag name doesn't exist, create tag and tagging.
      this.props.createTag({
        name: this.state.name,
      }).then((action) => {
        this.props.createTagging({
          tag_id: action.tag.id,
          note_id: this.props.workingNote
        });
      }).then(() => this.props.fetchTags());

      this.setState({name: ""});

    
  }

  handleTagNameChange(e) {
    this.setState({ name: e.target.value });
  }

  renderDelete() {
    return <div className="notebook-section top-div">
				<div onClick={this.openModal("deleteNote")} className="notebook-trash"></div>
			</div>;
  }

  expandNote() {
    this.setState({expanded: !this.state.expanded});
    let noteList = document.querySelector(".note-list-id");
    let sideBar = document.querySelector(".sidebar-div");
    let quill = document.querySelector(".quill-outer-container");

    // Giving sliding effects
    if (this.state.expanded) {
      noteList.classList.remove("move-left");
      sideBar.classList.remove("move-left");
      noteList.classList.add("move-right");
      sideBar.classList.add("move-right");
      quill.classList.remove("expand");
    } else {
      quill.classList.add("expand");
      noteList.classList.remove("move-right");
      sideBar.classList.remove("move-right");
      noteList.classList.add("move-left");
      sideBar.classList.add("move-left");
    }
  }

  expandButton() {
    if (this.state.expanded) {
      return <div className="expand-p" onClick={this.expandNote}>
        <div className="done">Done</div>
      </div>;
    } else {
      return  <div className="expand-button" onClick={this.expandNote}>
              <div className="expand-button-button" />			      
            </div>;
    }
  }
  
	render() {
    if (this.props.workingNote) {
      return (
        <div className="quill-outer-container">
          <div className="quill-container">
            <div className="tool-container">
              <div className="tool-container-top">
                {this.renderDelete()}
                {this.expandButton()}
              </div>
            </div>
            <div className ="inputting-div">
              <div className="title-and-tag-container">
                {this.getNotebookTitle()}
                {this.renderTags()}
              </div>
              <input value={this.state.title} onChange={this.handleChangeTitle} className="note-title" 
                type="text" placeholder="Title your note" autofocus />
              <ReactQuill modules={modules} value={this.state.body} onChange={this.handleChangeBody} />
            </div>
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

const toolBarOpts = [
	[{ font: [] }],
	[{ size: ["small", false, "large", "huge"] }],
	["bold", "italic", "underline", "strike"], 
	[{ color: [] }, { background: [] }], 
	["blockquote", "code-block"],
	[{ align: [] }],
	[{ list: "ordered" }, { list: "bullet" }],
	[{ script: "sub" }, { script: "super" }],
	["clean"],
	["link", "image", "video", "formula"]
];

const modules = {
	toolbar: toolBarOpts
};

export default NoteForm;
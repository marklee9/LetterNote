import React from "react";
import TagsIndexItem from './tags_index_item';

class TagsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: this.props.tags
    };
  }

  openModal(field) {
    return (e) => {
      e.preventDefault();
      this.props.openModal(field);
    };
  }

  renderCreateTagMessage() {
    if (this.props.tags === undefined || this.props.tags.length < 3) {
      return <div className='modal-empty-notebook'>
        <div className='modal-empty-tag-big-img'></div>

        <div className='modal-empty-notebook-content'>
          <h4>Click <div className='modal-empty-tag-img' /> to create a tag</h4>
          <p>Tag notes to find them easily. Try tagging with a project name.</p>
        </div>
      </div>;
    }
  }

  organizeTags(obj, ch) {
    let result = obj[ch].map((fl) => {
      return <TagsIndexItem props={this.props} openNoteBar={this.props.openTagNoteBar} tag={fl} fetchCurrentTag={this.props.fetchCurrentTag} closeModal={this.props.closeModal} tagId={fl.id} tagName={fl.name} count={fl.noteIds.length} updateTag={this.props.updateTag} deleteTag={this.props.deleteTag} />;
    });
    return result;
  }

  render() {
    // organizing tags by first letter
    let firstLetters = {};
    let firstLettersArray = [];
    
		this.props.tags.forEach(tag => {
			let firstLetter = tag.name[0].toLowerCase();
			if (!firstLetters[firstLetter]) {
				firstLetters[firstLetter] = [tag];
				firstLettersArray.push(firstLetter);
			} else {
				firstLetters[firstLetter].push(tag);
			}
    });
    
    let organizedTags = firstLettersArray.sort().map((ch) => {
      return <div className="first-letter-div">
        <div className="first-letter">{ch.toUpperCase()}</div>
          {this.organizeTags(firstLetters, ch)}
				</div>;
    });

    return <div className="modal-notebook-index">
				<div className="modal-notebook-notebook">
					<div className="modal-notebook-notebook-title">
						<p>Tags</p>
						<button onClick={this.openModal("createTag")} className="create-tag-img" />
					</div>
				</div>
        <div className="tag-index-list">
          {organizedTags}
          {this.renderCreateTagMessage()}
        </div>
			</div>;
  }
}

export default TagsIndex;
import React from "react";
import TagsIndexItem from './tags_index_item';

class TagsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: this.props.tags,
      firstLetters: {},
      firstLettersArray: [],
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
          <h4>Click <div className='modal-empty-img' /> to create a tag</h4>
          <p>Tag notes to find them easily. Try tagging with a project name.</p>
        </div>
      </div>;
    }
  }

  componentWillMount() {
    let firstLetters = {};
    let firstLettersArray = [];
    this.props.tags.forEach((tag) => {
      let firstLetter = tag.name[0].toLowerCase();
      if (!firstLetters[firstLetter]) {
        firstLetters[firstLetter] = [tag.name];
        firstLettersArray.push(firstLetter);
      } else {
        firstLetters[firstLetter].push(tag.name);
      }
    });
    this.setState({firstLetters, firstLettersArray});
  }

  organizeTags(ch) {
    let result = this.state.firstLetters[ch].map((fl) => {
      return <TagsIndexItem tagName={fl} count={this.state.firstLetters[ch].length} updateTag={this.props.updateTag} deleteTag={this.props.deleteTag} />;
    });
    return result;
  }

  render() {
    let organizedTags = this.state.firstLettersArray.sort().map((ch) => {
      return <div className="first-letter-div">
        <div className="first-letter">{ch.toUpperCase()}</div>
          {this.organizeTags(ch)}
				</div>;
    });

    return <div className="modal-notebook-index">
				<div className="modal-notebook-notebook">
					<div className="modal-notebook-notebook-title">
						<p>Tags</p>
						<button onClick={this.openModal("createTag")} className="create-notebook-img" />
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
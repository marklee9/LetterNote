import React from "react";
import TagsIndexItem from './tags_index_item';

class TagsIndex extends React.Component {
  constructor(props) {
    super(props);
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

  render() {
    let index = this.props.tags.map((tag) =>
      <TagsIndexItem props={this.props} key={tag.id} tag={tag}></ TagsIndexItem>
    );
    if (index.length === 0) {
      index = <div className="notebook-index-empty">
        <button onClick={this.openModal("createNotebook")} />
        <h1>Make your first Tag!</h1>
      </div>;
    }

    return <div className="modal-notebook-index">
				<div className="modal-notebook-notebook">
					<div className="modal-notebook-notebook-title">
						<p>Tags</p>
						<button onClick={this.openModal("createTag")} className="create-notebook-img" />
					</div>
				</div>
				<div className="all-notebook-list">{index}</div>
				{this.renderCreateTagMessage()}
			</div>;
  }
}

export default TagsIndex;
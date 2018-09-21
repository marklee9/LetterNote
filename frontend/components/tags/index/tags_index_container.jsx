import { connect } from "react-redux";
import { createTag, updateTag, deleteTag, } from "../../../actions/tags_actions";
import TagsIndex from './tags_index';
import { selectTags } from '../../../reducers/selector';

const msp = (state) => ({
  tags: selectTags(state),
  errors: state.errors.tags
});


const mdp = dispatch => ({
  createTag: tag => dispatch(createTag(tag)),
  updateTag: tag => dispatch(updateTag(tag)),
  deleteTag: id => dispatch(deleteTag(id)),
});

export default connect(msp, mdp)(TagsIndex);
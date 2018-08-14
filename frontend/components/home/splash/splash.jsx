import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
constructor(props) {
  super(props);
}
  render() {
    return <div className="splash-container">
				<div className="splash-div">
					<div className="splash-img-div">
						<img className="splash-img" src="https://evernote.com/c/assets/marketing/home/benefit-1.png" />
					</div>
					<div className="splash-content">
						<h1>Remember Everything</h1>
						<p>
							Organize your work and declutter your life. Collect everything
							that matters in one place and find it when you need it, fast.
						</p>
						<div className="signup-link" onClick={this.props.props.removeSessionErrors}>
							<Link to={"/signup"}>
								<span>Create your free account</span>
							</Link>
						</div>
					</div>
				</div>
				<div className="splash-div">
					<div className="splash-content">
						<h1>Work Smarter</h1>
						<p>
							Enhance your notes with links, checklists, tables,
							attachments, and audio recordings. Even handwritten notes are
							searchable.
						</p>
						<div className="signup-link" onClick={this.props.props.removeSessionErrors}>
							<Link to={"/signup"}>
								<span>Create your free account</span>
							</Link>
						</div>
					</div>
					<div className="splash-img-div">
						<img className="splash-img" src="https://evernote.com/c/assets/marketing/home/benefit-2.png" />
					</div>
				</div>
				<div className="splash-div">
					<div className="splash-img-div">
						<img className="splash-img" src="https://evernote.com/c/assets/marketing/home/benefit-3.png" />
					</div>
					<div className="splash-content">
						<h1>Bring It All Together</h1>
						<p>
							Organized teams get more done. From initial brainstorm to
							finished project, make Evernote your team hub and find
							productivity bliss.
						</p>
						<div className="signup-link" onClick={this.props.props.removeSessionErrors}>
							<Link to={"/signup"}>
								<span>Create your free account</span>
							</Link>
						</div>
					</div>
				</div>
			</div>;
  }
}

export default Splash;
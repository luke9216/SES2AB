import React from 'react';
import ReactDOM from 'react-dom';
import './Message.css';
import {Editor}  from "react-draft-wysiwyg";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class Message extends React.Component {
   render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
      return (
    	  <div>
				<div className="forum-header">
					<label className="forum-header-header"> Create message </label>
					<br />
					<label className="forum-header-additional"> In a messag you can create a message </label>
				</div>

    	  		<fieldset className="fs-thread-description">
    	  			<legend>FORUM DESCRIPTION</legend>
    	  			<textarea/>
    	  		</fieldset>

    	  		<fieldset className="fs-thread-message">
		  			<legend>MESSAGE</legend>
		  			<div className="div-thread-subject">
			  			<label>Subject</label>
			  			<input type="text"></input>
		  			</div>
		  			
		  			<div className="div-thread-message">
		  				<label>Message</label>
		  				<br />
	  					<Editor
		  				  toolbarClassName="toolbarClassName"
		  				  wrapperClassName="wrapperClassName"
		  				  editorClassName="editorClassName"
		  				/>		  			
		  			</div>
  				</fieldset>
  				
    	  		<fieldset className="fs-thread-attachments">
		  			<legend>ATTACHMENTS</legend>
		  			<div className="div-thread-subject">
		  				<label>Attach File</label>
		  				<button className="btn-attach-file">Browse my Computer</button>
	  			</div>
	  			</fieldset>
	  		

    	  </div>
       )
   }
}

export default Message


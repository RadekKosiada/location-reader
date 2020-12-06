import React from 'react';

function DropFile(props) {

	return (
		<div className = 'drop-container'>
			<div className="drop-zone" onDragOver={props.handleDragOver} onDrop={props.handleFileSelect}>
				<p>Drop JSON file here</p>
			</div>		
		</div>
	);
}

export default DropFile;
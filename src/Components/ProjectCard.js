import React from 'react'

const ProjectCard = () => {
  return (
	<div className='ProjectCard'>
		<h4 className='project-card-title'>Emotify</h4>
		<p className='project-card-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati natus at soluta rerum, illo maiores ratione accusantium hic! Accusantium rerum iusto id sed error porro et veniam hic? Perferendis, nam.</p>
		<ul className='project-card-tags'>
			<li className='project-card-tag'>Python</li>
			<li className='project-card-tag'>Flask</li>
			<li className='project-card-tag'>Numpy</li>
			<li className='project-card-tag'>Pandas</li>
			<li className='project-card-tag'>OpenCV</li>
			<li className='project-card-tag'>React.js</li>
		</ul>
	</div>
  )
}

export default ProjectCard
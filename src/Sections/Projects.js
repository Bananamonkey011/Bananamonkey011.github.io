import React from 'react'
import ProjectCard from '../Components/ProjectCard'

const Projects = () => {
  return (
	<div className='Projects'>
		<h2 className='projects-title'>Projects</h2>
		<ul className='projects'>
			<ProjectCard />
			<div />
			<div />
			<ProjectCard />
			<ProjectCard />
			<div />
			<div />
			<ProjectCard />
		</ul>
	</div>
  )
}

export default Projects
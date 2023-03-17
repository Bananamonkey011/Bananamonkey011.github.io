import React from 'react'
import { SlSocialInstagram, SlSocialLinkedin, SlSocialGithub } from "react-icons/sl";
import { AiOutlineMail, AiOutlinePhone} from "react-icons/ai";

const Contact = () => {
  return (
	<div className='Contact'>
		<h2 className="contact-title">Contact</h2>
		<div className="contact-content">
			<AiOutlineMail/>		
			<AiOutlinePhone/>		
			<SlSocialGithub/>		
			<SlSocialLinkedin/>		
			<SlSocialInstagram/>		
		</div>
		
	</div>
  )
}

export default Contact
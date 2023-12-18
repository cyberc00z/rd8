import React, {useState, useEffect} from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import {graphql} from "gatsby"
import './style.css';

// add music
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import retroMusic from "../../content/assets/sm.mp3";
import {faPlay, faPause} from "@fortawesome/free-solid-svg-icons";



const Index = ({data, location}) => {
	const siteTitle = data.site.siteMetadata?.title || `Title`;
        
        const [isPlaying, setIsPlaying] = useState(false)
        
        const audioRef = React.createRef();
        useEffect(() => {
           const audioElement = audioRef.current;
           if (isPlaying){
           audioElement.play()
           } else {
              audioElement.pause();
           }
       });
	
	
	return (
		<Layout location={location} title={siteTitle}>
		  <SEO title="RD8" />
		  
          <div className="about_page">
		    <h4>Welcome to rd8 complex, my home, my website. I'm living in SV'80 0XMS lunar city, Moon, and Build rd8 complex on Mars base as well.
        </h4>
			<br />
			<h4>I write <a className="mail_banner" href="/blog"> poem and tell fortunes
      </a>
      </h4>
			<br />
			<div className="personal__info">
			<p> Contact :  </p>
			</div>
			
		<p>
		   1. Code : <a href="https://github.com/xadhrit/">Github</a>
		   <br />
		   2. <a href="https://x.com/xadhrit/">Twitter</a> 
		   <br />
		   3. <a href="https://instagram.com/xadhrit/">Instagram</a>
           <br />
		   4. <a href="mailto:adhirt77@gmail.com">adhirt77@gmail.com</a>
       </p>
		<div className="musicControls">
		   <img src="https://t2.genius.com/unsafe/252x252/https%3A%2F%2Fimages.genius.com%2Ff89691712e7b01c1ac87b185c1efa724.1000x1000x1.jpg" alt="retro" />
		    <div className="playbar">
                <button className={isPlaying ? "Playing" : ""} onClick={() => setIsPlaying(!isPlaying)}>
                   <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                </button>
            <audio ref={audioRef}>
               <source src={retroMusic} type="audio/mp3" />
            </audio>
            <p>Namstatue</p>
        </div>
		   
		    </div>
		  </div>		  
		  
		</Layout>
	)

}

export default Index;

export const pageQuery = graphql`
  query {
	  site{
		  siteMetadata {
			  title
		  }
	  }
  }
`

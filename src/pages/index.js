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
		    <h4>Welcome to rd8 complex, my home, my website. 
				<br />
			</h4>
			<p>Your Location : SV'80 lunar city, Moon.</p>
			
			<br />
			<h4>I write <a className="mail_banner" href="/blog"> poem and tell fortunes
      </a>
      </h4>
			<br />
			<div className="personal__info">
			
			</div>
			<p>
       1. <a href="https://github.com/xadhrit/">Github</a>
         <br />  

       2. <a href="https://www.amazon.in/VOID-Adhrit-ebook/dp/B0B5HNGZM3">Books</a>
         <br />

       3. <a href="https://opensea.io/adhrit">NFTs</a> 
          <br />

       4. <a href="https://www.youtube.com/@xadhrit">Youtube</a>    
          
       <br />

    
       5. <a href="https://x.com/xadhrit/">Twitter/X</a> 
		      <br/>

		   6. <a href="https://instagram.com/xadhrit/">Instagram</a>
           <br/>

		   7. <a href="mailto:adhirt77@gmail.com">adhirt77@gmail.com</a>
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

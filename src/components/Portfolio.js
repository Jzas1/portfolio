import React, { Component } from 'react';
import img1 from '../img/git-find-img.png'
import img2 from '../img/screenshot.png'
import img3 from '../img/recipe.png'

class Portfolio extends Component {''
  render() {


        return (
            <section id="works">
                <div className="work-grid-container">
            <div className="work-grid">
            
            <div className="work-item">
            <a href="https://jz-ecom.herokuapp.com/" title="Jz-ecom">
                <img src={img1} /></a>
                    <h1>Github Finder</h1>
                    <p>This is a github finder I build with React using the git hub API</p>
               
                </div>


                
                <div className="work-item">
            <a href="https://github-finder-jz.herokuapp.com"
            title="Jz-ecom">
            <img src={img2} />
            </a>
                        <h1>E-commerce Store</h1>
                    <p>Mock E-commerce store that I made using React, Redux and FireBase</p>
                    
                </div>

                <div className="work-item">
            <a href="https://jzas1.github.io/recipe-ideas/"
            title="Jz-ecom">
            <img src={img3} />
            </a>
                        <h1>Recipe Generator</h1>
                    <p>An early site that I built using vanilla JavaScipt</p>
                    
                </div>
            </div>
          
            </div>
        </section>
    
        )
        }
}

export default Portfolio;
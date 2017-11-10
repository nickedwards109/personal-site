import React, { Component } from 'react';
import cncRouterImage from './img/cnc-router.jpg';
import cncElectronicsImage from './img/cnc-electronics.jpg';
import toolPath from './img/toolpath.jpg';
import makingClamps from './img/making-clamps.jpg';
import fiveSTrainingHomepageUI from './img/five-s-training-homepage.jpg';
import fiveSTrainingLoginUI from './img/five-s-training-login.jpg';
import efficiencyImprovements from './img/efficiency-improvements.jpg';
import turbineBucketCadModel from './img/turbine-bucket-cad-model.jpg';
import turbine from './img/turbine.jpg';
import nozzles from './img/nozzles.jpg';
import openFarmInitialUI from './img/open-farm-initial-ui.jpg';
import openFarmNewUI from './img/open-farm-new-ui.jpg';
import unAuthorizedClientUI from './img/unauthorized-client-ui.jpg';
import authorizedClientUI from './img/authorized-client-ui.jpg';

class Projects extends Component {
  render () {
    return (
      <div>
        <h3>CNC Router Build</h3>
        <p>This is a CNC router that I built and customized. I had to dismantle before using it very much, but it was a fabulous learning experience.</p>
        <img src={cncRouterImage} alt="CNC Router" className="full-size" />
        <p>I based the design on the open-source<a href="https://www.shapeoko.com/wiki/">Shapeoko</a>design, but I wanted to build a stronger machine that could work with harder materials. So, I selected higher torque stepper motors, higher voltage motor driver circuits, and an AC/DC transformer to transform household AC into to DC for the stepper motors.</p>
        <img src={cncElectronicsImage} alt="CNC Electronics" className="full-size" />
        <p>It was challenging to connect the entire system so that the Arduino controller could interpret a CNC program and send corresponding signals to each of the X/Y/Z stepper motors, and so that the motor driver circuit would supply DC power to the stepper motor upon that signal. After a lot of troubleshooting, I got it working and was able to make some workholding clamps!</p>
        <div className="content-divider"></div>
        <h3>CNC Programming for Workholding Clamps</h3>
        <p>In this project, I used the Ruby programming language to develop a CNC program generator. Through a command-line interface, a user can create a CNC program which can be used to machine a clamp for milling workholding applications. The dimensions of the clamp can be customized by the user, allowing custom toolpaths for making custom clamps.</p>
        <img src={toolPath} alt="Clamp-making CNC Toolpath" className="full-size" />
        <p>After a lot of troubleshooting and learning, I got the program to work reliably and I made a few clamps!</p>
        <img src={makingClamps} alt="Making a workholding clamp" className="full-size" />
        <p>The Ruby source code is available at: <a href="https://github.com/nickedwards109/Clamp-Miller">https://github.com/nickedwards109/Clamp-Miller</a></p>
        <div className="content-divider"></div>
        <h3>Pico-Hydropower Turbine Optimization</h3>
        <p>This was my undergraduate capstone project, where I had the pleasure of working on a 3-person team to re-design a rural hydropower system for optimized power output. Our final design increased the efficiency of the turbine design by over 100%!</p>
        <img src={efficiencyImprovements} alt="Turbine Efficiency Improvement Chart" className="full-size" />
        <p>We used techniques including CAD modeling, 3-D Printing, polycarbonate casting, and machining to quickly create prototype components.</p>
        <img src={turbineBucketCadModel} alt="Turbine Bucket CAD Model" className="full-size" />
        <img src={turbine} alt="Turbine" className="full-size" />
        <img src={nozzles} alt="Turbine" className="full-size" />
        <p>Through an iterative process of research, design, manufacturing, and testing, we worked as a team to significantly and measurably improve the power output efficiency of the system. This project was an excellent technical teamwork exercise.</p>
        <p>For our efforts, we received the annual Special Faculty Award for Engineering and Service to Humanity!</p>
        <div className="content-divider"></div>
        <h3>5S Training Application</h3>
        <p>This is a simple web application for training users in 5S, a workspace organization methodology that originated in the Japanese automotive manufacturing industry as a part of Lean Manufacturing practices. Users can sign up by providing an email and password. The application authenticates users securely, using cryptography to ensure the secrecy of a user's password.</p>
        <img src={fiveSTrainingLoginUI} alt="Five S Training Login Page" className={"border full-size"}/>
        <p>A user can read lessons which provide some background and detail on 5S.</p>
        <p>The application keeps track of a user's progress as they complete lessons and learn.</p>
        <img src={fiveSTrainingHomepageUI} alt="Five S Training Home Page" className={"border full-size"}/>
        <p>I developed this application using modern web technologies including Ruby, Rails, SQL, HTML, and CSS. I followed modern software engineering practices like Test-Driven Development and version control with Git.</p>
        <p>The application is deployed at:<a href='https://five-s-training.herokuapp.com/'>https://five-s-training.herokuapp.com/</a></p>
        <p>The source code can be found at:<a href='https://github.com/nickedwards109/Five-S-Training'>https://github.com/nickedwards109/Five-S-Training</a></p>
        <div className="content-divider"></div>
        <h3>Secret Message Client / Server</h3>
        <p>I wanted to explore cryptography and how to communicate securely over an insecure network, so I developed a setup for authenticated and encrypted HTTP between a client and a server.</p>
        <p>A major challenge in this project was standardizing the format of the output from Ruby and JavaScript cryptography libraries. I took the chance to research and use the Ruby 'OpenSSL' library and the Node 'crypto' library, and I researched how to encode bytes in different number base systems in order to create an encryption and decryption scheme that was interoperable between Ruby and JavaScript. I eventually was able to use those libraries to test and implement SHA-256 digital signatures in the HTTP request and response, as well as Advanced Encryption Standard encryption of the response data and decryption on the client-side.</p>
        <p>To demonstrate, a client who does not have access to the correct secret key would not gain access to data on the server, and would see a screen like this:</p>
        <img src={unAuthorizedClientUI} alt="Unauthorized Client UI" className={"border full-size"}/>
        <p>If a client has configured the correct secret key in the JavaScript environment, the digital signature in the HTTP request authorizes the client to get data from the server. They would see a screen like this:</p>
        <img src={authorizedClientUI} alt="Authorized Client UI" className={"border full-size"}/>
        <p>An eavesdropper who intercepts the HTTP response would only find un-useable encrypted messages in the JSON with values like: a7732715808faf1db5f728a708d3c0d18700edf480d0e5d1f8…63731792e6d07e8e8280691affd9f996754fe3469711178eb</p>
        <p>The JavaScript client uses the secret key to decrypt each message before rendering it as text in the browser.</p>
        <p>The result is a robust setup where only an authorized client can access data in the server, and the server's response is unintelligible to any eavesdroppers on the wire.</p>
        <p>The client source code can be found at: <a href="https://github.com/nickedwards109/secret-message-client">https://github.com/nickedwards109/secret-message-client</a></p>
        <p>The server source code can be found at: <a href="https://github.com/nickedwards109/secret-message-server">https://github.com/nickedwards109/secret-message-server</a></p>
        <div className="content-divider"></div>
        <h3>Rails JSON API</h3>
        <p>This was a 2-person team project over the course of a week. My partner and I maintained a positive and productive working relationship throughout it, despite the stress of a large set of requirements within a tight deadline.</p>
        <p>It is a RESTful API that responds to HTTP requests with data and business intelligence in JSON format. The server is a Rails application that stores data in a PostgreSQL database, which is hosted in production on Heroku.</p>
        <p>As an example of an endpoint, here is the endpoint for getting a random customer:</p>
        <p><a href="https://cody-nick-rails-engine.herokuapp.com/api/v1/customers/random">https://cody-nick-rails-engine.herokuapp.com/api/v1/customers/random</a></p>
        <p>Using SQL queries and knowledge of relational database theory, we constructed analytics endpoints. For example, the following endpoint responds with a variable number of merchants ranked by total revenue:</p>
        <p><a href="https://cody-nick-rails-engine.herokuapp.com/api/v1/merchants/most_revenue?quantity=4">https://cody-nick-rails-engine.herokuapp.com/api/v1/merchants/most_revenue?quantity=4</a></p>
        <p>The source code and complete API documentation can be found at: <a href="https://github.com/nickedwards109/rails_engine">https://github.com/nickedwards109/rails_engine</a></p>
        <div className="content-divider"></div>
        <h3>Open Source Contributions</h3>
        <p>I made a few contributions of front-end HTML/CSS on an open-source project called OpenFarm, which is a free and open database for farming and gardening knowledge. The original landing page looked like this:</p>
        <img src={openFarmInitialUI} alt="Original OpenFarm UI" className="full-size" />
        <p>I assigned myself one of the issues on the project's GitHub repository, which was to replace the logo in the center with a call to action and move the logo to the top-left corner of the page. I dove into the existing codebase and familiarized myself with the existing HTML and SASS/CSS, and then got to work modifying it to meet the new UI requirements. Once I had implemented HTML and SASS/CSS for the new UI, I ensured that my code changes left the existing user interactions intact.</p>
        <p>The team merged my changes into the master branch and deployed it to production! After my changes, the UI looked like:</p>
        <img src={openFarmNewUI} alt="New OpenFarm UI" className="full-size" />
        <div className="content-divider"></div>
        <h3>Personal Site</h3>
        <p>You're looking at it right now! This application uses React, React Router, and custom CSS and CSS3 transitions to implement Material Design principles. While making this site, I also took the chance to practice some basic image cropping and re-sizing for web applications using Photoshop.</p>
        <p>The source code can be found at: <a href="https://github.com/nickedwards109/personal-site">https://github.com/nickedwards109/personal-site</a></p>
      </div>
    );
  }
}

export default Projects;

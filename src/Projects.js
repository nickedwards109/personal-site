import React, { Component } from 'react';
import './Projects.css';
import newFeedbackFormUI from './img/new-feedback-form-ui.jpg';
import feedbackIndexUI from './img/feedback-index-ui.jpg';
import ecologicalObservationsMapUI from './img/ecological-observations-map-ui.jpg';
import cncRouterImage from './img/cnc-router.jpg';
import cncElectronicsImage from './img/cnc-electronics.jpg';
import toolPath from './img/toolpath.jpg';
import makingClamps from './img/making-clamps.jpg';
import fiveSTrainingHomepageUI from './img/five-s-training-homepage.jpg';
import fiveSTrainingLoginUI from './img/five-s-training-login.jpg';
import turbineBucketCadModel from './img/turbine-bucket-cad-model.jpg';
import turbine from './img/turbine.jpg';
import customersWithPendingInvoices from './img/customers-with-pending-invoices.jpg';
import openFarmInitialUI from './img/open-farm-initial-ui.jpg';
import openFarmNewUI from './img/open-farm-new-ui.jpg';
import unAuthorizedClientUI from './img/unauthorized-client-ui.jpg';
import authorizedClientUI from './img/authorized-client-ui.jpg';

class Projects extends Component {
  render () {
    return (
      <div>
        <div className="project-container">
          <h3>Cloud-deployed Application for Collecting Educational Feedback</h3>
          <div className="project-body">
            <p>As a teacher, I have often encountered a problem where students are reticent to provide feedback to educators due to concerns about their grades being affected, reducing educators' ability to improve their curriculum and instruction. I spent some time outside of work to explore this problem and develop and deploy a first iteration of a possible solution.</p>
            <p>The current iteration is a simple web application that allows any user with access to the production URL to enter anonymous feedback into a form. The feedback is stored in a database and displayed publicly to ensure that all stakeholders can access the information. To inform future iterations, I hope to test the application with students and educators to gain a better understanding of what they want.</p>
            <p>A use case might involve a student providing feedback on a tutorial called 'Hello World'. The student would visit the path '/tutorials/hello-world/feedbacks/new' and fill out the form.</p>
            <img src={newFeedbackFormUI} alt="New Feedback Form UI" className="full-size" />
            <p>The student would then be redirected to a page showing all of the feedback provided for that tutorial, which the educator and other stakeholders can visit as well to improve their understanding of the students' perspective.</p>
            <img src={feedbackIndexUI} alt="Feedback Index UI" className="full-size" />
            <p>The technologies I used for this project include Ruby, Rails 5, PostgreSQL, CSS and Flexbox, AWS Elastic Cloud Compute, Linux (Ubuntu), Nginx, and Puma.</p>
            <p>The application's Git repository is located at:<a href="https://github.com/nickedwards109/EducationalFeedback/">https://github.com/nickedwards109/EducationalFeedback/</a></p>
            <p>An example of the application running in production can be found at:<a href="http://ec2-18-219-200-163.us-east-2.compute.amazonaws.com/tutorials/hello-world/feedbacks/new/">http://ec2-18-219-200-163.us-east-2.compute.amazonaws.com/tutorials/hello-world/feedbacks/new/</a></p>
          </div>
          <div className="content-divider"></div>
        </div>
        <div className="project-container">
          <h3>Cloud-deployed Full-Stack Map Application</h3>
          <div className="project-body">
            <p>I occasionally go hiking and foraging for wild edible foods, but I didn't have an organized way to keep track of the locations of edible plants I find. I developed an application to solve this problem, which gave me a chance to practice full-stack development with separate front-end and back-end applications.</p>
            <img src={ecologicalObservationsMapUI} alt="Map UI" classname="full-size" />
            <p>A client application uses jQuery to send an HTTP request to a server, which responds with JSON that represents observations of biological species in nature. The client displays the locational data on a map using the Google Maps JavaScript API. It is deployed using Amazon S3.</p>
            <p>The server is a Rails application that exposes API endpoints which are tested using RSpec. The server connects to a database in a PostgreSQL instance which contains tables representing biological species and observations of those species, as well as a one-to-many relationship between species and observations.</p>
            <p>The server application and the PostgreSQL instance are both deployed on Google Cloud App Engine.</p>
            <p>For now, I have been inserting data into the database using SQL statements via the psql command-line interface, but eventually I'll get around to setting up the client to send POST requests to the server. It is a work in progress!</p>
            <p>The client repository is located at<a href="https://github.com/nickedwards109/ecological-observation-client/">https://github.com/nickedwards109/ecological-observation-client/</a>, and the server repository is located at<a href="https://github.com/nickedwards109/ecological-observation-server/">https://github.com/nickedwards109/ecological-observation-server/</a>. Feel free to reach out to me for the production URLs.</p>
          </div>
          <div className="content-divider"></div>
        </div>
        <div className="project-container">
          <h3>5S Training Application</h3>
          <div className="project-body">
            <div className="project-copy-left">
              <p>While working in the aerospace manufacturing industry, I identified a need for better educational resources for training the shop staff on industry-standard best practices. One particular set of industry-standard practices with a need for better educational resources is 5S, which is a workplace organization methodology that originated from the Lean Manufacturing philosophy in Japan.</p>
              <p>I set out to address the need for 5S education resources by writing a set of lessons and using test-driven development to develop an application for delivering the lessons. The application has the following features:</p>
              <ul>
                <li>Email confirmation to activate the accounts of new users</li>
                <li>Authentication</li>
                <li>Hashing of passwords using bcrypt in order to safely store them in the database</li>
                <li>A PostgreSQL database to store lessons, user data, and foreign key relations to account for completion of lessons by a user</li>
                <li>A dashboard that shows users which lessons they have completed and which lessons they can work on next</li>
                <li>A publicly accessible deployment on Heroku</li>
              </ul>
              <p>The application is deployed at:<a href='https://five-s-training.herokuapp.com/'>https://five-s-training.herokuapp.com/</a></p>
              <p>The source code can be found at:<a href='https://github.com/nickedwards109/Five-S-Training'>https://github.com/nickedwards109/Five-S-Training</a></p>
            </div>
            <div className="project-images">
              <img src={fiveSTrainingLoginUI} alt="Five S Training Login Page" className={"border full-size"}/>
              <img src={fiveSTrainingHomepageUI} alt="Five S Training Home Page" className={"border full-size"}/>
            </div>
          </div>
          <div className="content-divider"></div>
        </div>
        <div className="project-container">
          <h3>Secret Message Client / Server</h3>
          <div className="project-body">
            <div className="project-images">
              <img src={unAuthorizedClientUI} alt="Unauthorized Client UI" className="border"/>
              <p className="extra-space-beneath">Unauthorized attempt to get data from the server</p>
              <img src={authorizedClientUI} alt="Authorized Client UI" className="border"/>
              <p>Authorized attempt to get data from the server</p>
            </div>
            <div className="project-copy-right">
              <p>I wanted to explore cryptography and the possibility of communicating securely over an insecure network, so I developed a JavaScript client and a Ruby/Rails server that authenticate and encrypt their communication. It works like this:</p>
              <p>There is a secret key that is known to both the client and the server.</p>
              <p>The client authenticates its HTTP requests by including an extra header in each request. The value of the header is a digital signature. This signature is generated by using SHA-256 to hash a string that is a concatenation of the secret key and the start-line of the HTTP request.</p>
              <p>The server uses the same method to generate a digital signature, and compares it to the client's signature. If the signatures match, the server concludes that the client is authenticated.</p>
              <p>The server then fetches the requested data from a PostgreSQL database and encrypts it using the secret key and the Advanced Encryption Standard algorithm. The server sends the encrypted data as the body of the HTTP response. The server also includes a header whose value is a digital signature generated from the secret key and the encrypted data.</p>
              <p>The client verifies that the response was not tampered with in transit by generating a digital signature from the secret key and the encrypted data. Upon verifying the integrity of the data, the client uses the secret key to decrypt the data, and finally displays the data in the browser.</p>
              <p>The client source code can be found at: <a href="https://github.com/nickedwards109/secret-message-client">https://github.com/nickedwards109/secret-message-client</a></p>
              <p>The server source code can be found at: <a href="https://github.com/nickedwards109/secret-message-server">https://github.com/nickedwards109/secret-message-server</a></p>
            </div>
          </div>
          <div className="content-divider"></div>
        </div>
        <div className="project-container">
          <h3>Rails JSON API</h3>
          <div className="project-body">
            <div className="project-copy-left">
              <p>This was a 2-person team project over the course of a week. My partner and I maintained a positive and productive working relationship throughout it, despite the stress of a large set of requirements within a tight deadline.</p>
              <p>It is a RESTful API that responds to HTTP requests with data and business intelligence in JSON format. The server is a Rails application that stores data in a PostgreSQL database, which is hosted in production on Heroku.</p>
              <p>As an example of an endpoint, here is the endpoint for getting a random customer:</p>
              <p><a href="https://cody-nick-rails-engine.herokuapp.com/api/v1/customers/random">https://cody-nick-rails-engine.herokuapp.com/api/v1/customers/random</a></p>
              <p>Using SQL queries and knowledge of relational database theory, we constructed analytics endpoints. For example, the JSON to the right is the response to a request for a merchant's customers whose invoices are pending.</p>
              <p>The source code and complete API documentation can be found at: <a href="https://github.com/nickedwards109/rails_engine">https://github.com/nickedwards109/rails_engine</a></p>
            </div>
            <div className="project-images">
              <img src={customersWithPendingInvoices} className="border" alt="Customers with Pending Invoices" />
              <p>A merchant's customers whose invoices are pending</p>
            </div>
            </div>
          <div className="content-divider"></div>
        </div>
        <div className="project-container">
          <h3>Personal Site</h3>
          <div className="project-body">
            <p>You are currently looking at the personal website I built for fun to showcase myself! To implement this project, I started with plain and simple HTML and CSS. As I iterated, I researched and practiced several technologies that initially were new to me, including React, React Router, and CSS Transitions. I also studied Google's Material Design principles in order to style the page's navbar links in a way that represents meaning with motion and shading.</p>
            <p>The source code can be found at: <a href="https://github.com/nickedwards109/personal-site">https://github.com/nickedwards109/personal-site</a></p>
          </div>
          <div className="content-divider"></div>
        </div>
        <div className="project-container">
          <h3>Open Source Contributions</h3>
          <div className="project-body">
            <p>I made a few contributions of front-end HTML/CSS on an open-source project called OpenFarm, which is a free and open database for farming and gardening knowledge. The original landing page looked like this:</p>
            <img src={openFarmInitialUI} alt="Original OpenFarm UI" className="full-size" />
            <p>I assigned myself one of the issues on the project's GitHub repository, which was to replace the logo in the center with a call to action and move the logo to the top-left corner of the page. I dove into the existing codebase and familiarized myself with the existing HTML and SASS/CSS, and then got to work modifying it to meet the new UI requirements. Once I had implemented HTML and SASS/CSS for the new UI, I ensured that my code changes left the existing user interactions intact.</p>
            <p>The team merged my changes into the master branch and deployed it to production! After my changes, the UI looked like:</p>
            <img src={openFarmNewUI} alt="New OpenFarm UI" className="full-size" />
            <p>This was a great chance to practice front-end HTML and CSS in an open-source application in production.</p>
          </div>
          <div className="content-divider"></div>
        </div>
        <div className="project-container">
          <h3>CNC Router Build</h3>
          <div className="project-body">
            <div className="project-images">
              <img src={cncRouterImage} alt="CNC Router" className="full-size" />
              <img src={cncElectronicsImage} alt="CNC Electronics" className="full-size" />
            </div>
            <div className="project-copy-right">
              <p>This is a CNC router that I built and customized. I had to dismantle before using it very much, but it was a fabulous learning experience.</p>
              <p>I based the design on the open-source<a href="https://www.shapeoko.com/wiki/">Shapeoko</a>design, but I wanted to build a stronger machine that could work with harder materials. So, I selected higher torque stepper motors, higher voltage motor driver circuits, and an AC/DC transformer to transform household AC into to DC for the stepper motors.</p>
              <p>It was challenging to connect the entire system so that the Arduino controller could interpret a CNC program and send corresponding signals to each of the X/Y/Z stepper motors, and so that the motor driver circuit would supply DC power to the stepper motor upon that signal. After a lot of troubleshooting, I got it working and was able to make some workholding clamps!</p>
            </div>
          </div>
          <div className="content-divider"></div>
        </div>
        <div className="project-container">
          <h3>CNC Programming for Workholding Clamps</h3>
          <div className="project-body">
            <div className="project-copy-left">
              <p>In this project, I used the Ruby programming language to develop a CNC program generator. Through a command-line interface, a user can create a CNC program which can be used to machine a clamp for milling workholding applications. The dimensions of the clamp can be customized by the user, allowing custom toolpaths for making custom clamps.</p>
              <p>After a lot of troubleshooting and learning, I got the program to work reliably and I made a few clamps!</p>
              <p>The Ruby source code is available at: <a href="https://github.com/nickedwards109/Clamp-Miller">https://github.com/nickedwards109/Clamp-Miller</a></p>
            </div>
            <div className="project-images">
              <img src={toolPath} alt="Clamp-making CNC Toolpath" className="full-size" />
              <img src={makingClamps} alt="Making a workholding clamp" className="full-size" />
            </div>
            </div>
          <div className="content-divider"></div>
        </div>
        <div className="project-container">
          <h3>Pico-Hydropower Turbine Optimization</h3>
          <div className="project-body">
            <div className="project-images">
              <img src={turbineBucketCadModel} alt="Turbine Bucket CAD Model" className="full-size" />
              <img src={turbine} alt="Turbine" className="full-size" />
            </div>
            <div className="project-copy-right">
              <p>This was my undergraduate capstone project, where I had the pleasure of working on a 3-person team to re-design a rural hydropower system for optimized power output. Our final design increased the efficiency of the turbine design by over 100%!</p>
              <p>We used techniques including CAD modeling, 3-D Printing, polycarbonate casting, and machining to quickly create prototype components.</p>
              <p>Through an iterative process of research, design, manufacturing, and testing, we worked as a team to significantly and measurably improve the power output efficiency of the system. This project was an excellent technical teamwork exercise.</p>
              <p>For our efforts, we received the annual Special Faculty Award for Engineering and Service to Humanity!</p>
            </div>
            </div>
          <div className="content-divider"></div>
        </div>
      </div>
    );
  }
}

export default Projects;

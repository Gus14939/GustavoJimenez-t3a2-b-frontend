Gutavo Jimenez T3A2-B

![SVG Image](./docs/logo_Planthora.svg)

# Deployment of the App
### Online version
- Fontend 
  - https://planthora.netlify.app/  
- Backend 
  - https://gustavojimenez-t3a2-b-backend.onrender.com  

### GIT Repos
- Fontend 
  - https://github.com/Gus14939/gustavojimenez-t3a2-b-frontend 
- Backend 
  - https://github.com/Gus14939/GustavoJimenez-t3a2-b-backend  


---

# Assignment requirements

### [PART-A](#part-a)  
R1. Description of website  
R2. Dataflow Diagram  
R3. Application Architecture Diagram  
R4. User Stories  
R5. Wireframes for multiple standard screen sizes  
R6. Trello Board  

---

### [PART-B](#part-b)  
R1. Tech stack used  
R2. Well designed code  
R3. Employing a source control methodology  
R4. Ability to work in a team  
R5. A working application that meets client & user needs  
R6. Deploying the application to a cloud hosting service  
R7. An application with an intuitive user interface  
R8. Evidence of user testing  
R9. Utilising a formal testing framework  
R10. URL to the deployed website  
R11. GitHub repositories  

---
---

# PART A

# R1 - Description of the website:
### Purpose

**Vision Statement:**

Planting connections to create greener cities and a healthier planet. Our vision is a world where communities flourish with greenery, fostering connections between people and nature through the joy of plant donations, swaps, and adoptions.

**Mission Statement:**

"Our mission is to cultivate empathy, promote flora conservation, and champion environmentalism by creating a platform where individuals can trade plants, learn how to care for them, and build meaningful human connections. We aim to inspire a sense of community and responsibility towards our environment, making the world a greener, more connected place."

### Functionality / features

- User register and login - Offers full access to the site funcitionality

- users can post their plants for Donating, Swapping or Wanted. Users can check their wishlist and track the history of trades

- Plant of The Day section. This section is for users to learn everything about the a specific plant care. This plant is selected from the plants the users have in their accounts to Swap or donate.

- Search functionality for user to find the plant they want to exchange or learn about a plant

- see user's posts add to wishlist or to make a match to exchange plants

- Nice to have - to be implemented later
  - location and maps
  - the actual trade
  - messaging
  - events and gatherings


### Target audience

1. **Newbies and Beginners:**
   - Individuals who are new to gardening and plant care, looking to start a rewarding hobby.
   - People interested in learning about plants but unsure where to begin.
   - Urban dwellers seeking to bring a touch of nature into their homes or small living spaces.

2. **Plant Enthusiasts and Hobbyists:**
   - Those who already have a passion for plants and gardening and want to expand their collection.
   - Individuals interested in exploring new plant varieties through swaps and donations.
   - Hobbyists who enjoy sharing their plant experiences and tips with others.

3. **Experts and Educators:**
   - Experienced gardeners and plant experts who wish to impart their knowledge.
   - Botanical professionals and horticulturists interested in community engagement.
   - Individuals passionate about teaching others how to care for and appreciate plants.

4. **Environmentalists and Conservationists:**
   - People dedicated to environmental causes and looking to make a positive impact.
   - Advocates for flora conservation and sustainable living practices.
   - Community members who support green initiatives and want to promote environmentalism.

### Tech stack
    - MongoDB
    - Mongoose
    - Express
    - React
    - Node.js
    - SCSS


---
---
# R2 - Dataflow Diagram

![Planthora DFD](./docs/Planthora-DFD.png)

---
---
# R3 - Application Architecture Diagram
![Planthora DFD](./docs/Planthora-AppArchitectureDiagram.png)

---
---
# R4 - User Stories

3 personas were created to define the requirements, focus on User Experience, Improve quality, and prioritise work. These three represent a range of users within the Planthora community. **First**, there is the beginner, Emily Johnson, who requires guidance and support. She is looking for easy-to-follow resources and a supportive community to help her learn the basics of her new hobby. **Second**, the experienced enthusiast, Daniel Martinez, who is eager to share his extensive knowledge and connect with others. He wants a platform where he can mentor beginners, and engage with a diverse community of plant lovers. **Third**, the contributor, Sarah Lee, who is passionate about the mission of Planthora and brings her skills in web development, user experience design, and nonprofit management to the project. She aims to create engaging content, gather user feedback, and build features that enhance community interaction, making the project accessible for thousands of people nationwide. These personas illustrate the diverse needs and contributions within the Planthora community, from those just starting out to those helping to shape and expand the platform.

<table>
    <tr>
        <td><h2><strong>User Persona 1:</strong> "Green Thumb Newbie"</h2></td>
    </tr>
</table>
<table>
    <tr>
        <td><h4>Name:</h4></td>
        <td>Emily Johnson</td>
    </tr>
    <tr>
        <td><h4>Age:</h4></td>
        <td>28</td>
    </tr>
    <tr>
        <td><h4>Occupation:</h4></td>
        <td>Marketing Coordinator</td>
    </tr>
    <tr>
        <td><h4>Location:</h4></td>
        <td>Urban Apartment in Sydney</td>
    </tr>
    <tr>
        <td><h4>Background:</h4></td>
        <td>
            <ul>
                <li>Emily lives in a small apartment in the city and has always been interested in having plants to brighten up her living space.</li>
                <li>She recently moved to Sydney and is looking for ways to make her apartment feel more like home.</li>
                <li>With a busy work schedule, she is looking for a relaxing hobby that she can enjoy in her downtime.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td><h4>Goals:</h4></td>
        <td>
            <ul>
                <li>To start a collection of houseplants that thrive in an apartment setting.</li>
                <li>To learn the basics of plant care and understand how to keep her plants healthy.</li>
                <li>To connect with a community of fellow plant lovers for advice and support.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td><h4>Challenges:</h4></td>
        <td>
            <ul>
                <li>Limited space and light in her apartment, making it difficult to choose suitable plants.</li>
                <li>Lack of knowledge about different plant species and their care requirements.</li>
                <li>Feeling overwhelmed by the vast amount of information available online.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td><h4>Needs:</h4></td>
        <td>
            <ul>
                <li>Easy-to-follow guides and tips on plant care for beginners.</li>
                <li>Recommendations for low-maintenance plants that do well indoors.</li>
                <li>A supportive community where she can ask questions and share her progress.</li>
                <li>Opportunities to swap plants and grow her collection without spending too much money.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td><h4>Interests:</h4></td>
        <td>
            <ul>
                <li>Enjoys DIY projects and decorating her apartment.</li>
                <li>Passionate about sustainability and reducing her carbon footprint.</li>
                <li>Loves spending time in nature and visiting local parks and botanical gardens.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td><h4>Technological Proficiency:</h4></td>
        <td>
            <ul>
                <li>Comfortable using social media and mobile apps.</li>
                <li>Frequently uses her smartphone to browse the internet and manage daily tasks.</li>
                <li>Prefers visually appealing and user-friendly websites.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td><h4>Favorite Features <br>on Planthera:</h4></td>
        <td>
            <ul>
                <li><strong>Plant Swap Section:</strong> Where she can find local plant swaps and expand her collection affordably.</li>
                <li><strong>Plant of The Day:</strong> Easy and short information on plant care basics.</li>
                <li><strong>Growth with the Community:</strong> Emily knows many of the features are not yet available, but she wants to grow with the community the application offers online and offline to meet people face to face.</li>
            </ul>
        </td>
    </tr>
</table>
<table>
    <tr>
        <td>
        <h3>Emily - User Story:</h3>
        <p>
        "As a Green Thumb Newbie, I want to start a collection of houseplants that thrive in an apartment setting so that I can brighten up my living space and make my apartment feel more like home. I need easy-to-follow guides and tips on plant care for beginners because I lack knowledge about different plant species and their care requirements. I also want to connect with a community of fellow plant lovers for advice and support, as I recently moved to Sydney and am looking for ways to make new friends and find a relaxing hobby. I would love to have access to a platform where I can find local plant swaps, get recommendations for low-maintenance plants, and share my progress with others."
        </p>
        </td>
    </tr>
</table>    

---

---

<table>
    <tr>
        <td><h2><strong>User Persona 2:</strong> "Experienced Green Enthusiast"</h2></td>
    </tr>
</table>
<table>
    <tr>
        <td><h4>Name:</h4></td>
        <td>Daniel Martinez</td>
    </tr>
    <tr>
        <td><h4>Age:</h4></td>
        <td>42</td>
    </tr>
    <tr>
        <td><h4>Occupation:</h4></td>
        <td>Horticulturist and Community Garden Organiser</td>
    </tr>
    <tr>
        <td><h4>Location:</h4></td>
        <td>Suburban Home in Geelong NSW</td>
    </tr>
    <tr>
        <td><h4>Background:</h4></td>
        <td>
            <ul>
                <li>Daniel has been passionate about gardening since childhood and has extensive knowledge of both indoor and outdoor plants.</li>
                <li>He organises community gardening projects and workshops to promote environmental awareness and conservation.</li>
                <li>Daniel is always on the lookout for platforms that allow him to share his expertise and connect with like-minded individuals.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td><h4>Goals:</h4></td>
        <td>
            <ul>
                <li>To find a platform where he can share his knowledge and tips on plant care.</li>
                <li>To connect with a community of plant lovers and offer guidance to beginners.</li>
                <li>To discover new plant varieties and participate in plant swaps.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td><h4>Challenges:</h4></td>
        <td>
            <ul>
                <li>Difficulty in finding a centralised platform that caters to both beginners and experts.</li>
                <li>Limited opportunities to engage with a broader audience beyond his local community.</li>
                <li>Keeping up with the latest trends and innovations in horticulture.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td><h4>Needs:</h4></td>
        <td>
            <ul>
                <li>A platform where he can share his expertise through articles, videos, and workshops.</li>
                <li>Access to a diverse community of plant enthusiasts for idea exchange and collaboration.</li>
                <li>Tools to organise and promote local and virtual events related to gardening and plant care.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td><h4>Interests:</h4></td>
        <td>
            <ul>
                <li>Passionate about flora conservation and sustainable gardening practices.</li>
                <li>Enjoys mentoring new gardeners and helping them succeed.</li>
                <li>Interested in the latest gardening techniques and plant species.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td><h4>Technological Proficiency:</h4></td>
        <td>
            <ul>
                <li>Comfortable with using digital tools for community engagement and knowledge sharing.</li>
                <li>Skilled in using social media and online platforms to connect with the gardening community.</li>
                <li>Familiar with basic web development and content creation tools.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td><h4>Features he can bring in <br>the future for Planthera:</h4></td>
        <td>
            <ul>
                <li><strong>User Feedback Loop:</strong> Mechanisms to collect and act on user feedback to drive continuous improvement.</li>
                <li><strong>Interactive Tutorials:</strong> Engaging content that educates users on plant care and sustainability practices.</li>
                <li><strong>Community Building Tools:</strong> Features that foster interaction, collaboration, and a sense of belonging among users.</li>
                <li><strong>Sustainability Resources:</strong> Information and initiatives that support the mission of promoting environmentalism and flora conservation.</li>
                <li><strong>Partnership Opportunities:</strong> Collaborations with like-minded organisations to amplify the impact of Planthera’s mission.</li>
            </ul>
        </td>
    </tr>
</table>
<table>
    <tr>
        <td>
        <h3>Daniel - User Story:</h3>
        <p>
        "As an experienced green enthusiast, I want to find a platform where I can share my extensive knowledge and tips on plant care, connect with a community of like-minded plant lovers, and offer guidance to beginners. I aim to discover new plant varieties and participate in plant swaps while promoting environmental awareness and conservation through community gardening projects and workshops. I need a centralised platform that caters to both beginners and experts, provides opportunities to engage with a broader audience beyond my local community, and keeps me updated with the latest trends in all things green."
        </p>
        </td>
    </tr>
</table>  

---

---

<table>
    <tr>
        <td><h2><strong>User Persona 3:</strong> "Planthora Contributor"</h2></td>
    </tr>
</table>
<table>
    <tr>
        <td><h4>Name:</h4></td>
        <td>Sarah Lee</td>
    </tr>
    <tr>
        <td><h4>Age:</h4></td>
        <td>35</td>
    </tr>
    <tr>
        <td><h4>Occupation:</h4></td>
        <td>Nonprofit Advocate and Web Developer</td>
    </tr>
    <tr>
        <td><h4>Location:</h4></td>
        <td>Metropolitan Melbourne</td>
    </tr>
    <tr>
        <td><h4>Background:</h4></td>
        <td>
            <ul>
               <li>Sarah has a solid background in web development, with a strong passion for plants and environmental activism.</li>
                <li>She is the greatest contributor in Planthora, creating a community-centric platform focused on plant trading, education, and fostering human connections.</li>
                <li>Sarah dedicates her spare time to both the technical development and strategic growth of Planthora, ensuring it aligns with its vision and mission.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td><h4>Goals:</h4></td>
        <td>
            <ul>
               <li>To ensure Planthora is a user-friendly and engaging platform that meets the needs of its diverse user base.</li>
                <li>To promote empathy, flora conservation, and environmentalism through the website’s features and community initiatives.</li>
                <li>To continuously improve the platform based on user feedback and technological advancements.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td><h4>Challenges:</h4></td>
        <td>
            <ul>
                <li>Keeping up with the latest trends in user experience to maintain a cutting-edge platform.</li>
                <li>Addressing the varied needs of beginners and experienced plant enthusiasts within the community.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td><h4>Needs:</h4></td>
        <td>
            <ul>
                <li>Constant user feedback to understand the evolving needs of the community.</li>
                <li>Support and resources to sustain and grow the nonprofit’s mission and impact.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td><h4>Interests:</h4></td>
        <td>
            <ul>
                <li>Merging technology with environmental causes to create impactful change.</li>
                <li>Building a supportive and inclusive community around a shared love for plants.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td><h4>Technological Proficiency:</h4></td>
        <td>
            <ul>
               <li>Highly skilled in user experience design, and nonprofit management.</li>
                <li>Familiar with the latest digital trends and platforms that enhance community engagement.</li>
                <li>Enjoys leveraging technology to solve problems and create meaningful user experiences.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td><h4>Future Features <br>on Planthora:</h4></td>
        <td>
            <ul>
                <li><strong>User Feedback Loop:</strong> Mechanisms to collect and act on user feedback to drive continuous improvement.</li>
                <li><strong>Community Building Tools:</strong> Features that foster interaction, collaboration, and a sense of belonging among users.</li>
                <li><strong>Partnership Opportunities:</strong> Collaborations with like-minded organisations to amplify the impact of Planthora’s mission.</li>
            </ul>
        </td>
    </tr>
</table>
<table>
    <tr>
        <td>
        <h3>Sarah - User Story:</h3>
        <p>
        "As a dedicated Planthora contributor, I wish to leverage my expertise in web development, user experience design, and nonprofit management to create engaging content and features that foster a sense of community among plant enthusiasts. I look forward to gather and implement user feedback, develop interactive tutorials on plant care and sustainability, and build tools that facilitate interaction and collaboration. I'm focused on supporting Planthora’s mission of promoting environmentalism and flora conservation by providing resources and forming partnerships with like-minded organisations."
        </p>
        </td>
    </tr>
</table>  

---

---


# R5 - Wireframes
Wireframes for multiple standard screen sizes, created using industry standard software

---

The development of this site will target mobile, tablet, and desktop sizes, with a particular emphasis on mobile optimisation. Mobile devices are pivotal in front-end development due to their widespread use and the significant benefits they offer to users, such as accessibility and convenience.

#### Website Sitemap
A crucial starting point when creating a website, the sitemap provides a structured layout for the site's content. It aids in visualizing the relationships between pages, streamlining the development process by offering a clear framework for both content creation and technical implementation. This structured approach ensures a coherent and efficient workflow, facilitating a seamless user experience across all devices.

![Planthora Sitemap](./docs/Planthora-sitemap.png)

---

## [Figma - Wireframes Flows](https://www.figma.com/proto/iV8BTtZIoAfj4ow1LaBvmy/Website-Wireframes-UI-Kit-Vol.-1-Community?node-id=1602-91&t=3gQlb2ScAc3UHOBO-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1617%3A3067&show-proto-sidebar=1)


High-fidelity wireframes were created to illustrate the overall architecture and provide a detailed view of the site's look and feel. These wireframes clearly delineate the relationships between pages and the functionality of each component and section. Some features of the site are intentionally faded out to indicate that these functionalities are expected to be implemented depending on the available production time.

Beyond the functional aspects of the project, the visual design is equally crucial for fostering user engagement and retention. Many competing websites in this space lack compelling designs or fail to prominently display large images of the plants offered, which are essential for capturing users' interest and affection.

The objective was to create a website that feels and looks organic, welcoming users into a green world through its navigation and visual presentation. Emphasising a seamless blend of aesthetics and usability ensures that users are not only drawn to the site but also find it enjoyable and intuitive to use.

**Mobile Wireframe**

![Planthora Mobile Wireframe](./docs/Planthora-Mobile.jpg)

---

**Tablet Wireframe**

![Planthora Table Wireframe](./docs/Planthora-Tablet.jpg)

---


**Desktop Wireframe**

![Planthora Desktop Wireframe](./docs/Planthora-Desktop.jpg)

---

**Design of the site**

![Planthora Design](./docs/Planthora-UIDesign.jpg)
![Planthora Mobile Design](./docs/Planthora-UIDesignMobile.jpg)

---
---
# R6 - Trello
Screenshots of your Trello board throughout the duration of the project

Trello was used for the management of this project. Agile methodology was tried for this project. Creating individual cards for each task, without going too deep into each task since only a person was in charge of all tasks.

Compared to previous projects, review/testing was added. Very simple, however, it felt like an important step to have an mental map to organise what is seemingly done, this allow me to jump onto other tasks without forgetting to double check or test the work to finally place the tasks in the DONE section.

Another small but very useful detail was to use colours. It made it much easier to organise and visualise, tracking the sections of the assigment without having to write lengthy text to identify its context.


![Planthora Trello 01](./docs/Planthora-Trello-01.png)

![Planthora Trello 02](./docs/Planthora-Trello-02.png)

![Planthora Trello 03](./docs/Planthora-Trello-03.png)

![Planthora Trello 04](./docs/Planthora-Trello-04.png)

![Planthora Trello 05](./docs/Planthora-Trello-05.png)

![Planthora Trello 06](./docs/Planthora-Trello-06.png)

![Planthora Trello 07](./docs/Planthora-Trello-07.png)

![Planthora Trello 08](./docs/Planthora-Trello-08.png)

![Planthora Trello 09](./docs/Planthora-Trello-09.png)

![Planthora Trello 10](./docs/Planthora-Trello-10.png)

![Planthora Trello 10](./docs/Planthora-Trello-11.png)

![Planthora Trello 10](./docs/Planthora-Trello-12.png)

![Planthora Trello 10](./docs/Planthora-Trello-13.png)

---
---


# PART B

# R1. Tech stack used  
This project used the MERN stack.
- MongoDB 
- Express.js
- React.js
- Node.js


---
# R2. Well designed code  
In developing the backend for Planthora, the codebase is structured as carefully as possible, given the many expected and unexpected issues present. The code adhere to modular programming principles. Each module was thought to handle a specific concern, such as user authentication, profile management, and post interactions, allowing for a clear separation of responsibilities. This approach allowed some maintainability, and ensured that the code remains scalable as new features are added. DRY principles were maintained by abstracting common functionality into reusable components.

The code leverages appropriate libraries such as Mongoose for MongoDB interactions and bcrypt for secure password hashing, ensuring that best practices are followed. The design emphasises good code flow control, aligning with user stories to provide a seamless and intuitive experience. By applying Object-Oriented (OO) principles, the code encapsulates related properties and behaviors into distinct classes and schemas, promoting reusability and easy management of data. Appropriate data structures, such as JavaScript objects and arrays, are employed to efficiently handle user data, making the application robust and performant.

---
# 3. Employing a source control methodology  

GIT Repos
- Fontend 
  - https://github.com/Gus14939/gustavojimenez-t3a2-b-frontend 
  ![git - Frontend](./docs/partB/git-backend.png)
  ![git - Frontend branches](./docs/partB/git-backendBranches.png)
- Backend 
  - https://github.com/Gus14939/GustavoJimenez-t3a2-b-backend  
  ![git - Backend](./docs/partB/git-backend.png)
  ![git - Backend branches](./docs/partB/git-backendBranches.png)
---
# 4. Ability to work in a team  

This was a solo project. the expectation was to touch all areas of the development process making me the sole contributor and project owner. However, I tried approaching it with as a team and strategic planning. I delegated tasks across different days, similar to how one might delegate responsibilities among team members, ensuring that each aspect of the project was given the attention it deserved to drive its success.

For work management, I utilised  Trello to organize the project's workflow. The tasks were divided into weeks for Part-B, with "not fully completed" and "review testing" give all the many issues this project pressented and to track the progress of the succesful tasks.

It was demonstrated that the application of a recognised project management methodology. Effective task delegation, even within a solo project.

### [Trello - App development](https://trello.com/b/cezps7am/planthera-full-stack-app-part-b)

---
# 5. A working application that meets client & user needs  

Initially the backend part of the app was locally tested and later deployed to deployed on MongoDB and Render.
while the database and mongoose actioned without issues.

Frontend was develop and tested locally. However, CORS caused too many issues and continue work using the deployed database was not possible.

All other develpment was successful when keeping it local.

Unfortunately the App has not been completed and only a few proposed features work locally

---
# 6. Deploying the application to a cloud hosting service  

disregarding the issues with connecting backend and frontend, deployment of each was succesful and can be accessed.

Deployment of the database was on MongoDB
Deployment of the backend was on Render
Deployment of the frontend was on Netlify

#### These are the production link of the app:
- Fontend 
  - https://planthora.netlify.app/  
- Backend 
  - https://gustavojimenez-t3a2-b-backend.onrender.com  

![Mongo Platform](./docs/partB/DeployMongo.png)

![Mongo Platform](./docs/partB/DeployRender.png)

![Mongo Platform](./docs/partB/DeployNetlify.png)
---
# 7. An application with an intuitive user interface  

visually, the app mostly looks and behaves as the proposed static designs.
s.

The idea was to visually engage the user by using the realstate mostly for big images of the plants and the information about the plants.

while a few aspect of the site were not achieved. the website remains intuitive to navigate. 

![deployed site UI](./docs/partB/homepage.png)

---
# 8. Evidence of user testing  
### Manual unit test website

#### Manual testing of the develpment stage
![Testing Manual Development](./docs/partB/testing-manual-Development.png)


#### Manual testing of the production stage
![Testing Manual Development](./docs/partB/testing-manual-Production.png)


---
# 9. Utilising a formal testing framework  

For this project, Jest was used to programmatically unit test Planthora app. Jest is a widely-used for JavaScript applications.

In this project, I conducted a series of 9 tests, focusing primarily on the backend functionality. These tests were essential for verifying that the core components, such as user authentication and profile management, operated correctly.

Here are the terminal results for each test case:

![Testing Manual Development](./docs/partB/testing.png)


---
# 10. URL to the deployed website  

Unfortunately given the issues with CORS the deployed site does not operate as expected

# https://planthora.netlify.app/  

---

# 11. GitHub repositories 
- Fontend 
  - https://github.com/Gus14939/gustavojimenez-t3a2-b-frontend 
- Backend 
  - https://github.com/Gus14939/GustavoJimenez-t3a2-b-backend  
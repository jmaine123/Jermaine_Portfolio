import React from 'react';
// import Make_a_move_pic from '../images/Make_a_move.png';
// import panel_screenshot_pic from '../images/panel_screenshot.png';
// import plan_my_night from '../images/plan_my_night.png';
// import Pie_Chart from '../images/Rplot07.png';
// import Debate_App from '../images/goat_screenshot.png';
import { ProjectList } from "../helpers/ProjectList";
import ProjectItem from "../components/ProjectItem";
import "../styles/Projects.css";


function Projects() {
    console.log(ProjectList);
    return (
      <div className="projects-grid">
          {ProjectList.map((project, idx) => {
            return (
              <ProjectItem id={idx} project={project} />
            );
          })}
      </div>
    );
  }












// function Projects() {
//   return (
//     <div className='projects-grid'>
//         <div className='project'>
//             <img src={Make_a_move_pic} alt='' />
//             <div className='overlay'>
//                 <h2 className='project-title'> Make A Move</h2>
//                 <p className='project-text'>Users can sign up to help become movers and get assistance with moving from other users. Those users who assist with moving with be rewarded with points or free items.</p>
//                 <button className='project-button'>
//                     <a href="https://www.google.com">Go to Project</a>
//                 </button>
//             </div>
//         </div>
//         <div className='project'>
//             <img src={panel_screenshot_pic} alt=''/>
//             <div className='overlay'>
//                 <h2 className='project-title'> Admin Panel</h2>
//                 <p className='project-text'>Admin panel in which students and teachers can sign up for classes as a drop classes they are taken. All class details are available in the panel</p>
//                 <button className='project-button'>
//                     <a href="https://www.google.com">Go to Project</a>
//                 </button>
//             </div>
//         </div>
//         <div className='project'>
//             <img src={plan_my_night} alt=''/>
//             <div className='overlay'>
//                 <h2>Plan My Night: Event Planning App</h2>
//                 <p className='project-text'>Users can create a itinerary for the night based on location. The events are generated at random to create spontaneity</p>
//                 <button className='project-button'>
//                     <a href="https://www.google.com">Go to Project</a>
//                 </button>
//             </div>
//         </div>
//         <div className='project'>
//             <img src={Pie_Chart} alt=''/>
//             <div className='overlay'>
//                 <h2>NBA Statiscal Case Study</h2>
//                 <p className='project-text'>Users can create a itinerary for the night based on location. The events are generated at random to create spontaneity</p>
//                 <button className='project-button'>
//                     <a href="https://www.kaggle.com/code/jermainesmikle/gatorade-durability-campaign-case-study">Go to Project</a>
//                 </button>
//             </div>
//         </div>
//         <div className='project'>
//             <img src={Debate_App} alt=''/>
//             <div className='overlay'>
//                 <h2>Debate App</h2>
//                 <p className='project-text'>Users can create a itinerary for the night based on location. The events are generated at random to create spontaneity</p>
//                 <button className='project-button'>
//                     <a href="https://www.kaggle.com/code/jermainesmikle/gatorade-durability-campaign-case-study">Go to Project</a>
//                 </button>
//             </div>
//         </div>
//     </div>
//   )
// }

export default Projects;
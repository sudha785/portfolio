import './Project.css'
function Project(){
    return(
<div className="Project-container">
    <h2 className="Project-title">My Projects</h2>
    <div className="Project-grid">
    <div className="Project-card">
    <h3>Online Test Systems</h3>
    <p>MERN Stack app with admin & student roles,MCQ/Coding tests,and Judges API</p>
</div>
     <div className="Project-card">
    <h3>Portfolio Website</h3>
    <p>React -based personal Portfolio with sections for About Me,Projects,and Contact.</p>
</div>
<div className="Project-card">
    <h3>To-Do App</h3>
    <p>Simple CRUD app using React and local storage to manage your daily tasks.</p>
</div>
</div>
</div>
    );
}
export default Project;

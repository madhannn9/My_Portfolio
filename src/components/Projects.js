import React from 'react';

const projectData = [
  {
    title: 'Project 1',
    desc: 'This is about my project 1...',
    img: 'https://getwallpapers.com/wallpaper/full/d/6/d/1172826-top-developer-wallpaper-hd-2560x1440-for-android.jpg',
  },
  {
    title: 'Project 2',
    desc: 'This is about my project 2...',
    img: 'https://wallpaperaccess.com/full/1385386.jpg',
  },
  {
    title: 'Project 3',
    desc: 'This is about my project...',
    img: 'https://getwallpapers.com/wallpaper/full/3/9/e/490037.jpg',
  },
];

function Projects() {
  return (
    <div className="container text-center py-5">
      <p className="font-weight-light" style={{ fontSize: '40px' }}>
        My <span className="text-info">Projects</span>
      </p>
      <div className="lead pb-3">These are my projects including this website...</div>
      <div className="row">
        {projectData.map((proj, idx) => (
          <div className="col-12 col-md-4 my-2" key={idx}>
            <div className="card shadow h-100">
              <img src={proj.img} className="card-img-top" alt="project" />
              <div className="card-body">
                <h4 className="card-title my-3">{proj.title}</h4>
                <p className="card-text">{proj.desc}</p>
                <a href="#" className="stretched-link"></a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <a href="#" className="text-dark">
          <h5>See my projects <i className="fas fa-arrow-right align-middle"></i></h5>
        </a>
      </div>
    </div>
  );
}

export default Projects;

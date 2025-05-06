import React from 'react';

const stackData = [
  {
    name: 'HTML5',
    img: 'https://1.bp.blogspot.com/-NGHwBncyA68/UiMm_8b2ZUI/AAAAAAAAAnA/17OGXCKI4zE/s1600/Logo+HTML5.JPG',
  },
  {
    name: 'CSS3',
    img: 'https://th.bing.com/th/id/OIP.t8LlCJIKEWi5TeqGdfoxHQHaJ3?w=131&h=180&c=7&o=5&pid=1.7',
  },
  {
    name: 'JavaScript',
    img: 'https://th.bing.com/th/id/OIP.Kus1KWCg1gYajUQfOXLh_QHaIA?w=157&h=180&c=7&o=5&pid=1.7',
  },
  {
    name: 'Bootstrap',
    img: 'https://th.bing.com/th/id/OIP.2lPcNBjKmc6P7DhGJ02cuAHaHa?w=169&h=180&c=7&o=5&pid=1.7',
  },
  {
    name: 'React.js',
    img: 'https://th.bing.com/th/id/OIP.zVTOvTi8IZXaFHXrZfZCVwHaHa?w=169&h=180&c=7&o=5&pid=1.7',
  },
  {
    name: 'MySQL',
    img: 'https://th.bing.com/th/id/OIP.lIIc_svaWdGdEJuEk7TBlgHaHa?w=167&h=180&c=7&o=5&pid=1.7',
  },
  {
    name: 'Python',
    img: 'https://th.bing.com/th/id/OIP.EDJ9xoErBbZqK2tExVoJfAHaHY?w=172&h=180&c=7&o=5&pid=1.7',
  },
  {
    name: 'Flask',
    img: 'https://th.bing.com/th/id/OIP.osnbrmpnqfKNC47fuvTToAHaHa?w=170&h=180&c=7&o=5&pid=1.7',
  },
];

function TechStack() {
  return (
    <div className="bg-light w-100">
      <div className="container text-center py-5">
        <p className="font-weight-light" style={{ fontSize: '40px' }}>
          <span className="text-info">Technology</span> Stack
        </p>
        <div className="lead pb-3">I design, develop and deliver with these weapons</div>
        <div className="d-flex flex-wrap justify-content-center gap-4 py-3">
          {stackData.map((tech, idx) => (
            <div key={idx} className="text-center">
              <img
                className="rounded-circle mb-2"
                src={tech.img}
                alt={tech.name}
                style={{ width: '100px', height: '100px' }}
              />
              <div>
                <span className="text-info">&#9733;</span>
                <span className="text-info">&#9733;</span>
                <span>&#9734;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechStack;

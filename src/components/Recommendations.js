import React from 'react';

const data = [
  { text: 'He is a good engineer', name: 'Random guy 1' },
  { text: 'He is a great engineer', name: 'Random guy 2' },
  { text: 'He is a lazy engineer', name: 'Random guy 3' },
  { text: 'He gets things done so quickly', name: 'Random guy 4' },
];

function Recommendations() {
  return (
    <div className="container-fluid my-5">
      <div className="row text-center py-5 d-flex flex-nowrap overflow-auto scrollbar">
        {data.map((item, idx) => (
          <div className="col-12 col-md-4" key={idx}>
            <div className="card shadow h-100">
              <div className="card-body">
                <h4>{item.text}</h4>
                <p className="card-text text-secondary mb-0">{item.name}</p>
                <p className="card-text text-secondary">CEO of ABC Company</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recommendations;

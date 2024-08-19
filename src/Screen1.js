import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Screen1 = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div style={{
            padding: '1rem',
            border: '1px solid #dee2e6',
            backgroundColor: '#f8f9fa'
          }}>
            Part 1
          </div>
        </div>
        {/* ///////////////////////////////////////////////////////////// */}
        <div className="col-md-6">
        <div className="row" style={{backgroundColor:'black'}}>
        <div className="col-md-6" style={{marginTop:'50px'}}>
          <h2 style={{textAlign:'left',color:'white'}}>Spicy Food</h2>
          <p style={{textAlign:'left',color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
        <button style={{backgroundColor:'red'}}>get started</button>
        </div>
        <div className="col-md-6">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSp0sDlHzhIgBpHIaWP5XF65pai8EOrVUu-A&s"  className="img-fluid" style={{height:'300px',width:'300px'}}/>
        </div>
      </div>
        </div>
        {/* ///////////////////////////////////////////////////////////// */}
        <div className="col-md-3">
          <div style={{
            padding: '1rem',
            border: '1px solid #dee2e6',
            backgroundColor: '#f8f9fa'
          }}>
            Part 3
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen1;
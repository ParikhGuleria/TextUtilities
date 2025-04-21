import React,{useState} from 'react'

export default function About(props) {
   let myStyle={
     color: props.mode==="dark"?"white":"#042743",
     backgroundColor: props.mode==="dark"?"rgb(36 74 104)":"white",
   }

    return (
        <div className="container my-3" style={{color: props.mode==="dark"?"white":"#042743" }}>
            <h2>About Us</h2>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Free to use
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, recusandae.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Analyze your text
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, laborum.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Browser Compatible
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, dolorem. Sit, nostrum.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




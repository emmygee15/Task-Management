import React from 'react';
import { Carousel } from 'antd';


    
    function About(){

      const data = [
        {
        id:1,
        name: 'John Doe',
        title:'Director'
      },
      {
        id:2,
        name:'Jane Doe',
        title:'Managing Director'
      }
    ];

    const listItems = data.map((employee) => 
    <l1 key={employee.id.toString()}>
      {employee.name} | {employee.title}
    </l1>
    );

    return(
      <div>
        <h1>This is the About Page</h1>
        <p>Below are the staff members:</p>
        <ul>{listItems}</ul>
      </div>
    )

        
            // const contentStyle = {
            //     height:'160px',
            //     color: '#fff',
            //     lineHeight: '160px',
            //     textAlign:'center',
            //     background: '#364d79',

            // };

            // return(
            //     <div>
            //       <h1>This is the About Page</h1>
            //       <div style={{width:50 + '%', margin:'auto'}}></div>
            //       <Carousel autoplay>
            //         <div>
            //             <h3 style={contentStyle}>1</h3>
            //         </div>
            //         <div>
            //             <h3 style={contentStyle}>2</h3>
            //         </div>
            //         <div>
            //             <h3 style={contentStyle}>3</h3>
            //         </div>
            //       </Carousel>
            //     </div>
            //   )
    }

    export default About;

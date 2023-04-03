import React from 'react';
import {useState} from 'react';


// when its more than one inputs
// function Contact(){
//     const [data, setData] = useState({});

    function Contact(){
        const [data, setData] = useState({});
        const[submitted,setSubmitted] = useState(false)
    
        const serverHost = 'http://localhost:4000';
        async function addStudent(student){
            const url = serverHost + '/students';
            const options = {
                method:'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body:JSON.stringify(student)
            }
        
        let response = await fetch(url,options)

        if(response.status === 200){
            setSubmitted(true)
        }
    }
    
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

    //create an object for the current input field event
        const currentInputFieldData = {
            [name]: value
        }
        //Merge the data object with the current inout field data object

        const updateData = {
            ...data,
            ...currentInputFieldData
        }
        setData(updateData);
    }
    const handleSubmit = (e) => {
        console.log(data);
        addStudent(data)
        e.preventDefault();
    }

    return(
        <div>
            <h1>This is the Contact Page</h1>
            {!submitted ?
                <form onSubmit={handleSubmit}>
                    <label>
                        First Name:
                        <input name="first_name" type="text" onChange={handleChange}/>
                    </label>
                    <label>
                    Middle Name:
                        <input name="second_name" type="text" onChange={handleChange}/>
                    </label>
                    <label>
                        Last Name:
                        <input name="last_name" type="text" onChange={handleChange}/>
                    </label>
                    <input type="submit" value="submit"/>
                </form>
            :
            <p>You data has been submitted successfully. Thank you so much</p>
        }
        </div>
    );  
}






// when its only one input

// function Contact(){
//     const [name, setName] =useState('');
//     const handleChange = (e) => {
//         setName(e.target.value);
//     }

//     const handleSubmit = (e) => {
//         console.log(name);
//         e.preventDefault();
 
//     }

//     return(
        // <div>
        //     <h1>This the Contact Page</h1>
        //     <form onSubmit={handleSubmit}>
        //         <label>
        //             Name:
        //             <input type="text" onChane={handleChange}/>
        //         </label>
        //         <input type="submit" value="submit"/>
        //     </form>
        // </div>
//     );
// }






export default Contact;
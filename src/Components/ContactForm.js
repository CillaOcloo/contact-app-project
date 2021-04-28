
import  { useState } from 'react';

function ContactForm(props) {
    const [state,setState]=useState(
        [
            {Name: '',
            Phone_number: '',
            Location: '' },
        ]);

        function handleOnChange(event) {
            setState({
              ...state,
              [event.target.name]: event.target.value,
            });
          }

          function handleSubmit() { 
          let user = { ...state, };
          console.log(user)
          props.handleAddContacts(user);
        }
return(
   <div className="details" >
    <form>
    <div>
    <label>Name</label>
    <input
      type="text"
      name="name"
      value={state.Name} 
      onChange={handleOnChange} 
    />
  </div> <br></br>

 <div>
 <label>Phone number</label>
 <input
    type="number"
    name="phone_number"
    value={state.Phone_number}
    onChange={handleOnChange} 
   />
  </div><br></br>

  <div>
  <label>Location</label>
 <input
    type="text"
    name="location"
    value={state.Location}
    onChange={handleOnChange} 
   />
 </div> <br></br>

<div>
  <button type="button" className="btn" onClick={handleSubmit}>
  Save
   </button>
      </div>
      
    </form>

</div>
  );
  }
  
  export default ContactForm;
  
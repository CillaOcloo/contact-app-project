import {useState} from 'react'
import { connect } from 'react-redux';
import ContactForm from '../Components/ContactForm';
import ContactList from '../Components/ContactList';
import {logout} from '../actions/authActions';


 function dashboard(props) {
    function handleLogout(){
       props.logout();
    }
    return (  
       <div className="container"> ²
          <div className="row">
            <h2>Contact Form</h2>
              <div className="col-md-6">
            <ContactForm />
            <button type="button" style={{backgroundColor:'red',color:'black'}} onClick={handleLogout}>Logout</button> 
         </div>
      
          <div className="container">
              <div className="row">
                <div className="col-md-6">
                 <ContactList />
               </div>
            </div>
         </div>
      </div>
    </div>
                     
    );
}
const mapDispatchToProps ={logout};
export default connect(null,mapDispatchToProps) (dashboard);

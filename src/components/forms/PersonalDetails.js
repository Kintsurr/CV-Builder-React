const PersonalDetails = ({handleChange, values}) =>{


    
    return(
    
    <div className="container">
        <h1 className="my-4">Personal Details</h1>
        <div className="row my-3">
            <label className="col">
                <input 
                type="text" 
                className="form-control" 
                placeholder="First name" 
                value={values.firstName} 
                onChange={handleChange('firstName')}
                />
            </label>
            <div className="col">
                <input 
                type="text" 
                className="form-control" 
                placeholder="Last name" 
                value={values.lastName} 
                onChange={handleChange('lastName')}
                />
            </div>
        </div>
        <div className="row my-3">
            <div className="col">
                <input 
                type="text" 
                className="form-control" 
                placeholder="Email"
                value={values.email} 
                onChange={handleChange('email')}
                />
            </div>
            <div className="col">
                <input 
                type="text" 
                className="form-control" 
                placeholder="Phone"
                value={values.phone} 
                onChange={handleChange('phone')}  
                />
            </div>
        </div>
        <div className="row my-3">
            <div className="col">
                <input 
                type="text" 
                className="form-control" 
                placeholder="Country" 
                value={values.country} 
                onChange={handleChange('country')}  
                />
            </div>
            <div className="col">
                <input 
                type="text" 
                className="form-control" 
                placeholder="City"
                value={values.city} 
                onChange={handleChange('city')}
                />
            </div>
        </div>
    </div>
    )
}
export default PersonalDetails
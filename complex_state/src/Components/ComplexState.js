import React from 'react'
import img from "./Image/avtar1.jpg"
import Star from './Star'

const ComplexState = () => {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })

    /**
     * Challenge: Fill in the values in the markup
     * using the properties of our state object above
     * (Ignore `isFavorite` for now)
     */
    
    function toggleFavorite() {
        setContact(prevState =>{
           return{ ...prevState,
            isFavorite: prevState.isFavorite ? false : true
           }
        })
    }
    
    return (
        <main>
            <article className="card">
                <img src= {img} className="card--image" />
                <div className="card--info">
                  <Star isFilled = {contact.isFavorite} handleClick = {toggleFavorite}/>
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}

export default ComplexState
import React from 'react'
import img from "./Image/avtar1.jpg"
import star from "./Image/star.png"

const ComplexState = () => {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    /**
     * Challenge: Fill in the values in the markup
     * using the properties of our state object above
     * (Ignore `isFavorite` for now)
     */
    
    function toggleFavorite() {
        console.log("Toggle Favorite")
    }
    
    return (
        <main>
            <article className="card">
                <img src= {img} className="card--image" />
                <div className="card--info">
                    <img 
                        src={star} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
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
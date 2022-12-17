import React from 'react'

const LearnForm = () => {
    const [formData,setFormData] = React.useState(

        {firstName : "",
         lastName: "",
          email: "",
           comments: "",
            isFriendly: true,
             employed :"",
                selectionColor:""
            }
    )

    // console.log(formData.selectionColor)

    function handleEvent(event){
        const {name, value, type, checked} = event.target
        setFormData(prevValue =>{
           return{ ...prevValue,
            [name] : type==="checkbox" ? checked : value
    }})
    }
   const  handleSubmit = (e)=>{
        e.preventDefault();
        //Submit to api
        console.log(formData)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="firs tName" 
                onChange={handleEvent} 
                name="firstName" 
                value={formData.firstName} 
            />

            <input 
                type="text" 
                placeholder="last Name" 
                onChange={handleEvent} 
                name="lastName" 
                value={formData.lastName} 
            />

            <input 
                type="email" 
                placeholder="Email" 
                onChange={handleEvent} 
                name="email" 
                value={formData.email} 
            />

            <textarea 
                value={formData.comments} 
                placeholder="Comments" 
                onChange={handleEvent} 
                name="comments" 
            /> <br/>

            <input 
                type="checkbox" 
                onChange={handleEvent} 
                name="isFriendly" 
                id="isFriendly" 
                checked={formData.isFriendly} 
            /> 
            <label htmlFor='isFriendly'>Are you friendly?</label><br/><br/>

            <fieldset>
                <legend>Current employe status</legend>
                <input 
                    type="radio" 
                    id='unemployed' 
                    name='employed' 
                    onChange={handleEvent} 
                    value="unemployed" 
                    checked={formData.employed === "unemployed"} 
                />
                <label htmlFor='unemployed'>Unemployed</label><br/>

                <input 
                    type="radio" 
                    id='part-Time' 
                    name='employed' 
                    onChange={handleEvent} 
                    value="part-Time" 
                    checked={formData.employed === "part-Time"}
                />
                <label htmlFor='part-ime'>Part-time</label><br/>

                <input 
                    type="radio" 
                    id='full-Time' 
                    name='employed' 
                    onChange={handleEvent} 
                    value="full-Time" 
                    checked={formData.employed === "full-Time"} 
                />
                <label htmlFor='full-Time'>Full-time</label>
            </fieldset>
            <br/>

            <label htmlFor='selectionColor'>What is your favourite color?</label>
            <select
                id='selectionColor'
                value={formData.selectionColor}
                onChange={handleEvent}
                name="selectionColor"
            >
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="white">White</option>
                <option value="black">Black</option>
                <option value="orange">Orange</option>
                <option value="pink">Pink</option>

            </select>
            <br/><br/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default LearnForm
import React from 'react'

const Forms = () => {
    const [form, setForm] = React.useState(
        {

            userName : "",
            password : "",
            Cpassword : "",
            isChecked : true
        }
    )

    



    function handleEvent(event) {
        const {name, value, type, checked} = event.target;

        setForm(prevValue=>{
            return {
                ...prevValue,
                [name] : type === "checkbox"? checked : value
            }
        })

    }

    const formSubmit = (e)=>{
        e.preventDefault()
        console.log(form)
        if(form.password === form.Cpassword){
            console.log("Match")
        }else{
            console.log("Password not matched")
            return 
        }

        if(form.isChecked){
            console.log("Thanks for signup in the newsletter")
        }
    }

   



  return (
    <div className='main'>
        <form onSubmit={formSubmit}>
            <div className="forUserName">

                <label htmlFor="userName">User Name</label>
                <input 
                    type="text" 
                    id="userName" 
                    name="userName" 
                    placeholder="User Name"
                    value={form.userName}
                    onChange={handleEvent}
                /><br/>
            </div>
            
            <div className="forPassword">

                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="Password"
                    value={form.password}
                    onChange={handleEvent}
                /><br/>
            </div>

            <div className="forCpassword">

                <label htmlFor="Cpassword">Re-Password</label>
                <input 
                    type="password" 
                    id="Cpassword" 
                    name="Cpassword" 
                    placeholder="Confirm Password"
                    value={form.Cpassword}
                    onChange={handleEvent}
                 /><br/>
            </div>

            <div className="forCheckBox">
                <input 
                    type="checkbox" 
                    id="isChecked" 
                    name="isChecked" 
                    onChange={handleEvent}
                    checked={form.isChecked}
                />
                <label htmlFor="checked">I want to join the newsletter.</label>
            </div>
            

            <div className="forSubmit">
                <button >Submit</button>
            </div>

        </form>
    </div>
  )
}

export default Forms
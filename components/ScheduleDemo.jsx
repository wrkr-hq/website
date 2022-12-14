import React from 'react'

const ScheduleDemo = () => {

    return(
        // how to connect to navigation?
        // how to change this to jsx formating? 
        // where to send information once submitted?
    <div>
        <div>
            <h1>Thanks For Your Interest In WRKR Product!</h1>
            <p>Tell us a little about yourself, and we'll get back to you as soon as possible.</p>
            <form>
            Your Name
                <input type="text" value="First name"></input>
                <input type="text" value="Last name"></input>
            Phone Number
                <input type="text" value="Your phone number"></input>
            Company Name
                <input type="text" value="Your company's name" ></input>
            Company Email
                <input type="email" value="Your company's email address"></input>
            What Does Your Company Do?
                <input type="text"></input>
            <input id='submit' type="submit" value="Submit"></input>
            </form>
        </div>
    </div>
    )
}

export default ScheduleDemo


import React from 'react';

const YouTubeForm = () => {
    return (
        <div>
            <form action="">
                <label htmlFor="name">Name</label>
                <input type="text" id={"name"} name={"name"}/>

                <label htmlFor="email">Email</label>
                <input type="email" name={"email"} id={"email"}/>

                <label htmlFor="channel">Channel</label>
                <input type="text" id={"channel"} name={"channel"}/>

                <button>Submit</button>
            </form>
        </div>
    );
};

export default YouTubeForm;

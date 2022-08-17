import React, { useState } from 'react'
import $ from 'jquery';

const Search = ( { getQuery } ) => {

    var typingTimer;                //timer identifier
    var doneTypingInterval = 2000;  //time in ms (2 seconds)

    //on keyup, start the countdown
    // $('#myInput').keyup(function(){
    //     clearTimeout(typingTimer);
    //     if ($('#myInput').val()) {
    //         typingTimer = setTimeout(doneTyping, doneTypingInterval);
    //     }
    // });

    //user is "finished typing," do something
    function doneTyping () {
        getQuery($('#myInput').val())
    }
    const [text, setText] = useState('');

    const onChange = (q) => {
        setText(q)
        // getQuery(q)
    }

    const handleSubmit = event => {
        event.preventDefault();
        doneTyping()
        console.log('form submitted ✅');
      };

    return (
        <section className='search'>
            <form onSubmit={(handleSubmit)}>
                <input
                id="myInput"
                onChange={(e) => onChange(e.target.value)}
                type='text'
                className='form-control'
                placeholder='Type in a card name'
                autoFocus
                value={text}
                ></input>  
            <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default Search

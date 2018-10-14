import React from 'react';

const QuickReply = (props) => {
    if (props.reply.payload) {
        return (
<<<<<<< HEAD
            <a style={{ margin: 3}} className="btn-floating btn-large waves-effect waves-light blue"
               onClick={() =>
                   props.click(
                       props.reply.structValue.fields.payload.stringValue,
                       props.reply.structValue.fields.text.stringValue
                   )}
               >
                {props.reply.structValue.fields.text.stringValue}
=======
            <a style={{ margin: 3}} onClick={() => props.click(props.reply.payload, props.reply.text)}
               className="btn-floating btn-large waves-effect waves-light blue">
                {props.reply.text}
>>>>>>> 2057bad... s10 -004 – Response format
            </a>
        );
    } else {
        return (
<<<<<<< HEAD
            <a style={{ margin: 3}} className="btn-floating btn-large waves-effect waves-light blue"
               href={props.reply.structValue.fields.link.stringValue}>
                {props.reply.structValue.fields.text.stringValue}
=======
            <a style={{ margin: 3}} href={props.reply.link}
               className="btn-floating btn-large waves-effect waves-light blue">
                {props.reply.text}
>>>>>>> 2057bad... s10 -004 – Response format
            </a>
        );
    }

};

export default QuickReply;

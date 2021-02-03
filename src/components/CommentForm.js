import React, {useState} from 'react';

export const CommentForm = (props) => {
    const [comment,setComment] = useState("")
    return (
        <div class="Comments-field">
            {props.children}
            <div class="comment-text-box">
                <textarea value={comment} onChange={e => setComment(e.target.value)}></textarea>
                <button onClick={() => props.onComment({text: comment})}>Написать консультанту</button>
            </div>
        </div>
    )
}

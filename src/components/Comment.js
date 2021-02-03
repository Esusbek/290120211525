export const Comment = ({name, text, date}) => {
    return (
    <div class="comment-box">
        <div class="comment-header">
            <span class="name-span">{name}</span>
            <span class="date-span">{date}</span>
        </div>
        <div class="comment-text">
            <p>{text}</p>
        </div>
    </div>
    )
}


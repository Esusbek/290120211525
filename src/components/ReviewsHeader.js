export const ReviewsHeader = (props) => {
    console.log(props.comments)
    return (
        <div class="reviewsHeader">
            <div class="rHeader-box">
                <span>Последние отзывы</span> <a href="#">Все отзывы</a>
            </div>
            <div class="icon-heart">
                <span>{props.likes}</span>
            </div>
            <div class="icon-bubble">
                <span>{props.comments}</span>
            </div>
        </div>
    )
}
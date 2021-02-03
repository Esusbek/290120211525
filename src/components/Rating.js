export const Rating = ({title1, title2, title3, number1, number2, number3}) => {
    return (
        <div class="box2">
            <p>Услуг</p>
            <div class="ratings">
                <div class="titles-box">
                    <div class="title1">
                        <p>{title1}</p>
                    </div>
                    <div class="title2">
                        <p>{title2}</p>
                    </div>
                    <div class="title3"> 
                        <p>{title3}</p>
                    </div>
                </div>
                <div class="numbers-box">
                    <div class="number1">
                        <p>{number1}</p>
                    </div>
                    <div class="number2">
                        <p>{number2}</p>
                    </div>
                    <div class="number3">
                        <p>{number3}</p>
                    </div>
                </div>
            </div>
            <div class="total-box">
                <div class="total">Всего</div>
                <div class="totalSum"><p>{parseInt(number1, 10)+parseInt(number2,10)+parseInt(number3,10)}</p></div>
            </div>
        </div>
    )
}
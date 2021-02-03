export const Header = ({pfp = "https://s3-alpha-sig.figma.com/img/1fc9/88cc/75e823313c999f5e437da758b7e14205?Expires=1613347200&Signature=c-xaluT89~ZB97tW2ZEA4nIPzMSEdv4WxQA8dMHDEWsxwym2DVOo2YK7JvyjNZU3ocLGYVd5MGOKyROQRG0IOMyX86I~AekK1wEYYZSC-W96CDSDCn6k-ZMqk9fm58K-nT70q0-CbnaP8ElG8dg1pPtkTIiBwnvSqUWmVAp20ov6tWeYJxF7qu1eUdv5VsvZPOpUm4-jnl4Vm~Kk4B9fpJdZOLAmdJ0gwazAcqaicTfLXeRdz-WINs4wuk0CS3GqEU5iMvGk7FKB5lRNX5DnwOvGzoR689gQ~Vy~q-O0fCc6SWEzVVSCpv5~QoSc-8SuJQQoGdiCys1COxS3dLVASA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA", name, position, summary}) => {
    return (
    <div class="box1">
        <div class="pic-box">
            <img src={pfp} alt="pfp"></img>
        </div>
        <div class="name-box">
            <p class="name-p">{name}</p>
            <p class="position-p">{position}</p>
            <div class="summary-box">
                <p>{summary}</p>
            </div>
        </div>
    </div>
    )
}
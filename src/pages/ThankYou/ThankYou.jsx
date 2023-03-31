import "./ThankYou.scss";

export default function ThankYou() {
    return (
        <div className="thankyou">
            <div className="thankyou__background">
                <div className="thankyou__modal">
                    <h1 className="thankyou__title">Thank you for signing up.</h1>
                    <button className="thankyou__btn1">Create a report</button>
                    <button className="thankyou__btn2">Explore</button>
                </div>
            </div>
        </div>
    )
}
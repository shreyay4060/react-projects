import Form from "./conatct/Form.jsx";

export default function Hero(){
    return <>
    
        <h1 className="h1">CONTACT US</h1>
    <div className="main">
        <p>LET'S CONNECT : WE'RE HERE TO HELP , AND WE'D LOVE TO HERE FROM YOU! WHETHER YOU HAVE A QUESTION , COMMENT , OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONATACT FROM OF THIS PAGE , OR BY PHONE,EMAIL, OR SOCIAL MEDIA.</p>
        <div className="hero-section">

        <div className="form">

        <Form />
            
        </div>
        <div className="service-img">
            <img src="/images/service.jpeg" height="500px" alt="" />
        </div>
        </div>
    </div>

    </>
}
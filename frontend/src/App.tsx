import {useEffect, useRef, useState} from "react";
import "./App.css";
import logo from "./logo.png";
import door from "./door.gif";

const App = () => {
    const introduce = ["공사중", ".", ".", ".", ".", ".", ".", ".", ".", "."];
    const [showButton, setShowButton] = useState(false);
    const handleImageClick = () => {
        setShowButton(!showButton);
    };
    const buttonRef = useRef<HTMLButtonElement>(null);

    const popUp = () => {
        window.Calendly.initPopupWidget({
            url: "https://calendly.com/miu-null/mystic-mirror",
        });
    };
    useEffect(() => {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }
    }, []);

    useEffect(() => {
        if (showButton && buttonRef.current) {
            buttonRef.current.scrollIntoView({behavior: "smooth"});
        }
    }, [showButton]);

    return (
        <div className="App">
            <header className="App-container">
                <div className="window">
                    <img src={logo} className="App-logo" width={400} alt="logo" />
                    <div className={"Rectangle"} style={{height: "500px", overflowY: "auto"}}>
                        <div className="intro">
                            {introduce.map((intro, index) => (
                                <p key={index}>{intro}</p>
                            ))}
                        </div>
                        <div className="intro">
                            <p>문을 클릭하세요</p>{" "}
                        </div>
                        <img
                            src={door}
                            className="App-door"
                            width={300}
                            alt="door"
                            onClick={handleImageClick}
                            style={{cursor: "pointer"}}
                        />
                        {showButton && (
                            <>
                                <button ref={buttonRef} className="App-button" onClick={popUp}>
                                    상담 예약하기
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </header>
        </div>
    );
};

export default App;

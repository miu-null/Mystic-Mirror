import {useEffect, useState} from "react";
import "./App.css";
import logo from "./logo.png";
import door from "./door.gif";

const App = () => {
    const introduce = ["공사중", ".", ".", ".", ".", ".", ".", ".", ".", "."];
    const [showButton, setShowButton] = useState(false);
    const handleImageClick = () => {
        setShowButton(!showButton);
    };

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

    return (
        <div className="App">
            <header className="App-container">
                <div className="window">
                    <img src={logo} className="App-logo" width={400} alt="logo" />
                    <div className={"Rectangle"} style={{height: "450px", overflowY: "auto"}}>
                        <div className="intro">
                            {introduce.map((intro, index) => (
                                <p key={index}>{intro}</p>
                            ))}
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
                                <button className="App-button" onClick={popUp}>
                                    문 열기
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

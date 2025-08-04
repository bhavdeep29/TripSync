import React, { useRef } from "react";
import ControlledCarousel from "./HomeImg";
import LocationScreen from "./Locationscreen";

function HomeScreen() {
    const locationRef = useRef(null);

    const handleScroll = () => {
        locationRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <main>
            <header className="header" style={{ margin: "20px 0px 0px 0px" }} >
                <div className="header-img">
                    <ControlledCarousel />
                </div>

                <div className="header-content">
                    <div className="header-detail">
                        <h1 className="content-title">Traveling<br />Happy Journey</h1>

                        <p className="content-description">
                            Traveling evokes a sense of liberation, freeing the spirit to wander and explore uncharted territories, leaving behind the familiar and embracing the unknown.
                            The anticipation of travel fills the heart with excitement, as it opens the door to new experiences, cultures, and perspectives, igniting a sense of wonder and curiosity.
                        </p>

                        <button className="home-btn" onClick={handleScroll}>Scroll</button>
                    </div>
                </div>
            </header>

            {/* This is where we scroll to */}
            <div ref={locationRef}>
                <LocationScreen />
            </div>
        </main>
    );
}

export default HomeScreen;

import React from "react";

const Hero = props => (
    <section className="hero is-fullheight is-light is-bold">
        <div className="hero-body ">
            <div className="container has-text-centered">
                {props.children}
            </div>
        </div>
    </section>
);

export default Hero;
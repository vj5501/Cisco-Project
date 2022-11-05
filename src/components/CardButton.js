import React from "react";

const CardButton = () => (
    <section className="page-section portfolio" id="portfolio">
        <div className="container">

            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Bootstrap Card And Button</h2>

            <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
            </div>

            <div className="row justify-content-center">


                <div className="card mb-5 col-md-6 col-lg-4 mb-4" style={{ width: "18rem" }}>
                    <img
                        src="https://images.pexels.com/photos/3530357/pexels-photo-3530357.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        className="card-img-top"
                        alt="..."
                    />
                    <div className="card-body">
                        <h5 className="card-title">Hello</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </p>
                        <a href="#contact" className="btn btn-success">
                            Button
                        </a>
                    </div>
                </div>

                <div className="card col-md-6 col-lg-4 mb-5" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#contact" className="card-link">Card link</a>
                        <a href="#contact" className="card-link">Another link</a>
                    </div>
                </div>

                <div className="card text-white bg-primary col-md-6 col-lg-4 mb-5" style={{ width: "18rem" }}>
                    <div className="card-header">Header</div>
                    <div className="card-body">
                        <h5 className="card-title">Primary card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

                <div className="card border-secondary mb-5" style={{ width: "18rem" }}>
                    <div className="card-header">Header</div>
                    <div className="card-body text-secondary">
                        <h5 className="card-title">Secondary card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

                <div className="text-center">
                <div className="card-body">
                    <button type="button" class="btn btn-success">Success</button>
                    <button type="button" class="btn btn-danger">Danger</button>
                    <button type="button" class="btn btn-warning">Warning</button>
                    <button type="button" class="btn btn-info">Info</button>
                </div>
            </div>
            <div className="text-center">
                <button type="button" class="btn btn-outline-primary" data-mdb-ripple-color="dark">Primary</button>
                <button type="button" class="btn btn-outline-secondary" data-mdb-ripple-color="dark">Secondary</button>
                <button type="button" class="btn btn-outline-success" data-mdb-ripple-color="dark">Success</button>
                <button type="button" class="btn btn-outline-danger" data-mdb-ripple-color="dark">Danger</button>
                <button type="button" class="btn btn-outline-warning" data-mdb-ripple-color="dark">Warning</button>
                <button type="button" class="btn btn-outline-info" data-mdb-ripple-color="dark">Info</button>
                <button type="button" class="btn btn-outline-light" data-mdb-ripple-color="dark">Light</button>
                <button type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark">Dark</button>
            </div>
            </div>
        </div>
    </section>
)

export default CardButton;
class Footer extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <footer class="container-fluid footer-section" id="aboutus">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <ul class="social">
                                <li><a href="https://github.com/LullabyOfLies" target="_blank" rel="noopener"><i class="fa fa-github" aria-hidden="true"></i></a></li>
                                <li><a href="https://www.youtube.com/@nassipy23" target="_blank" rel="noopener"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/cristian-bien-armedilla-559a34268/" target="_blank" rel="noopener"><i class="fa fa-linkedin"></i></a></li>
                                <li><a href="https://www.facebook.com/LesterJosephGloria" target="_blank" rel="noopener"><i class="fa fa-facebook-official" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>  
                    </div>
                </div>
            </footer>
        `
    }
}

customElements.define('nassipy-footer', Footer);


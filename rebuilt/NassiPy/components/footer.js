class Footer extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <footer class="container-fluid footer-section" id="aboutus">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <ul class="social">
                                <li><a href="https://www.facebook.com/" target="_blank" rel="noopener"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="https:/www.twitter.com" target="_blank" rel="noopener"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="https:/www.linkedin.com" target="_blank" rel="noopener"><i class="fa fa-linkedin"></i></a></li>
                                <li><a href="#" target="_blank" rel="noopener"><i class="fa fa-rss"></i></a></li>
                                <li><a href="https:/www.dribbble.com" target="_blank" rel="noopener"><i class="fa fa-dribbble"></i></a></li>
                            </ul>
                        </div>  
                    </div>
                </div>
            </footer>
        `
    }
}

customElements.define('nassipy-footer', Footer);


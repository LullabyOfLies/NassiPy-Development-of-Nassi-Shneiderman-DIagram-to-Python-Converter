class Navbar extends HTMLElement{
       connectedCallback() {
           this.innerHTML = `
               <nav class="navbar navbar-expand-lg bg-transparent custom-navbar">
                   <div class="container container-fluid logo">
                       <!-- Website Logo -->
                       <a class="navbar-brand" href="../index.html">
                           <img src="../../images/logoorig.png" alt="NassiPy" class="navbar-icon" />
                       </a>
   
                       <!-- Responsive Hamburger button -->
                       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" aria-controls="collapsibleNavbar" aria-expanded="false" aria-label="Toggle navigation" onclick="myFunction(this)">
                           <!-- <span class="navbar-toggler-icon"></span> -->
                           <span class="bar1"></span> <span class="bar2"></span> <span class="bar3"></span>
                       </button>
   
                       <!-- Navbar Menu -->
                       <div class="collapse navbar-collapse" id="collapsibleNavbar">
                           <div class="navbar-nav mr-auto">
                               <a class="nav-link" href="../../index.html">HOME</a>
                               <a class="nav-link" href="../tutorials.html">TUTORIALS</a>
                               <a class="nav-link" href="../quiz.html">QUIZ</a>
                               <a class="nav-link" href="../playground.html">PLAYGROUND</a>
                               <a class="nav-link" href="../about-us.html">ABOUT US</a>
                           </div>
                       </div>
                   </div>
               </nav>
           `
       }
   }
   
   customElements.define('nassipy-tutorials-navbar', Navbar);
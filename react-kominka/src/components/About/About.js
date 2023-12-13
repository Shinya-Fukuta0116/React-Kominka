import React from 'react';


const About = () => {
  return (
    <div>
      <section class="page-section" id="services">
        <div class="container px-4 px-lg-5">
          <h2 class="text-center mt-0">At Your Service</h2>
          <hr class="divider" />
          <div class="row gx-4 gx-lg-5">
            <div class="col-lg-3 col-md-6 text-center">
              <div class="mt-5">
                <div class="mb-2"><i class="bi-gem fs-1 text-primary"></i></div>
                <h3 class="h4 mb-2">Sturdy Themes</h3>
                <p class="text-muted mb-0">Our themes are updated regularly to keep them bug free!</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 text-center">
              <div class="mt-5">
                <div class="mb-2"><i class="bi-laptop fs-1 text-primary"></i></div>
                <h3 class="h4 mb-2">Up to Date</h3>
                <p class="text-muted mb-0">All dependencies are kept current to keep things fresh.</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 text-center">
              <div class="mt-5">
                <div class="mb-2"><i class="bi-globe fs-1 text-primary"></i></div>
                <h3 class="h4 mb-2">Ready to Publish</h3>
                <p class="text-muted mb-0">You can use this design as is, or you can make changes!</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 text-center">
              <div class="mt-5">
                <div class="mb-2"><i class="bi-heart fs-1 text-primary"></i></div>
                <h3 class="h4 mb-2">Made with Love</h3>
                <p class="text-muted mb-0">Is it really open source if it's not made with love?</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="portfolio">
        <div class="container-fluid p-0">
          <div class="row g-0">
            <div class="col-lg-4 col-sm-6">
              <a class="portfolio-box" href="assets/img/portfolio/fullsize/1.jpg" title="Project Name">
                <img className="img-fluid" src="./imgs/cafe time.png" alt="..." />
                <div class="portfolio-box-caption">
                  <div class="project-category text-white-50">Category</div>
                  <div class="project-name">Project Name</div>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-sm-6">
              <a class="portfolio-box" href="assets/img/portfolio/fullsize/2.jpg" title="Project Name">
                <img className="img-fluid" src="./imgs/cafe Machine.png" alt="..." />
                <div class="portfolio-box-caption">
                  <div class="project-category text-white-50">Category</div>
                  <div class="project-name">Project Name</div>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-sm-6">
              <a class="portfolio-box" href="assets/img/portfolio/fullsize/3.jpg" title="Project Name">
                <img className="img-fluid" src="./imgs/cafe making.png" alt="..." />
                <div class="portfolio-box-caption">
                  <div class="project-category text-white-50">Category</div>
                  <div class="project-name">Project Name</div>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-sm-6">
              <a class="portfolio-box" href="assets/img/portfolio/fullsize/4.jpg" title="Project Name">
                <img className="img-fluid" src="./imgs/Ika.png" alt="..." />
                <div class="portfolio-box-caption">
                  <div class="project-category text-white-50">Category</div>
                  <div class="project-name">Project Name</div>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-sm-6">
              <a class="portfolio-box" href="assets/img/portfolio/fullsize/5.jpg" title="Project Name">
                <img className="img-fluid" src="./imgs/Kappou.png" alt="..." />
                <div class="portfolio-box-caption">
                  <div class="project-category text-white-50">Category</div>
                  <div class="project-name">Project Name</div>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-sm-6">
              <a class="portfolio-box" href="assets/img/portfolio/fullsize/6.jpg" title="Project Name">
                <img className="img-fluid" src="./imgs/Tonkatsu.png" alt="..." />
                <div class="portfolio-box-caption p-3">
                  <div class="project-category text-white-50">Category</div>
                  <div class="project-name">Project Name</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

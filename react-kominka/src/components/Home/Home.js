import React from 'react'
import Button from 'react-bootstrap/Button';


const Home = () => {
  return (
    <div>
      <header class="masthead">
        <div class="container px-4 px-lg-5 h-100">
          <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
            <div class="col-lg-8 align-self-end">
              <h1 class="text-white font-weight-bold">Secret Place in Nature</h1>
              <hr class="divider" />
            </div>
            <div class="col-lg-8 align-self-baseline">
              <p class="text-white-75 mb-5">with the best foods and cafe</p>
              <Button variant="secondary">Find Out More</Button>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Home

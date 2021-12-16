            # demoblaze 1.1.1
# The framework that I utilized for my tests is called Cypress it is way faster than the other testing frameworks. To be able to run tests, they should do "npm install" and "npm run cy:open" to launch cypress test runner. After that, they just need to click on the test that they would like to run. If they would like to run the tests in headless mode "npm run cy:run" can be used. If you have familier with Docker you can use it as well
        
# 1. Clone project using git clone https://github.com/mevlutbilim/demoblaze.git
# 2. install npm globally :>npm install -g npm
# 3. Install docker desktop:>https://www.docker.com/
# 4. build doker in terminal :
# docker build --pull --rm -f "Dockerfile" -t  demoblaze:latest 

# 5. run docker:> docker run -t mycypresscontainer mycypressimage
# 6. open cypress: npm run cy:open
# 7. run cypress in terminal :> npm run cy:run

# I created POM but I never used it. I used  App Actions instead of POM
# headers.spec.js -> basic tests
# products.spec.js -> complex tests
# order.spec.js ->more complex tests

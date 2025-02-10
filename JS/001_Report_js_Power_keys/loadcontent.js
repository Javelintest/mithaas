
      document.addEventListener('DOMContentLoaded', function() {
          // Function to load content based on the page
          function loadContent(page) {
              const content = document.getElementById('content');
              let contentHtml = '';

              switch(page) {
                  case 'home':
                      contentHtml = `
                          <h1>Home Page</h1>
                            <div id=\"reportContainer\" class=\"dds__d-none\" style=\"height:804px; overflow-y:hidden\"> \
                            <iframe id=\"reportFrame\" onload=\"powerBiLoaded()\" frameborder=\"0\" seamless=\"seamless\" class=\"viewer pbi-frame\" style=\" width: 100%; height: 840px;\" src=\"https://app.powerbi.com/view?r=eyJrIjoiZGY0M2Y1NjYtZjExZC00MjUxLWJjODQtMzI2YWViMGViOWNkIiwidCI6IjRkMjZkODUyLWYxNTYtNGEwYy05MGM4LWFiNWMzMTgyZTZkNSJ9\"></iframe> \
                            </div>
                            
                      `;
                      break;
                  case 'about':
                      contentHtml = `
                          <h1>About Us</h1>
                          <p>Learn more about us on this page.</p>
                      `;
                      break;
                  case 'services':
                      contentHtml = `
                          <h1>Our Services</h1>
                          <p>Discover the services we offer.</p>
                      `;
                      break;
                  case 'contact':
                      contentHtml = `
                          <h1>Contact Us</h1>
                          <p>Get in touch with us through this page.</p>
                      `;
                      break;
                  default:
                      contentHtml = `
                          <h1>404 Not Found</h1>
                          <p>The page you are looking for does not exist.</p>
                      `;
                      break;
              }

              content.innerHTML = contentHtml;
          }

          // Function to handle navigation
          function handleNavigation(event) {
              event.preventDefault();
              const page = event.target.getAttribute('data-page');
              loadContent(page);

              // Update the URL with a unique path
              const url = `/${page}`;
              history.pushState({page: page}, '', url);
          }

          // Event listener for link clicks
          const links = document.querySelectorAll('nav a');
          links.forEach(link => {
              link.addEventListener('click', handleNavigation);
          });

          // Handle back/forward navigation
          window.addEventListener('popstate', function(event) {
              if (event.state && event.state.page) {
                  loadContent(event.state.page);
              } else {
                  loadContent('home');
              }
          });

          // Load initial content based on the URL
          const initialPage = window.location.pathname.slice(1) || 'home';
          loadContent(initialPage);
      });
    
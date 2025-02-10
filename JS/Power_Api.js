        const iframeUrls = {
            report1: 'https://app.powerbi.com/view?r=eyJrIjoiNjk3NzcxMmQtNzE5Ny00ZTU1LWI1YjMtNTRiYTYwYzY5ZmIzIiwidCI6IjRkMjZkODUyLWYxNTYtNGEwYy05MGM4LWFiNWMzMTgyZTZkNSJ9',
            report2: 'https://app.powerbi.com/view?r=eyJrIjoiZGY0M2Y1NjYtZjExZC00MjUxLWJjODQtMzI2YWViMGViOWNkIiwidCI6IjRkMjZkODUyLWYxNTYtNGEwYy05MGM4LWFiNWMzMTgyZTZkNSJ9',
            report3: 'https://example.com/report3' // Replace with actual URL for Report 3
        };

        document.getElementById('refreshBtn').addEventListener('click', function() {
            location.reload();
        });

        function loadContent(content) {
            const contentArea = document.getElementById('content');
            let htmlContent = '';

            switch(content) {
                case '':
                    htmlContent = '<h1>Home</h1><p>Welcome to our homepage.</p>';
                    break;
                case 'reports':
                    htmlContent = '<h1>Reports</h1><p>Here are our reports.</p>';
                    break;
                case 'report1':
                case 'report2':
                case 'report3':
                    htmlContent = `<iframe title="${content}" width="100%" height="812" src="${iframeUrls[content]}" frameborder="0" allowFullScreen="true"></iframe>
                    <Div class="Cover"></div>`;
                    break;
                case 'services':
                    htmlContent = '<h1>Services</h1><p>Here are our services.</p>';
                    break;
                case 'service1':
                    htmlContent = '<h1>Service 1</h1><p>Details of Service 1.</p>';
                    break;
                case 'service2':
                    htmlContent = '<h1>Service 2</h1><p>Details of Service 2.</p>';
                    break;
                case 'service3':
                    htmlContent = '<h1>Service 3</h1><p>Details of Service 3.</p>';
                    break;
                case 'support':
                    htmlContent = '<h1>Support</h1><p>How can we help you?</p>';
                    break;
                case 'faq':
                    htmlContent = '<h1>FAQ</h1><p>Frequently Asked Questions.</p>';
                    break;
                case 'contact':
                    htmlContent = '<h1>Contact Us</h1><p>Get in touch with us.</p>';
                    break;
                case 'resources':
                    htmlContent = '<h1>Resources</h1><p>Here are our resources.</p>';
                    break;
                case 'blog':
                    htmlContent = '<h1>Blog</h1><p>Read our latest blog posts.</p>';
                    break;
                case 'docs':
                    htmlContent = '<h1>Docs</h1><p>Documentation and guides.</p>';
                    break;
                default:
                    htmlContent = '<h1>Welcome to Tech Services</h1><p>Select a menu item to see the content change dynamically.</p>';
            }

            contentArea.innerHTML = htmlContent;
            localStorage.setItem('currentContent', content);
        }

        document.addEventListener('DOMContentLoaded', function() {
            const savedContent = localStorage.getItem('currentContent');
            if (savedContent) {
                loadContent(savedContent);
            } else {
                loadContent('home');
            }
        });

        function toggleLoginBox() {
            const loginBox = document.getElementById('loginBox');
            if (loginBox.style.display === 'block') {
                loginBox.style.display = 'none';
            } else {
                loginBox.style.display = 'block';
            }
        }

        function login() {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Implement your login logic here. For now, just simulate a successful login.
            if (email && password) {
                localStorage.setItem('isLoggedIn', 'true');
                document.getElementById('loginBox').style.display = 'none';
                document.querySelector('.login-container').style.display = 'none';
                document.getElementById('logoutBtn').style.display = 'block';
            } else {
                alert('Please enter email and password');
            }
        }

        function logout() {
            localStorage.removeItem('isLoggedIn');
            document.querySelector('.login-container').style.display = 'block';
            document.getElementById('logoutBtn').style.display = 'none';
        }

        document.addEventListener('DOMContentLoaded', function() {
            if (localStorage.getItem('isLoggedIn') === 'true') {
                document.querySelector('.login-container').style.display = 'none';
                document.getElementById('logoutBtn').style.display = 'block';
            }
        });
  
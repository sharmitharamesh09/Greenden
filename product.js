   // Toggle side navigation
   const menuIcon = document.getElementById('menuicon');
   const sideNav = document.getElementById('sidenav');
   const closeNav = document.getElementById('closenav');

   menuIcon.addEventListener('click', () => {
     sideNav.style.right = '0';
   });

   closeNav.addEventListener('click', () => {
     sideNav.style.right = '-50%';
   });

   // Product search functionality
   const searchInput = document.getElementById('search');
   const productContainers = document.querySelectorAll('#product-container > div');

   searchInput.addEventListener('input', (e) => {
     const searchText = e.target.value.toLowerCase();

     productContainers.forEach((product) => {
       const productName = product.querySelector('h1').textContent.toLowerCase();
       if (productName.includes(searchText)) {
         product.style.display = 'block';
       } else {
         product.style.display = 'none';
       }
     });
   });
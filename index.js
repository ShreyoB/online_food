    const menuData = {
      breakfast: [
        {
          name: 'Toast',
          price: '₹40',
          image: 'images/toast.jpg'
        },
        {
          name: 'Pancakes',
          price: '₹75',
          image: 'images/pancakes.jpg'
        },
        {
          name: 'Omelette',
          price: '₹20',
          image: 'images/omelette.jpg'
        }
      ],
      lunch: [
        {
          name: 'Veg Rice',
          price: '₹100',
          image: 'images/vegrice.jpg'
        },
        {
          name: 'Chicken Rice',
          price: '₹130',
          image: 'images/chickenrice.jpg'
        },
        {
          name: 'Mutton Rice',
          price: '₹160',
          image: 'images/muttonrice.jpg'
        }
      ],
      dinner: [
        {
          name: 'Chicken Biryani',
          price: '₹180',
          image: 'images/chicken.jpg'
        },
        {
          name: 'Mutton Biryani',
          price: '₹200',
          image: 'images/mutton.jpg'
        },
        {
          name: '5 Roti + Veg Curry',
          price: '₹100',
          image: 'images/vegcurry.jpg'
        }
      ]
    };

    const menuTopics = document.querySelectorAll('.menu-topic');
    const menuItemsContainer = document.getElementById('menu-items');
    const selectedMenuItemField = document.getElementById('selected-menu-item');

    function populateMenuItems(category) {
      menuItemsContainer.innerHTML = '';

      menuData[category].forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const image = document.createElement('img');
        image.src = item.image;
        image.alt = item.name;
        image.addEventListener('click', () => {
          selectedMenuItemField.value = item.name;
        });
        menuItem.appendChild(image);

        const itemName = document.createElement('h3');
        itemName.textContent = item.name;
        menuItem.appendChild(itemName);

        const itemPrice = document.createElement('p');
        itemPrice.textContent = item.price;
        menuItem.appendChild(itemPrice);

        menuItemsContainer.appendChild(menuItem);
      });
    }

    menuTopics.forEach(topic => {
      topic.addEventListener('click', () => {
        const category = topic.getAttribute('data-category');

        menuTopics.forEach(topic => topic.classList.remove('active'));
        topic.classList.add('active');

        populateMenuItems(category);
      });
    });

    populateMenuItems('breakfast');
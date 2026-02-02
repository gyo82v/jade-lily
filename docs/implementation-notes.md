Jade Lily implementation list:

- [Content] [Home] instead of having three links, build three different section for each
            link. Each with a title, description, link and background.
- [Content] [Home] add a dine in section: it should include a description of the dine in 
            atmosphere, staff, fast service, quiet corners, background pic.
- [Content] [Home] add a favorite dishes section. include at least 3 dishes with image, title
            and description. use an automatic slider to show each dish.
- [Content] [Home] add a "value points" section at the end of the page. Include something like :
            fresh igredients, friendly staff, authentic recipes etc.. each with a title and description.
- [Content] [Home] add a "create an account section" in the bottom of the page with a title, 
            description and a link to create an account.
- [✅] {Content}{About} in desktop screen, add an image/photo/logo in the rigth side of the 
        existing top image.
- [Style] [About] desktop screens, fix the links section in the bottom of the page.
- [Style] [About] desktop screens, the reviews column and the info column should be 
          horizontally aligne in the bottom.
- [Style] [About] in the info column, add a separator element between each p tag.
- [Style] [Header] Design the app title "jadeLily" with chatgpt.
- [Content] Create some images with chatgpt to use as separator/placeholder/etc like and orange lily.
- [✅] {style}{not-found} style the page for mobile and desktop.
- [✅] {fix}{menu} the instance when a dish does not exists. example :/menu/mains/do-not-exists.
- [✅] {fix}{menu} fix the "back to the menu" link in the top of the page. it should bring the users 
        back to the previously visited page.
- [✅] {fix}{menu} the button in the details page of each dish. if "Order now" it should add the item to
        the cart(if user is logged in, otherwise link to the log in page), otherwise the button should be disabled.
- [Content] [Footer] in the copyright section add : @JadeLily -Portfolio Project. and add "Made by :" and 
            links to github, linkedin and the portfolio.
- [Content] [About] at the bottom of the page add a "About the Project" section, with fields like: made by,
            "This app was built as a portfolio project", "Focus on databses, React...",links to github... etc.
- [Style] [Header] Style the navbar for mobile.
- [Style] [Header] Style the navbar for desktop.
- [Style] [Menu] Style the menu navbar for mobile.
- [Style] [Menu] Style the menu navbar for desktop.
- [Fix] [Menu] fix the menu navbar so it highlights the current path.
- [style] [Menu] Style the filter navbar for mobile.
- [style] [Menu] Style the filter navbar for desktop.
- [Fix] [Menu] fix the filter navbar so it highlights the current filter.
- [Style] [Menu] Style the dish section for desktop.
- [Fix] [Menu/details] fix the menu details navbar so it highlights the current path.
- [Style] [Menu/details] style the dish details default section.
- [Style] [Menu/details] Style the dish details origin section.
- [Style] [Menu/details] Style the dish details ingredient section.
- [Style] [Menu/details] Style the page for desktop.
- [✅] {images}{menu} replace the kiwi delight images with chatgpt.
- [Style] [Account/dashbord] improve the style of each section.
- [Style] [Account/settings] style the settings page for desktop.
- [Style] [Account/deleteAccount] style the form for desktop.
- [Style] [Account/booktable] Style the form for desktop.
- [Style] [Account/cart] Style the page for desktop.
- [Style] [Account/orders] Style the page for desktop.
- [Style] [Account/cartAndOrders] Style the page in the case there are no items in the carts/orders.
                                  add messages to encourage customer to make orders.
- [Style] [account/menu] style the dishes section for desktop.
- [Style] [Account/menu] style the effects for each dish, for mobile and desktop.
- [Fix] [Account/orders] add a confirmation message when all or a single order are deleted.
- [Fix] [Account/menu] fix the menu category navbar to use icons instead of text.
- [Fix] [Account/menu] fix the menu category navbar to highlight the current path, the reset button should 
        be visible only when one filter is selected.it should be the most important navbar.
- [Content] [Account/menu] add a second filter navbar, that will filter tags. make it in a different style 
            than the category filter above and it should be less important than the category filter.
- [Content] [menuAndAccount] create a separator, for example a lily to separete the header navbar and the page 
            navbar.
- [Fix] [About] fix the "join-us" link. if a user is logged in it shouldnt link to the sign in page
- [Fix] add a spinner component in every button that do an async operation
- [Fix] fix the loading state of each page. at the moment there is only a big spinner in the left/center
        of the page.
- [fix] test and fix the console warning message about the "Largest Contentful Paint" detected.   
- [Test] run the lighthouse test in google chrome.
- [Test] test the global not-found page in production mode.
- [A11y] [home] check the page for accessibility
- [A11y] [About] check the page for accessibility
- [A11y] [Menu] check the page for accessibility
- [A11y] [Menu/details] check the page for accessibility
- [A11y] [Account/dasboardAndSettings] check the page for accessibility
- [A11y] [Account/menu] check the page for accessibility.
- [A11Y] [Account/cartAndOrders] check the page for accessibility.
- [A11y] [forms] check all the forms for accessibility : sign-in, sign-up, sign-out, add-credit,
         book-table, delete-accout, contact-us
- [Clean] Clean tailwind variables from components
- [Clean] Clean types form components, declare the type in the types folder.
- [Optional] [Account/orders] add a status/track of the current order. example : a bar showing :
            preparing => in transit => completed. when a user clicks on the button "order now" in the 
            cart page it should redirect the user to the order page with the tracking of the order 
            and a message "thank you for you order".
- [Optional] [Account/orders] instead of rendering a simple orders list, each order should be clickable and 
            display : items, quantity, total, status, order date, order number.
- [Optional] Add a favourite dishes system. the user can like a dish in the dis details page, clicking 
             on a hearth icon. the dish is added to firebase "users" collection and in the personal settings 
             a user can see his favouurite dishes. in the menu and account/menu add an extra filter for favourite dishes.
- [Optional] [menu] add a search bar for the dishes by dish name.

export class Menu {
    daily = {
        sides: {
            label: "Side Orders",
            position: 0,
            items: [
                {
                    item: "Brioni's Bread",
                    info: [
                        {
                            size: "small",
                            price: "$3.89"
                        },
                        {
                            size: "large",
                            price: "$6.49"
                        }
                    ]
                },
                {
                    item: "Brioni's 3 Cheese Bread",
                    info: [
                        {
                            size: "small",
                            price: "$6.24"
                        },
                        {
                            size: "large",
                            price: "$9.87"
                        }
                    ]
                },
                {
                    item: "Cheese Bread",
                    info: [
                        {
                            size: "small",
                            price: "$9.09"
                        },
                        {
                            size: "large",
                            price: "$14.29"
                        }
                    ]
                },
                {
                    item: "Bacon & Onion Bread",
                    info: [
                        {
                            size: "small",
                            price: "$10.39"
                        },
                        {
                            size: "large",
                            price: "$15.59"
                        }
                    ]
                },
                {
                    item: "Jalapeno Bread",
                    info: [
                        {
                            size: "small",
                            price: "$10.39"
                        },
                        {
                            size: "large",
                            price: "$15.59"
                        }
                    ]
                },
                {
                    item: "Tenders Only",
                    hiddenText: "1/2 lb.",
                    info: [
                        {
                            size: "small",
                            price: "N/A"
                        },
                        {
                            size: "large",
                            price: "$10.68"
                        }
                    ]
                },
                {
                    item: "Wings Only",
                    info: [
                        {
                            size: "small",
                            price: "$8.25",
                            hiddenText: "1/2 lb."
                        },
                        {
                            size: "large",
                            price: "$16.50",
                            hiddenText: "1 lb."
                        }
                    ]
                },
                {
                    item: "Seasoned Potato Wedges",
                    info: [
                        {
                            size: "small",
                            price: "$4.28",
                            hiddenText:"1/2 lb."
                        },
                        {
                            size: "large",
                            price: "$7.14",
                            hiddenText: "1 lb."
                        }
                    ]
                },
                {
                    item: "Meatballs",
                    info: [
                        {
                            size: "small",
                            price: "$2.86",
                            hiddenText: "5 pc."
                        },
                        {
                            size: "large",
                            price: "$5.72",
                            hiddenText: "10 pc."
                        }
                    ]
                },
                {
                    item: "CinnaClaws w/ Icing",
                    info: [
                        {
                            size: "small",
                            price: "$6.29"
                        },
                        {
                            size: "large",
                            price: "$9.87"
                        }
                    ]
                }
            ]
        },
        salads: {
            label: "Fresh Salads",
            position: 1,
            items: [
                {
                    item: "Italian Salad",
                    toppings: "Lettuce, Tomato, Cucumber, Onion, Green Pepper & Cheese",
                    dressing: "Italian",
                    info: [
                        {
                            size: "personal",
                            price: "$5.19"
                        },
                        {
                            size: "small",
                            price: "$7.79"
                        },
                        {
                            size: "large",
                            price: "$11.69"
                        }
                    ]
                },
                {
                    item: "Antipasto Salad",
                    toppings: "Ham, Salami, Lettuce, Tomato, Cucumber, Onion, Mild Peppers, Black Olives & Cheese",
                    dressing: "Italian",
                    info: [
                        {
                            size: "personal",
                            price: "$5.19"
                        },
                        {
                            size: "small",
                            price: "$7.79"
                        },
                        {
                            size: "large",
                            price: "$11.69"
                        }
                    ]
                },
                {
                    item: "Greek Salad",
                    toppings: "Lettuce, Tomato, Onion, Beets, Pepperoncini, Kalamata Olives & Feta Cheese",
                    dressing: "Greek",
                    info: [
                        {
                            size: "personal",
                            price: "$5.19"
                        },
                        {
                            size: "small",
                            price: "$7.79"
                        },
                        {
                            size: "large",
                            price: "$11.69"
                        }
                    ]
                },
                {
                    item: "Chef Salad",
                    toppings: "Lettuce, Ham, Turkey, Tomato, Cucumber, Provolone",
                    dressing: "Ranch",
                    info: [
                        {
                            size: "personal",
                            price: "$5.19"
                        },
                        {
                            size: "small",
                            price: "$7.79"
                        },
                        {
                            size: "large",
                            price: "$11.69"
                        }
                    ]
                },
                {
                    item: "Chicken Caesar Salad",
                    toppings: "Chicken, Lettuce, Onion, Croutons & Grated Parmesan",
                    dressing: "Ceasar",
                    info: [
                        {
                            size: "personal",
                            price: "$7.14"
                        },
                        {
                            size: "small",
                            price: "$11.69"
                        },
                        {
                            size: "large",
                            price: "$17.54"
                        }
                    ]
                },
                {
                    item: "C.B.C. Salad",
                    toppings: "Chicken, Bacon, Lettuce, Tomato, Onion, Cucumber, & Cheddar Cheese",
                    dressing: "Ranch",
                    info: [
                        {
                            size: "personal",
                            price: "$7.14"
                        },
                        {
                            size: "small",
                            price: "$11.69"
                        },
                        {
                            size: "large",
                            price: "$17.54"
                        }
                    ]
                }
            ]
        },
        pizza: {
            label: "Pizza",
            position: 2,
            toppings: "Pepperoni, Spicy Pepperoni, Ham, Bacon, Meatballs, Italian Sausage, Grilled Chicken, Anchovies, Fresh Mushroom, Red Onion, Green Pepper, Pineapple, Tomato, Mild Pepper, Black Olive, Green Olive, Jalapeno, Broccoli, Fresh Garlic, Artichokes, Feta Cheese",
            crusts: [
                "Garlic Butter",
                "Garlic Butter Cheese",
                "Cajun",
                "Sesame"
            ],
            items:[
                {
                    item: "Cheese Only",
                    info: [
                        {
                            size: "PR",
                            price: "$4.99"
                        },
                        {
                            size: "SM",
                            price: "$7.99"
                        },
                        {
                            size: "MD",
                            price: "$10.99"
                        },
                        {
                            size: "LG",
                            price: "$12.99"
                        },
                        {
                            size: "XLG",
                            price: "$16.99"
                        },
                        {
                            size: "COLOSSAL",
                            price: "$31.99"
                        }
                    ]
                },
                {
                    item: "Per Item",
                    info: [
                        {
                            size: "PR",
                            price: "$0.72"
                        },
                        {
                            size: "SM",
                            price: "$1.42"
                        },
                        {
                            size: "MD",
                            price: "$1.81"
                        },
                        {
                            size: "LG",
                            price: "$2.20"
                        },
                        {
                            size: "XLG",
                            price: "$2.85"
                        },
                        {
                            size: "COLOSSAL",
                            price: "$5.19"
                        }
                    ]
                },
                {
                    item: "Extra Mozzarella Cheese, Extra Feta Cheese, Extra Grilled Chicken, Extra Artichoke",
                    info: [
                        {
                            size: "PR",
                            price: "$1.44"
                        },
                        {
                            size: "SM",
                            price: "$2.84"
                        },
                        {
                            size: "MD",
                            price: "$3.62"
                        },
                        {
                            size: "LG",
                            price: "$4.40"
                        },
                        {
                            size: "XLG",
                            price: "$5.70"
                        },
                        {
                            size: "COLOSSAL",
                            price: "$10.38"
                        }
                    ]
                }
            ]
        },
        specialtyPizza: {
            label: "Specialty Pizza",
            position: 3,
            items:[
                {
                    item: "Chicken Margherita Pizza",
                    toppings: "Chicken, Tomato, Basil, Garlic Butter",
                    info: [
                        {
                            size: "PR",
                            price: "$7.92"
                        },
                        {
                            size: "SM",
                            price: "$13.67"
                        },
                        {
                            size: "MD",
                            price: "$18.23"
                        },
                        {
                            size: "LG",
                            price: "$21.79"
                        },
                        {
                            size: "XL",
                            price: "$28.39"
                        },
                        {
                            size: "COLOSSAL",
                            price: "$52.75"
                        }
                    ]
                },
                {
                    item: "Chicken Alfredo Pizza",
                    toppings: "Chicken, Ranch Alfredo Sauce",
                    info: [
                        {
                            size: "PR",
                            price: "$7.92"
                        },
                        {
                            size: "SM",
                            price: "$13.67"
                        },
                        {
                            size: "MD",
                            price: "$18.23"
                        },
                        {
                            size: "LG",
                            price: "$21.79"
                        },
                        {
                            size: "XL",
                            price: "$28.39"
                        },
                        {
                            size: "COLOSSAL",
                            price: "$52.75"
                        }
                    ]
                },
                {
                    item: "BBQ Chicken Pizza",
                    toppings: "Chicken, Onion, BBQ Sauce (House Mix)",
                    info: [
                        {
                            size: "PR",
                            price: "$7.92"
                        },
                        {
                            size: "SM",
                            price: "$13.67"
                        },
                        {
                            size: "MD",
                            price: "$18.23"
                        },
                        {
                            size: "LG",
                            price: "$21.79"
                        },
                        {
                            size: "XL",
                            price: "$28.39"
                        },
                        {
                            size: "COLOSSAL",
                            price: "$52.75"
                        }
                    ]
                },
                {
                    item: "Hot Buffalo Chicken Pizza",
                    toppings: "Chicken, Frank's Red Hot, Blue Cheese",
                    info: [
                        {
                            size: "PR",
                            price: "$7.92"
                        },
                        {
                            size: "SM",
                            price: "$13.67"
                        },
                        {
                            size: "MD",
                            price: "$18.23"
                        },
                        {
                            size: "LG",
                            price: "$21.79"
                        },
                        {
                            size: "XL",
                            price: "$28.39"
                        },
                        {
                            size: "COLOSSAL",
                            price: "$52.75"
                        }
                    ]
                },
                {
                    item: "Bacon Cheeseburger Pizza",
                    toppings: "Meatballs, Bacon, Cheddar Cheese",
                    info: [
                        {
                            size: "PR",
                            price: "$7.92"
                        },
                        {
                            size: "SM",
                            price: "$13.67"
                        },
                        {
                            size: "MD",
                            price: "$18.23"
                        },
                        {
                            size: "LG",
                            price: "$21.79"
                        },
                        {
                            size: "XL",
                            price: "$28.39"
                        },
                        {
                            size: "COLOSSAL",
                            price: "$52.75"
                        }
                    ]
                },
                {
                    item: "B.L.T. Pizza",
                    toppings: "Bacon, Lettuce, Tomato, Hellman's",
                    info: [
                        {
                            size: "PR",
                            price: "$7.92"
                        },
                        {
                            size: "SM",
                            price: "$13.67"
                        },
                        {
                            size: "MD",
                            price: "$18.23"
                        },
                        {
                            size: "LG",
                            price: "$21.79"
                        },
                        {
                            size: "XL",
                            price: "$28.39"
                        },
                        {
                            size: "COLOSSAL",
                            price: "$52.75"
                        }
                    ]
                },
                {
                    item: "Meatzo Pizza",
                    toppings: "Pepperoni, Ham, Italian Sausage, Bacon",
                    info: [
                        {
                            size: "PR",
                            price: "$7.92"
                        },
                        {
                            size: "SM",
                            price: "$13.67"
                        },
                        {
                            size: "MD",
                            price: "$18.23"
                        },
                        {
                            size: "LG",
                            price: "$21.79"
                        },
                        {
                            size: "XL",
                            price: "$28.39"
                        },
                        {
                            size: "COLOSSAL",
                            price: "$52.75"
                        }
                    ]
                },
                {
                    item: "Special Pizza",
                    toppings: "Pepperoni, Ham, Bacon, Mushroom, Onion, Green Pepper",
                    info: [
                        {
                            size: "PR",
                            price: "$10.06"
                        },
                        {
                            size: "SM",
                            price: "$16.51"
                        },
                        {
                            size: "MD",
                            price: "$21.85"
                        },
                        {
                            size: "LG",
                            price: "$26.19"
                        },
                        {
                            size: "XL",
                            price: "$34.09"
                        },
                        {
                            size: "COLOSSAL",
                            price: "$63.13"
                        }
                    ]
                },
                {
                    item: "Veggie Pizza",
                    toppings: "Mushroom, Onion, Green Pepper, Tomato, Black Olive, Mild Pepper",
                    info: [
                        {
                            size: "PR",
                            price: "$10.06"
                        },
                        {
                            size: "SM",
                            price: "$16.51"
                        },
                        {
                            size: "MD",
                            price: "$21.85"
                        },
                        {
                            size: "LG",
                            price: "$26.19"
                        },
                        {
                            size: "XL",
                            price: "$34.09"
                        },
                        {
                            size: "COLOSSAL",
                            price: "$63.13"
                        }
                    ]
                },
                {
                    item: "Tijuana Pleaser Pizza",
                    toppings: "Chicken, Jalapeno, Mild Pepper, Tomato, Crushed Red Pepper",
                    info: [
                        {
                            size: "PR",
                            price: "$10.06"
                        },
                        {
                            size: "SM",
                            price: "$16.51"
                        },
                        {
                            size: "MD",
                            price: "$21.85"
                        },
                        {
                            size: "LG",
                            price: "$26.19"
                        },
                        {
                            size: "XL",
                            price: "$34.09"
                        },
                        {
                            size: "COLOSSAL",
                            price: "$63.13"
                        }
                    ]
                },
                {
                    item: "Chicken Mediterranean Pizza",
                    toppings: "Chicken, Tomato, Onion, Mild Pepper, Oregano, Garlic Butter, Mozzarella Cheese, Feta Cheese",
                    info: [
                        {
                            size: "PR",
                            price: "$11.49"
                        },
                        {
                            size: "SM",
                            price: "$19.35"
                        },
                        {
                            size: "MD",
                            price: "$25.47"
                        },
                        {
                            size: "LG",
                            price: "$30.59"
                        },
                        {
                            size: "XL",
                            price: "$39.79"
                        },
                        {
                            size: "COLOSSAL",
                            price: "$73.51"
                        }
                    ]
                },
                {
                    item: "Deluxe Pizza",
                    toppings: "Pepperoni, Ham, Italian Sausage, Bacon Mushroom, Onion, Green Pepper, Black Olive",
                    info: [
                        {
                            size: "PR",
                            price: "$11.49"
                        },
                        {
                            size: "SM",
                            price: "$19.35"
                        },
                        {
                            size: "MD",
                            price: "$25.47"
                        },
                        {
                            size: "LG",
                            price: "$30.59"
                        },
                        {
                            size: "XL",
                            price: "$39.79"
                        },
                        {
                            size: "COLOSSAL",
                            price: "$73.51"
                        }
                    ]
                }
            ]
        },
        dinners: {
            label: "Dinners",
            position: 4,
            description: "All Dinners include sides of seasoned potato wedges & brioni's bread.",
            items: [
                {
                    item: "Wing Dinner",
                    info: [
                        {
                            size: "large",
                            price: "$13.99"
                        }
                    ]
                },
                {
                    item: "Chicken Tender Dinner",
                    info: [
                        {
                            size: "large",
                            price: "$13.99"
                        }
                    ]
                }
            ]
        },
        pasta: {
            label: "Pasta Dishes",
            position: 5,
            description: "All pasta dishes come with a side of Brioni's Bread (2pc./5pc.)",
            items: [
                {
                    item: "Mostaccioli",
                    toppings: "Marinara Sauce, Baked Cheese",
                    info: [
                        {
                            size: "small",
                            price: "$8.44"
                        },
                        {
                            size: "large",
                            price: "$12.72"
                        }
                    ]
                },
                {
                    item: "Spaghetti",
                    toppings: "Marinara Sauce, Baked Cheese",
                    info: [
                        {
                            size: "small",
                            price: "$8.44"
                        },
                        {
                            size: "large",
                            price: "$12.72"
                        }
                    ]
                },
                {
                    item: "Gnocchi",
                    toppings: "Marinara Sauce, Baked Cheese",
                    info: [
                        {
                            size: "small",
                            price: "$8.44"
                        },
                        {
                            size: "large",
                            price: "$12.72"
                        }
                    ]
                },
                {
                    item: "Brioni's Special",
                    toppings: "Mostaccioli, Sliced Sausage, Marinara Sauce, Baked Cheese",
                    info: [
                        {
                            size: "small",
                            price: "$9.87"
                        },
                        {
                            size: "large",
                            price: "$15.59"
                        }
                    ]
                },
                {
                    item: "Chicken Parmesan",
                    toppings: "Spaghetti, Breaded Chicken Breast, Marinara Sauce, Baked Cheese",
                    info: [
                        {
                            size: "small",
                            price: "$9.87"
                        },
                        {
                            size: "large",
                            price: "$15.59"
                        }
                    ]
                },
                {
                    item: "Ravioli (Beef or Cheese)",
                    toppings: "Marinara Sauce, Baked Cheese",
                    info: [
                        {
                            size: "small",
                            price: "$9.87"
                        },
                        {
                            size: "large",
                            price: "$15.59"
                        }
                    ]
                },
                {
                    item: "Add Meatballs or Italian Sausage",
                    toppings: null,
                    info: [
                        {
                            size: "small",
                            price: "$2.86"
                        },
                        {
                            size: "large",
                            price: "$5.72"
                        }
                    ]
                }
            ]
        },
        subs: {
            label: "Brioni's Homemade Subs",
            position: 6,
            items: [
                {
                    item: "Italian Sub",
                    toppings: "Ham, Salami, Lettuce, Tomato, Onion, Mild Pepper, Oregano, Provolne Cheese, Italian Dressing",
                    info: [
                        {
                            size: 'large',
                            price: "$11.69"
                        }
                    ]
                },
                {
                    item: "Ham & Cheese Sub",
                    toppings: "Ham, Lettuce, Tomato, Onion, Provolne Cheese, Hellman's",
                    info: [
                        {
                            size: 'large',
                            price: "$11.69"
                        }
                    ]
                },
                {
                    item: "Turkey & Cheese Sub",
                    toppings: "Turkey, Lettuce, Tomato, Onion, Provolne Cheese, Hellman's",
                    info: [
                        {
                            size: 'large',
                            price: "$11.69"
                        }
                    ]
                },
                {
                    item: "B.L.T. Sub",
                    toppings: "Bacon, Lettuce, Tomato, Hellman's",
                    info: [
                        {
                            size: 'large',
                            price: "$11.69"
                        }
                    ]
                },
                {
                    item: "Veggie Sub",
                    toppings: "Lettuce, Tomato, Onion, Mushroom, Green Pepper, Mild Pepper, Black Olive, Provolone Cheese",
                    info: [
                        {
                            size: 'large',
                            price: "$11.69"
                        }
                    ]
                },
                {
                    item: "Steak & Cheese Sub",
                    toppings: "Steak, Lettuce, Tomato, Mushroom, Onion, Green Pepper, Provolone Cheese",
                    info: [
                        {
                            size: 'large',
                            price: "$12.99"
                        }
                    ]
                },
                {
                    item: "Italian Sausage Sub",
                    toppings: "Italian Sausage, Onion, Green Pepper, Mozzarella Cheese",
                    info: [
                        {
                            size: 'large',
                            price: "$12.99"
                        }
                    ]
                },
                {
                    item: "Meatball Sub",
                    toppings: "Meatball, Marinara Sauce, Mozzarella Cheese",
                    info: [
                        {
                            size: 'large',
                            price: "$12.99"
                        }
                    ]
                },
                {
                    item: "Chicken Parmesan Sub",
                    toppings: "Breaded Chicken Breast, Marinara Sauce, Mozzarella Cheese",
                    info: [
                        {
                            size: 'large',
                            price: "$12.99"
                        }
                    ]
                },
                {
                    item: "Turkey (Club) Sub",
                    toppings: "Turkey, Ham, Bacon, Lettuce, Tomato, Onion, Provolone Cheese, Hellman's",
                    info: [
                        {
                            size: 'large',
                            price: "$12.99"
                        }
                    ]
                },
                {
                    item: "Chicken & Broccoli Sub",
                    toppings: "Grilled Chicken Breast, Mushroom, Broccoli, Ranch Alfredo",
                    info: [
                        {
                            size: 'large',
                            price: "$12.99"
                        }
                    ]
                }
            ]
        }
    };

    specials = [
        {
            special: "Medium Pizza w/ 1 item",
            price: "$12.80",
            disclaimer: "Plus Tax. Limited Time Offer. Extra Charge for Delivery."
        },
        {
            special: "Large Pizza w/ 1 item",
            price: "$15.19",
            disclaimer: "Plus Tax. Limited Time Offer. Extra Charge for Delivery."
        },
        {
            special: "XXL Pizza w/ 1 item",
            price: "$19.84",
            disclaimer: "Plus Tax. Limited Time Offer. Extra Charge for Delivery."
        },
        {
            special: "Large Pizza w/ 1 item",
            description: "Small Antipasto, Greek, or Chef Salad, Large Brioni's Bread",
            price: "$29.47",
            disclaimer: "Plus Tax. Limited Time Offer. Extra Charge for Delivery."
        }
    ];

    catering = {
        subs: {
            label: "Italian, Ham & Cheese, Turkey & Cheese (any combination)",
            serving: "Serves up to 12",
            price: "$90.00"
        },
        salads: [
            {
                label: "Italian or Caesar Salad",
                info: [
                    {
                        serving: "Serves 6-9",
                        price: "$19.22"
                    },
                    {
                        serving: "Serves 10-15",
                        price: "$31.83"
                    },
                    {
                        serving: "Serves 20-30",
                        price: "$59.29"
                    }
                ]
            },
            {
                label: "Antipasto, Greek or Chef Salad",
                info: [
                    {
                        serving: "Serves 6-9",
                        price: "$22.19"
                    },
                    {
                        serving: "Serves 10-15",
                        price: "$37.77"
                    },
                    {
                        serving: "Serves 20-30",
                        price: "$71.76"
                    }
                ]
            },
            {
                label: "Add Grilled Chicken to Any Salad",
                info: [
                    {
                        serving: "Serves 6-9",
                        price: "$10.31"
                    },
                    {
                        serving: "Serves 10-15",
                        price: "$16.99"
                    },
                    {
                        serving: "Serves 20-30",
                        price: "$34.05"
                    }
                ]
            }
        ],
        wings: {
            label: "Wings (Plain BBQ, Hot, Italian",
            price: "$17.49 per lb."
        },
        bread: {
            label: "Brioni Bread",
            info: [
                {
                    serving: "Serves 6-9",
                    price: "$11.80"
                },
                {
                    serving: "Serves 10-15",
                    price: "$23.28"
                },
                {
                    serving: "Serves 20-30",
                    price: "$46.56"
                }
            ]
        },
        meatballs: {
            label: "Meatballs",
            info: [
                {
                    serving: "Serves 6-9",
                    price: "$19.22"
                },
                {
                    serving: "Serves 10-15",
                    price: "$31.83"
                },
                {
                    serving: "Serves 20-30",
                    price: "$59.29"
                }
            ]
        },
        fries: {
            label: "Oven Roasted Steak Fries",
            info: [
                {
                    serving: "Serves 6-9",
                    price: "$13.28"
                },
                {
                    serving: "Serves 10-15",
                    price: "$22.93"
                },
                {
                    serving: "Serves 20-30",
                    price: "$44.45"
                }
            ]
        },
        pasta: [
            {
                label: "Mostaccioli or Spaghetti",
                info: [
                    {
                        serving: "Serves 6-9",
                        price: "$26.64"
                    },
                    {
                        serving: "Serves 10-15",
                        price: "$45.19"
                    },
                    {
                        serving: "Serves 20-30",
                        price: "$71.16"
                    }
                ]
            },
            {
                label: "Meat or Cheese Ravioli",
                info: [
                    {
                        serving: "Serves 6-9",
                        price: "$39.99"
                    },
                    {
                        serving: "Serves 10-15",
                        price: "$63.00"
                    }
                ]
            }
        ]
    }
}
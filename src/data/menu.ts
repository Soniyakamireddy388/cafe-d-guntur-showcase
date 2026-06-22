export type MenuItem = {
  name: string;
  desc?: string;
  price: string;
  type: "veg" | "nonveg";
};
export type MenuCategory = { id: string; name: string; items: MenuItem[] };

export const menu: MenuCategory[] = [
  {
    id: "soup",
    name: "Soups",
    items: [
      { name: "Veg Clear Soup", price: "₹99", type: "veg" },
      { name: "Chicken Clear Soup", price: "₹130", type: "nonveg" },
    ],
  },
  {
    id: "finger-veg",
    name: "Finger Foods (Veg)",
    items: [
      { name: "French Fries", desc: "Regular / Medium", price: "₹89 / ₹129", type: "veg" },
      { name: "Peri Peri Fries", desc: "Regular / Medium", price: "₹89 / ₹129", type: "veg" },
      { name: "Peri Peri Cheese Fries", price: "₹129", type: "veg" },
      { name: "Potato Wedges", desc: "Tossed with sweet chilly", price: "₹109", type: "veg" },
      { name: "Jalapeños Cheese Pops", price: "₹129", type: "veg" },
      { name: "Veg Spring Roll", price: "₹109", type: "veg" },
      { name: "Paneer Loaded Fries", price: "₹149", type: "veg" },
    ],
  },
  {
    id: "finger-nv",
    name: "Finger Foods (Non-Veg)",
    items: [
      { name: "Chicken Nuggets", price: "₹89", type: "nonveg" },
      { name: "Crispy Chicken Strips", price: "₹129", type: "nonveg" },
      { name: "Chicken Popcorn", price: "₹129", type: "nonveg" },
      { name: "Chicken Wings", price: "₹129", type: "nonveg" },
      { name: "Chicken Loaded Fries", price: "₹189", type: "nonveg" },
    ],
  },
  {
    id: "momos",
    name: "Momos",
    items: [
      { name: "Veg Momo", price: "₹89", type: "veg" },
      { name: "Paneer Momo", price: "₹109", type: "veg" },
      { name: "Corn & Cheese Momo", price: "₹109", type: "veg" },
      { name: "Chicken Momo", price: "₹119", type: "nonveg" },
      { name: "Peri Peri Chicken Momo", price: "₹129", type: "nonveg" },
    ],
  },
  {
    id: "maggi",
    name: "Maggi",
    items: [
      { name: "Butter Masala Maggi", price: "₹89", type: "veg" },
      { name: "Mexican Sauce Maggi", price: "₹99", type: "veg" },
      { name: "Peri Peri Maggi", price: "₹109", type: "veg" },
      { name: "Arrabbiata Maggi", price: "₹109", type: "veg" },
      { name: "Cheese Maggi", price: "₹109", type: "veg" },
    ],
  },
  {
    id: "sandwich",
    name: "Sandwiches",
    items: [
      { name: "Corn & Mushroom Sandwich", price: "₹129", type: "veg" },
      { name: "Spicy Paneer Sandwich", price: "₹149", type: "veg" },
      { name: "Grilled Double Chicken Sandwich", price: "₹249", type: "nonveg" },
    ],
  },
  {
    id: "pizza-veg",
    name: "Veg Pizza",
    items: [
      { name: "Margherita Pizza", desc: "Tomatoes, basil, cheese", price: "₹219", type: "veg" },
      { name: "Golden Corn Pizza", desc: "Corn, onion, cheese", price: "₹239", type: "veg" },
      { name: "Farm House Pizza", desc: "Onion, tomato, capsicum, mushroom, cheese", price: "₹249", type: "veg" },
      { name: "Mushroom Pizza", price: "₹239", type: "veg" },
      { name: "Peri Peri Paneer Pizza", price: "₹249", type: "veg" },
      { name: "BBQ Paneer Pizza", price: "₹249", type: "veg" },
    ],
  },
  {
    id: "pizza-nv",
    name: "Non-Veg Pizza",
    items: [
      { name: "Peri Peri Chicken Pizza", price: "₹349", type: "nonveg" },
      { name: "BBQ Chicken Pizza", price: "₹349", type: "nonveg" },
      { name: "Chicken Tikka Pizza", price: "₹349", type: "nonveg" },
    ],
  },
  {
    id: "garlic",
    name: "Garlic Bread",
    items: [
      { name: "Garlic Bread (2 pcs)", price: "₹99", type: "veg" },
      { name: "Cheese Garlic Bread (2 pcs)", price: "₹149", type: "veg" },
    ],
  },
  {
    id: "fried",
    name: "Fried Chicken",
    items: [
      { name: "2 Pc Chicken", price: "₹165", type: "nonveg" },
      { name: "4 Pc Chicken", price: "₹310", type: "nonveg" },
      { name: "8 Pc Chicken", price: "₹609", type: "nonveg" },
      { name: "Add Sauces", desc: "Korean / Nashville / Buffalo / Mexican / Dynamite / Cheese / Chipotle", price: "+₹30", type: "nonveg" },
    ],
  },
  {
    id: "burger-veg",
    name: "Veg Burgers",
    items: [
      { name: "Veggie Burger", price: "₹129", type: "veg" },
      { name: "Paneer Burger", price: "₹139", type: "veg" },
    ],
  },
  {
    id: "burger-nv",
    name: "Non-Veg Burgers",
    items: [
      { name: "Fried Chicken Burger", price: "₹149", type: "nonveg" },
      { name: "Korean Chicken Burger", price: "₹169", type: "nonveg" },
      { name: "Nashville Chicken Burger", price: "₹169", type: "nonveg" },
      { name: "Chipotle Chicken Burger", price: "₹179", type: "nonveg" },
      { name: "Cheesy Chicken Burger", price: "₹179", type: "nonveg" },
      { name: "Buffalo Sauce Chicken Burger", price: "₹179", type: "nonveg" },
      { name: "Mexican Chicken Burger", price: "₹179", type: "nonveg" },
      { name: "No Bun Burger", price: "₹209", type: "nonveg" },
    ],
  },
  {
    id: "tossed",
    name: "Choice of Tossed",
    items: [
      { name: "Crispy Chicken Strips", desc: "Korean / Nashville / Buffalo / Mexican / Dynamite / Cheese", price: "₹149", type: "nonveg" },
      { name: "Chicken Popcorn", desc: "Tossed in signature sauces", price: "₹149", type: "nonveg" },
      { name: "Chicken Wings", desc: "Tossed in signature sauces", price: "₹149", type: "nonveg" },
    ],
  },
  {
    id: "pasta",
    name: "Pasta",
    items: [
      { name: "Veg Pasta", desc: "Alfredo / Arrabbiata / Peri Peri / Mixed Sauce", price: "₹259", type: "veg" },
      { name: "Chicken Pasta", desc: "Alfredo / Arrabbiata / Peri Peri / Mixed Sauce", price: "₹299", type: "nonveg" },
    ],
  },
  {
    id: "salads",
    name: "Salads",
    items: [
      { name: "Veg Salad", price: "₹119", type: "veg" },
      { name: "Greek Salad", price: "₹119", type: "veg" },
      { name: "Non-Veg Salad", price: "₹150", type: "nonveg" },
    ],
  },
  {
    id: "wraps",
    name: "Wraps",
    items: [
      { name: "Veggie Wrap", price: "₹129", type: "veg" },
      { name: "Paneer Wrap", price: "₹149", type: "veg" },
      { name: "Korean Chicken Wrap", price: "₹139", type: "nonveg" },
      { name: "Nashville Chicken Wrap", price: "₹139", type: "nonveg" },
      { name: "Chipotle Chicken Wrap", price: "₹149", type: "nonveg" },
    ],
  },
  {
    id: "hot",
    name: "Hot Beverages & Desserts",
    items: [
      { name: "Tea / Coffee", price: "₹25", type: "veg" },
      { name: "Hot Milo", price: "₹89", type: "veg" },
      { name: "Hot Chocolate", price: "₹119", type: "veg" },
      { name: "Chocolate Brownie", price: "₹99", type: "veg" },
      { name: "Nutty Brownie", price: "₹109", type: "veg" },
      { name: "Chocolate Brownie with Ice Cream", price: "₹129", type: "veg" },
      { name: "Nutty Brownie with Ice Cream", price: "₹139", type: "veg" },
      { name: "Sizzling Brownie", price: "₹159", type: "veg" },
    ],
  },
  {
    id: "ice",
    name: "Ice Cream",
    items: [
      { name: "Mango", desc: "Regular / Large", price: "₹69 / ₹199", type: "veg" },
      { name: "Butter Scotch", desc: "Regular / Large", price: "₹79 / ₹199", type: "veg" },
      { name: "Black Currant", desc: "Regular / Large", price: "₹89 / ₹199", type: "veg" },
    ],
  },
  {
    id: "drinks",
    name: "Drinks",
    items: [
      { name: "Mocktails / Mojitos", desc: "Mint, Blue Curacao, Green Apple", price: "₹109", type: "veg" },
      { name: "Watermelon Mojito", price: "₹120", type: "veg" },
      { name: "Banana / Guava Smoothies", price: "₹119", type: "veg" },
      { name: "Apple Smoothie", price: "₹139", type: "veg" },
      { name: "Fresh Juices", desc: "Apple, Watermelon Mint, Orange, Pomegranate, PBC, ABC", price: "₹120", type: "veg" },
    ],
  },
  {
    id: "combos",
    name: "Combos",
    items: [
      { name: "Hot Beverage Combo", desc: "Tea/Coffee + Samosa (3 pc)", price: "₹49", type: "veg" },
      { name: "Mini Burgers Combo", price: "₹289", type: "nonveg" },
      { name: "Starters Combo 1", desc: "Wings + Honey Glazed Chilli Wedges + Garlic Bread", price: "₹299", type: "nonveg" },
      { name: "Starters Combo 2", desc: "Strips + Honey Glazed Chilli Wedges + Garlic Bread", price: "₹319", type: "nonveg" },
      { name: "Fried Chicken 2pc Combo", price: "₹359", type: "nonveg" },
      { name: "Fried Chicken 4pc Combo", price: "₹499", type: "nonveg" },
      { name: "Fried Chicken 8pc Combo", price: "₹799", type: "nonveg" },
      { name: "Margherita Pizza Combo", desc: "+ Garlic Bread + Ice Tea", price: "₹399", type: "veg" },
      { name: "Golden Corn Pizza Combo", desc: "+ Garlic Bread + Ice Tea", price: "₹419", type: "veg" },
      { name: "Farm House / Mushroom / Peri Peri Paneer Combo", desc: "+ Garlic Bread + Ice Tea", price: "₹429", type: "veg" },
      { name: "BBQ Paneer Pizza Combo", desc: "+ Garlic Bread + Ice Tea", price: "₹439", type: "veg" },
      { name: "Non-Veg Pizza Combo", desc: "Peri Peri / BBQ / Tikka Chicken + Garlic Bread + Ice Tea", price: "₹529", type: "nonveg" },
    ],
  },
];

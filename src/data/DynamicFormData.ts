import arcade from '../assets/images/icon-arcade.svg'
import advanced from '../assets/images/icon-advanced.svg'
import pro from '../assets/images/icon-pro.svg'



export const formSteps = [
    "Your Info",
    "Select Plan",
    "Add-Ons",
    "Summary",
  ];

  export const plans = [
    {
      plan: "Arcade",
      priceMonth: 9,
      priceYear: 90,
      img: arcade,
    },
    {
      plan: "Advanced",
      priceMonth: 12,
      priceYear: 120,
      img: advanced,
    },
    {
      plan: "Pro",
      priceMonth: 15,
      priceYear: 150,
      img: pro,
    },
  ]

  export const addOns = [
    {
      name: "Online Service",
      description: "Acess to multiplayer games",
      priceMonth: 10,
      priceYear: 120,
    },
    {
      name: "Larger Storage",
      description: "Extra 1TB of cloud storage",
      priceMonth: 20,
      priceYear: 200,
    },
    {
      name: "Customizable Profile",
      description: "Custom theme on your Profile",
      priceMonth: 10,
      priceYear: 120,
    },
  ]
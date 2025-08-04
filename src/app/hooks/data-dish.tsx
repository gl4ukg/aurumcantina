export const menuWeekData = {
  subtitle: "This week's specials",
  title: "Delicious Dishes You Can't Miss",
  phrase:
    "The first restaurant proprietor is believed to have been one A. Boulanger, a soup vendor, who opened his business in 1765.",
  divider: true,
  align: "center",
  buttonText: "View Full Menu",
  buttonUrl: "/menu",
  emptyMessage: "No week specials available at the moment.",
  items: [
    {
      id: 1,
      title: "pan seared scallops",
      price: "$29.00",
      description: "Saffron, celeriac puree, black pudding, olive oil",
    },
    {
      id: 2,
      title: "Sea Bass Ceviche",
      price: "$28.50",
      description: "Avocado, butternut, lime",
    },
    {
      id: 3,
      title: "Pan Seared Sea Bass",
      price: "$18.50",
      description: "Saffron and mussel's broth, new potatoes",
    },
    {
      id: 4,
      title: "King prawns and Lobster",
      price: "$41.50",
      description: "Creamy saffron, sauce Vierge",
    },
    {
      id: 5,
      title: "Nduja Pork chicken Terrin",
      price: "$27.50",
      description: "Smoked duck breast, pistachio, smoked pancetta",
    },
    {
      id: 6,
      title: "King prawns and Lobster",
      price: "$41.50",
      description: "Creamy saffron, sauce Vierge",
    },
    {
      id: 7,
      title: "Crab With Curry Sources",
      price: "$38.00",
      description: "Candied Jerusalem artichokes, truffle",
    },
    {
      id: 8,
      title: "Viennese Veal Cutlet",
      price: "$26.00",
      description: "Ricotta and spinach gnocchi, Caccio de Pepe",
    },
    {
      id: 9,
      title: "Tender Octopus and Fennel",
      price: "$28.50",
      description: "Citrus, wild rocket condiment",
    },
    {
      id: 10,
      title: "Thinly Sliced Brittany Artichokes",
      price: "$42.50",
      description: "Citrus, wild rocket condiment",
    },
    {
      id: 11,
      title: "Cod Filet Cooked on One Side",
      price: "$32.50",
      description: "Chorizo, chickpea espuma, pequillos",
    },
    {
      id: 12,
      title: "Grilled Black Angus Sirloin Steak",
      price: "$22.50",
      description: "Coin de rue potatoes, Béarnaise sauce",
    },
  ],
};

export const categoryDishesData = {
  subtitle: "Menu",
  title: "Shfletoni menunë tonë",
  phrase: "Where Espresso meets Tequila – Aurum Vibes All Day",
  divider: true,
  emptyMessage: "No offers available at the moment.",
  items: [
    {
      id: 1,
      tag: "Breakfast Bites",
      title: "Breakfast Bites",
      align: "left",
      phrase: "Shërbehen deri në orën 12:00",
      image: "/menu/menu-1.webp",
      altText: "Breakfast",
      icon: "/icons/burger.svg",
      link: "/",
      anchor: "breakfast",
      dishesList: [
        {
          id: 1,
          title: "Mexican Soup",
          price: "2.50€",
          description: "Pulë e butë, misër, domate, avokado dhe limon.",
        },
        {
          id: 2,
          title: "Taco Completo",
          price: "4.00€",
          description:
            "Dy tako me mish të bluar dhe dy vezë në sy. Mëngjes i plotë me shije Meksike.",
        },
        {
          id: 3,
          title: "Omelette",
          price: "2.80€",
          description:
            "Omëletë me përbërës që i zgjidhni vetë: perime të freskëta, djathë apo proshutë.",
        },
        {
          id: 4,
          title: "Llokuma Delight",
          price: "2.50€",
          description:
            "Llokuma të ngrohta me Mjaltë, Reçel shtëpie ose Nutella",
        },
        {
          id: 5,
          title: "Toast Italiano",
          price: "2.50€",
          description: "Bukë e thekur me djathë kaçkavall & proshutë",
        },
      ],
    },
    {
      id: 2,
      tag: "Viva La Mexico",
      title: "Viva La Mexico",
      align: "left",
      phrase:
        "Mos u shqetësoni – ushqimi ynë meksikan nuk është i djegës, përveç nëse e kërkoni vetë!",
      image: "/menu/menu-3.webp",
      altText: "Mexican",
      icon: "/icons/taco.svg",
      link: "/",
      anchor: "mexico",
      dishesList: [
        {
          id: 1,
          title: "Tacos Trio",
          price: "5.00€ (3) / 2.00€ (1)",
          description: "3 tacos (pule/viç/vegjetarian)",
        },
        {
          id: 2,
          title: "Quesadilla Picante",
          price: "4.00€",
          description: "Me djathë, mish pule ose viçi dhe salcë të nxehtë",
        },
        {
          id: 3,
          title: "Burrito Grande",
          price: "4.80€",
          description:
            "I mbushur me oriz, miser, mish pule ose viçi, fasule dhe guacamole",
        },
        {
          id: 4,
          title: "Sub Mexicano",
          price: "3.80€",
          description:
            "Sanduiç me mish viçi, salsa jo shumë e djegës dhe qepë të kuqe",
        },
        {
          id: 5,
          title: "Nachos",
          price: "SE SHPEJTI..",
          description: "",
        },
        {
          id: 6,
          title: "Crispy Tacos",
          price: "SE SHPEJTI..",
          description: "",
        },
        {
          id: 7,
          title: "Mini Burritos",
          price: "SE SHPEJTI..",
          description: "",
        },
        {
          id: 8,
          title: "Shrimp Tacos",
          price: "SE SHPEJTI..",
          description: "",
        },
      ],
    },
    {
      id: 3,
      tag: "Urban Bites",
      title: "Urban Bites",
      align: "left",
      phrase: "Shpejt. Shijshëm. Ndryshe.",
      image: "/menu/menu-2.jpg",
      altText: "Urban Bites",
      icon: "/icons/specials.svg",
      link: "/",
      anchor: "urban-bites",
      dishesList: [
        {
          id: 1,
          title: "Smash Burger",
          price: "3.80€",
          description:
            "Dy shtresa mishi, cheddar cheese, burger sauce & pepito sauce, qepë & tranguj",
        },
        {
          id: 2,
          title: "Cheese Burger",
          price: "2.80€",
          description:
            "Nje shtrese mishi, cheddar cheese, burger sauce, sallate jeshile, domate, qepe, tranguj",
        },
        {
          id: 3,
          title: "Chicken Burger",
          price: "3.00€",
          description: "Fileto pule krokante, salcë burgeri, qepë & tranguj",
        },
        {
          id: 4,
          title: "Sanduiç me Pule",
          price: "3.00€",
          description: "Chicken sandwich me salcë, kaçkavall, tranguj",
        },
        {
          id: 5,
          title: "Pizza Aurum",
          price: "4.50€",
          description: "Me mozzarella, proshute & kerpurdha",
        },
        {
          id: 6,
          title: "Pizza Margarita",
          price: "3.50€",
          description:
            "Klasike me salcë domatesh të freskëta dhe kaçkavall të shkrirë, e pjekur për kore të artë dhe krokante.",
        },
      ],
    },
    {
      id: 4,
      tag: "Fresh & Fit",
      title: "Fresh & Fit – Salads Bar",
      align: "left",
      phrase: "",
      image: "/menu/menu-4.jpeg",
      altText: "Salads",
      icon: "/icons/salad.svg",
      link: "/",
      anchor: "salads",
      dishesList: [
        {
          id: 1,
          title: "Sallatë Shope “Tradizione”",
          price: "3.00€",
          description: "Domate, kastravec, djathë",
        },
        {
          id: 2,
          title: "Sallatë Pule (Pollo Fresco)",
          price: "4.00€",
          description: "Sallatë me fileto pule, dhe rukola, buk shtëpie",
        },
        {
          id: 3,
          title: "Sallatë Tuna (Tuna Breeze)",
          price: "4.00€",
          description:
            "Sallatë me tuna, vezë dhe limonette dressing, buk shtëpie",
        },
      ],
    },
    {
      id: 5,
      tag: "Pasta",
      title: "Pasta e Passione",
      align: "left",
      phrase: "",
      image: "/menu/menu-5.jpg",
      altText: "Pasta",
      icon: "/icons/pasta.svg",
      link: "/",
      anchor: "pasta",
      dishesList: [
        {
          id: 1,
          title: "Pasta Bolognese",
          price: "4.80€",
          description: "Recetë origjinale me mish viçi",
        },
        {
          id: 2,
          title: "Pasta me pule dhe pana",
          price: "4.80€",
          description:
            "Me copeza te vogla te pules, pana, gjalpë dhe parmixhan",
        },
        {
          id: 3,
          title: "Spaghetti me Karkaleca",
          price: "7.80€",
          description:
            "Spaghetti al dente me karkaleca të freskët, hudhër, verë të bardhë dhe majdanoz, domatini, vaj hudre, parmesan",
        },
      ],
    },
    {
      id: 6,
      tag: "Risotto",
      title: "Risotto Romantico",
      align: "left",
      phrase: "",
      image: "/menu/menu-6.webp",
      altText: "Risotto",
      icon: "/icons/risotto.svg",
      link: "/",
      anchor: "risotto",
      dishesList: [
        {
          id: 1,
          title: "Risotto alle Verdure (me perime)",
          price: "4.00€",
          description: "Me perime të stinës dhe shafran, pesto dhe soya sos",
        },
        {
          id: 2,
          title: "Risotto con Pollo (me pule)",
          price: "4.80€",
          description: "Kremoz me copa pule pesto dhe parmesan",
        },
        {
          id: 3,
          title: "Risotto me Fruta Deti (Risotto ai Frutti di Mare)",
          price: "8.00€",
          description:
            "Oriz arborio i gatuar ngadalë me fruta deti, domatini, aromatizuar me verë të bardhë dhe majdanoz të freskët",
        },
      ],
    },
    {
      id: 7,
      tag: "Specials",
      title: "Specialet e Aurum – La Carne Selezionata",
      align: "left",
      phrase: "",
      image: "/menu/menu-7.jpg",
      altText: "Specials",
      icon: "/icons/steak.svg",
      link: "/",
      anchor: "specials",
      dishesList: [
        {
          id: 1,
          title: "Biftek Zgare Premium",
          price: "14.00€",
          description:
            "Copë mishi viçi e pjekur në zgarë sipas preferencës (rare, medium, well-done), shoqëruar me patate të ferguara dhe perime te stines, sos demiglas dhe buk shtepie",
        },
        {
          id: 2,
          title: "Chicken Provençal",
          price: "6.00€",
          description:
            "Gjoks pule i butë, i marinuar me erëza mesdhetare dhe i pjekur në furrë deri në perfeksion. Shërbehet me perime të freskëta sezonale dhe salcë kremoze me kërpudha",
        },
        {
          id: 3,
          title: "Karkaleca të Pjekur në Zgarë",
          price: "8.00€",
          description:
            "Karkaleca të freskët, të marinuar me hudhër, limon dhe vaj ulliri, të pjekur në zgarë me salcë speciale",
        },
        {
          id: 4,
          title: "Karkaleca Tempura Shots",
          price: "10.00€",
          description:
            "Karkaleca krokantë në tempurë të lehtë japoneze, të shërbyer në gota ‘shot’ individuale, të shoqëruar me një përzgjedhje finesash salsash shtëpie",
        },
        {
          id: 5,
          title: "Crudo di Mare",
          price: "30.00€",
          description:
            "Karkalec dhe levrek i freskët, të servirur në stilin crudo për të ruajtur shijen natyrale dhe teksturën delikate. Shoqërohen me fruta të freskëta sezonale që krijojnë një kontrast të rafinuar mes ëmbëlsisë dhe freskisë së detit.",
        },
      ],
    },
    {
      id: 8,
      tag: "Meza",
      title: "Meza – Aurum Platter",
      align: "left",
      phrase: "",
      image: "/menu/menu-8.webp",
      altText: "Meza",
      icon: "/icons/platter.svg",
      link: "/",
      anchor: "meza",
      dishesList: [
        {
          id: 1,
          title: "Meza e Zjarrtë “Aurum Platter”",
          price: "15.00€",
          description:
            "Përmban: 3 Taco të vegjël me (pule, viç, vegjetarian), Mish viqi, Kackavall i freskët, i prerë në copa, Djathë i bardhë tradicional, Chicken Fingers krokante, Ullinj të zinj dhe jeshilë, të marinuar me erëza.",
        },
        {
          id: 2,
          title: "Meza e Zjarrtë “Aurum Platter” (E Vogël)",
          price: "8.00€",
          description:
            "Përmban: 2 Taco të vegjël me mish pule të marinuar, kaçkavall të freskët të prerë në copa, djathë të bardhë tradicional",
        },
        {
          id: 3,
          title: "Meza e Akullt “Aurum Platter”",
          price: "8.00€",
          description:
            "Pjatë e përzgjedhur me kaçkavall të stazhonuar, proshutë dhe suxhuk boshnjak artizanal, bruschetta të vogla në stil tako, ullinj mesdhetarë dhe perime të freskëta të marinuara me vaj ulliri dhe aromatikë natyralë.",
        },
      ],
    },
  ],
};

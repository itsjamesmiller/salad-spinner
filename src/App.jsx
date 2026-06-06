import { useState, useEffect } from "react";

// DATA //

const PROFILES = [
  {
    name: "Japanese-Inspired",
    emoji: "🍱",
    color: "#2D6A4F",
    grain: "Buckwheat soba noodles",
    green: "Baby spinach",
    veg: ["Shredded carrot", "Shredded red cabbage", "Sliced cucumber"],
    protein: "Smoked salmon",
    fat: "Avocado",
    dressing: "Ginger Chilli Soy",
    crunch: "Fried shallots",
    extra: "Shredded nori",
    prepTasks: [
      "Cook soba noodles, rinse under cold water and toss with a little sesame oil",
      "Shred carrot and red cabbage finely",
      "Slice avocado just before serving"
    ],
    steps: [
      "Twirl soba noodles into the base of a wide bowl",
      "Add spinach, then carrot, cabbage and cucumber",
      "Lay smoked salmon across the top",
      "Fan avocado slices to one side",
      "Drizzle ginger chilli soy over everything",
      "Finish with fried shallots and shredded nori"
    ]
  },
  {
    name: "Mediterranean Bowl",
    emoji: "🫒",
    color: "#7C6B3F",
    grain: "Quinoa",
    green: "Rocket",
    veg: ["Cherry tomatoes", "Sliced red onion", "Grilled zucchini"],
    protein: "Grilled halloumi",
    fat: "Olives",
    dressing: "Salsa Verde",
    crunch: "Tamari almonds",
    extra: "Lemon squeeze",
    prepTasks: [
      "Cook quinoa (1 cup : 2 cups water, 15 min) and cool",
      "Grill zucchini strips in a hot dry pan until charred, 2-3 min each side",
      "Grill halloumi slices until golden, 2 min each side"
    ],
    steps: [
      "Spoon cooled quinoa as the base",
      "Pile on rocket, cherry tomatoes, zucchini and red onion",
      "Lay grilled halloumi slices across the top",
      "Scatter olives around the bowl",
      "Drizzle salsa verde generously",
      "Finish with tamari almonds and a squeeze of lemon"
    ]
  },
  {
    name: "Middle Eastern Nourish",
    emoji: "🌿",
    color: "#5C4033",
    grain: "Roast sweet potato",
    green: "Baby spinach",
    veg: ["Roast cauliflower", "Roast beetroot", "Sliced red onion"],
    protein: "Roast chickpeas",
    fat: "Feta",
    dressing: "Green Tahini",
    crunch: "Sunflower & pumpkin seeds",
    extra: "Chopped herbs",
    prepTasks: [
      "Roast sweet potato cubes at 200°C for 25 min with olive oil and salt",
      "Roast cauliflower florets and beetroot together at 200°C for 20 min",
      "Roast chickpeas with cumin, paprika and olive oil at 200°C for 20 min until crispy"
    ],
    steps: [
      "Lay spinach as the base",
      "Add sweet potato, cauliflower and beetroot across the bowl",
      "Pile crispy chickpeas in the centre",
      "Crumble feta over everything",
      "Drizzle green tahini generously",
      "Finish with seeds and a handful of fresh herbs"
    ]
  },
  {
    name: "Thai-Style Bowl",
    emoji: "🌶️",
    color: "#C4622D",
    grain: "Vermicelli noodles",
    green: "Mixed lettuce",
    veg: ["Shredded carrot", "Shredded red cabbage", "Sliced cucumber"],
    protein: "Roast chicken",
    fat: "Avocado",
    dressing: "Almond Butter Satay",
    crunch: "Crushed peanuts",
    extra: "Lime squeeze",
    prepTasks: [
      "Soak vermicelli noodles in boiling water 5 min, drain and cool",
      "Shred roast chicken while still warm",
      "Thin satay dressing with a little warm water if needed"
    ],
    steps: [
      "Nestle vermicelli noodles into the base of the bowl",
      "Add lettuce, carrot, cabbage and cucumber",
      "Pile shredded chicken on top",
      "Add avocado slices",
      "Drizzle satay dressing over",
      "Top with crushed peanuts and a squeeze of lime"
    ]
  },
  {
    name: "Salmon Power Bowl",
    emoji: "🐟",
    color: "#3D5A80",
    grain: "Brown rice",
    green: "Kale",
    veg: ["Sautéed mushrooms", "Cherry tomatoes", "Sliced red onion"],
    protein: "Roast salmon",
    fat: "Avocado",
    dressing: "Miso Tahini",
    crunch: "Sunflower & pumpkin seeds",
    extra: "Sesame seeds",
    prepTasks: [
      "Cook brown rice (rinse first, 1:2 ratio, 30 min)",
      "Roast salmon fillet at 200°C for 12 min with olive oil and salt",
      "Massage kale with olive oil, salt and lemon for 1-2 min to soften",
      "Sauté mushrooms in butter until golden"
    ],
    steps: [
      "Spoon brown rice into the bowl",
      "Layer kale, mushrooms, cherry tomatoes and red onion",
      "Place salmon fillet in the centre",
      "Add avocado alongside",
      "Drizzle miso tahini over everything",
      "Scatter seeds to finish"
    ]
  },
  {
    name: "Green Goddess",
    emoji: "🥦",
    color: "#3A7D44",
    grain: "Roast pumpkin",
    green: "Baby spinach",
    veg: ["Sautéed broccolini", "Sliced cucumber", "Grilled zucchini"],
    protein: "Poached eggs",
    fat: "Avocado",
    dressing: "Creamy Hemp Seed Pesto",
    crunch: "Tamari almonds",
    extra: "Hemp seeds",
    prepTasks: [
      "Roast pumpkin cubes at 200°C for 20 min",
      "Sauté broccolini in olive oil and garlic until just tender, 4-5 min",
      "Poach eggs in barely simmering water for 3-4 min"
    ],
    steps: [
      "Start with spinach as the base",
      "Add pumpkin, broccolini, cucumber and zucchini",
      "Nestle poached eggs in the bowl",
      "Add avocado",
      "Spoon hemp seed pesto generously over",
      "Finish with tamari almonds and hemp seeds"
    ]
  },
  {
    name: "Steak & Beetroot",
    emoji: "🥩",
    color: "#8B1A1A",
    grain: "Black rice",
    green: "Rocket",
    veg: ["Roast beetroot", "Cherry tomatoes", "Sliced red onion"],
    protein: "Sliced steak",
    fat: "Feta",
    dressing: "Beetroot Hummus",
    crunch: "Tamari almonds",
    extra: "Chopped herbs",
    prepTasks: [
      "Cook black rice (soak 30 min first, then cook 30-35 min)",
      "Roast beetroot at 200°C for 30 min wrapped in foil",
      "Rest steak 5 min after cooking, slice thinly against the grain"
    ],
    steps: [
      "Spread beetroot hummus across the base of the bowl",
      "Add black rice, then pile on rocket",
      "Arrange beetroot, tomatoes and red onion",
      "Fan sliced steak over the top",
      "Crumble feta and scatter tamari almonds",
      "Finish with chopped herbs"
    ]
  },
  // GREEK //
  {
    name: "Greek Salad",
    emoji: "🫒",
    color: "#1A6B8A",
    grain: "Toasted flatbread",
    green: "Rocket",
    veg: ["Sliced cucumber", "Cherry tomatoes", "Sliced red onion", "Capsicum"],
    protein: "Feta",
    fat: "Olives",
    dressing: "Lemon & Oregano",
    crunch: "Toasted pine nuts",
    extra: "Dried oregano",
    prepTasks: [
      "Toast flatbread in a dry pan until crisp, tear into rough pieces",
      "Cube cucumber and feta into chunky pieces — don't go too fine",
      "Halve cherry tomatoes and slice capsicum into strips"
    ],
    steps: [
      "Scatter rocket across the base of a wide bowl",
      "Add cucumber, tomatoes, capsicum and red onion",
      "Lay torn flatbread pieces around the bowl",
      "Crumble feta generously over the top",
      "Scatter olives and pine nuts",
      "Drizzle lemon & oregano dressing and finish with dried oregano"
    ]
  },
  // ITALIAN //
  {
    name: "Caprese Bowl",
    emoji: "🍅",
    color: "#B71C1C",
    grain: "Sourdough croutons",
    green: "Rocket",
    veg: ["Sliced tomatoes", "Roast capsicum", "Sliced red onion"],
    protein: "Fresh mozzarella",
    fat: "Olive oil",
    dressing: "Balsamic Glaze",
    crunch: "Toasted pine nuts",
    extra: "Fresh basil",
    prepTasks: [
      "Tear sourdough into chunks, toss with olive oil and toast at 200°C for 10 min until golden",
      "Roast capsicum strips at 200°C for 15 min",
      "Slice tomatoes thickly and season with flaky salt"
    ],
    steps: [
      "Spread rocket across a flat plate or wide bowl",
      "Layer tomato, roast capsicum and red onion",
      "Tear mozzarella and tuck pieces throughout",
      "Scatter croutons and pine nuts",
      "Drizzle olive oil then balsamic glaze",
      "Finish with torn fresh basil and flaky salt"
    ]
  },
  {
    name: "Panzanella",
    emoji: "🍞",
    color: "#8D4B2B",
    grain: "Sourdough croutons",
    green: "Basil",
    veg: ["Cherry tomatoes", "Sliced cucumber", "Sliced red onion", "Capsicum"],
    protein: "Anchovies",
    fat: "Olive oil",
    dressing: "Red Wine Vinegar & Capers",
    crunch: "Sourdough croutons",
    extra: "Capers",
    prepTasks: [
      "Tear sourdough into large chunks, toss with olive oil and toast at 200°C for 10 min",
      "Salt tomatoes for 10 min to draw out juice — use the juice in the dressing",
      "Soak red onion slices in cold water for 5 min to mellow the bite"
    ],
    steps: [
      "Toss croutons with tomato juices so they absorb the flavour",
      "Add tomatoes, cucumber, capsicum and drained red onion",
      "Lay anchovies across the top",
      "Scatter capers and fresh basil",
      "Drizzle red wine vinegar dressing over everything",
      "Rest 5 min before serving so croutons soften slightly"
    ]
  },
  // FRENCH //
  {
    name: "Salade Niçoise",
    emoji: "🥚",
    color: "#4A6741",
    grain: "Baby potatoes",
    green: "Mixed lettuce",
    veg: ["Cherry tomatoes", "Green beans", "Sliced red onion"],
    protein: "Tuna",
    fat: "Olives",
    dressing: "Dijon Mustard Vinaigrette",
    crunch: "Capers",
    extra: "Anchovies & hard-boiled eggs",
    prepTasks: [
      "Boil baby potatoes until just tender, 12-15 min, cool and halve",
      "Blanch green beans in boiling water 2-3 min, then plunge into ice water",
      "Hard-boil eggs 8 min, cool in cold water, peel and halve",
      "Drain tuna and anchovies"
    ],
    steps: [
      "Arrange lettuce as the base",
      "Place potatoes, green beans, tomatoes and red onion across the bowl",
      "Add tuna in chunks, then halved eggs",
      "Lay anchovies over the top and scatter olives and capers",
      "Drizzle dijon mustard vinaigrette generously"
    ]
  },
  {
    name: "Cumin Cauliflower & Lentils",
    emoji: "🌿",
    color: "#5D4037",
    grain: "Fried lentils",
    green: "Baby spinach",
    veg: ["Roast cauliflower", "Caramelised onion", "Cherry tomatoes"],
    protein: "Fried lentils",
    fat: "Yoghurt",
    dressing: "Cumin Yoghurt",
    crunch: "Fried lentils",
    extra: "Chopped coriander",
    prepTasks: [
      "Cook lentils until just tender (15-20 min), drain well and pat dry",
      "Fry dried lentils in oil over high heat until crispy, 5-6 min — they pop a little, that's fine",
      "Roast cauliflower florets with cumin, olive oil and salt at 200°C for 20 min",
      "Slowly caramelise one sliced onion in butter over low heat, 20-25 min"
    ],
    steps: [
      "Spoon cumin yoghurt across the base of the bowl",
      "Add spinach and roast cauliflower",
      "Pile caramelised onion and cherry tomatoes",
      "Top with a generous heap of crispy fried lentils",
      "Finish with chopped coriander and a drizzle of olive oil"
    ]
  },
  // LEBANESE //
  {
    name: "Fattoush",
    emoji: "🫓",
    color: "#7B5E3A",
    grain: "Toasted pita chips",
    green: "Rocket",
    veg: ["Cherry tomatoes", "Sliced cucumber", "Sliced red onion", "Capsicum"],
    protein: "Feta",
    fat: "Olive oil",
    dressing: "Sumac & Lemon",
    crunch: "Toasted pita chips",
    extra: "Fresh mint & parsley",
    prepTasks: [
      "Tear pita into rough pieces, brush with olive oil and toast at 200°C for 8-10 min until crispy",
      "Sprinkle sumac over the pita while still warm",
      "Chop herbs — a generous handful of both mint and parsley"
    ],
    steps: [
      "Toss rocket, tomatoes, cucumber, capsicum and red onion in a large bowl",
      "Add crumbled feta",
      "Drizzle sumac and lemon dressing and toss to coat",
      "Scatter fresh mint and parsley through",
      "Add toasted pita chips last so they stay crispy"
    ]
  },
  {
    name: "Tabbouleh Bowl",
    emoji: "🌱",
    color: "#2E7D32",
    grain: "Bulgur wheat",
    green: "Flat-leaf parsley",
    veg: ["Cherry tomatoes", "Sliced cucumber", "Spring onions"],
    protein: "Roast chickpeas",
    fat: "Olive oil",
    dressing: "Lemon & Olive Oil",
    crunch: "Toasted pine nuts",
    extra: "Fresh mint",
    prepTasks: [
      "Soak bulgur wheat in boiling water for 20 min, drain and squeeze dry in a clean cloth",
      "Roast chickpeas with olive oil and cumin at 200°C for 20 min until crispy",
      "Chop parsley very finely — it should be the bulk of the salad, not a garnish",
      "Finely dice tomatoes and cucumber, mix with bulgur while still a little warm"
    ],
    steps: [
      "Combine bulgur, finely chopped parsley and mint in a large bowl",
      "Add tomatoes, cucumber and spring onions",
      "Pile crispy chickpeas over the top",
      "Drizzle generously with lemon and olive oil dressing",
      "Toss well and taste — it should be bright and lemony",
      "Finish with pine nuts"
    ]
  },
  {
    name: "Beetroot, Lentils & Lemon Yoghurt",
    emoji: "🌕",
    color: "#C17F24",
    grain: "Brown lentils",
    green: "Flat-leaf parsley",
    veg: ["Roast beetroot", "Sliced red onion"],
    protein: "Brown lentils",
    fat: "Yoghurt",
    dressing: "Lemon Yoghurt",
    crunch: "Toasted pumpkin seeds",
    extra: "Chopped coriander & mint",
    prepTasks: [
      "Roast beetroot cubes at 200°C for 30-35 min with olive oil, a splash of balsamic and salt",
      "Cook lentils in plenty of salted water until just tender, 20-25 min — don't overcook, they should hold their shape",
      "Mix yoghurt with lemon juice and olive oil, season well"
    ],
    steps: [
      "Spread lemon yoghurt generously across the base of the bowl",
      "Pile warm lentils over the yoghurt",
      "Add roast beetroot and sliced red onion",
      "Scatter parsley, coriander and mint over everything",
      "Finish with toasted pumpkin seeds and a drizzle of olive oil"
    ]
  },
  {
    name: "Brussels Sprout Caesar",
    emoji: "🥬",
    color: "#3B5323",
    grain: "Sourdough croutons",
    green: "Brussels sprouts",
    veg: ["Sliced red onion", "Cherry tomatoes"],
    protein: "Chickpeas",
    fat: "Parmesan",
    dressing: "Caesar",
    crunch: "Sunflower & pumpkin seeds",
    extra: "Chopped parsley",
    prepTasks: [
      "Tear sourdough into chunks, toss with olive oil and bake at 200°C for 15 min until golden",
      "Trim and very finely slice brussels sprouts — a mandoline or sharp knife works best",
      "Roast chickpeas with olive oil and salt at 200°C for 20 min until crispy",
      "Make caesar dressing and let it sit 10 min for the garlic to mellow"
    ],
    steps: [
      "Toss finely sliced brussels sprouts with caesar dressing and let sit 10 min",
      "Add chickpeas, red onion and cherry tomatoes",
      "Fold in croutons just before serving",
      "Shave parmesan generously over the top",
      "Finish with seeds and chopped parsley"
    ]
  },
  {
    name: "Quinoa, Brussels Sprouts & Parsley Pesto",
    emoji: "🌿",
    color: "#4A6741",
    grain: "Quinoa",
    green: "Rocket",
    veg: ["Roast Brussels sprouts", "Green beans", "Olives"],
    protein: "Almonds",
    fat: "Olive oil",
    dressing: "Parsley & Almond Pesto",
    crunch: "Toasted almonds",
    extra: "Chopped parsley",
    prepTasks: [
      "Cook quinoa (1:2 ratio, 15 min) and cool",
      "Halve brussels sprouts, toss with olive oil and roast at 200°C for 20-25 min until golden",
      "Sauté green beans in olive oil with a pinch of salt until just tender, 3-4 min",
      "Make pesto — blend parsley, almonds, garlic, lemon and olive oil to a rough paste"
    ],
    steps: [
      "Spoon quinoa into the base of a wide bowl",
      "Add roast brussels sprouts, green beans and olives",
      "Spoon parsley pesto generously over everything",
      "Toss rocket through loosely",
      "Finish with toasted almonds and chopped parsley"
    ]
  },
  {
    name: "Provençal Eggplant & Lentils",
    emoji: "🍆",
    color: "#6B3FA0",
    grain: "Brown lentils",
    green: "Rocket",
    veg: ["Grilled eggplant strips", "Roast capsicum", "Grilled zucchini strips", "Green beans"],
    protein: "Brown lentils",
    fat: "Olives",
    dressing: "Lemon & Olive Oil",
    crunch: "Sunflower & pumpkin seeds",
    extra: "Chopped parsley",
    prepTasks: [
      "Cook lentils in salted water 20 min until just tender, drain well",
      "Shallow-fry eggplant and zucchini slices in olive oil until golden, 3-4 min each side",
      "Roast capsicum strips with a splash of red wine vinegar, garlic and olive oil at 200°C for 25 min",
      "Blanch green beans 2-3 min, drain"
    ],
    steps: [
      "Spread lentils across the base of a wide bowl",
      "Arrange eggplant, zucchini, capsicum and green beans over the top",
      "Scatter rocket and olives through",
      "Drizzle lemon and olive oil dressing generously",
      "Finish with chopped parsley and seeds"
    ]
  },
  {
    name: "Roast Capsicum, Butter Beans & Mozzarella",
    emoji: "🫙",
    color: "#B85C2C",
    grain: "Barley",
    green: "Rocket",
    veg: ["Roast capsicum", "Cherry tomatoes", "Sliced red onion"],
    protein: "Butter beans",
    fat: "Fresh mozzarella",
    dressing: "Lemon & Olive Oil",
    crunch: "Toasted almonds",
    extra: "Fresh basil & chilli",
    prepTasks: [
      "Cook barley in salted water 25-30 min until tender, drain and cool",
      "Roast capsicum strips with olive oil and garlic at 200°C for 20 min until soft and caramelised",
      "Drain and rinse butter beans"
    ],
    steps: [
      "Spread rocket across a wide plate or bowl",
      "Add barley, roast capsicum, cherry tomatoes and red onion",
      "Scatter butter beans through",
      "Tear mozzarella over the top",
      "Drizzle lemon and olive oil dressing",
      "Finish with toasted almonds, fresh basil and sliced chilli"
    ]
  },
  {
    name: "Chargrilled Broccoli & Caper Bagna Cauda",
    emoji: "🥦",
    color: "#2E5B3D",
    grain: "Toasted sourdough",
    green: "Baby spinach",
    veg: ["Chargrilled broccoli", "Grilled zucchini strips", "Snow peas"],
    protein: "Butter beans",
    fat: "Olive oil",
    dressing: "Caper Bagna Cauda",
    crunch: "Capers",
    extra: "Fresh basil & mint",
    prepTasks: [
      "Toss broccoli and zucchini in olive oil, chargrill or griddle until slightly charred, 3-4 min each side",
      "Blanch snow peas in boiling water 1-2 min, then plunge into cold water",
      "Make caper bagna cauda — it should be warm when you serve it",
      "Tear sourdough into chunks and toast in a dry pan until crispy"
    ],
    steps: [
      "Combine broccoli, zucchini, snow peas and butter beans in a wide bowl",
      "Add spinach and toss through",
      "Spoon warm caper bagna cauda generously over everything",
      "Scatter capers, fresh basil and mint",
      "Add sourdough chunks to mop up the sauce"
    ]
  },
  {
    name: "Roast Cauliflower, Barley & Agrodolce",
    emoji: "🌸",
    color: "#7A5C3A",
    grain: "Barley",
    green: "Rocket",
    veg: ["Roast cauliflower florets", "Caramelised onion"],
    protein: "Walnuts",
    fat: "Olive oil",
    dressing: "Agrodolce",
    crunch: "Toasted almonds",
    extra: "Fresh mint & basil",
    prepTasks: [
      "Cook barley in salted water 25-30 min, drain and cool",
      "Roast cauliflower at 200°C for 25-30 min until golden and caramelised at the edges",
      "Slowly caramelise one sliced onion in olive oil over low heat, 20-25 min",
      "Make agrodolce — it should be thick and syrupy before removing from heat"
    ],
    steps: [
      "Combine barley and roast cauliflower in a wide bowl",
      "Add caramelised onion and scatter walnuts through",
      "Pour agrodolce dressing over and toss to coat",
      "Pile rocket over the top",
      "Finish with toasted almonds and torn mint and basil"
    ]
  },
  {
    name: "Israeli Chopped Salad",
    emoji: "🍅",
    color: "#C0392B",
    grain: "Toasted pita chips",
    green: "Flat-leaf parsley",
    veg: ["Cherry tomatoes", "Sliced cucumber", "Sliced red onion"],
    protein: "Feta",
    fat: "Olive oil",
    dressing: "Lemon & Olive Oil",
    crunch: "Toasted pumpkin seeds",
    extra: "Fresh mint, coriander & chilli",
    prepTasks: [
      "Tear pita into pieces, brush with olive oil and toast at 200°C for 8 min until crispy",
      "Dice tomatoes and cucumber into small, even 5mm cubes — the fine chop is what makes this salad",
      "Finely slice spring onions and chop parsley, mint and coriander as finely as you can"
    ],
    steps: [
      "Combine diced tomatoes, cucumber and red onion in a bowl",
      "Add parsley, mint and coriander and toss well",
      "Dress generously with lemon juice and olive oil — it should be very bright and lemony",
      "Crumble feta over the top",
      "Add pita chips and pumpkin seeds",
      "Finish with sliced chilli and a final squeeze of lemon"
    ]
  },
  {
    name: "Chargrilled Eggplant, Lentils & Herb Tahini",
    emoji: "🍆",
    color: "#4A235A",
    grain: "Brown lentils",
    green: "Rocket",
    veg: ["Grilled eggplant strips", "Sliced red onion"],
    protein: "Brown lentils",
    fat: "Olive oil",
    dressing: "Herb Tahini",
    crunch: "Toasted pumpkin seeds",
    extra: "Pomegranate seeds",
    prepTasks: [
      "Cook lentils in salted water 20-25 min until just tender, drain well",
      "Slice eggplant into 1cm rounds, coat in olive oil and chargrill 2-3 min each side until charred and tender",
      "Make herb tahini — it should be the consistency of pouring cream"
    ],
    steps: [
      "Spread herb tahini across the base of the bowl",
      "Pile lentils over the tahini",
      "Arrange grilled eggplant and red onion on top",
      "Toss rocket loosely over everything",
      "Scatter pumpkin seeds and pomegranate seeds",
      "Finish with a drizzle of olive oil"
    ]
  },
  {
    name: "Thai Carrot & Peanut Salad",
    emoji: "🥕",
    color: "#E65100",
    grain: "Vermicelli noodles",
    green: "Coriander",
    veg: ["Shredded carrot", "Bean sprouts", "Sliced cucumber"],
    protein: "Grilled tofu",
    fat: "Peanut butter",
    dressing: "Spicy Peanut Sauce",
    crunch: "Crushed peanuts",
    extra: "Lime squeeze & fresh mint",
    prepTasks: [
      "Soak vermicelli noodles in boiling water 5 min, drain and cool",
      "Press firm tofu, slice and pan-fry in sesame oil 3-4 min each side until golden",
      "Grate or shred carrots into thin strips",
      "Make peanut sauce — loosen with water until pourable"
    ],
    steps: [
      "Nestle vermicelli into the base of the bowl",
      "Add shredded carrot, bean sprouts and cucumber",
      "Lay tofu strips across the top",
      "Add coriander and mint",
      "Drizzle spicy peanut sauce generously",
      "Finish with crushed peanuts and a squeeze of lime"
    ]
  },
  {
    name: "Roast Carrots, Mung Beans & Coconut Dukkah",
    emoji: "🥕",
    color: "#D4691E",
    grain: "Mung beans",
    green: "Coriander",
    veg: ["Roast carrots", "Green beans", "Sliced red onion"],
    protein: "Mung beans",
    fat: "Toasted coconut flakes",
    dressing: "Lemon & Olive Oil",
    crunch: "Coconut dukkah",
    extra: "Chopped parsley",
    prepTasks: [
      "Make coconut dukkah: toast cumin, coriander seeds and almonds in a dry pan, pound roughly in a mortar, then mix through sesame seeds and coconut flakes — keep it chunky",
      "Roast carrots diagonally sliced at 200°C for 25-30 min with olive oil and red onion until golden",
      "Cook mung beans in salted water 25-30 min until just tender, drain well",
      "Sauté green beans in olive oil until just tender and starting to colour, 3-4 min"
    ],
    steps: [
      "Combine mung beans, roast carrots and red onion in a wide bowl",
      "Add green beans and toss through",
      "Scatter coriander and parsley over the top",
      "Drizzle generously with lemon and olive oil",
      "Finish with a big handful of coconut dukkah"
    ]
  },
  {
    name: "Seedy Soba Noodles",
    emoji: "🍜",
    color: "#5C4A1E",
    grain: "Buckwheat soba noodles",
    green: "Coriander",
    veg: ["Sliced cucumber", "Spring onions"],
    protein: "Roast chickpeas",
    fat: "Sesame oil",
    dressing: "Sweet Ginger",
    crunch: "Mixed seeds",
    extra: "Fresh basil & mint",
    prepTasks: [
      "Cook soba noodles 3-4 min, drain, rinse under cold water and chill for at least 1 hour — cold noodles are the point",
      "Roast chickpeas with olive oil and cumin at 200°C for 20 min until crispy",
      "Toast sunflower seeds, pumpkin seeds and sesame seeds in a dry pan until golden",
      "Make sweet ginger dressing and let it sit while the noodles chill"
    ],
    steps: [
      "Loosen cold soba noodles with a little sesame oil in a large bowl",
      "Add cucumber, spring onions and roast chickpeas",
      "Pour sweet ginger dressing over and toss well",
      "Add coriander, basil and mint and toss again",
      "Pile mixed seeds generously over the top"
    ]
  },
  {
    name: "Tuna Sesame",
    emoji: "🐠",
    color: "#5B6FA8",
    grain: "Quinoa",
    green: "Microgreens",
    veg: ["Shredded carrot", "Sliced cucumber", "Shredded red cabbage"],
    protein: "Tuna",
    fat: "Avocado",
    dressing: "Ginger Chilli Soy",
    crunch: "Toasted coconut flakes",
    extra: "Sesame seeds",
    prepTasks: [
      "Cook and cool quinoa",
      "Drain canned tuna well and season with a little pepper"
    ],
    steps: [
      "Spoon quinoa into the bowl",
      "Add microgreens, carrot, cucumber and cabbage",
      "Flake tuna over the top",
      "Add avocado slices",
      "Drizzle ginger chilli soy dressing",
      "Top with sesame seeds and coconut flakes"
    ]
  }
];

// null = already vegetarian, no swap needed
const VEG_SWAP = {
  "Smoked salmon":     { protein: "Grilled tofu",     prepTask: "Press firm tofu, slice and pan-fry in sesame oil 3-4 min each side until golden" },
  "Roast salmon":      { protein: "Roast chickpeas",  prepTask: "Toss chickpeas with olive oil, cumin and salt, roast at 200°C for 20 min until crispy" },
  "Roast chicken":     { protein: "Grilled tempeh",   prepTask: "Slice tempeh and pan-fry in tamari and a little oil until caramelised, 3-4 min each side" },
  "Sliced steak":      { protein: "Grilled halloumi", prepTask: "Grill halloumi slices in a dry pan until golden, 2 min each side" },
  "Tuna":              { protein: "Grilled tofu",     prepTask: "Press firm tofu, dice and pan-fry in sesame oil until crispy on all sides" },
  "Grilled halloumi":  null,
  "Roast chickpeas":   null,
  "Poached eggs":      null,
  "Sautéed mushrooms": null,
  "Grilled tofu":      null,
  "Anchovies":         { protein: "Capers",          prepTask: "Rinse capers and scatter generously — they add the same briny punch as anchovies" },
  "Feta":              null,
  "Fresh mozzarella":  null,
  "Fried lentils":     null,
  "Butter beans":      null,
  "Walnuts":           null,
  "Brown lentils":    null,
  "Chickpeas":        null,
  "Mung beans":       null,
  "Grilled tempeh":   null,
  "Almonds":          null,
};

const DRESSING_RECIPES = {
  "Green Tahini": {
    makes: "About ½ cup — keeps 5 days",
    ingredients: ["3 tbsp tahini", "2 tbsp lemon juice", "1 small garlic clove, minced", "Handful of parsley or coriander", "3-4 tbsp cold water", "Salt to taste"],
    steps: ["Blend all ingredients together until smooth", "Add extra water a splash at a time until pourable", "Taste and adjust lemon or salt"]
  },
  "Miso Tahini": {
    makes: "About ½ cup — keeps 1 week",
    ingredients: ["3 tbsp tahini", "1 tbsp white miso paste", "1 tbsp rice vinegar", "1 tbsp sesame oil", "1 tsp honey", "2-3 tbsp warm water"],
    steps: ["Whisk miso and tahini together until smooth", "Add vinegar, sesame oil and honey", "Loosen with warm water to a pourable consistency"]
  },
  "Toasted Pine Nut Pesto": {
    makes: "About ½ cup — keeps 3-4 days",
    ingredients: ["30g pine nuts", "Large handful of basil", "1 garlic clove", "3 tbsp olive oil", "Juice of ½ lemon", "Salt to taste"],
    steps: ["Toast pine nuts in a dry pan over medium heat, 2-3 min until golden", "Blend all ingredients to a rough paste", "Adjust seasoning — press cling wrap onto the surface to prevent browning"]
  },
  "Ginger Chilli Soy": {
    makes: "About ⅓ cup — keeps 2 weeks",
    ingredients: ["3 tbsp tamari or soy sauce", "1 tbsp rice vinegar", "1 tbsp sesame oil", "1 tsp fresh ginger, grated", "1 tsp chilli flakes or fresh sliced chilli", "1 tsp honey"],
    steps: ["Combine all ingredients in a jar and shake to combine", "Taste and adjust heat with more chilli if needed", "No cooking needed"]
  },
  "Beetroot Hummus": {
    makes: "About 1 cup — keeps 5 days",
    ingredients: ["1 x 400g can chickpeas, drained", "1 small roast beetroot", "2 tbsp tahini", "1 garlic clove", "Juice of 1 lemon", "2 tbsp olive oil", "Salt to taste"],
    steps: ["Blend chickpeas, beetroot, tahini and garlic until rough", "Add lemon juice, olive oil and a splash of water", "Blend again until silky smooth, season well"]
  },
  "Creamy Hemp Seed Pesto": {
    makes: "About ½ cup — keeps 3-4 days",
    ingredients: ["3 tbsp hemp seeds", "Large handful of basil", "1 garlic clove", "3 tbsp olive oil", "1 tbsp lemon juice", "Salt to taste"],
    steps: ["No toasting needed — hemp seeds go in raw", "Blend all ingredients to a rough paste", "Add a little water if too thick to drizzle"]
  },
  "Salsa Verde": {
    makes: "About ½ cup — keeps 3 days",
    ingredients: ["Large handful of flat-leaf parsley", "Small handful of basil or mint", "1 tbsp capers", "1 garlic clove", "1 tsp Dijon mustard", "4 tbsp olive oil", "1 tbsp red wine vinegar"],
    steps: ["Finely chop herbs, capers and garlic by hand (or pulse briefly in a blender)", "Stir in mustard, vinegar and olive oil", "Season generously — it should be punchy"]
  },
  "Lemongrass Sauce": {
    makes: "About ⅓ cup — keeps 1 week",
    ingredients: ["1 lemongrass stalk, tender inner part finely minced", "1 tbsp fish sauce (or tamari for vegan)", "1 tbsp lime juice", "1 tsp caster sugar", "1 small garlic clove, grated", "1 tsp fresh chilli, sliced"],
    steps: ["Remove tough outer leaves, use only the pale inner stalk", "Combine all ingredients, stir until sugar dissolves", "Flavour improves after a night in the fridge"]
  },
  "Lemon Yoghurt": {
    makes: "About ½ cup — keeps 3 days",
    ingredients: ["½ cup Greek yoghurt", "Juice of ½ lemon", "1 tbsp olive oil", "Salt and pepper", "Optional: pinch of saffron steeped in 2 tbsp hot water for 10 min"],
    steps: ["Combine yoghurt, lemon juice and olive oil", "Season well — it should be tangy and rich", "Stir in saffron water if using, which turns it a beautiful golden colour"]
  },
  "Caesar": {
    makes: "About ½ cup — keeps 3 days",
    ingredients: ["4 tbsp whole egg mayo", "1 tbsp capers, finely chopped", "1 garlic clove, roasted and mashed", "Juice of ½ lemon", "2-3 tbsp water to loosen", "Salt and pepper"],
    steps: ["Roast garlic clove (unpeeled) at 200°C for 20 min, then squeeze out the flesh", "Mash garlic into mayo with a fork until smooth", "Add capers, lemon juice and water to reach a pourable consistency", "Season well — it should be creamy, tangy and garlicky"]
  },
  "Parsley & Almond Pesto": {
    makes: "About ½ cup — keeps 3 days",
    ingredients: ["Large handful of flat-leaf parsley", "40g almonds, roughly chopped", "1 small garlic clove", "Juice of ½ lemon", "4 tbsp olive oil", "Salt to taste"],
    steps: ["Toast almonds in a dry pan until golden, 2-3 min", "Blend or pound parsley, almonds and garlic to a rough paste", "Add lemon juice and olive oil, season well", "Keep it textured — don't over-blend"]
  },
  "Caper Bagna Cauda": {
    makes: "About ½ cup — serve warm",
    ingredients: ["3 garlic cloves, finely minced", "80g capers, rinsed and roughly chopped", "125ml olive oil", "1 tbsp butter", "Zest and juice of 1 lemon"],
    steps: ["Combine garlic and capers in a small pan with olive oil and butter", "Cook over low heat, stirring, for 3-4 min until fragrant — don't let the garlic brown", "Remove from heat, add lemon zest and juice", "Serve warm spooned over the salad"]
  },
  "Agrodolce": {
    makes: "About ⅓ cup — keeps 1 week",
    ingredients: ["4 tbsp red wine vinegar", "2 tbsp honey", "1 small red onion, very finely sliced", "2 tbsp olive oil", "Salt to taste"],
    steps: ["Gently cook red onion in olive oil over low heat until soft, 5-6 min", "Add vinegar and honey, simmer 8-10 min until reduced and syrupy", "Cool before using — it thickens further as it cools", "Should taste both sharp and sweet in equal measure"]
  },
  "Herb Tahini": {
    makes: "About ½ cup — keeps 4 days",
    ingredients: ["3 tbsp tahini", "½ cup flat-leaf parsley", "¼ cup mint leaves", "1 small garlic clove", "1 green chilli, deseeded", "Juice of ½ lemon", "1 tsp honey", "2-3 tbsp cold water", "Salt to taste"],
    steps: ["Blend all ingredients until almost smooth", "Add water gradually until the consistency of pouring cream", "Taste — should be herby, a little spicy and slightly sweet"]
  },
  "Spicy Peanut Sauce": {
    makes: "About ½ cup — keeps 1 week",
    ingredients: ["3 tbsp peanut butter", "1 tbsp tamari", "1 tbsp lime juice", "1 tsp sesame oil", "1 tsp honey", "1 tsp fresh ginger, grated", "Pinch of chilli flakes", "3-4 tbsp warm water"],
    steps: ["Whisk peanut butter with tamari, lime juice and sesame oil", "Add ginger, honey and chilli flakes", "Loosen with warm water until pourable — it should coat the back of a spoon"]
  },
  "Sweet Ginger": {
    makes: "About ⅓ cup — keeps 1 week",
    ingredients: ["3cm piece fresh ginger, grated", "1 garlic clove, grated", "2 tbsp honey", "3 tbsp olive oil", "2 tbsp sesame oil", "1 tbsp rice vinegar", "Salt and white pepper"],
    steps: ["Combine ginger and garlic in a small bowl", "Add honey, both oils and rice vinegar and whisk together", "Season with salt and white pepper — should be sweet, nutty and fragrant"]
  },
  "Lemon & Oregano": {
    makes: "About ¼ cup — keeps 1 week",
    ingredients: ["4 tbsp olive oil", "2 tbsp lemon juice", "1 tsp dried oregano", "1 small garlic clove, minced", "Salt and pepper"],
    steps: ["Whisk all ingredients together in a small bowl", "Taste and adjust lemon — it should be bright and herby", "No cooking needed"]
  },
  "Balsamic Glaze": {
    makes: "About ¼ cup — keeps 2 weeks",
    ingredients: ["½ cup balsamic vinegar", "1 tsp honey"],
    steps: ["Simmer balsamic vinegar and honey in a small pan over medium heat", "Reduce by half, 8-10 min, until syrupy", "Cool before using — it thickens further as it cools. Or use store-bought."]
  },
  "Red Wine Vinegar & Capers": {
    makes: "About ⅓ cup — keeps 1 week",
    ingredients: ["4 tbsp olive oil", "2 tbsp red wine vinegar", "1 tbsp capers, roughly chopped", "1 tsp Dijon mustard", "1 small garlic clove, minced", "Salt and pepper"],
    steps: ["Whisk mustard and vinegar together first", "Whisk in olive oil until emulsified", "Stir in capers and garlic, season well"]
  },
  "Dijon Mustard Vinaigrette": {
    makes: "About ⅓ cup — keeps 1 week",
    ingredients: ["1 tbsp Dijon mustard", "2 tbsp white wine vinegar", "4 tbsp olive oil", "1 small shallot, finely minced", "Salt and pepper"],
    steps: ["Whisk mustard and vinegar together", "Slowly drizzle in olive oil, whisking constantly until emulsified", "Add shallot, season well — it should be sharp and mustardy"]
  },
  "Cumin Yoghurt": {
    makes: "About ½ cup — keeps 3 days",
    ingredients: ["½ cup plain yoghurt", "1 tsp ground cumin", "1 garlic clove, grated", "1 tbsp lemon juice", "1 tbsp olive oil", "Salt to taste"],
    steps: ["Combine yoghurt, cumin, garlic and lemon juice", "Stir in olive oil and season well", "Taste — should be tangy with a warm spice depth"]
  },
  "Sumac & Lemon": {
    makes: "About ¼ cup — keeps 1 week",
    ingredients: ["4 tbsp olive oil", "2 tbsp lemon juice", "1 tsp sumac", "½ tsp dried mint", "1 small garlic clove, minced", "Salt to taste"],
    steps: ["Combine all ingredients and whisk together", "The sumac adds a fruity tartness — taste and adjust lemon", "Let sit 5 min before using so sumac blooms"]
  },
  "Lemon & Olive Oil": {
    makes: "About ¼ cup — keeps 1 week",
    ingredients: ["4 tbsp good quality olive oil", "Juice of 1 large lemon", "1 small garlic clove, minced", "Salt and pepper"],
    steps: ["Whisk lemon juice and olive oil together", "Add garlic and season generously", "Simple — the quality of the olive oil matters here"]
  },
  "Almond Butter Satay": {
    makes: "About ½ cup — keeps 1 week",
    ingredients: ["3 tbsp almond butter", "1 tbsp tamari", "1 tbsp lime juice", "1 tsp sesame oil", "1 tsp honey", "1 small garlic clove, grated", "3-4 tbsp warm water"],
    steps: ["Whisk almond butter with tamari, lime juice and sesame oil", "Add garlic and honey and mix well", "Loosen with warm water to a drizzleable consistency"]
  }
};

const SALAD_LABELS = ["Salad 1","Salad 2","Salad 3","Salad 4","Salad 5","Salad 6","Salad 7"];

const FRIDGE_GROUPS = [
  { name: "Base & grains", items: ["Barley", "Brown rice", "Buckwheat", "Bulgur wheat", "Quinoa"] },
  { name: "Greens & leaves", items: ["Baby spinach", "Kale", "Lettuce", "Rocket"] },
  { name: "Vegetables", items: ["Avocado", "Beetroot", "Broccoli", "Brussels sprouts", "Cabbage", "Capsicum", "Carrots", "Cauliflower", "Celery", "Cherry tomatoes", "Corn", "Cucumber", "Eggplant", "Fennel", "Green beans", "Potatoes", "Pumpkin", "Snow peas", "Squash", "Sweet potatoes", "Turnip", "Zucchini"] },
  { name: "Alliums & aromatics", items: ["Brown onion", "Chilli", "Garlic", "Ginger", "Leek", "Red onion", "Spring onions"] },
  { name: "Protein & dairy", items: ["Butter beans", "Canned tuna", "Chickpeas", "Eggs", "Feta", "Fresh mozzarella", "Halloumi", "Lentils", "Mung beans", "Parmesan", "Yoghurt"] },
  { name: "Pantry", items: ["Anchovies", "Balsamic vinegar", "Capers", "Cumin", "Mayo", "Mustard", "Olive oil", "Olives", "Peanut butter", "Sumac", "White wine vinegar"] },
  { name: "Nuts & seeds", items: ["Almonds", "Hemp seeds", "Pumpkin seeds", "Sesame seeds", "Walnuts"] },
  { name: "Fresh herbs & fruit", items: ["Apples", "Basil", "Coriander", "Lemons", "Limes", "Parsley", "Pomegranate seeds"] },
];

const COMMON_FRIDGE_ITEMS = FRIDGE_GROUPS.flatMap(g => g.items);

// HELPERS //

async function shareOrCopy(title, text) {
  if (navigator.share) {
    try { await navigator.share({ title, text }); return true; } catch {}
  }
  await navigator.clipboard.writeText(text);
  return false;
}


const PRODUCE_KEYS  = ["spinach","kale","rocket","lettuce","microgreen","avocado","tomato","onion","carrot","cabbage","cucumber","zucchini","eggplant","broccolini","broccoli","cauliflower","beetroot","mushroom","pumpkin","sweet potato","herb","lemon","lime","chilli","sprout"];
const PROTEIN_KEYS  = ["salmon","chicken","turkey","steak","tofu","tempeh","halloumi","egg","feta","tuna","mackerel","sardine","chickpea"];
const DRESSING_KEYS = ["tahini","pesto","hummus","soy","satay","salsa","lemongrass","dressing","sauce"];

function classify(item) {
  const l = item.toLowerCase();
  if (PRODUCE_KEYS.some(k => l.includes(k)))  return "🥬 Produce";
  if (PROTEIN_KEYS.some(k => l.includes(k)))  return "🥩 Proteins & Dairy";
  if (DRESSING_KEYS.some(k => l.includes(k))) return "🥫 Dressings";
  return "🫙 Pantry";
}

function effective(salad, isVeg) {
  const swap = VEG_SWAP[salad.protein];
  if (!isVeg || !swap) return salad;
  // Replace protein name in steps (case-insensitive, safe fallback)
  const fromLower = salad.protein.toLowerCase();
  const safeSteps = salad.steps.map(step => {
    const idx = step.toLowerCase().indexOf(fromLower);
    if (idx === -1) return step;
    return step.slice(0, idx) + swap.protein + step.slice(idx + salad.protein.length);
  });
  return {
    ...salad,
    protein: swap.protein,
    prepTasks: [
      ...salad.prepTasks.slice(0, -1),
      swap.prepTask
    ],
    steps: safeSteps
  };
}

function isAlreadyVeg(protein) {
  // True if: not in VEG_SWAP at all, OR explicitly null (already vegetarian)
  const entry = VEG_SWAP[protein];
  return entry === null || entry === undefined;
}


function cleanShoppingItem(item) {
  const specials = {
    "Toasted pita chips":            "Pita bread",
    "Sourdough croutons":            "Sourdough bread",
    "Toasted flatbread":             "Flatbread",
    "Toasted sourdough":             "Sourdough bread",
    "Lemon squeeze":                 "Lemons",
    "Lime squeeze":                  "Limes",
    "Squeeze of lemon":              "Lemons",
    "Squeeze of lime":               "Limes",
    "Caramelised onion":             "Brown onion",
    "Coconut dukkah":                null,
    "Buckwheat soba noodles":        "Soba noodles",
    "Shredded nori":                 "Nori",
    "Toasted coconut flakes":        "Coconut flakes",
    "Hard-boiled eggs":              "Eggs",
    "Anchovies & hard-boiled eggs":  "Anchovies & eggs",
    "Fresh basil & chilli":          "Basil & chilli",
    "Fresh mint & coriander":        "Mint & coriander",
    "Fresh mint & parsley":          "Mint & parsley",
    "Fresh mint & basil":            "Mint & basil",
    "Fresh mint, coriander & chilli":"Mint, coriander & chilli",
    "Chopped coriander & mint":      "Coriander & mint",
    "Chopped herbs":                 "Fresh herbs",
    "Chopped parsley":               "Parsley",
    "Chopped coriander":             "Coriander",
    "Chopped parsley & olives":      "Parsley & olives",
    "Lime squeeze & fresh coriander":"Limes & coriander",
    "Pomegranate seeds":             "Pomegranate seeds",
  };
  if (item in specials) return specials[item];
  const prefixes = [
    "Chargrilled ", "Caramelised ", "Sautéed ", "Toasted ",
    "Grilled ", "Roasted ", "Roast ", "Sliced ", "Shredded ",
    "Crushed ", "Chopped ", "Fried ", "Poached ", "Boiled ", "Smashed "
  ];
  let clean = item;
  for (const p of prefixes) {
    if (clean.startsWith(p)) { clean = clean.slice(p.length); break; }
  }
  clean = clean.replace(/ strips$/, "").replace(/ florets$/, "").replace(/ cubes$/, "").trim();
  return clean.charAt(0).toUpperCase() + clean.slice(1);
}

function getShoppingSections(plan, vegMode) {
  // Count demand per cleaned item across the week
  const demand = new Map();
  plan.forEach((s, i) => {
    const e = effective(s, vegMode.has(i));
    [e.grain, e.green, ...e.veg, e.protein, e.fat, e.crunch, e.extra]
      .filter(Boolean).forEach(item => {
        const c = cleanShoppingItem(item);
        if (c) demand.set(c.toLowerCase(), (demand.get(c.toLowerCase()) || { name: c, count: 0 }));
        if (c) {
          const cur = demand.get(c.toLowerCase());
          cur.count += 1;
          cur.name = c;
        }
      });
  });
  // Build sections with {name, needed} per item
  const sections = {};
  demand.forEach(({ name, count }) => {
    const sec = classify(name);
    if (!sections[sec]) sections[sec] = [];
    sections[sec].push({ name, needed: count });
  });
  return sections;
}

function itemIsHeld(item, haveItems) {
  const lower = item.toLowerCase();
  return [...haveItems.keys()].some(h => {
    const hl = h.toLowerCase();
    return lower.includes(hl) || hl.includes(lower);
  });
}

function getHeldQty(cleanedItem, haveItems) {
  const lower = cleanedItem.toLowerCase();
  let qty = 0;
  haveItems.forEach((count, key) => {
    const kl = key.toLowerCase();
    if (lower.includes(kl) || kl.includes(lower)) qty += count;
  });
  return qty;
}

function buildShoppingText(sections, haveItems) {
  let text = "SALAD SPINNER — SHOPPING LIST\n\n";
  for (const [section, items] of Object.entries(sections)) {
    const lines = [];
    items.forEach(({ name, needed }) => {
      const held = getHeldQty(name, haveItems);
      const shortfall = Math.max(0, needed - held);
      if (shortfall > 0) lines.push(shortfall > 1 ? `□  ${shortfall} x ${name}` : `□  ${name}`);
    });
    if (lines.length) {
      text += `${section}\n`;
      lines.forEach(l => (text += l + "\n"));
      text += "\n";
    }
  }
  return text.trim();
}


function scoreProfile(profile, haveItems) {
  if (!haveItems || haveItems.size === 0) return 0;
  const fields = [
    { value: profile.grain,   weight: 2 },
    { value: profile.green,   weight: 1 },
    { value: profile.protein, weight: 3 },
    { value: profile.fat,     weight: 1 },
    { value: profile.crunch,  weight: 1 },
    ...profile.veg.map(v => ({ value: v, weight: 1 }))
  ];
  return fields.reduce((score, { value, weight }) => {
    const vl = value.toLowerCase();
    const matched = [...haveItems.keys()].some(h => {
      const hl = h.toLowerCase();
      return vl.includes(hl) || hl.includes(vl);
    });
    return score + (matched ? weight : 0);
  }, 0);
}

// STYLES //

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Outfit:wght@300;400;500;600&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html, body, #root { height: 100%; background: #F5F0E8; }
  body::before { content: ""; position: fixed; inset: 0; background: #F5F0E8; z-index: -1; }
  .ss { min-height: 100vh; min-height: 100dvh; background: #F5F0E8; font-family: 'Outfit', sans-serif; color: #1C1C1C; padding-bottom: env(safe-area-inset-bottom); }

  .ss-hd { background: #1E3A1E; padding: 20px 20px 0; position: sticky; top: 0; z-index: 10; }
  .ss-hd-inner { max-width: 600px; margin: 0 auto; position: relative; }
  .ss-title { font-family: 'Cormorant Garamond', serif; font-size: 26px; font-weight: 600; color: #F5F0E8; letter-spacing: -0.3px; text-align: center; }
  .ss-sub { font-size: 10px; color: #7FAF7F; letter-spacing: 2.5px; text-transform: uppercase; margin-top: 2px; font-weight: 500; text-align: center; }
  .ss-tabs { display: flex; margin-top: 16px; }
  .ss-tab { flex: 1; padding: 8px 8px; background: none; border: none; font-family: 'Outfit', sans-serif; font-size: 12px; font-weight: 500; color: #7AAF7A; cursor: pointer; letter-spacing: 1px; text-transform: uppercase; border-bottom: 2px solid transparent; transition: color .2s, border-color .2s; }
  .ss-tab.active { color: #F5F0E8; border-bottom-color: #7EC850; }

  .ss-body { padding: 20px 16px 40px; max-width: 600px; margin: 0 auto; }

  .browse-toggle { width: 100%; padding: 12px 16px; background: white; border: 1.5px solid #D0C8B8; border-radius: 10px; font-family: 'Outfit', sans-serif; font-size: 13px; font-weight: 500; color: #6B6B6B; cursor: pointer; text-align: left; margin-top: 8px; transition: all .15s; display: flex; align-items: center; justify-content: space-between; }
  .browse-toggle:hover { border-color: #1E3A1E; color: #1E3A1E; }
  .browse-toggle:hover .browse-chevron line { stroke: #1E3A1E; }
  .browse-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 16px; }
  .thumb { border-radius: 10px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,.08); cursor: pointer; transition: transform .15s, box-shadow .15s, opacity .15s; border: 2px solid transparent; opacity: .55; }
  .thumb.in-plan { opacity: 1; }
  .thumb:hover { transform: translateY(-1px); box-shadow: 0 3px 8px rgba(0,0,0,.12); }
  .thumb.in-plan { opacity: 1; box-shadow: 0 0 0 3px #1E3A1E; }
  .thumb-hd { padding: 12px 8px; position: relative; height: 130px; box-sizing: border-box; display: flex; flex-direction: column; justify-content: flex-end; }
  .thumb-emoji { font-size: 18px; position: absolute; top: 8px; left: 8px; }
  .thumb-name { font-family: 'Cormorant Garamond', serif; font-size: 15px; font-weight: 600; color: white; line-height: 1.2; margin-bottom: 4px; }
  .thumb-check { position: absolute; top: 8px; right: 8px; width: 20px; height: 20px; border-radius: 50%; background: white; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700; color: #1E3A1E; }
  .thumb-detail { font-size: 11px; color: white; opacity: .8; line-height: 1.5; }
  .fab { position: fixed; bottom: 28px; right: 20px; z-index: 50; width: 52px; height: 52px; border-radius: 50%; background: #1E3A1E; border: none; color: #F5F0E8; font-size: 24px; cursor: pointer; box-shadow: 0 4px 12px rgba(0,0,0,.25); display: flex; align-items: center; justify-content: center; transition: transform .15s, box-shadow .15s; }
  .fab:hover { transform: scale(1.08); box-shadow: 0 6px 18px rgba(0,0,0,.3); }
  .wc-overlay { position: fixed; inset: 0; background: rgba(0,0,0,.5); z-index: 60; display: flex; flex-direction: column; padding-top: 48px; }
  .wc-sheet { background: #F5F0E8; border-radius: 16px 16px 0 0; padding: 20px 16px calc(32px + env(safe-area-inset-bottom)); flex: 1; overflow-y: auto; max-width: 600px; width: 100%; margin: auto auto 0; display: flex; flex-direction: column; }
  .wc-hd { display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px; }
  .wc-title { font-family: 'Cormorant Garamond', serif; font-size: 22px; }
  .wc-sub { font-size: 12px; color: #767676; margin-bottom: 16px; }
  .wc-close { width: 28px; height: 28px; border-radius: 50%; background: #EDEAE3; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: background .15s; }
  .wc-close:hover { background: #DDD9D0; }
  .wc-find { background: #1E3A1E; color: #F5F0E8; border: none; padding: 16px 20px; border-radius: 8px; font-family: 'Outfit', sans-serif; font-size: 14px; font-weight: 500; cursor: pointer; width: 100%; margin-top: 16px; transition: opacity .15s; }
  .wc-find:hover { opacity: .85; }
  .wc-find:disabled { opacity: .4; cursor: default; }
  .wc-result { margin-top: 20px; }
  .wc-section-label { font-size: 9px; color: #767676; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 600; margin: 16px 0 8px; padding-bottom: 8px; border-bottom: 1px solid #F0EBE0; }
  .wc-section-label:first-child { margin-top: 0; }
  .wc-retry { background: none; border: 1.5px solid #1E3A1E; color: #1E3A1E; padding: 8px 16px; border-radius: 20px; font-family: 'Outfit', sans-serif; font-size: 13px; font-weight: 500; cursor: pointer; margin-top: 12px; width: 100%; transition: all .15s; }
  .wc-retry:hover { background: #1E3A1E; color: #F5F0E8; }
  .day-row { display: flex; gap: 8px; margin-bottom: 20px; }
  .day-btn { flex: 1; padding: 8px 2px; background: white; border: 1.5px solid #D0C8B8; border-radius: 8px; font-family: 'Outfit', sans-serif; font-size: 11px; font-weight: 500; color: #767676; cursor: pointer; transition: all .15s; text-align: center; letter-spacing: 0.3px; }
  .day-btn.on { background: #1E3A1E; border-color: #1E3A1E; color: #F5F0E8; }

  .plan-top { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 16px; }
  .h2 { font-family: 'Cormorant Garamond', serif; font-size: 22px; color: #1C1C1C; }
  .btn-outline { background: none; border: 1.5px solid #1E3A1E; color: #1E3A1E; padding: 4px 16px; border-radius: 20px; font-family: 'Outfit', sans-serif; font-size: 12px; font-weight: 500; cursor: pointer; letter-spacing: 0.5px; transition: all .15s; }
  .btn-outline:hover { background: #1E3A1E; color: #F5F0E8; }
  .share-btn { background: none; border: 1.5px solid #1E3A1E; color: #1E3A1E; padding: 4px 12px; border-radius: 20px; font-family: 'Outfit', sans-serif; font-size: 12px; font-weight: 500; cursor: pointer; transition: all .15s; display: flex; align-items: center; gap: 4px; }
  .share-btn:hover { background: #1E3A1E; color: #F5F0E8; }
  .share-btn.light { border-color: rgba(255,255,255,.5); color: white; background: rgba(255,255,255,.12); }
  .share-btn.light:hover { background: rgba(255,255,255,.25); }

  .card { background: white; border-radius: 12px; margin-bottom: 12px; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,.07); }
  .card-hd { padding: 12px 16px; display: flex; align-items: flex-start; justify-content: space-between; }
  .card-name { font-family: 'Cormorant Garamond', serif; font-size: 22px; font-weight: 600; color: white; margin-top: 2px; }
  .veg-badge { font-size: 10px; background: rgba(255,255,255,.18); padding: 2px 8px; border-radius: 10px; color: white; font-weight: 500; margin-top: 4px; display: inline-block; }
  .card-emoji { font-size: 30px; margin-top: 2px; }
  .card-bd { padding: 12px 16px 16px; }
  .ing-label { font-size: 9px; color: #767676; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 600; margin-bottom: 4px; padding-top: 8px; border-top: 1px solid #F0EBE0; }
  .ing-label:first-child { padding-top: 0; border-top: none; }
  .ing-row { display: flex; flex-wrap: wrap; margin-bottom: 8px; line-height: 1.6; }
  .tag { font-size: 12px; color: #666; }
  .tag.swapped { color: #1E5C1E; font-weight: 600; }
  .card-footer { font-size: 13px; color: #1E3A1E; font-weight: 500; padding: 8px 16px; display: flex; justify-content: space-between; align-items: center; gap: 8px; margin: 0 -16px -16px; border-radius: 0 0 12px 12px; }
  .footer-r { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }
  .make-flip-wrap { perspective: 1000px; }
  .make-flip { position: relative; transform-style: preserve-3d; transition: transform .45s ease; }
  .make-flip.flipped { transform: rotateY(180deg); }
  .make-face { position: absolute; top: 0; left: 0; width: 100%; backface-visibility: hidden; -webkit-backface-visibility: hidden; border-radius: 12px; overflow: hidden; background: white; box-shadow: 0 1px 4px rgba(0,0,0,.08); }
  .make-face-back { transform: rotateY(180deg); }
  .make-spacer { visibility: hidden; pointer-events: none; border-radius: 12px; overflow: hidden; }
  .make-hd { padding: 16px 20px; color: white; cursor: pointer; }
  .make-kicker { font-size: 10px; letter-spacing: 2.5px; text-transform: uppercase; opacity: .65; margin-bottom: 4px; }
  .make-title { font-family: 'Cormorant Garamond', serif; font-size: 26px; font-weight: 600; }
  .make-flip-hint { font-size: 10px; color: rgba(255,255,255,.9); letter-spacing: 1px; margin-top: 4px; }
  .make-bd { padding: 12px 20px 16px; }
  .step-row { display: flex; gap: 16px; padding: 12px 0; border-bottom: 1px solid #F6F1E9; align-items: flex-start; }
  .step-row:last-child { border-bottom: none; }
  .step-n { width: 26px; height: 26px; border-radius: 50%; background: #F5F0E8; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 600; color: #1E3A1E; flex-shrink: 0; margin-top: 1px; }
  .step-t { font-size: 14px; color: #333; line-height: 1.5; }
  .grab-list { padding: 12px 20px 16px; }
  .grab-item { display: flex; gap: 8px; align-items: center; padding: 8px 0; border-bottom: 1px solid #F6F1E9; font-size: 14px; color: #333; }
  .grab-item:last-child { border-bottom: none; }
  .grab-dot { width: 6px; height: 6px; border-radius: 50%; background: #7EC850; flex-shrink: 0; }

  .veg-btn { background: none; border: 1.5px solid #D0C8B8; color: #6B6B6B; padding: 8px 16px; border-radius: 20px; font-family: 'Outfit', sans-serif; font-size: 13px; font-weight: 500; cursor: pointer; transition: all .15s; white-space: nowrap; }
  .veg-btn.on { background: #E4F0E4; border-color: #6ABF6A; color: #1E5C1E; }
  .veg-already { font-size: 13px; color: #3D7A3D; background: #E8F4E8; border-radius: 20px; padding: 8px 16px; white-space: nowrap; }
  .swap-btn { background: none; border: 1.5px solid #D0C8B8; color: #6B6B6B; font-size: 13px; font-weight: 500; cursor: pointer; font-family: 'Outfit', sans-serif; padding: 8px 16px; border-radius: 20px; transition: all .15s; white-space: nowrap; }
  .swap-btn:hover { background: #F5F0E8; }

  .sec-h { font-family: 'Cormorant Garamond', serif; font-size: 21px; margin: 24px 0 12px; }
  .sec-h:first-child { margin-top: 0; }

  .fridge-groups { display: flex; flex-direction: column; gap: 16px; margin-bottom: 4px; }
  .fridge-group-label { font-size: 9px; color: #767676; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 600; margin-bottom: 8px; }
  .fridge-grid { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 4px; }
  .f-tag { display: inline-flex; align-items: center; gap: 8px; padding: 8px 12px; border-radius: 20px; border: 1.5px solid #D0C8B8; background: white; font-size: 13px; color: #555; font-family: 'Outfit', sans-serif; transition: all .15s; cursor: pointer; }
  .f-tag.on { background: #1E3A1E; border-color: #1E3A1E; color: white; }
  .f-tag-count { font-size: 11px; font-weight: 700; color: #7EC850; background: rgba(255,255,255,.15); border-radius: 10px; padding: 1px 8px; }

  .shop-sec { margin-bottom: 16px; }
  .shop-sec-title { font-size: 10px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #767676; margin-bottom: 8px; }
  .shop-row { display: flex; align-items: center; gap: 12px; padding: 8px 0; border-bottom: 1px solid #F0EBE0; cursor: pointer; user-select: none; }
  .shop-row.held { opacity: .35; }
  .shop-check { width: 22px; height: 22px; border-radius: 6px; border: 1.5px solid #D0C8B8; background: white; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: all .15s; }
  .shop-row.held .shop-check { background: #1E3A1E; border-color: #1E3A1E; }
  .shop-check-tick { font-size: 13px; color: white; }
  .shop-item-name { font-size: 14px; color: #333; flex: 1; }
  .shop-row.held .shop-item-name { text-decoration: line-through; color: #767676; }
  .shop-qty { font-size: 12px; font-weight: 600; color: #767676; margin-left: 8px; }
  .shop-qty-more { font-size: 11px; color: #767676; flex-shrink: 0; }

  .copy-btn { background: #1E3A1E; color: #F5F0E8; border: none; padding: 12px 20px; border-radius: 8px; font-family: 'Outfit', sans-serif; font-size: 14px; font-weight: 500; cursor: pointer; width: 100%; margin-top: 20px; transition: opacity .15s; }
  .copy-btn:hover { opacity: .85; }

  .prep-card { background: white; border-radius: 10px; padding: 16px 16px; margin-bottom: 8px; box-shadow: 0 1px 3px rgba(0,0,0,.06); }
  .prep-name { font-weight: 600; font-size: 14px; color: #1E3A1E; margin-bottom: 8px; display: flex; align-items: center; gap: 8px; }
  .veg-label { font-size: 11px; color: #6ABF6A; font-weight: 400; }
  .prep-task { font-size: 13px; color: #555; padding: 4px 0; display: flex; gap: 8px; line-height: 1.45; }
  .prep-arrow { color: #BEB8AD; flex-shrink: 0; }

  .dressing-note { font-size: 13px; color: #999; margin-bottom: 12px; line-height: 1.5; }
  .dr-card { background: white; border-radius: 10px; margin-bottom: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,.06); }
  .dr-hd { background: #F0EBE0; padding: 12px 16px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; user-select: none; }
  .dr-hd-left .dr-name { font-weight: 600; font-size: 14px; color: #1E3A1E; }
  .dr-hd-left .dr-makes { font-size: 11px; color: #767676; margin-top: 2px; }
  .dr-chevron { transition: transform .2s; display: inline-block; flex-shrink: 0; }
  .dr-chevron.open { transform: rotate(180deg); }
  .dr-card .dr-hd:hover .dr-chevron line { stroke: #1E3A1E; }
  .dr-body { padding: 12px 16px 16px; }
  .dr-sec { font-size: 9px; color: #767676; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 600; margin-bottom: 8px; margin-top: 12px; }
  .dr-sec:first-child { margin-top: 0; }
  .dr-ing { font-size: 13px; color: #444; padding: 4px 0; display: flex; gap: 8px; }
  .dr-ing-dot { color: #D0C8B8; }
  .dr-step { font-size: 13px; color: #555; padding: 4px 0; display: flex; gap: 8px; line-height: 1.45; }
  .dr-step-n { font-size: 11px; font-weight: 600; color: #1E3A1E; min-width: 14px; margin-top: 2px; flex-shrink: 0; }


  @keyframes slideUp {
    from { transform: translateY(100%); opacity: 0; }
    to   { transform: translateY(0);    opacity: 1; }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,.5); z-index: 100; display: flex; align-items: flex-end; animation: fadeIn .25s ease; }
  .modal { background: #F5F0E8; border-radius: 16px 16px 0 0; padding: 24px 20px 32px; width: 100%; max-width: 600px; margin: 0 auto; }
  .modal-hd { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
  .modal-title { font-family: 'Cormorant Garamond', serif; font-size: 22px; }
  .modal-close { width: 28px; height: 28px; border-radius: 50%; background: #EDEAE3; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: background .15s; }
  .modal-close:hover { background: #DDD9D0; }
  .modal-step { display: flex; gap: 16px; margin-bottom: 16px; align-items: flex-start; }
  .modal-icon { font-size: 22px; flex-shrink: 0; margin-top: 1px; }
  .modal-step-title { font-size: 14px; font-weight: 600; color: #1E3A1E; margin-bottom: 4px; }
  .modal-step-desc { font-size: 13px; color: #666; line-height: 1.5; }

  .fb-banner { background: #E8F4E8; border-radius: 10px; padding: 12px 16px; margin-bottom: 20px; font-size: 13px; color: #1E5C1E; line-height: 1.5; }
  .fb-field { margin-bottom: 16px; }
  .fb-label { font-size: 12px; font-weight: 600; color: #444; margin-bottom: 8px; display: block; }
  .fb-select { width: 100%; padding: 12px; border: 1.5px solid #D0C8B8; border-radius: 8px; font-family: 'Outfit', sans-serif; font-size: 14px; color: #333; background: white; cursor: pointer; }
  .fb-textarea { width: 100%; padding: 12px; border: 1.5px solid #D0C8B8; border-radius: 8px; font-family: 'Outfit', sans-serif; font-size: 14px; color: #333; resize: vertical; min-height: 96px; box-sizing: border-box; }
  .fb-textarea:focus, .fb-select:focus { outline: none; border-color: #1E3A1E; }
  .fb-success { text-align: center; padding: 24px 0; }
  .fb-success-icon { width: 48px; height: 48px; border-radius: 50%; background: #E8F4E8; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; }
  .help-feedback { margin-top: 20px; padding-top: 16px; border-top: 1px solid #E5DFD3; font-size: 13px; color: #767676; text-align: center; }
  .help-feedback-link { background: none; border: none; color: #1E3A1E; font-weight: 600; font-size: 13px; font-family: 'Outfit', sans-serif; cursor: pointer; text-decoration: underline; margin-left: 4px; padding: 0; }
  .help-btn { background: rgba(255,255,255,.15); border: none; color: rgba(255,255,255,.85); font-size: 14px; font-weight: 600; cursor: pointer; padding: 4px 8px; border-radius: 20px; line-height: 1; font-family: 'Outfit', sans-serif; transition: background .15s; }
  .help-btn:hover { background: rgba(255,255,255,.25); }
  .pill-row { display: flex; gap: 8px; overflow-x: auto; padding: 0 16px 8px; margin: 0 -16px 16px; scrollbar-width: none; }
  .pill-row::-webkit-scrollbar { display: none; }
  .pill { flex-shrink: 0; padding: 8px 16px; border-radius: 20px; border: 1.5px solid #D0C8B8; background: white; font-size: 13px; cursor: pointer; font-family: 'Outfit', sans-serif; white-space: nowrap; color: #555; transition: all .15s; }
  .pill.active { background: #1E3A1E; border-color: #1E3A1E; color: white; }


`;

// APP //


// PERSISTENCE //

const STORAGE_KEY = "salad-spinner-v1";

function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      plan: state.plan.map(s => s.name),
      vegMode: [...state.vegMode],
      haveItems: [...state.haveItems.entries()],
      selectedDays: [...state.selectedDays],
      makeIdx: state.makeIdx,
    }));
  } catch {}
}

function isFirstVisit() {
  try { return !localStorage.getItem(STORAGE_KEY); } catch { return true; }
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    const plan = (data.plan || [])
      .map((name, i) => {
        const p = PROFILES.find(p => p.name === name);
        return p ? { ...p, day: SALAD_LABELS[i] } : null;
      })
      .filter(Boolean);
    return {
      plan,
      vegMode: new Set(data.vegMode || []),
      haveItems: new Map(data.haveItems || []),
      selectedDays: new Set(data.selectedDays || ['Mon','Tue','Wed','Thu','Fri']),
      makeIdx: data.makeIdx || 0,
    };
  } catch { return null; }
}

export default function SaladSpinner() {
  const saved = loadState();

  const [mode, setMode]           = useState("plan");
  const [plan, setPlan]           = useState(saved?.plan || []);
  const [vegMode, setVegMode]     = useState(saved?.vegMode || new Set());
  const [makeIdx, setMakeIdx]     = useState(saved?.makeIdx || 0);
  const [haveItems, setHaveItems] = useState(saved?.haveItems || new Map());
  const [showHelp, setShowHelp]   = useState(() => isFirstVisit());
  const [showWildcard, setShowWildcard] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedDays, setSelectedDays] = useState(saved?.selectedDays || new Set(['Mon','Tue','Wed','Thu','Fri']));

  // On first load, spin if no saved plan
  useEffect(() => { if (!saved || saved.plan.length === 0) spin(); }, []);
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") {
        if (showFeedback) setShowFeedback(false);
        else if (showWildcard) setShowWildcard(false);
        else if (showHelp) setShowHelp(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showWildcard, showHelp, showFeedback]);

  // Persist state on every relevant change
  useEffect(() => {
    if (plan.length > 0) saveState({ plan, vegMode, haveItems, selectedDays, makeIdx });
  }, [plan, vegMode, haveItems, selectedDays, makeIdx]);

  function spin(currentHaveItems, count) {
    const items = currentHaveItems || haveItems;
    const n = count !== undefined ? count : selectedDays.size;
    const scored = PROFILES
      .map(p => ({ profile: p, score: scoreProfile(p, items) }))
      .sort((a, b) => b.score - a.score || Math.random() - 0.5);
    const top = scored.slice(0, n).map(({ profile }) => profile);
    setPlan(top.map((p, i) => ({ ...p, day: SALAD_LABELS[i] })));
    setVegMode(new Set());
  }

  function swap(idx) {
    const usedNames = plan.map(s => s.name);
    const pool = PROFILES.filter(p => !usedNames.includes(p.name));
    if (!pool.length) return;
    const pick = pool[Math.floor(Math.random() * pool.length)];
    const next = [...plan];
    next[idx] = { ...pick, day: SALAD_LABELS[idx] };
    setPlan(next);
    const nv = new Set(vegMode); nv.delete(idx); setVegMode(nv);
  }

  function pickRecipe(profileName) {
    const inPlan = plan.some(s => s.name === profileName);
    if (inPlan) {
      if (plan.length <= 1) return;
      setPlan(plan.filter(s => s.name !== profileName));
    } else {
      const profile = PROFILES.find(p => p.name === profileName);
      if (!profile) return;
      const entry = { ...profile, day: SALAD_LABELS[plan.length] || SALAD_LABELS[0] };
      if (plan.length < selectedDays.size) {
        setPlan([...plan, entry]);
      } else {
        const next = [...plan];
        next[next.length - 1] = entry;
        setPlan(next);
      }
    }
  }

  function toggleDay(day) {
    const next = new Set(selectedDays);
    if (next.has(day) && next.size <= 1) return;
    next.has(day) ? next.delete(day) : next.add(day);
    setSelectedDays(next);
    spin(haveItems, next.size);
  }

  function toggleVeg(idx) {
    const next = new Set(vegMode);
    next.has(idx) ? next.delete(idx) : next.add(idx);
    setVegMode(next);
  }

  function setHaveCount(item, delta) {
    const next = new Map(haveItems);
    const cur = next.get(item) || 0;
    const val = Math.max(0, Math.min(5, cur + delta));
    val === 0 ? next.delete(item) : next.set(item, val);
    setHaveItems(next);
  }

  return (
    <>
      <style>{CSS}</style>
      <div className="ss">
        <div className="ss-hd">
          <div className="ss-hd-inner">
            <div className="ss-title">Salad Spinner 🥗</div>
            <div className="ss-sub">Weekly bowl planner</div>
            <button className="help-btn" onClick={() => setShowHelp(true)} aria-label="How it works" style={{ position: "absolute", top: 0, right: 0 }}>?</button>
            <div className="ss-tabs">
              {[["plan","📅 Plan"],["prep","🛒 Prep"],["make","🍴 Make"]].map(([id, label]) => (
                <button key={id} className={`ss-tab ${mode === id ? "active" : ""}`} onClick={() => setMode(id)}>
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="ss-body">
          {mode === "plan" && (
            <PlanMode plan={plan} vegMode={vegMode} haveItems={haveItems} selectedDays={selectedDays} onSpin={() => spin(haveItems)} onSwap={swap} onToggleVeg={toggleVeg} onSetHaveCount={setHaveCount} onToggleDay={toggleDay} onPickRecipe={pickRecipe} />
          )}
          {mode === "prep" && (
            <PrepMode plan={plan} vegMode={vegMode} haveItems={haveItems} />
          )}
          {mode === "make" && (
            <MakeMode plan={plan} vegMode={vegMode} idx={makeIdx} onSelect={setMakeIdx} />
          )}
        </div>
        <button className="fab" onClick={() => setShowWildcard(true)} title="Wildcard salad" aria-label="Open wildcard salad picker">✦</button>

        {showWildcard && (
          <WildcardModal onClose={() => setShowWildcard(false)} />
        )}

        {showFeedback && (
          <FeedbackModal onClose={() => setShowFeedback(false)} />
        )}

        {showHelp && (
          <div className="modal-overlay" onClick={() => setShowHelp(false)}>
            <div className="modal" onClick={e => e.stopPropagation()}>
              <div className="modal-hd">
                <div className="modal-title">How it works</div>
                <button className="modal-close" onClick={() => setShowHelp(false)} aria-label="Close"><svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <line x1="1" y1="1" x2="9" y2="9" stroke="#555" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="9" y1="1" x2="1" y2="9" stroke="#555" strokeWidth="1.5" strokeLinecap="round"/>
                </svg></button>
              </div>
              <div className="modal-step">
                <div className="modal-icon">📅</div>
                <div>
                  <div className="modal-step-title">Plan</div>
                  <div className="modal-step-desc">Pick your days, tick what's in the fridge. The app scores all 27 recipes and picks the best matches. Swap cards, respin, or browse all recipes below. Toggle Make veg to switch the protein.</div>
                </div>
              </div>
              <div className="modal-step">
                <div className="modal-icon">🛒</div>
                <div>
                  <div className="modal-step-title">Prep</div>
                  <div className="modal-step-desc">Shopping list with fridge items crossed off and quantities calculated. Tap to check off as you shop. Prep tasks and dressing recipes sit below.</div>
                </div>
              </div>
              <div className="modal-step">
                <div className="modal-icon">🍴</div>
                <div>
                  <div className="modal-step-title">Make</div>
                  <div className="modal-step-desc">Pick a salad, tap the card to flip between what to grab and the assembly steps.</div>
                </div>
              </div>
              <div className="modal-step">
                <div className="modal-icon">✦</div>
                <div>
                  <div className="modal-step-title">Wildcard</div>
                  <div className="modal-step-desc">Tap ✦ to make a one-off salad outside your weekly plan. Pick what you have and the app finds the best match. Good for clearing the fridge before a shop.</div>
                </div>
              </div>
              <div className="help-feedback">
                Spotted a bug or have an idea?
                <button className="help-feedback-link" onClick={() => { setShowHelp(false); setShowFeedback(true); }}>Send feedback</button>
              </div>
              <button className="copy-btn" style={{ marginTop: 16 }} onClick={() => setShowHelp(false)}>Got it, let's go</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

// PLAN //

function PlanMode({ plan, vegMode, haveItems, selectedDays, onSpin, onSwap, onToggleVeg, onSetHaveCount, onToggleDay, onPickRecipe }) {
  const [shared, setShared]   = useState(false);
  const [showBrowser, setShowBrowser] = useState(false);
  async function shareMenu() {
    const lines = plan.map((s, i) => {
      const days = [...selectedDays];
      const day = days[i] || "";
      const e = effective(s, vegMode.has(i));
      return `${day ? day + " — " : ""}${s.name}${vegMode.has(i) ? " (veg)" : ""}\n  ${e.grain} / ${e.green} / ${e.protein}`;
    }).join("\n\n");
    await shareOrCopy("This week's salads", "🥗 This week's salads:\n\n" + lines);
    setShared(true); setTimeout(() => setShared(false), 2000);
  }
  return (
    <>
      <div className="h2" style={{ marginBottom: 12 }}>How many salads this week?</div>
      <div className="day-row">
        {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(d => (
          <button key={d} className={`day-btn ${selectedDays.has(d) ? "on" : ""}`} onClick={() => onToggleDay(d)}>
            {d}
          </button>
        ))}
      </div>
      <div className="h2" style={{ marginBottom: 4 }}>What's in the fridge?</div>
      <p style={{ fontSize: 12, color: "#767676", marginBottom: 12 }}>Tap once to add, tap again to increase the count up to 5.</p>
      <div className="fridge-groups">
        {FRIDGE_GROUPS.map(group => (
          <div key={group.name}>
            <div className="fridge-group-label">{group.name}</div>
            <div className="fridge-grid">
              {group.items.map(item => {
                const qty = haveItems.get(item) || 0;
                return (
                  <button key={item} className={`f-tag ${qty > 0 ? "on" : ""}`} onClick={() => onSetHaveCount(item, qty < 5 ? 1 : -qty)}>
                    {item}
                    {qty > 0 && <span className="f-tag-count">{qty}</span>}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="plan-top" style={{ marginTop: 24 }}>
        <div>
          <div className="h2">This week's plan</div>
          {haveItems.size > 0 && (
            <div style={{ fontSize: 12, color: "#7FAF7F", marginTop: 4 }}>
              Recipes ranked by what you already have
            </div>
          )}
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button className="share-btn" onClick={shareMenu}>
            {shared ? "✓ Copied" : "↑ Share menu"}
          </button>
          <button className="btn-outline" onClick={onSpin}>↻ Respin</button>
        </div>
      </div>
      {plan.map((s, i) => {
        const isVeg      = vegMode.has(i);
        const alreadyVeg = isAlreadyVeg(s.protein);
        const e          = effective(s, isVeg);
        const swapped    = isVeg && !alreadyVeg;
        const score      = scoreProfile(s, haveItems);
        return (
          <div className="card" key={s.name + i}>
            <div className="card-hd" style={{ background: s.color }}>
              <div>
                <div className="card-name">{s.name}</div>
                {haveItems.size > 0 && (
                  <span className="veg-badge">🧺 {score} match{score !== 1 ? "es" : ""}</span>
                )}
              </div>
              <div className="card-emoji">{s.emoji}</div>
            </div>
            <div className="card-bd">
              <div className="ing-label">Base</div>
              <div className="ing-row">
                <span className="tag">{s.grain}</span>
                <span style={{ color: "#CCC", margin: "0 4px" }}>/</span>
                <span className="tag">{s.green}</span>
              </div>
              <div className="ing-label">Vegetables</div>
              <div className="ing-row">
                {s.veg.map((v, j) => (
                  <span key={v}>
                    {j > 0 && <span style={{ color: "#CCC", margin: "0 4px" }}>/</span>}
                    <span className="tag">{v}</span>
                  </span>
                ))}
              </div>
              <div className="ing-label">Protein & Fat</div>
              <div className="ing-row">
                <span className={`tag ${swapped ? "swapped" : ""}`}>{e.protein}</span>
                <span style={{ color: "#CCC", margin: "0 4px" }}>/</span>
                <span className="tag">{s.fat}</span>
              </div>
              <div className="ing-label">Toppings</div>
              <div className="ing-row">
                <span className="tag">{s.dressing}</span>
                <span style={{ color: "#CCC", margin: "0 4px" }}>/</span>
                <span className="tag">{s.crunch}</span>
                {s.extra && <><span style={{ color: "#CCC", margin: "0 4px" }}>/</span><span className="tag">{s.extra}</span></>}
              </div>
              <div className="card-footer" style={{ background: "#FAF7F2" }}>
                <button className="swap-btn" onClick={() => onSwap(i)}>↻ Swap recipe</button>
                {alreadyVeg ? (
                  <span className="veg-already">✓ Vegetarian</span>
                ) : (
                  <button className={`veg-btn ${isVeg ? "on" : ""}`} onClick={() => onToggleVeg(i)}>
                    {isVeg ? "🌿 Veg" : "🌿 Make veg"}
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
      <button className="browse-toggle" onClick={() => setShowBrowser(b => !b)}>
        <span>{showBrowser ? "Hide all recipes" : "Browse all recipes"}</span>
        {showBrowser ? <svg className="browse-chevron" width="12" height="8" viewBox="0 0 12 8" fill="none"><line x1="1" y1="7" x2="6" y2="1" stroke="#999" strokeWidth="1.5" strokeLinecap="round"/><line x1="11" y1="7" x2="6" y2="1" stroke="#999" strokeWidth="1.5" strokeLinecap="round"/></svg> : <svg className="browse-chevron" width="12" height="8" viewBox="0 0 12 8" fill="none"><line x1="1" y1="1" x2="6" y2="7" stroke="#999" strokeWidth="1.5" strokeLinecap="round"/><line x1="11" y1="1" x2="6" y2="7" stroke="#999" strokeWidth="1.5" strokeLinecap="round"/></svg>}
      </button>

      {showBrowser && (
        <div className="browse-grid">
          {PROFILES.map(p => {
            const inPlan = plan.some(s => s.name === p.name);
            const score  = scoreProfile(p, haveItems);
            return (
              <div key={p.name} className={`thumb ${inPlan ? "in-plan" : ""}`} onClick={() => onPickRecipe(p.name)}>
                <div className="thumb-hd" style={{ background: p.color }}>
                  <div className="thumb-emoji">{p.emoji}</div>
                  <div className="thumb-name">{p.name}</div>
                  <div className="thumb-detail">{p.grain} / {p.green} / {p.protein}</div>
                  {haveItems.size > 0 && (
                    <div className="thumb-detail">🧺 {score} match{score !== 1 ? "es" : ""}</div>
                  )}
                  {inPlan && <div className="thumb-check">✓</div>}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

// PREP //

function DressingCard({ name, recipe }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="dr-card">
      <div className="dr-hd" onClick={() => setOpen(o => !o)}>
        <div className="dr-hd-left">
          <div className="dr-name">{name}</div>
          <div className="dr-makes">{recipe.makes}</div>
        </div>
        <svg className={`dr-chevron ${open ? "open" : ""}`} width="12" height="8" viewBox="0 0 12 8" fill="none">
          <line x1="1" y1="1" x2="6" y2="7" stroke="#999" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="11" y1="1" x2="6" y2="7" stroke="#999" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
      {open && (
        <div className="dr-body">
          <div className="dr-sec">Ingredients</div>
          {recipe.ingredients.map((ing, i) => (
            <div key={i} className="dr-ing"><span className="dr-ing-dot">·</span><span>{ing}</span></div>
          ))}
          <div className="dr-sec">Method</div>
          {recipe.steps.map((step, i) => (
            <div key={i} className="dr-step">
              <span className="dr-step-n">{i + 1}.</span>
              <span>{step}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function PrepMode({ plan, vegMode, haveItems }) {
  const sections      = getShoppingSections(plan, vegMode);
  const weekDressings = [...new Set(plan.map(s => s.dressing))];
  const [checked, setChecked] = useState(new Set());
  const [copied, setCopied]   = useState(false);

  function toggleCheck(key) {
    const next = new Set(checked);
    next.has(key) ? next.delete(key) : next.add(key);
    setChecked(next);
  }

  function buildListText() {
    let text = "🛒 Shopping list:\n\n";
    for (const [sec, items] of Object.entries(sections)) {
      const lines = [];
      items.forEach(({ name, needed }) => {
        const held = getHeldQty(name, haveItems);
        const shortfall = Math.max(0, needed - held);
        const covered = shortfall === 0;
        const key = sec + name;
        const ticked = covered || checked.has(key);
        if (!ticked) lines.push(shortfall > 1 ? `□  ${shortfall}x ${name}` : `□  ${name}`);
      });
      if (lines.length) { text += `${sec}\n`; lines.forEach(l => (text += l + "\n")); text += "\n"; }
    }
    return text.trim();
  }
  async function shareList() {
    await shareOrCopy("Shopping list", buildListText());
    setCopied(true); setTimeout(() => setCopied(false), 2000);
  }

  return (
    <>
      <div className="h2" style={{ marginBottom: 16 }}>Shopping list</div>
      {Object.entries(sections).map(([sec, items]) => (
        <div className="shop-sec" key={sec}>
          <div className="shop-sec-title">{sec}</div>
          {items.map(({ name, needed }) => {
            const held = getHeldQty(name, haveItems);
            const shortfall = Math.max(0, needed - held);
            const covered = shortfall === 0;
            const key = sec + name;
            const ticked = covered || checked.has(key);
            return (
              <div key={name} className={`shop-row ${ticked ? "held" : ""}`} onClick={() => !covered && toggleCheck(key)}>
                <div className="shop-check">
                  {ticked && <span className="shop-check-tick">✓</span>}
                </div>
                <span className="shop-item-name">
                  {name}
                  {!covered && shortfall > 1 && <span className="shop-qty">{shortfall}x</span>}
                  {!covered && shortfall === 1 && held > 0 && <span className="shop-qty">+1</span>}
                </span>
              </div>
            );
          })}
        </div>
      ))}
      <button className="copy-btn" onClick={shareList}>
        {copied ? "✓ Copied" : "↑ Share shopping list"}
      </button>

      <div className="sec-h">Prep tasks</div>
      {plan.map((s, i) => {
        const e = effective(s, vegMode.has(i));
        return (
          <div className="prep-card" key={i}>
            <div className="prep-name">
              {s.emoji} {s.name}
              {vegMode.has(i) && <span className="veg-label">🌿 veg version</span>}
            </div>
            {e.prepTasks.map((t, j) => (
              <div key={j} className="prep-task">
                <span className="prep-arrow">→</span>
                <span>{t}</span>
              </div>
            ))}
          </div>
        );
      })}

      <div className="sec-h">Dressing recipes</div>
      <p className="dressing-note">
        This week's dressings. Tap to expand. Most keep for several days, so make them ahead.
      </p>
      {weekDressings.map(name => {
        const recipe = DRESSING_RECIPES[name];
        if (!recipe) return null;
        return <DressingCard key={name} name={name} recipe={recipe} />;
      })}
    </>
  );
}

// MAKE //

function MakeMode({ plan, vegMode, idx, onSelect }) {
  const [flipped, setFlipped] = useState(false);
  const safeIdx = Math.min(idx, plan.length - 1);
  const raw    = plan[safeIdx];
  if (!raw) return null;
  const isVeg  = vegMode.has(safeIdx);
  const salad  = effective(raw, isVeg);
  const grabItems = [salad.grain, salad.green, ...salad.veg, salad.protein, salad.fat, salad.crunch].filter(Boolean);

  function selectSalad(i) { setFlipped(false); onSelect(i); }

  return (
    <>
      <div className="pill-row">
        {plan.map((s, i) => (
          <button key={i} className={`pill ${safeIdx === i ? "active" : ""}`} onClick={() => selectSalad(i)}>
            {s.emoji} {s.day}{vegMode.has(i) ? " 🌿" : ""}
          </button>
        ))}
      </div>
      <div className="make-flip-wrap">
        <div className={`make-flip ${flipped ? "flipped" : ""}`}>

          {/* FRONT — grab list */}
          <div className="make-face">
            <div className="make-hd" style={{ background: raw.color }} onClick={() => setFlipped(true)}>
              <div className="make-kicker">What to grab</div>
              <div className="make-title">{raw.name}</div>
              {isVeg && <span className="veg-badge" style={{ marginTop: 8 }}>🌿 Veg version</span>}
              <div className="make-flip-hint">TAP TO SEE ASSEMBLY</div>
            </div>
            <div className="grab-list">
              {grabItems.map((item, i) => (
                <div key={i} className="grab-item">
                  <div className="grab-dot" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* BACK — assembly steps */}
          <div className="make-face make-face-back">
            <div className="make-hd" style={{ background: raw.color }} onClick={() => setFlipped(false)}>
              <div className="make-kicker">Assembly</div>
              <div className="make-title">{raw.name}</div>
              {isVeg && <span className="veg-badge" style={{ marginTop: 8 }}>🌿 Veg version</span>}
              <div className="make-flip-hint">TAP TO GO BACK</div>
            </div>
            <div className="make-bd">
              {salad.steps.map((step, i) => (
                <div key={i} className="step-row">
                  <div className="step-n">{i + 1}</div>
                  <div className="step-t">{step}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Spacer — holds the taller of the two faces */}
          <div className="make-spacer">
            <div className="make-hd" style={{ background: raw.color }}>
              <div className="make-kicker">Assembly</div>
              <div className="make-title">{raw.name}</div>
            </div>
            <div className="make-bd">
              {salad.steps.map((step, i) => (
                <div key={i} className="step-row">
                  <div className="step-n">{i + 1}</div>
                  <div className="step-t">{step}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}


// WILDCARD //

function WildcardModal({ onClose }) {
  const [picks, setPicks]     = useState(new Map());
  const [result, setResult]   = useState(null);
  const [flipped, setFlipped] = useState(false);
  const [skipIdx, setSkipIdx] = useState(0);

  function togglePick(item) {
    const next = new Map(picks);
    next.has(item) ? next.delete(item) : next.set(item, 1);
    setPicks(next);
    setResult(null);
    setFlipped(false);
    setSkipIdx(0);
  }

  function findSalad(skip = 0) {
    const scored = PROFILES
      .map(p => ({ p, score: scoreProfile(p, picks) }))
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score || Math.random() - 0.5);
    const pick = scored[skip % Math.max(scored.length, 1)];
    if (pick) {
      setResult(pick.p);
      setFlipped(false);
      // Scroll result into view on next frame
      setTimeout(() => {
        const el = document.querySelector(".wc-result");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  }

  function retry() {
    const next = skipIdx + 1;
    setSkipIdx(next);
    findSalad(next);
  }

  const grabItems = result
    ? [result.grain, result.green, ...result.veg, result.protein, result.fat, result.crunch].filter(Boolean)
    : [];

  return (
    <div className="wc-overlay" onClick={onClose}>
      <div className="wc-sheet" onClick={e => e.stopPropagation()}>
        <div className="wc-hd">
          <div className="wc-title">Wildcard ✦</div>
          <button className="wc-close" onClick={onClose} aria-label="Close"><svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <line x1="1" y1="1" x2="9" y2="9" stroke="#555" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="9" y1="1" x2="1" y2="9" stroke="#555" strokeWidth="1.5" strokeLinecap="round"/>
            </svg></button>
        </div>
        <div className="wc-sub">Pick what you have and we'll find the best match.</div>

        <div className="fridge-groups">
          {FRIDGE_GROUPS.map(group => (
            <div key={group.name}>
              <div className="fridge-group-label">{group.name}</div>
              <div className="fridge-grid">
                {group.items.map(item => {
                  const on = picks.has(item);
                  return (
                    <button key={item} className={`f-tag ${on ? "on" : ""}`} onClick={() => togglePick(item)}>
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <button
          className="wc-find"
          disabled={picks.size === 0}
          onClick={() => findSalad(0)}
        >
          Find my salad
        </button>

        {result && (
          <div className="wc-result">
            <div className="make-flip-wrap">
              <div className={`make-flip ${flipped ? "flipped" : ""}`}>

                <div className="make-face">
                  <div className="make-hd" style={{ background: result.color }} onClick={() => setFlipped(true)}>
                    <div className="make-kicker">What to grab</div>
                    <div className="make-title">{result.name}</div>
                    <div className="make-flip-hint">TAP TO SEE ASSEMBLY</div>
                  </div>
                  <div className="grab-list">
                    {grabItems.map((item, i) => (
                      <div key={i} className="grab-item">
                        <div className="grab-dot" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="make-face make-face-back">
                  <div className="make-hd" style={{ background: result.color }} onClick={() => setFlipped(false)}>
                    <div className="make-kicker">Prep & assembly</div>
                    <div className="make-title">{result.name}</div>
                    <div className="make-flip-hint">TAP TO GO BACK</div>
                  </div>
                  <div className="make-bd">
                    <div className="wc-section-label">Prep</div>
                    {result.prepTasks.map((task, i) => (
                      <div key={"prep" + i} className="step-row">
                        <div className="step-n" style={{ background: "#FFF3E0", color: "#E65100" }}>{i + 1}</div>
                        <div className="step-t" style={{ color: "#666" }}>{task}</div>
                      </div>
                    ))}
                    <div className="wc-section-label">Assembly</div>
                    {result.steps.map((step, i) => (
                      <div key={"step" + i} className="step-row">
                        <div className="step-n">{i + 1}</div>
                        <div className="step-t">{step}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="make-spacer">
                  <div className="make-hd" style={{ background: result.color }}>
                    <div className="make-kicker">Prep & assembly</div>
                    <div className="make-title">{result.name}</div>
                  </div>
                  <div className="make-bd">
                    <div className="wc-section-label">Prep</div>
                    {result.prepTasks.map((task, i) => (
                      <div key={"prep" + i} className="step-row">
                        <div className="step-n" style={{ background: "#FFF3E0", color: "#E65100" }}>{i + 1}</div>
                        <div className="step-t">{task}</div>
                      </div>
                    ))}
                    <div className="wc-section-label">Assembly</div>
                    {result.steps.map((step, i) => (
                      <div key={"step" + i} className="step-row">
                        <div className="step-n">{i + 1}</div>
                        <div className="step-t">{step}</div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
            <button className="wc-retry" onClick={retry}>↻ Try another match</button>
          </div>
        )}
      </div>
    </div>
  );
}

// FEEDBACK //

const FEEDBACK_ENDPOINT = "https://formspree.io/f/xeednpqg";

function FeedbackModal({ onClose }) {
  const [type, setType]       = useState("General feedback");
  const [email, setEmail]     = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent]       = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError]     = useState("");

  async function submit() {
    if (!message.trim()) return;
    setSending(true);
    setError("");
    const payload = { type, message, email: email.trim(), _subject: `Salad Spinner — ${type}` };

    try {
      const res = await fetch(FEEDBACK_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setSent(true);
      } else {
        const data = await res.json().catch(() => null);
        setError(data?.errors?.[0]?.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Couldn't connect. Check your network and try again.");
    }
    setSending(false);
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-hd">
          <div className="modal-title">Send feedback</div>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <line x1="1" y1="1" x2="9" y2="9" stroke="#555" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="9" y1="1" x2="1" y2="9" stroke="#555" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {sent ? (
          <div className="fb-success">
            <div className="fb-success-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <polyline points="4,10 8,15 16,5" stroke="#1E5C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>
            <div style={{ fontSize: 16, fontWeight: 600, color: "#1E3A1E", marginBottom: 4 }}>Thanks so much</div>
            <div style={{ fontSize: 13, color: "#666", lineHeight: 1.5 }}>
              Your feedback genuinely helps shape where this goes next.
            </div>
            <button className="copy-btn" style={{ marginTop: 24 }} onClick={onClose}>Close</button>
          </div>
        ) : (
          <>
            <div className="fb-banner">
              This is an early version of Salad Spinner and very much a work in progress. Every bit of feedback is read and appreciated, so don't hold back.
            </div>

            <div className="fb-field">
              <label className="fb-label">What's this about?</label>
              <select className="fb-select" value={type} onChange={e => setType(e.target.value)}>
                <option>General feedback</option>
                <option>Feature request</option>
                <option>Found a bug</option>
                <option>A recipe suggestion</option>
                <option>Something else</option>
              </select>
            </div>

            <div className="fb-field">
              <label className="fb-label">Your email <span style={{ color: "#999", fontWeight: 400 }}>(optional)</span></label>
              <input
                type="email"
                className="fb-select"
                style={{ cursor: "text" }}
                placeholder="So I can reply if needed"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            <div className="fb-field">
              <label className="fb-label">Tell me more</label>
              <textarea
                className="fb-textarea"
                placeholder="What's working, what's not, what you'd love to see..."
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
            </div>

            {error && (
              <div style={{ fontSize: 13, color: "#B71C1C", marginBottom: 12, lineHeight: 1.4 }}>{error}</div>
            )}
            <button
              className="copy-btn"
              style={{ marginTop: 4, opacity: message.trim() && !sending ? 1 : .4 }}
              disabled={!message.trim() || sending}
              onClick={submit}
            >
              {sending ? "Sending..." : "Send feedback"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}


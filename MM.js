//Combination sentence

//Country Array 
let countryArray1= [
    'Albania',     ' Andorra',               ' Armenia',
    'Austria',     'Azerbaijan',             'Belarus',
    'Belgium',     'Bosnia-and-Herzegovina', 'Bulgaria',
    'Croatia',     'Cyprus',                 'Czechia',
    'Denmark',     'Estonia',                'Finland',
    'France',      'Georgia',                'Germany',
    'Greece',      'Hungary',                'Iceland',
    'Ireland',     'Italy',                  'Kazakhstan',
    'Kosovo',      'Latvia',                 'Liechtenstein',
    'Lithuania',   'Luxembourg',             'Malta',
    'Moldova',     'Monaco',                 'Montenegro',
    'Netherlands', 'North-Macedonia',        'Norway',
    'Poland',      'Portugal',               'Romania',
    ' Russia',     ' San-Marino',            ' Serbia',
    ' Slovakia',   'Slovenia',               'Spain',
    'Sweden',      ' Switzerland',           'Turkey',
    'Ukraine',     ' United-Kingdom',        ' Vatican-City'
  ]

//Foods array
  let foodsArray = [
    'blueberries', ' blackberries', ' banana',      ' brandy',
    ' beef',       ' butter',       ' beets',       'Pak-Choy',
    'Paracress',   'Parsnip',       'Peas',         'Pearl-Onion',
    'Pignut',      'Potato',        'Pumpkin',      'cider',
    ' crackers',   ' cantaloupe',   ' cauliflower', ' cranberries',
    'Doritos',     ' dressing',     'flan',         'fries',
    'jam',         'jäger',         ' juice',       'lasange',
    'lettuce ',    'mayo',          ' mushrooms',   ' mozzarella',
    ' macaroni',   ' mustard',      ' meatloaf ',   'oranges',
    ' olives',     ' onion  ',      'popcorn',      ' peppers',
    ' peaches',    ' pears',        ' pork',        ' pretzels',
    ' potatoes',   ' popsicles',     ' pomegranate', ' pimento    ',
    'quail',       'radishes',      ' raspberries', ' rum',
    ' raisins',    ' ravioli',      ' relish  ',    'strawberries',
    ' salmon',     ' sage',         ' steak',       ' soup',
    ' salami',     ' sub',          ' sandwich',    'tomatoes',
    ' tamale',     ' tostada',      ' turkey',      ' tuna ',
    'watermelon',  'yams'
  ]
 //clothing Array
 let clothingArray= [
 'apron',         'baseball-cap',    'belt',
 'bikini',        'blazer',          'blouse',
 'boots',         'bow-tie',         'boxer-shorts',
 'bra',           'cardigan',        'coat',
 'dinner-jacket', 'dress',           'dressing-gown',
 'gloves',        'hat',             'Night-Gown',
 'Overalls',      'Pajamas',         ' Parachute-Pants',
 'Pointe',        'Polo',            'Ponchos-Capes',
 'Poodle-Skirts', 'Referee-Uniform', ' Rugby-Shirt',
 'Sari',          'Sarong',          'Scarf',
 'Scrubs',        'Shawls',          'Shorts',
 'Skating-Dress', 'Ski-Suit',        'Skirt',
 'Slacks',        'Soccer-Shirt',    'Socks'
]
;
 function randomize(){
    let randnum1 = Math.floor(Math.random()*clothingArray.length)
    let randnum2 = Math.floor(Math.random()*foodsArray.length)
    let randnum3 = Math.floor(Math.random()*countryArray1.length)
    if(clothingArray[randnum1] === 'a'){
    return    `Maybe try on an  ${clothingArray[randnum1]}, and some${foodsArray[randnum2]}, and journey ${countryArray1[randnum3]}.`
    } else
 return `Maybe try on a  ${clothingArray[randnum1]}, and some${foodsArray[randnum2]}, and journey ${countryArray1[randnum3]}.`
}
 

  
  console.log(randomize());

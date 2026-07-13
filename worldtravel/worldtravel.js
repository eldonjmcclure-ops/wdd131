const places = [
    {
        name: 'The Leaning Tower of Pisa',
        link: 'https://en.wikipedia.org/wiki/Leaning_Tower_of_Pisa',
        description: "The Leaning Tower of Pisa (Italian: torre pendente di Pisa [ˈtorre penˈdɛnte di ˈpiːza, - ˈpiːsa]), or simply the Tower of Pisa (torre di Pisa), is the campanile, or freestanding bell tower, of Pisa Cathedral. It is known for its nearly four-degree lean, the result of an unstable foundation. The tower is one of three structures in Pisa's Cathedral Square (Piazza del Duomo), which includes the cathedral and Pisa Baptistry. Over time, the flawed tower has become one of the most visited tourist attractions in the world as well as an architectural icon of Italy, receiving over 5 million visitors each year. The tower began to lean during construction in the 12th century, due to soft ground which could not properly support the structure's weight. It worsened through the completion of construction in the 14th century. By 1990, the tilt had reached 5.5 degrees. The structure was stabilized by remedial work between 1993 and 2001, which reduced the tilt to 3.97 degrees.",
        image: 'images/leaning-tower-pisa.png',
        tags: ['Manmade', 'Structure', 'Europe', 'Ancient']
    },
    {
        name: 'Mount Everest',
        link: 'https://en.wikipedia.org/wiki/Mount_Everest',
        description: "Mount Everest (known locally as Sagarmāthā in Nepal and Qomolangma in Tibet Autonomous Region of China) is the highest mountain on Earth above sea level. Mount Everest attracts many climbers, including highly experienced mountaineers. There are two main climbing routes, one approaching the summit from the southeast in Nepal (known as the standard route) and the other from the north in China. While not posing substantial technical climbing challenges on the standard route, Everest presents dangers such as altitude sickness, weather, and wind, as well as hazards from avalanches and the Khumbu Icefall. As of May 2024, 340 people have died on Everest. Over 200 bodies remain on the mountain and have not been removed due to the dangerous conditions.",
        image: 'images/mt-everest.png',
        tags: ['Mountain', 'Asia', 'Nature']
    },
    {
        name: 'Mount Fuji',
        link: 'https://en.wikipedia.org/wiki/Mount_Fuji',
        description: "Mount Fuji (富士山・富士の山, Fujisan, Fuji no Yama) is an active stratovolcano located on the Japanese island of Honshu, with a summit elevation of 3,776.24 m (12,389 ft 3 in). It is the highest mountain in Japan, the second-highest volcano on any Asian island (after Mount Kerinci on the Indonesian island of Sumatra), and the seventh-highest peak of an island on Earth. Mount Fuji last erupted from 1707 to 1708. It is located about 100 km (62 mi) southwest of Tokyo, from which it is visible on clear days. It has an exceptionally symmetrical cone, which is covered in snow for about five months of the year. It is a Japanese cultural icon and is frequently depicted in art and photography, as well as visited by sightseers, hikers, and mountain climbers.",
        image: 'images/mt-fuji.png',
        tags: ['Mountain', 'Asia', 'Nature', ]
    },
    {
        name: 'Paris, France',
        link: 'https://en.wikipedia.org/wiki/Paris',
        description: "Paris is the capital and largest city of France, with an estimated city population of 2.04 million in an area of 105.4 km2 (40.7 sq mi), and a metropolitan population of 13.2 million as of January 2026. Located on the river Seine in the centre of the Île-de-France region, it is the largest metropolitan area and fourth-most populous city in the European Union (EU). Nicknamed the \"City of Light\", partly because of its role in the Age of Enlightenment, Paris has been one of the world's major centres of finance, diplomacy, commerce, culture, fashion, and gastronomy since the 17th century. ",
        image: 'images/paris.png',
        tags: ['City', 'Manmade', 'Europe', 'Modern']
    },
    {
        name: 'The Great Barrier Reef',
        link: 'https://en.wikipedia.org/wiki/Great_Barrier_Reef',
        description: "The Great Barrier Reef is the world's largest coral reef system, composed of over 2,900 individual reefs and 900 islands stretching for over 2,300 kilometres (1,400 mi) over an area of approximately 344,400 square kilometres (133,000 mi2). The reef is located in the Coral Sea, off the coast of Queensland, Australia, separated from the coast by a channel 160 kilometres (100 mi) wide in places and over 61 metres (200 ft) deep. The Great Barrier Reef can be seen from outer space and is the world's biggest single structure made by living organisms. This reef structure is composed of and built by billions of tiny organisms, known as coral polyps. It supports a wide diversity of life and was selected as a World Heritage Site in 1981.",
        image: 'images/barrier-reef.png',
        tags: ['Nature', 'Ocean', 'Structure']
    },
    {
        name: 'The Great Wall of China',
        link: 'https://en.wikipedia.org/wiki/Great_Wall_of_China',
        description: "The Great Wall of China is a series of fortifications in China. They were built across the historical northern borders of ancient Chinese states and Imperial China as protection against various nomadic groups from the Eurasian Steppe. The first walls date to the 7th century BC; these were joined together in the Qin dynasty. Successive dynasties expanded the wall system; the best-known sections were built by the Ming dynasty (1368–1644).The collective fortifications constituting the Great Wall stretch from Liaodong in the east to Lop Lake in the west, and from the present-day Sino-Russian border in the north to Tao River in the south: an arc that roughly delineates the edge of the Mongolian steppe, spanning 21,196.18 km (13,170.70 mi) in total. It is a UNESCO World Heritage Site, and was voted one of the New 7 Wonders of the World in 2007. Today, the defensive system of the Great Wall is recognized as one of the most impressive architectural feats in history.",
        image: 'images/great-wall-china.png',
        tags: ['Manmade', 'Structure', 'Asia', 'Ancient']
    },
    {
        name: 'Machu Picchu',
        link: 'https://en.wikipedia.org/wiki/Machu_Picchu',
        description: "Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru on a mountain ridge at 2,430 meters (7,970 ft). It is situated in the Machupicchu District of Urubamba Province about 80 kilometers (50 miles) northwest of Cusco, above the Sacred Valley and along the Urubamba River, which forms a deep canyon with a subtropical mountain climate. Often referred to as the \"Lost City of the Incas\", Machu Picchu is one of the most iconic symbols of the Inca civilization and a major archaeological site in the Americas. Estimated to be built around 1450, it is believed to have served as an estate for the Inca emperor Pachacuti, though no contemporary written records exist to confirm this. The site was abandoned roughly a century later, likely during the Spanish conquest. Modern radiocarbon dating places its occupation between c. 1420 and 1530.",
        image: 'images/machu-picchu.png',
        tags: ['Structure', 'Manmade', 'Central America', 'Ancient']
    },
    {
        name: 'The Lourve Museum',
        link: 'https://en.wikipedia.org/wiki/Louvre',
        description: "The Louvre is a national art museum in Paris, France. It is located on the Right Bank of the Seine in the city's 1st arrondissement (district) and home to some of the most canonical works of Western art, including the Mona Lisa, Venus de Milo, and Winged Victory. The museum is housed in the Louvre Palace, originally built in the late 12th to 13th century under Philip II. Remnants of the Medieval Louvre fortress are visible in the basement of the museum. The Musée du Louvre contains approximately 500,000 objects and displays 35,000 works of art in eight curatorial departments with more than 60,600 m2 (652,000 sq ft) dedicated to the permanent collection. The Louvre exhibits sculptures, objets d'art, paintings, drawings, and archaeological finds. At any given point in time, approximately 38,000 objects from prehistory to the 21st century are being exhibited over an area of 72,735 m2 (782,910 sq ft), making it the largest museum in the world. It is ranked as the most-visited art museum, and most-visited museum of any category.",
        image: 'images/lourve.png',
        tags: ['Structure', 'Manmade', 'Modern']
    },
    {
        name: 'The Great Pyramid of Giza',
        link: 'https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza',
        description: "The Great Pyramid of Giza is the largest of the Egyptian pyramids and the most famous landmark of the Giza pyramid complex in Giza, Egypt. It is the oldest of the Seven Wonders of the Ancient World, and the only wonder that has remained largely intact. The Great Pyramid served as the tomb of Egyptian Pharaoh Khufu (\"Cheops\"), who ruled during the Fourth Dynasty of the Old Kingdom. It was built c. 2600 BC over a period of about 26 years. The Great Pyramid was built by quarrying an estimated 2.3 million large blocks, weighing 6 million tonnes in total. The majority of the stones are not uniform in size or shape, and are only roughly dressed. The outside layers were bound together by mortar, primarily local limestone from the Giza Plateau was used for its construction. Other blocks were imported by boat on the Nile: white limestone from Tura for the casing, and blocks of granite from Aswan, weighing up to 80 tonnes, for the \"King's Chamber\" structure. Initially standing at 146.6 metres (481 feet), the Great Pyramid was the world\'s tallest human-made structure for more than 3,700 years. Over time, most of the smooth white limestone casing was removed, which lowered the pyramid\'s height to the current 138.5 metres (454.4 ft); what is seen today is the underlying core structure.",
        image: 'images/giza-pyramid.png',
        tags: ['Ancient', 'Structure', 'Manmade', 'Africa']
    },
    {
        name: 'The Grand Canyon',
        link: 'https://en.wikipedia.org/wiki/Grand_Canyon',
        description: "The Grand Canyon is a steep-sided canyon carved by the Colorado River in Arizona, United States. The Grand Canyon is 277 miles (446 km) long, up to 18 miles (29 km) wide and attains a depth of over a mile (6,093 feet or 1,857 meters). The canyon and adjacent rim are contained within Grand Canyon National Park, the Kaibab National Forest, Grand Canyon–Parashant National Monument, the Hualapai Indian Reservation, the Havasupai Indian Reservation and the Navajo Nation. President Theodore Roosevelt was a major proponent of the preservation of the Grand Canyon area and visited it on numerous occasions to hunt and enjoy the scenery. Nearly two billion years of Earth's geological history have been exposed as the Colorado River and its tributaries cut their channels through layer after layer of rock while the Colorado Plateau was uplifted. While some aspects about the history of incision of the canyon are debated by geologists, several recent studies support the hypothesis that the Colorado River established its course through the area about 5 to 6 million years ago. Since that time, the Colorado River has driven the down-cutting of the tributaries and retreat of the cliffs, simultaneously deepening and widening the canyon. ",
        image: 'images/grand-canyon.png',
        tags: ['Nature', 'Ancient', 'North America']
    }
]

let placeContainer = document.querySelector("#travel-display")
let button = document.querySelector('#search-button')
let input = document.querySelector('#search')

button.addEventListener('click', search);

function search() {
	let placeQuery = input.value;

	let filterPlaces = places.filter(function(place) {
		return (
			place.name.toLowerCase().includes(placeQuery.toLowerCase()) ||
			// place.description.toLowerCase().includes(placeQuery.toLowerCase()) ||
			place.tags.find(tag => tag.toLowerCase().includes(placeQuery.toLowerCase()))
		);

	})

	console.log(filterPlaces);

	function comparePlaces(a,b) {
		if (a.difficulty < b.difficulty) {
        return -1;
    } else if (a.difficulty > b.difficulty) {
        return 1;
    }
    return 0;
    }

	let sortedPlaces = filterPlaces.sort(comparePlaces);

	placeContainer.innerHTML = '';

	sortedPlaces.forEach(function(place){
		renderPlace(place);
	});

}
input.addEventListener('keypress', handleEnter);
function handleEnter(event) {
  if (event.key === 'Enter') {
    search();
  }
}
let randomNum = Math.floor(Math.random() * places.length);
console.log(randomNum)

function tagTemplate(tags) {
    return tags.map((tag)=> `<button class="tag">${tag}</button>`).join(' ');
}

function placeTemplate(place) {
    return `<div class="place-container">
    <img class="place-img" src="${place.image}">
    <div class="place-details">
        <div class="place-tags">
            ${tagTemplate(place.tags)}
        </div>
        <h2>${place.name}</h2>

        <button class="modal-button">See More</button>
    </div>
    `
}

function renderPlace(place) {
	let html = placeTemplate(place);
	placeContainer.innerHTML += html
}



function init() {
	renderPlace(places[randomNum]);

    // Attempting to make a modal

const modal = document.querySelector("dialog")
const closeButton = modal.querySelector('.close-viewer')
let modalButton = document.querySelector(".modal-button")

modalButton.addEventListener('click', openModal);

function openModal(e) {
    console.log(e.target);

    // add values

    modal.showModal();

}
closeButton.addEventListener('click', () => {
    modal.close();
});
}

init();
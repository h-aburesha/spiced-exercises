(function (countries) {
    var len = countries.length;
    var input = $("input");
    var results = $("#results");

    var lowerCaseCountries = countries.map(function (country) {
        return country.toLowerCase();
    });

    input
        .on("input", function () {
            // we pass the value from the input field

            findAndShowResults(input.val());
        })
        .on("focus", function () {
            // we pass the value from the input field
            findAndShowResults(input.val());
        })
        .on("blur", function () {
            // hide the results
        })
        // not needed yet
        .on("keydown", function (e) {
            // this is gonna be implemented later
            // this is to navigate via arrow keys
        });

    // gets the value from the input field
    // if there is no value -> hides the results

    // finds the results using findResults()
    // and then calls renderResults()

    function findAndShowResults(val) {
        //val is the value of the whole string
        // call findResults() first
        // then call renderResults()
        const foundResults = findResults(val);
        // console.log(foundResults);
        renderResults(foundResults);
        // TODO:
    }

    // this filters the array of countries
    // gets a string
    // returns an array

    function findResults(str) {
        // const countriesTmp = ["Ghana", "Germany", "Greece"];
        // const filteredCountries = countries.filter((country) => {
        //     // 1. use toLowerCase() for str
        //     // 2. use toLowerCase() for country -> Germany -> germany
        //     // 3. make use startsWith() 'country.startsWith(str);'

        //     return; // 'country.startsWith(str);' but use toLowerCase() on both string
        // });

        let filteredCountries = [];

        for (let i = 0; i < len; i++) {
            if (countries[i].toLowerCase().indexOf(str.toLowerCase()) == 0) {
                filteredCountries.push(countries[i]);
            }
        }

        return filteredCountries;
    }

    // gets an array
    // shows the results using getResultsHtml()
    function renderResults(foundResults) {
        let finalHTML = getResultsHtml(foundResults);
        // console.log(finalHTML);
        results.html(finalHTML);

        // put the finalHTML to our index.html
        // TODO:
    }

    // gets an array
    // if it's empty -> return 'No results'
    // else return a string containing div tags for
    // every result item

    function getResultsHtml(foundResults) {
        let htmlString = "";
        // check if result is empty
        // if it is return a different HTML with fixed message

        for (let i = 0; i < foundResults.length; i++) {
            // append HTML element to htmlString

            htmlString += "<div>" + foundResults[i] + "</div>";
        }
        // console.log(htmlString);
        return htmlString;
        // return final string
    }
})([
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Côte D'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People’s Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Republic of Korea",
    "Republic of Moldova",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Tajikistan",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United Republic of Tanzania",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Viet Nam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
]);

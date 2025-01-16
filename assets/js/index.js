// JavaScript files are compiled and minified during the build process to the assets/built folder. See available scripts in the package.json file.

// Import CSS
import "../css/index.css";

// Import JS
import menuOpen from "./menuOpen";
import infiniteScroll from "./infiniteScroll";
import numYears from "./numYears";


// Call the menu and infinite scroll functions
menuOpen();
infiniteScroll();
numYears('Dec 2012', '#num-work-years');
numYears('Jul 2019', '#num-startup-years');

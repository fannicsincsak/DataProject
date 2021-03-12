# DataProject

Contents
1. Structural Overview
2. HTML Components
3. HTML Structural Settings
4. Javascript and Data files

Each menu item should have its own main HTML file. Let’s say that index.html is going to be the main HTML of the History (Fetch Historical Predictions) page.

We can create different components (such as views/leftNav.html or views/simpleTable.html) and we can add these components to the main HTML files (image below). 

![Image1](/img/image4.png)

This way, each and every main HTML file is going to stay clean and we don’t really need to care about the HTML files at all (not even about the ones that are included in the main files).

All of these components (such as views/simpleTable.html) will need to be connected to some type of javascript files (as per component type we can organize all of the js script into one file, eg. we have 10 tables and all of the js files connected to each and every table could be organized into one js file). 
Example: 
views/simpleTable.html is connected to scripts/tables.js file:

![Image1](/img/image3.png)

You can see that the script connected to the example table (simpleTable.html) has reference pointing to data/myData. Basically this way this table is filled with JSON formatted data:
![Image1](/img/image2.png)

SUMMARY:
![Image1](/img/image1.jpg)


##Structural Overview


##HTML Components


##HTML Structural Settings


##Javascript and Data files







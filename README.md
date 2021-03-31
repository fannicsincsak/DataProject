# DataProject

# Pages
**Main Pages**
* Batch Prediction = batch.html
* Historical Prediction = history.html
* Single/One Sample Prediction = single.html
* Login = login.html
* Forgot Password = forgot-password.html
* Empty historical prediction file to experiment with the components = index.html

**Included Pages**
* leftNav.html: includes the left navigation and the mobile menu, used on all pages (except login and forgot password)
* simpleTable.html: includes a simple table (can be used on batch.html, single.html and history.html) 
* Chart HTMLs: simpleBarChart.html, stackedBarChart.html, horizontalBarChart.html, simpleLineChart.html, areaLineChart.html (can be used on batch.html, single.html and history.html)
* fourBoxes.html: 4 boxes next to each other, this can be used anywhere (no dependencies)

# Table of Contents
[1. Batch Prediction Page](#1-batch-prediction-page)

[2. Historical Prediction Page](#2-historical-prediction-page)

[3. Single/One Sample Prediction Page](#3-single-one-sample-prediction-page)

[4. Bootstrap Use Cases](#4-bootstrap-use-cases)

[5. Dependencies](#5-dependencies)

[6. Issues and TODOs](#6-issues-and-todoes)

# 1. Batch Prediction Page

# 2. Historical Prediction Page
### History Page Contents
[1. Structural Overview](#1-structural-overview)

[2. HTML Structural Settings](#2-html-structural-settings)

[3. HTML Components](#3-html-components)

[4. Javascript and Data files](#4-javascript-and-data-files)

## 1. Structural Overview
We have 4 file types: 
* Main HTML files,
* Components (HTML files that we include in main HTML files),
* Javascript files,
* text files (JSON format, that include the data).

### Main HTML Files
Each projects will have a couple of main HTML files. For now we will only use the index.html file.

### Components
You can see in the file structure that under the views folder we have a some other HTML files, from now on we will call these **components**. These components can be simply included in the main HTML files.

### Javascript files and text files
Chart and Table type components (HTML files) are always connected to javascript files. 
These javascript files do 2 separate things:
1. They control some aspects of the look and feel of these components, 
2. and more importantly they include the **data**.

## 2. HTML Structural Settings
You will only need tto edit a dedicated section in each HTML files. The blank files that you will need to edit structurally look the same. Each one of these include: 
A. A Header area at the top, and
B. A section where you can copy-paste your components.

```HTML
<!-------------------------------------------CONTENT TO EDIT------------------------------------------->
<!--Header-->
<div class="header">
    <div class="header-title">Fetch Historical Predictions</div>
    <!--Delete from here if you don't need the select-->
    <div class="row">
        <div class="col-md-5">
            <label class="select-label" for="id_label_single">
                Select date
                <select class="js-example-basic-single select2-dates form-control" id="id_label_single" style="width: 50%">
                    <option value="one" disabled="disabled">Select</option>
                    <option value="two">February 16, 2021 16:00</option>
                    <option value="three">February 15, 2021 16:00</option>
                </select>
            </label>
        </div>
    </div> <!--Delete until this if you don't need the select-->
</div><!--Header Ends-->

<!--Paste your components below-->



<!--Don't paste components below-->
<!-------------------------------------------CONTENT ENDS------------------------------------------->
```

### A. Header Area
Header Areas are used at the top of the pages and we also use these to separate sections on the same HTML page.
The header area can be edited and used flexibly. Some of the use cases might be: 
1. Showing a title only,
2. Showing a title and a select element (by selecting an option we can filter the data on the entire page - eg. by selecting a previous date when the data was analyzed),
3. Showing a title and 2 select elements (by selectinng the first option eg. we can define a start date and with the second one we can define an end date, therefore the page will show the relevant data that was analyzed between these 2 dates),
4. Using the Header Area multiple times on the same page (you would only need to copy-paste the code above).

**Editing the Title**

You have to edit this row inside the Header Area. You can simply exchange the "Fetch Historical Predictions" title with anything that you need.
```HTML
<div class="header-title">Fetch Historical Predictions</div>
```

**Editing the Select**

This is one select:
```HTML
<!--Delete from here if you don't need the select-->
<div class="row">
    <div class="col-md-5">
        <label class="select-label" for="id_label_single">
            Select date
            <select class="js-example-basic-single select2-dates form-control" id="id_label_single" style="width: 50%">
                <option value="one" disabled="disabled">Select</option>
                <option value="two">February 16, 2021 16:00</option>
                <option value="three">February 15, 2021 16:00</option>
            </select>
        </label>
    </div>
</div> <!--Delete until this if you don't need the select-->
```

You have to change the "Select date" text to edit the label at the top of the select:
```HTML
<label class="select-label" for="id_label_single">
  Select date
```

Most likely you won't need to edit the options since the backend automatically should take care of that.

~~**Editing Range Selectiong**~~

Work in Progress

### B. A section where you can copy-paste your components
You have to paste the components that you select right below the Header area between these commented rows:
```HTML
<!--Paste your components below-->



<!--Don't paste components below-->
```

## 3. HTML Components
Right now you can only use 6 types of components:
A. Simple Table,
B. Simple Bar Chart (ID in scripts/chart.js: #chart1),
C. Stacked Bar Chart (ID in scripts/chart.js: #chart2),
D. Horizontal Bar Chart (ID in scripts/chart.js: #chart3),
E. Simple Line Chart (ID in scripts/chart.js: #chart4),
F. Area Line Chart (ID in scripts/chart.js: #chart5).

### A. Simple Table Component
If you want to use the Simple Table Component, please copy-paste the following code into your main HTML file:
```HTML
<!--Paste your components below-->

<div class="section-title">This is a Simple Table</div>
<div data-include="simpleTable"></div>

<!--Don't paste components below-->
```

### B. Simple Bar Chart Component
If you want to use the Simple Bar Chart Component, please copy-paste the following code into your main HTML file:
```HTML
<div class="section-title">This is a Simple Bar Chart</div>
<div data-include="simpleBarChart"></div>
```

### C. Stacked Bar Chart Component
If you want to use the Stacked Bar Chart Component, please copy-paste the following code into your main HTML file:
```HTML
<div class="section-title">This is a Stacked Bar Chart</div>
<div data-include="stackedBarChart"></div>
```

### D. Horizontal Bar Chart Component
If you want to use the Horizontal Bar Chart Component, please copy-paste the following code into your main HTML file:
```HTML
<div class="section-title">This is a Horizontal Bar Chart</div>
<div data-include="horizontalBarChart"></div>
```

### E. Simple Line Chart Component
If you want to use the Simple Bar Chartt Component, please copy-paste the following code into your main HTML file:
```HTML
<div class="section-title">This is a Simple Line Chart</div>
<div data-include="simpleLineChart"></div>
```

### F. Area Line Chart Component
If you want to use the Area Line Chart Component, please copy-paste the following code into your main HTML file:
```HTML
<div class="section-title">This is an Area Line Chart</div>
<div data-include="areaLineChart"></div>
```

### Use Cases:
**_I want to use multiple components in the HTML file:_**
If you need multiple components on the same HTML page, then you would need to copy-paste the HTML components and put them under each other: 
```HTML
<!--Paste your components below-->

<div class="section-title">This is a Simple Table</div>
<div data-include="simpleTable"></div>

<div class="section-title">This is a Simple Bar Chart</div>
<div data-include="simpleBarChart"></div>

<div class="section-title">This is a Simple Line Chart</div>
<div data-include="simpleLineChart"></div>

<!--Don't paste components below-->
```

**_I don't need a title at the top of my component:_**
If you don't need the title at the top of you component, then please delete the title div: 

```HTML
<div class="section-title">This is a Simple Line Chart</div>
```
Therefore the code that you use would look like this:
```HTML
<!--Paste your components below-->

<div data-include="simpleLineChart"></div>

<!--Don't paste components below-->
```

## 4. Javascript and Data Files

### Table Component
The Simple Table Component is connected to the **scripts/tables.js** file.
This javascript file defines: 
#### A. The source of the data: 
```javascript
"ajax": "data/myData",
```
This source file can be found under the data folder. You have to use JSON formatted text in there.
#### B. The titles of the columns:
```javascript
"columns": [
    { "data": "name" },
    { "data": "position" },
    { "data": "office" },
    { "data": "extn" },
    { "data": "start_date" },
    { "data": "salary" }
]
```
You can exchange these to anything and add or remove columns.

#### C. Use Case: _I want to have 2 tables in my main HTML file:_
Please follow these steps:
1. Duplicate the simpleTable.html file and let's say that the duplicate is called simpleTable2.html.
2. Open the simpleTable2.html file and edit ID of the table (this is the original document): 
```HTML
<!--Table-->
<table id="simpleTable" class="display table-title-row" style="width:100%">
    <thead style="width:100%">
    <tr style="width:100%">
        <th>Name</th>
        <th>Position</th>
        <th>Office</th>
        <th>Extn.</th>
        <th>Start date</th>
        <th>Salary</th>
    </tr>
    </thead>
</table>
```
In the the simpleTable2.html html you would need to change the id="simpleTable" to something else eg. id="simpleTable2":
```HTML
<table id="simpleTable2" class="display table-title-row" style="width:100%">
```
4. Main HTML File: copy-paste the component code into your main HTML: 
```HTML
<div class="section-title">This is a Simple Table</div>
<div data-include="simpleTable"></div>
```
3. Rename your component to simpleTable2 in your main HTML:
```HTML
<div data-include="simpleTable2"></div>
```
4. Open your tables.js file (this is in the scripts folder). 
5. Duplicate the code:
```javascript
$(document).ready(function() {
    $('#simpleTable').DataTable( {
        "scrollY": 300,
        "scrollX": true,
        "paging": false,
        "searching": false,
        "info": false,
        "ajax": "data/myData",
        "autoWidth": true,
        "columns": [
            { "data": "name" },
            { "data": "position" },
            { "data": "office" },
            { "data": "extn" },
            { "data": "start_date" },
            { "data": "salary" }
        ]
    } );
} );
```
6. Edit the ID from #simpleTable to #simpleTable2:
```javascript
$('#simpleTable2').DataTable( {
```
7. Edit the file name of your data file
```javascript
"ajax": "data/myData",
```
* please place the data file to the data folder,
* replace the file name (now it's "myData") to your own file name,
* if it's a txt file, then you don't need to add .txt extension.

8. You're done!

### Chart Components
All of the Chart Components are connected to the **scripts/charts.js** file.
This javascript file defines both variables and commands.
You don't need to edit the:
* options and 
* responsiveOptions variables. 

We only have two options left: 

**A. The data variables**
```javascript
// Simple Bar Chart Data
var dataBarChart = {
    labels: ['070124a','71104','71224','72254','73124','73194','76184','78024','78154','82015','84035','84074','85045','86124','86234','87244','91124','91234'],
    series: [
        { "name": "Category A", "data": [6685,10784,15066,9861,8074,22953,2294,28571,24586,12475,3502,1079,8668,2748,20086,12966,15997,15025]},
        { "name": "Category B", "data": [51741,38662,56018,67774,48112,115091,6245,122229,71327,96959,19764,10036,47343,13470,33991,26924,63854,47661]}
    ]
};
```
**B. The create commands**
```javascript
// Create Bar Chart
new Chartist.Bar('#chart1', dataBarChart, options, responsiveOptions);
```
Otherwise, there are a couple of things that you would need to know. Here I list some of the use cases:

#### _I want to edit the labels at the bottom of my chart:_
Let's say that you want to edit labels of your Bar Chart. In case of this you would need to take a look at **dataBarChart** variable:
```javascript
// Simple Bar Chart Data
var dataBarChart = {
    labels: ['070124a','71104','71224','72254','73124','73194','76184','78024','78154','82015','84035','84074','85045','86124','86234','87244','91124','91234'],
    series: [
        { "name": "Category A", "data": [6685,10784,15066,9861,8074,22953,2294,28571,24586,12475,3502,1079,8668,2748,20086,12966,15997,15025]},
        { "name": "Category B", "data": [51741,38662,56018,67774,48112,115091,6245,122229,71327,96959,19764,10036,47343,13470,33991,26924,63854,47661]}
    ]
};
```
and exchange the content of **lables**:
```javascript
labels: ['070124a','71104','71224','72254','73124','73194','76184','78024','78154','82015','84035','84074','85045','86124','86234','87244','91124','91234'],
```

#### _I want to edit the data of my chart:_
Let's say that you want to edit labels of your Bar Chart. In case of this you want to take a look at the **dataBarChart** variable again and edit the **series** option:
```javascript
series: [
    { "name": "Category A", "data": [6685,10784,15066,9861,8074,22953,2294,28571,24586,12475,3502,1079,8668,2748,20086,12966,15997,15025]},
    { "name": "Category B", "data": [51741,38662,56018,67774,48112,115091,6245,122229,71327,96959,19764,10036,47343,13470,33991,26924,63854,47661]}
]
```
#### _I want to edit the title of one of my data categories/legends:_
In case of this, you would only want to rename "Category A" and "Category B" to something different: 
```javascript
series: [
    { "name": "This is my new Category 1", "data": [6685,10784,15066,9861,8074,22953,2294,28571,24586,12475,3502,1079,8668,2748,20086,12966,15997,15025]},
    { "name": "This is my new Category 2", "data": [51741,38662,56018,67774,48112,115091,6245,122229,71327,96959,19764,10036,47343,13470,33991,26924,63854,47661]}
]
```

#### _I want to add a third chart:_
Let's say that you would want to add a new Bar Chart. You would need to do a couple of steps: 
1. Duplicate your simpleBarChart HTML file under the views folder. Let's say that the duplicate will be called **simpleBarChart2.html**.
2. Open the simpleBarChart2.html file and edit ID of the chart (this is the original document): 
```HTML
<!--Chart-->
<div class="ct-chart ct-golden-section ct-chart-1" id="chart1"></div>
```
In the the simpleBarChart2 html you would need to change the id="chart1" to id="chart6" (since in in the scripts/charts.js file the highest number of ID is currently id="chart5", but you can basically name your chart's ID to anything else as well):
```HTML
<!--Chart-->
<div class="ct-chart ct-golden-section ct-chart-1" id="chart6"></div>
```
4. Main HTML File: copy-paste the component code into your main HTML: 
```HTML
<div class="section-title">This is a Simple Bar Chart</div>
<div data-include="simpleBarChart"></div>
```
3. Rename your component to simpleBarChart2 in your main HTML:
```HTML
<div data-include="simpleBarChart2"></div>
```
4. Open your charts.js file (this is in the scripts folder). 
5. Duplicate the dataBarChart variable and re-name it to dataBarChart2:
```javascript
var dataBarChart2 = {
    labels: ['070124a','71104','71224','72254','73124','73194','76184','78024','78154','82015','84035','84074','85045','86124','86234','87244','91124','91234'],
    series: [
        { "name": "Category A", "data": [6685,10784,15066,9861,8074,22953,2294,28571,24586,12475,3502,1079,8668,2748,20086,12966,15997,15025]},
        { "name": "Category B", "data": [51741,38662,56018,67774,48112,115091,6245,122229,71327,96959,19764,10036,47343,13470,33991,26924,63854,47661]}
    ]
};
```
6. Duplicate the command that creates the chart: 
```javascript
// Create Bar Chart
new Chartist.Bar('#chart1', dataBarChart, options, responsiveOptions);

```
7. You would need to edit 2 things here: 
* The chart ID (#chart1 -> #chart6) and 
* the source of the data (dataBarChart -> dataBarChart2 (or to anything else that does not match the rest of the data variables in the file)), 
therefore you would end up with this: 
```javascript
// Create Bar Chart
new Chartist.Bar('#chart6', dataBarChart2, options, responsiveOptions);
```
And that's it.

# 3. Single One Sample Prediction Page

# 4. Bootstrap Use Cases

# 5. Dependencies

# 6. Issues and TODOs

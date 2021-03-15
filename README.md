# DataProject

### Contents
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

#### Main HTML Files
Each projects will have a couple of main HTML files. For now we will only use the index.html file.

#### Components
You can see in the file structure that under the views folder we have a some other HTML files, from now on we will call these **components**. These components can be simply included in the main HTML files.

#### Javascript files and text files
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

#### A. Header Area
The header area can be edited and used flexibly. Some of the use cases might be: 
1. Showing a title only,
2. Showing a title and a select element (by selecting an option we can filter the data on the entire page - eg. by selecting a previous date when the data was analyzed)
3. Showing a title and 2 select elements (by selectinng the first option eg. we can define a start date and with the second one we can define an end date, therefore the page will show the relevant data that was analyzed between these 2 dates) 

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



~~**Editing Range Selectiong**~~
Work in Progress

#### B. A section where you can copy-paste your components

## 3. HTML Components


Each one of the main HTML files must have a header section at the top. 





## 4. Javascript and Data Files







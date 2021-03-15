# DataProject

### Contents
[1. Structural Overview](#1-structural-overview)

[2. HTML Components](#2-html-components)

[3. HTML Structural Settings](#3-html-structural-settings)

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

## 2. HTML Components


## 3. HTML Structural Settings


Each one of the main HTML files must have a header section at the top. 
```HTML
<!-------------------------------------------CONTENT TO EDIT------------------------------------------->
                    <!--Header-->
                    <div class="header">
                        <div class="header-title">Fetch Historical Predictions</div>
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
                        </div>
                    </div><!--Header Ends-->

                    <!--Paste your components below-->



                    <!--Don't paste components below-->
<!-------------------------------------------CONTENT ENDS------------------------------------------->
```


## 4. Javascript and Data Files







# Head tag
- consists of metadata or machine readable info.
- html 5 automatically creats head element if it is omitted
## meta tag
- name sets provides document-level metadata for the whole page
- http-equiv sets info same as like http header
- charset defines the character encoding for the whole document 
- itemprop defines the user-defined metadata
- *if itemprop is there don't use http-equiv or name*
	- application-name attribute says to the browser that what application is currently running it is way differnt from title " title can contain status or info of the current state of the application but application contains the whole web app name"
	- 
	### using name tag
	- ``` name="standard-name" content="values properties=value"```
	- ex: ```<meta name="viewport" content="width=device-width initial-scale=1.0">```
	### using charset tag
	- ``` charset="encoding-name"```
	- ex: ```<meta charset="encoding-name">```
	### using http-equiv
	- ``` http-equiv="http-header-name" content="MIME;type-declaration"```
	- ex: ``` <meta http-equiv="refresh" content="10;https://www.google.com"```
	### using content
	- this attribute consists of value for the name or http-equiv attribute
	- ex: ``` <meta name="description" content="a simple web page">```
	
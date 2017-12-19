# Dog Breed API Interaction
This documentation will tell how to interact with Dog Breed API

<hr />

## Get a list of all Dog Breeds in Database

```   GET /breeds	```

| RESPONSE |
|---	   |
| Status: 200 OK  	|
    {
        ["Labrador Retriever", "German Shepherd", "Poodle", "Scottish Terrier", "Springer Spaniel"]
    }

## Get full information for a single Dog Breed by ID

``` GET /breeds/:id ```

| RESPONSE |
|---	   |
| Status: 200 OK  	|
    {
        "_id" : "garbledygook123456789",
        "Name" : "Labrador Retriever",
        "Energy Level": "high",
        "Good with Kids": "with supervision",
        "Min Height Inches": 21,
        "Max Height Inches": 25,
        "Min Weight pounds": 55,
        "Max Weight pounds": 80,
        "Life Expectancy": "10 to 12 years"
    }


<hr />

## Add a New Dog Breed to the Database

``` POST /breeds ```

Must input breed name, all other parameters are optional.

### Parameters

| NAME     | TYPE      | DESCRIPTION |
|---	   |---	       |---	         |
| `Name` 	| string  	| __*Required*__ Breed name  	|
| `Energy Level` 	| string  	| Choices: Very High, High, Medium, Low, & Very Low  	|
| `Good with Kids` 	| string  	| Choices: Yes, With Supervision, No
| `Min Height Inches` 	| number  	| Minimum height on average  	|
| `Max Height Inches` 	| number  	| Maximum height on average  	|
| `Min Weight Pounds` 	| number  	| Minimum weight on average  	|
| `Min Weight Pounds` 	| number  	| Minimum weight on average  	|
| `Life Expectancy` 	| string  	| Average life expectancy  	|

__Example Input__

    {
        "Name" : "Labrador Retriever",
        "Energy Level": "High",
        "Good with Kids": "with supervision",
        "Min Height Inches": 21,
        "Max Height Inches": 25,
        "Min Weight pounds": 55,
        "Max Weight pounds": 80,
        "Life Expectancy": "10 to 12 years"
    }

<hr />

## Make a change to some information on a single Dog Breed by ID

``` PUT /breeds/:id ```

Must input all fields to update the one(s) that need to be updated.

### Parameters

| NAME     | TYPE      | DESCRIPTION |
|---	   |---	       |---	         |
| `Name` 	| string  	| __*Required*__ Breed name  	|
| `Energy Level` 	| string  	| __*Required*__ Choices: Very High, High, Medium, Low, & Very Low  	|
| `Good with Kids` 	| string  	| __*Required*__ Choices: Yes, With Supervision, No
| `Min Height Inches` 	| number  	| __*Required*__ Minimum height on average  	|
| `Max Height Inches` 	| number  	| __*Required*__ Maximum height on average  	|
| `Min Weight Pounds` 	| number  	| __*Required*__ Minimum weight on average  	|
| `Min Weight Pounds` 	| number  	| __*Required*__ Minimum weight on average  	|
| `Life Expectancy` 	| string  	| __*Required*__ Average life expectancy  	|

__Example Input__

    {
        "Name" : "Labrador Retriever",
        "Energy Level": "High",
        "Good with Kids": "with supervision",
        "Min Height Inches": 21,
        "Max Height Inches": 25,
        "Min Weight pounds": 55,
        "Max Weight pounds": 80,
        "Life Expectancy": "10 to 12 years"
    }

| RESPONSE |
|---	   |
| Status: 200 OK  	|
    {
        "_id" : "garbledygook123456789",
        "Name" : "Labrador Retriever",
        "Energy Level": "high",
        "Good with Kids": "with supervision",
        "Min Height Inches": 21,
        "Max Height Inches": 25,
        "Min Weight pounds": 55,
        "Max Weight pounds": 80,
        "Life Expectancy": "10 to 12 years"
    }

<hr />

## Remove a Single Dog Breed from the Database by ID

``` DELETE /breeds/:id ```

| RESPONSE |
|---	   |
| Status: 200 OK  	|
    {
        "success": "true"
    }

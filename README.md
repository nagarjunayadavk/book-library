## Book Library App

### Setup Instaructions

   [Prerequisite] : Nodejs
   after downloading project navigate to book-library folder and run below commands.
    ```
    **1:** npm install
    **2:** npm start -- it opens a new window(by default IE or user preferred browser.) url: http://localhost:3000/
    ```

### json-server for DB.(npm package(for DB))

    npm install -g json-server
    
    Create a empty json file by name books.json and copy below content in json file.(ex: have a look in to books.json file under book-library folder)
    ```
    {
        "books": [
            {
            "id": 1,
            "title": "Book1",
            "description": "Book1 Description",
            "price": "80",
            "author": "Naga"
            },
            {
            "id": 2,
            "title": "Book1",
            "description": "Book1 Description",
            "price": "10",
            "author": "Arjun"
            }]
    }
    ```
    go to the folder where we have created json file and open command prompt. run below command 
    
    json-server --watch books.json -p 3001

    after that refresh http://localhost:3000/ now you are able to see book list.
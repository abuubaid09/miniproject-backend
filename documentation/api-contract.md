#Users
* Merchant object
```
{
  id: integer (PK)
  password: string
  merchantName: string
  address: string
  join_date: datetime
  phone_number: string
  created_at: datetime(iso 8601)
  updated_at: datetime(iso 8601)
}
```
**POST /merchant/register**
----
  Create an account for merchant.
* **URL Params**  
  None
* **Data Params**  
```
  {
    merchantName: string
    password: string
    address: string
    join_date: date
    phone_number: string
  }
```
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200
**Error Response:**  
  * **Code:** 400 
  **Content:** `{ error : "Request is wrong" }`  

  **Content:**  
```
{
  merchant: [
           {<merchant_object>},
           {<merchant_object0>},
           {<merchant_object>}
         ]
}
```

**POST /merchant/login**
----
  Login Merchant.
* **URL Params**  
  None
* **Data Params**  
```
  {
    merchantName: string
    password: string
  }
```
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200
**Error Response:**  
  * **Code:** 400 
  **Content:** `{ error : "Request is wrong(Wrong Password)" }`  
OR  
  * **Code:** 404
  **Content:** `{ error : error : Merchant Name/username tidak ditemukan." }`
  **Content:**  
```
{
  merchant: [
           {<merchantName/username>},
           {<password>},
           {<confPassword>}
         ]
}
```

**DELETE /merchant/:id**
----
  Deletes the specified merchant.
* **URL Params**  
  *Required:* `id=[integer]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
  Authorization: Bearer `<Token>`
* **Success Response:** 
  * **Code:** 200
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ error : "Data Merchant tidak ditemukan" }`  
  OR  
  * **Code:** 401  
  **Content:** `{ error : error : "You are unauthorized to make this request." }`


#Products
* Product object
```
{
  productId: string (PK)
  productName: string
  quantity: integer
  price: integer
  merchantId: integer (FK)
  created_at: datetime(iso 8601)
  updated_at: datetime(iso 8601)
}
```
**GET /product/:id**
----
  Returns all products belong to merchant
* **URL Params**  
  *Required:* `id=[integer]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ error : "Data Product tidak ditemukan" }`  
  OR  
  * **Code:** 401  
  **Content:** `{ error : error : "You are unauthorized to make this request." }`

  **Content:**  
```
{
  products: [
           {<product_object>},
           {<product_object>},
           {<product_object>}
         ]
}
``` 

**POST /product/:id**
----
  Creates a new Product and returns the new object.
* **URL Params**  
 *Required:* `id=[integer]`
* **Data Params**  
```
  {
    productId: string
    productName: string
    price: interger
    quantity: integer
  }
```
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  `{ <product_object> }` 

**PUT /products/:id/:productId**
----
  Updates fields on the specified product and returns the updated object.
* **URL Params**  
  *Required:* `id=[integer], productId=[string]`
* **Data Params**  
```
  {
  	productName: string
    quantity: integer
    price: integer
  }
```
* **Headers**  
  Content-Type: application/json  
  Authorization: Bearer `<OAuth Token>`
* **Success Response:** 
* **Code:** 200  
  **Content:**  `{ <product_object> }`  
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ error : "Product doesn't exist" }`  
  OR  
  * **Code:** 401  
  **Content:** `{ error : error : "You are unauthorized to make this request." }`

**DELETE /products/:id/:productId**
----
  Deletes the specified product.
* **URL Params**  
  *Required:* `id=[integer], productId=[string]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
  Authorization: Bearer `<OAuth Token>`
* **Success Response:**  
  * **Code:** 200
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ error : "Product doesn't exist" }`  
  OR  
  * **Code:** 401  
  **Content:** `{ error : "You are unauthorized to make this request." }`
  OR  
  * **Code:** 400
  **Content:** `{ error : The request is wrong." }`


  
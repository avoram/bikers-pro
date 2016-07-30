# bikers-pro
Bikers pro work

Running MongoDb Server :

1) Go to bin folder in mongodb </br>
2) run ./mongod : It will start mongo db server at port no : 27017 </br>
3) Now run ./mongo in new terminal: We can now use it to create or modify the database and collection </br>
4) find db : db </br>
5) switch to or create DB : use 'bikers-pro' </br>
6) See all the collections : show collections </br>
7) See the data inside a collection : db.collection.find() </br>
8) Push Data into collection : db.collection.insert({'name','ABC'}) </br>
9) Add a new field in existing collection : </br>
            db.your_collection.update({},{$set : {"new_field":1}},{upsert:false,multi:true}) </br>
10) Update a existing recording in collection : <br>
db.your_collection.update({"_id" :ObjectId("4e93037bbf6f1dd3a0a9541a") },{$set : {"new_field”:”new_value”}})

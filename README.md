# bikers-pro
Bikers pro work

Running MongoDb Server :

1) Go to bin folder in mongodb </br>
2) run ./mongod : It will start mongo db server at port no : 27017 </br>
3) Now run ./mongo in new terminal: We can now use it to create or modify the database and collection </br>
4) find db : db </br>
5) switch to or create DB : use 'bikers-pro' </br>
6) Create a collection : db.createCollection("serviveProvidersList");<br>
6) See all the collections : show collections </br>
7) See the data inside a collection : db.collection.find() </br>
8) Push Data into collection : db.<collection-name>.insert( { name: "Michelin", icon: 'https://s-media-cache-ak0.pinimg.com/564x/d0/5e/ed/d05eed1eb43f6d43c36602eb6b34e96c.jpg' }) </br>
9) Add a new field in existing collection : </br>
            db.your_collection.update({},{$set : {"new_field":1}},{upsert:false,multi:true}) </br>
10) Update a existing recording in collection : <br>
db.your_collection.update({"_id" :ObjectId("4e93037bbf6f1dd3a0a9541a") },{$set : {"new_field”:”new_value”}})

11) Connection to mongo : without setting path :  <br>
./bin/mongo ds031865.mlab.com:31865/bikers-pro -u bikers-pro -p bikers

Using Heroku : (Cloud Based Application hosting Platform)

Tutorial : https://www.youtube.com/watch?v=AZNFox2CvBk <br>

1. Pushing Changes :
	git add .
	git commit -m “Commit Message”
	git push heroku master - First Time or from master
	git push heroku yourbranch:master - If working on other branch like dev-vora

2. Run Local : heroku local web
	Run Application : heroku open

   3. See logs :  heroku logs --tail

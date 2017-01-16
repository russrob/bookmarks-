document.getElementById("myBtn").addEventListener("click", saveBookmark);

    //Save Bookmark 
   function saveBookmark (e) {
   	// get form values for the input  
   	var siteName = document.getElementById("siteName").value;
   	var siteUrl = document.getElementById("siteUrl").value;

   	var bookmark = {
   		name: siteName,
   		url:siteUrl
   	};

	// //local storage test. Local test only stores strings 
	// localStorage.setItem("test", "Hello World");

	// localStorage.getItem("test");
	// console.log(localStorage.getItem("test"));
	// localStorage.removeItem("test");
	// console.log(localStorage.getItem("test"));

	// Test if bookmark is null
	if (localStorage.getItem("bookmarks") === null) {

		//Init array
		var bookmarks =[];
        //Adding to the array
		bookmarks.push(bookmark);
		//set to Localstorage 
		localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

	}else {
		//fetch bookmarks from localstorage JSON parse will turn json into a string 
		var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
		//add bookmark to array 
		bookmarks.push(bookmark);
		//re-set back yo localstorgae 
		localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
	}

	
		//re-fetch bookmark 
		fetchBookmarks();

   	//prevent form from submitting 
   	e.preventDefault();
   }; 

   // delete bookmark 
   function deleteBookmark (url) {
   	// get bookmark from Localstorage 

   var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
   //loop through bookmark 
    for(var i=0; i < bookmarks.length; i++){
    	if (bookmarks[i].url == url) {
    		//remove from array 
    		bookmarks.splice(i,1);
    	}
    }
		//re-set back yo localstorgae 
		localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

		//re-fetch bookmark 
		fetchBookmarks();

   }


   //fetch bookmarks 

   function fetchBookmarks () {
   	var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));



 	//get out put id 
 	var bookmarksResults = document.getElementById("booksmarkResults");

 	bookmarksResults.innerHTML = ""; 

 	for(var i = 0; i < bookmarks.length; i++){
 		var name = bookmarks[i].name;
 		var url = bookmarks[i].url;

 		bookmarksResults.innerHTML += '<div class="well">' +
 			                           '<h3>'+name+
 			                           ' <a class="btn btn-default" target=" blank" href="'+url+'">Visit</a> ' +
 			                           ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a> ' +
 			                           	'</h3>'+
 			                           	'</div>'; 
 	}

   }
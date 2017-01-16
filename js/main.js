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

	};else {
		//fetch bookmarks from localstorage JSON parse will turn json into a string 
		var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
	}

   	//prevent form from submitting 
   	e.preventDefault();
   }; 

     $.getJSON("https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=db70224b02fe110b29508b4fc80503c9&user_id=131358958%40N04&per_page=10&format=json&nojsoncallback=1", function(data) {
         console.log(data.photos.total); //console logs the array of Flickr Photostream images
         var numPhotos = data.photos.total; 
         
         $.each(data.photos.photo, function(i,item){
             //counts the photos in the Photostream
            //build the url of photos order to link to it
             if(i<10){
                 //lists the 10 most recent
                 var photoURL = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_m.jpg';
              $(".gallery-section").append("<img src='" + photoURL + "' class='galleryImages' />");
             }
             
             //What happens when here are no photos in the Photostream
             
                $(".numSection").empty().append(numPhotos); 
         });
     });

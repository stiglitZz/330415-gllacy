	  
	  var link = document.querySelector(".btn-feedback");
	  var popup = document.querySelector(".modal-content");
	  var close = document.querySelector(".btn-modal-close");
	  var namevisitor = popup.querySelector("[name=namevisitor]");
	  var email = popup.querySelector("[name=email]");
	  var review = popup.querySelector("[name=review]");
	  var form = popup.querySelector("form");
	  var storage = localStorage.getItem("namevisitor");
	  var btn1 = document.querySelector("#btn-slide1");
	  var btn2 = document.querySelector("#btn-slide2");
	  var btn3 = document.querySelector("#btn-slide3");
		
		


		
 



	 btn1.addEventListener("mouseover", function(event) {
	  	  
	  	  btn1.classList.add("rubberBand");

	  });

	  btn1.addEventListener("mouseout", function(event) {
	  	  
	  	  btn1.classList.remove("rubberBand");

	  });	 

		btn2.addEventListener("mouseover", function(event) {
	  	  
	  	  btn2.classList.add("rubberBand");

	  });

	  btn2.addEventListener("mouseout", function(event) {
	  	  
	  	  btn2.classList.remove("rubberBand");

	  });	  

		btn3.addEventListener("mouseover", function(event) {
	  	  
	  	  btn3.classList.add("rubberBand");

	  });

	  btn3.addEventListener("mouseout", function(event) {
	  	  
	  	  btn3.classList.remove("rubberBand");

	  });	  

	  link.addEventListener("click", function(event) {

	      event.preventDefault();
	      popup.classList.add("modal-content-show");

	      if (storage) {
	          namevisitor.value = storage;
	          email.focus();
	      } else {
	          namevisitor.focus();
	      }



	  });
	  close.addEventListener("click", function(event) {
	      event.preventDefault();
	      popup.classList.remove("modal-content-show");
	      popup.classList.remove("modal-error");

	  });
	  form.addEventListener("submit", function(event) {
	      if (!namevisitor.value || !email.value || !review.value) {
	          event.preventDefault();
	          popup.classList.remove("modal-error");
	          popup.offsetWidth = popup.offsetWidth;
	          popup.classList.add("modal-error");
	      } else {
	          localStorage.setItem("namevisitor", namevisitor.value);
	      }
	  });
	  window.addEventListener("keydown", function(event) {
	      if (event.keyCode === 27) {
	          if (popup.classList.contains("modal-content-show")) {
	              popup.classList.remove("modal-content-show");
	              popup.classList.remove("modal-error");
	          }
	      }

	  });

		
          function initMap() {
	          var myLatLng = {lat: 59.938869, lng: 30.323094};
	          var map = new google.maps.Map(document.getElementById('map'), {
	            center: myLatLng,
	            zoom: 16,
	            scrollwheel: false

	          });
						var marker = new google.maps.Marker({
					    position: myLatLng,
					    map: map,
					    title: 'Мы здесь :)'
  					});	          
          }; 

				    	

  /*function initMap() {
        var myLatLng = {lat: 59.938869, lng: 30.323094};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          scrollwheel: false,
          center: myLatLng
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Мы тут!'
        });
      };
    */

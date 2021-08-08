
$(document).ready(function(){

    $('.best-seller').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        nav: true,
        navigation:true,
        dots: false,
        autoplay: true,
        autoHeight:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:true
            },
            1000:{
                items:4,
                nav:true,
                loop:true
                
            }
        }
    });

    $('.ingredient-carousel').owlCarousel({
        center: true,
            items:3,
            loop:true,
            margin:60,
            nav:false,
            dots:false,
            autoplay: true,
            slideTransition: 'linear',
            autoplayTimeout: 2000,
            autoplaySpeed: 2000,
            autoplayHoverPause: false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:6
                }
            }
        })

        $('.text1-carousel').owlCarousel({
            center: true,
                items:1,
                loop:true,
                margin:1,
                nav:false,
                dots:false,
                autoplay: true,
                slideTransition: 'linear',
                autoplayTimeout:5000,
                autoplaySpeed:5000,
                autoplayHoverPause:false,
                mouseDrag: false,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1000:{
                        items:2
                    }
                }
            })
        
            $('.trends12').owlCarousel({
                loop:true,
                margin:20,
                responsiveClass:true,
                nav: false,
                navigation:true,
                dots: false,
                autoplay: true,
                autoHeight:true,
                responsive:{
                    0:{
                        items:3,
                        nav:true,
                        loop:true
                    },
                    425:{
                        items:3,
                        nav:true,
                        loop:true
                    },
                    768:{
                        items:2,
                        nav:true,
                        
                    },
                    1000:{
                        items:5,
                        nav:true,
                        loop:true
                        
                    }
                }
            });
        
            function showDialog2() {
                $("#loginModal").removeClass("fade").modal("hide");
                $("#registerModal").addClass("fade").modal("show");
            }
            function showLoginModal(){
                $("#registerModal").removeClass("fade").modal("hide");
                $("#loginModal").addClass("fade").modal("show");
            }
            
            
            $("#registerBtn").on("click", function() {
                showDialog2();
            });
            
            $("#alreadyacc").on("click",function(){
                showLoginModal();
            })

            $("#formLogin").submit(function (e) {
                e.preventDefault();
      
                Check();
            })
      
      
            $("#formRegister").submit(function (e) {
                e.preventDefault();
      
                let username = $("#username1").val().trim();
                let re = /^[a-z0-9_-]{3,16}$/ig;
                if (re.test(username) == false) {
                    alert("Invalid Username");
                    $("#username1").focus();
                    return false;
                }
      
      
                let email = $("#email1").val().trim();
                re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ig;
                if (re.test(email) == false) {
                    alert("Invalid Email");
                    $("#email1").focus();
                    return false;
                }
            
      
                let password = $("#password1").val().trim();
                re = /^[-\w\.\$@\*\!]{1,30}$/ig;
                if (re.test(password) == false) {
                    alert("Invalid Password! Password cannot contain white spaces!");
                    $("#password1").focus();
                    return false;
                }
      
      
                let passwordConfirm = $("#password2").val().trim();
                if (passwordConfirm !== password) {
                    alert("Password and confirm password not match! Please try again!")
                    $("#password2").focus();
                    return false;
                }
      
                let gender = $("#gender:checked").val();
      
      
      
                let s = `Username: ${username} \n Email: ${email} \n Gender: ${gender}`;
                alert("Register Success \n Your Information: \n " + s);
                $("#registerModal").removeClass("fade").modal("hide");
                $("#loginModal").addClass("fade").modal("show");
                store();
      
            });
      
      
            
      
            function Check() { //retrieves items in the localStorage
      
                var username = $("#username").val() //gets key from user
                var password = $("#password").val(); //gets password from user
                var myobj = JSON.parse(localStorage.getItem("user"));
      
                if(myobj == null){
                    alert("This account doesn't exist! Please try again!");
                    $("#registerBtn").focus();
                    return false;
                }
                if (username == myobj.username && password == myobj.password) {
                    alert("You are Logged in");
                    $("#loginModal").removeClass("fade").modal("hide");
                }
                else {
                    alert("Wrong username or password! Please try again!");
                    $("#username").focus();
                    return false;
                   
                }
            }
        
            function store() {
                
                let username = $("#username1").val();
                let email = $("#email1").val().trim();
                let password = $("#password1").val();
                let gender = $("#gender:checked").val();
                
                

                const user = {
                    username: username,
                    email: email,
                    password: password,
                    gender: gender,
                };
               
      
                localStorage.setItem("user", JSON.stringify(user));
                localStorage.getItem("user");
                myobj = JSON.parse(localStorage.getItem("user"));

            };
        
            $("#formContactFooter").submit(function (e) {
                e.preventDefault();
      
                let email = $("#emailFooter").val().trim();
                re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ig;
                if (re.test(email) == false) {
                    alert("Invalid Email");
                    $("#email1").focus();
                    return false;
                }
                
                alert("Your message has been sent to us! Thank you for your contact!");
      
            })
        
});

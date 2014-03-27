var catApp = angular.module("CatApp", [])
    .controller("CatCtrl", ["$scope", "$timeout", "pics", function($scope, $timeout, pics) {
    $scope.catScore = 0;
    $scope.hotScore = 0;

    var catRef = new Firebase("https://hot-or-cat.firebaseio.com/");

    catRef.transaction(function(current_val) {
        if(!!current_val) {
            current_val["visits"]++;
        }
        return current_val;
    })

    catRef.on('value', function(snapshot) {
        $scope.globalCat = snapshot.val().catScore;
        $scope.globalHot = snapshot.val().hotScore;
    });

    $scope.hotClick = function() {
        $scope.hotScore++;
        catRef.transaction(function(current_val) {
            if(!!current_val)
                current_val.hotScore++;
            $scope.globalHot = current_val["hotScore"];
            return current_val;
        });
        newImages();
    }

    $scope.catClick = function() {
        $scope.catScore++;
        catRef.transaction(function(current_val) {
            if(!!current_val)
                current_val.catScore++;
            $scope.globalCat = current_val["catScore"];
            return current_val;
        });
        newImages();
    }

    $scope.disabled = false;

    var newImages = function () {
        $scope.disabled = true;
        $timeout(function() {
            $scope.disabled = false;
        }, 1000)
        $scope.cat = pics.cats[Math.floor((Math.random()*pics.cats.length))];
        $scope.hot = pics.hots[Math.floor((Math.random()*pics.hots.length))];
    }

    newImages();
}])
    .service("pics", function() {
        var service = {};


        service.cats = [
            "http://cvcl.mit.edu/hybrid/cat2.jpg",
            "http://4.bp.blogspot.com/-8KMHR_yHZgY/TwlnSzbjvnI/AAAAAAAAAT4/-qB22fmnGoE/s640/cute-cat-sleeping.jpg",
            "http://cdn.cutestpaw.com/wp-content/uploads/2011/11/cute-cat-l.jpg",
            "http://xemanhdep.com/gallery/cute_cat1/cute_cat102.jpg",
            "http://3.bp.blogspot.com/-geV_9f8SlXA/T9ufcHegWEI/AAAAAAAAADg/elIsDKUePwk/s640/cute+cat+pictures+(29).jpg",
            "http://pages.swcp.com/~jamii/OtherCats/coco.jpg",
            "http://cdn.cutestpaw.com/wp-content/uploads/2011/11/Simon-av-Flamingo-l.jpg",
            "http://blog.hostelbookers.com/wp-content/uploads/2012/02/cat-happy-cat-e1329931204797.jpg",
            "http://1.bp.blogspot.com/-eh7B7qlNR6U/ULc8ofWeg7I/AAAAAAAAXyg/Bj195OomDLw/s640/cute_cat_bath_07.jpg",
            "http://1.bp.blogspot.com/-CgvEyF38fWo/T8G2PCEYw-I/AAAAAAAAAP0/r899YRT-Ry4/s640/4068996309_f775b63381.jpg",
            "http://catpictures24.com/wp-content/uploads/2013/12/89bf4c505275c746b9005b04ec51facd.jpg",
            "http://data2.whicdn.com/images/58075699/large.png",
            "http://25.media.tumblr.com/0e0beee3b240bc96ff8c84fe1642e0ee/tumblr_mhyfr25FQw1qhkkyto1_500.jpg",
            "http://legacy-cdn.smosh.com/smosh-pit/122010/ugly-cat-9.jpg",
            "http://legacy-cdn.smosh.com/smosh-pit/122010/ugly-cat-12.jpg",
            "https://pbs.twimg.com/profile_images/378800000789782200/cd1cbe71d18e1e4d9cfc5a116815e608.jpeg"
        ]

        service.hots = [
            "http://data3.whicdn.com/images/35398355/large.jpg",
            "http://img1.wikia.nocookie.net/__cb20130314233151/camp-mytholigy/images/7/73/Adorable-pretty-girl-young-hair.jpg",
            "http://4.bp.blogspot.com/-P7lvAl2vdQI/Te7bw6OvbEI/AAAAAAAAARA/khL3_bHDO40/s1600/latin+Pretty+Girl5.jpg",
            "http://img3.wikia.nocookie.net/__cb20120402162925/glee/images/5/57/Pretty_girls_with_pretty_smiles_640_18.jpg",
            "http://img2.wikia.nocookie.net/__cb20120726015806/thehungergames/images/e/e0/Blue-eyes-curly-hair-globes-pretty-girl.-snow-thinspiration-white-Favim.com-69980.jpg",
            "http://data2.whicdn.com/images/7557921/large.jpg",
            "http://img2.wikia.nocookie.net/__cb20121231022053/pitch-perfect/images/9/97/You-call-yourself-fat-amy_clink_large.jpg",
            "http://cdn.buzznet.com/assets/users16/jamesandthegiantpeach21/default/pretty-girl--large-msg-125159854543.jpg",
            "http://1.bp.blogspot.com/_uzYkBOU3_UE/S_pCMq_WzHI/AAAAAAAABOk/bxHSIUQgIhA/s1600/pretty-girl.jpg",
            "http://aonethemes.com/blogphix/wp-content/uploads/sites/3/2013/05/country_girl-wallpaper-1920x1200-595x400.jpg",
            "http://media.indiatimes.in/media/content/2012/Jul/girl-pretty-2_1343098724_460x460.jpg",
            "http://data1.whicdn.com/images/31063363/large.jpg",
            "http://4.bp.blogspot.com/-9iuqPsuJ59E/UZTpXh_6a2I/AAAAAAAAACc/47On-8DodBg/s1600/pretty+girls.jpg",
            "http://www.piercingtime.com/images/161/attractive-girl-nose-piercing-with-ring.jpg",
            "http://amazing-wallpaper.com/wp-content/uploads/2014/03/to_twitter_share_to_facebook_labels_cute_girl_nice_nice_girl_reactions_in_hight_quality.jpg",
            "http://fc05.deviantart.net/fs71/f/2013/039/1/1/cute_girl_with_braids_by_zkybo-d5u8l7d.jpg",
            "http://thechive.files.wordpress.com/2012/01/the-awesome-chivettes-4.jpg",
            "http://31.media.tumblr.com/20666dc7b8e6166afa7ba9e82a3d2cd0/tumblr_mjba8qFqrC1s444ofo1_500.png"
        ]

        return service;
    });
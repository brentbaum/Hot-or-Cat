var catApp = angular.module("CatApp", [])
    .controller("CatCtrl", ["$scope", function($scope) {
    var cats = [
        "http://cvcl.mit.edu/hybrid/cat2.jpg",
        "http://4.bp.blogspot.com/-8KMHR_yHZgY/TwlnSzbjvnI/AAAAAAAAAT4/-qB22fmnGoE/s640/cute-cat-sleeping.jpg",
        "http://cdn.cutestpaw.com/wp-content/uploads/2011/11/cute-cat-l.jpg",
        "http://xemanhdep.com/gallery/cute_cat1/cute_cat102.jpg",
        "http://3.bp.blogspot.com/-geV_9f8SlXA/T9ufcHegWEI/AAAAAAAAADg/elIsDKUePwk/s640/cute+cat+pictures+(29).jpg",
        "http://pages.swcp.com/~jamii/OtherCats/coco.jpg",
        "http://cdn.cutestpaw.com/wp-content/uploads/2011/11/Simon-av-Flamingo-l.jpg",
        "http://blog.hostelbookers.com/wp-content/uploads/2012/02/cat-happy-cat-e1329931204797.jpg",
        "http://1.bp.blogspot.com/-eh7B7qlNR6U/ULc8ofWeg7I/AAAAAAAAXyg/Bj195OomDLw/s640/cute_cat_bath_07.jpg"
    ]

    var hots = [
        "http://data3.whicdn.com/images/35398355/large.jpg",
        "http://img1.wikia.nocookie.net/__cb20130314233151/camp-mytholigy/images/7/73/Adorable-pretty-girl-young-hair.jpg",
        "http://4.bp.blogspot.com/-P7lvAl2vdQI/Te7bw6OvbEI/AAAAAAAAARA/khL3_bHDO40/s1600/latin+Pretty+Girl5.jpg",
        "http://img3.wikia.nocookie.net/__cb20120402162925/glee/images/5/57/Pretty_girls_with_pretty_smiles_640_18.jpg",
        "http://img2.wikia.nocookie.net/__cb20120726015806/thehungergames/images/e/e0/Blue-eyes-curly-hair-globes-pretty-girl.-snow-thinspiration-white-Favim.com-69980.jpg",
        "http://data2.whicdn.com/images/7557921/large.jpg",
        "http://img2.wikia.nocookie.net/__cb20121231022053/pitch-perfect/images/9/97/You-call-yourself-fat-amy_clink_large.jpg"
    ]

    $scope.catScore = 0;
    $scope.hotScore = 0;

    $scope.cat = cats[0];
    $scope.hot = hots[0];

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
        console.log($scope.globalCat);
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

    var newImages = function () {
        $scope.cat = cats[Math.floor((Math.random()*cats.length))];
        $scope.hot = hots[Math.floor((Math.random()*hots.length))];
    }
}]);
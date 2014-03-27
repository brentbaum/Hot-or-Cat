function CatCtrl($scope) {
    var cats = [
        "http://cvcl.mit.edu/hybrid/cat2.jpg",
        "http://4.bp.blogspot.com/-8KMHR_yHZgY/TwlnSzbjvnI/AAAAAAAAAT4/-qB22fmnGoE/s640/cute-cat-sleeping.jpg",
        "http://cdn.cutestpaw.com/wp-content/uploads/2011/11/cute-cat-l.jpg",
        "http://xemanhdep.com/gallery/cute_cat1/cute_cat102.jpg",
        "http://3.bp.blogspot.com/-geV_9f8SlXA/T9ufcHegWEI/AAAAAAAAADg/elIsDKUePwk/s640/cute+cat+pictures+(29).jpg"
    ]

    var hots = [
        "http://data3.whicdn.com/images/35398355/large.jpg",
        "http://img1.wikia.nocookie.net/__cb20130314233151/camp-mytholigy/images/7/73/Adorable-pretty-girl-young-hair.jpg",
        "http://4.bp.blogspot.com/-P7lvAl2vdQI/Te7bw6OvbEI/AAAAAAAAARA/khL3_bHDO40/s1600/latin+Pretty+Girl5.jpg",
        "http://img3.wikia.nocookie.net/__cb20120402162925/glee/images/5/57/Pretty_girls_with_pretty_smiles_640_18.jpg",
    ]

    $scope.catScore = 0;
    $scope.hotScore = 0;

    $scope.cat = cats[0];
    $scope.hot = hots[0];

    $scope.hotClick = function() {
        $scope.hotScore++;
        newImages();
    }

    $scope.catClick = function() {
        $scope.catScore++;
        newImages();
    }

    var newImages = function () {
        $scope.cat = cats[Math.floor((Math.random()*cats.length))];
        $scope.hot = hots[Math.floor((Math.random()*hots.length))];
    }
}
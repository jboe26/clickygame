
$(document).ready(function () {

    var totalScore = 0;

    var topScore = (Math.floor(Math.random() * 101) + 19);

    $(".dog1").on("click", function () {
        
        $('#totalScore').text(totalScore);
        if (totalScore === topScore) {
            totalScore++;
        }
    });

    $(".dog2").on("click", function () {
        
        $('#totalScore').text(totalScore);
        if (totalScore === topScore) {
            totalScore++;
        }
    });
    $(".dog3").on("click", function () {
        
        $('#totalScore').text(totalScore);
        if (totalScore === topScore) {
            totalScore++;
        }
    }); $(".dog4").on("click", function () {
        
        $('#totalScore').text(totalScore);
        if (totalScore === topScore) {
            totalScore++;
        }
    }); $(".dog5").on("click", function () {
        
        $('#totalScore').text(totalScore);
        if (totalScore === topScore) {
            totalScore++;
        }
    }); $(".dog6").on("click", function () {
        
        $('#totalScore').text(totalScore);
        if (totalScore === topScore) {
            totalScore++;
        }
    }); $(".dog7").on("click", function () {
        
        $('#totalScore').text(totalScore);
        if (totalScore === topScore) {
            totalScore++;
        }
    }); $(".dog8").on("click", function () {
        
        $('#totalScore').text(totalScore);
        if (totalScore === topScore) {
            totalScore++;
        }
    }); $(".dog9").on("click", function () {
        
        $('#totalScore').text(totalScore);
        if (totalScore === topScore) {
            totalScore++;
        }
    }); $(".cat10").on("click", function () {
        
        $('#totalScore').text(totalScore);
        if (totalScore === topScore) {
            totalScore++;
        }
    });

});
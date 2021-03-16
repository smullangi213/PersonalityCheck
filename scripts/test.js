function checkPersonality() {
    var points1 = 0;
    var points2 = 0;
    var points3 = 0;
    var points4 = 0;

    var letter1 = "i";
    var letter2 = "n";
    var letter3 = "f";
    var letter4 = "p";
    for (var index = 1; index < 21; index++) {
        //console.log("index = " + index);
        // alert($("The Value of name: " + 'input[name]'));
        var answerValue = $('input[name=' + index + ']:checked').val();
        //console.log("Checked value = " + $('input[name='+ index +']:checked').val());
        //console.log ("The answer value is: " + answervalue);
        //console.log ("category of question: " + index%4);
        answerValue = parseInt(answerValue, 10);
        if (answerValue === 1) {
            if (index % 4 === 1) {
                points1++;
            }
            if (index % 4 === 2) {
                points2++;
            }
            if (index % 4 === 3) {
                points3++;
            }
            if (index % 4 === 0) {
                points4++;
            }
        }
    }

    if ((points1) > 2) {
        letter1 = 'e';
    }
    if ((points2) > 2) {
        letter2 = 's';
    }
    if ((points3) > 2) {
        letter3 = 't';
    }
    if ((points4) > 2) {
        letter4 = 'j';
    }

    //console.log (points1);
    var personalityCode = letter1 + letter2 + letter3 + letter4;
    //console.log(points1 + "" + points2 + "" + points3 + "" + points4);
    //console.log(letter1 + letter2 + letter3 + letter4);

    $('#personality_title').text("Your Personality: " + personalityCode);
    $('#personality_img').attr("src", "images/small/" + personalityCode + ".png");
    $('#personality_link').attr("href", "personalities/" + personalityCode + ".html");
}

$('document').ready(function () {
    $('input').attr('onchange', 'checkPersonality()');
})

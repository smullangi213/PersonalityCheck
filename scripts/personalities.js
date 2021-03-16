var personalities = {
    "istj": {
        "img_url": "istj.png",
        "expansion": ["Introvert", "Sensing", "Thinker", "Judger"],
        "name": "The Inspector"
    },
    "istp": {
        "img_url": "istp.png",
        "expansion": ["Introvert", "Sensing", "Thinker", "Perceiver"],
        "name": "The Craftsman"
    },
    "isfj": {
        "img_url": "isfj.png",
        "expansion": ["Introvert", "Sensing", "Feeler", "Judger"],
        "name": "The Nurturer"
    },
    "isfp": {
        "img_url": "isfp.png",
        "expansion": ["Introvert", "Sensing", "Feeler", "Perceiver"],
        "name": "The Composer"
    },

    "intj": {
        "img_url": "intj.png",
        "expansion": ["Introvert", "Intuitive", "Thinker", "Judger"],
        "name": "The Mastermind"
    },
    "intp": {
        "img_url": "intp.png",
        "expansion": ["Introvert", "Intuitive", "Thinker", "Perceiver"],
        "name": "The Thinker"
    },
    "infj": {
        "img_url": "infj.png",
        "expansion": ["Introvert", "Intuitive", "Feeler", "Judger"],
        "name": "The Counselor"
    },
    "infp": {
        "img_url": "infp.png",
        "expansion": ["Introvert", "Intuitive", "Feeler", "Perceiver"],
        "name": "The Idealist"
    },

    "estj": {
        "img_url": "estj.png",
        "expansion": ["Extrovert", "Sensing", "Thinker", "Judger"],
        "name": "The Supervisor"
    },
    "estp": {
        "img_url": "estp.png",
        "expansion": ["Extrovert", "Sensing", "Thinker", "Perceiver"],
        "name": "The Doer"
    },
    "esfj": {
        "img_url": "esfj.png",
        "expansion": ["Extrovert", "Sensing", "Feeler", "Judger"],
        "name": "The Provider"
    },
    "esfp": {
        "img_url": "esfp.png",
        "expansion": ["Extrovert", "Sensing", "Feeler", "Perceiver"],
        "name": "The Performer"
    },

    "entj": {
        "img_url": "entj.png",
        "expansion": ["Extrovert", "Intuitive", "Thinker", "Judger"],
        "name": "The Commander"
    },
    "entp": {
        "img_url": "entp.png",
        "expansion": ["Extrovert", "Intuitive", "Thinker", "Perceiver"],
        "name": "The Visionary"
    },
    "enfj": {
        "img_url": "enfj.png",
        "expansion": ["Extrovert", "Intuitive", "Feeler", "Judger"],
        "name": "The Giver"
    },
    "enfp": {
        "img_url": "enfp.png",
        "expansion": ["Extrovert", "Intuitive", "Feeler", "Perceiver"],
        "name": "The Champion"
    }
}

$(document).ready(function () {
    var page = $('main');
    //console.log(personalities);
    for (var key in personalities) {
        //console.log(key + " -> " + personalities[key].name);
        var section = $('<a>');
        var heading = $('<h3>');
        var image = $('<img>');

        section.attr("href", "images/" + personalities[key].img_url);
        section.attr("data-fancybox", "gallery");
        section.attr("data-caption", personalities[key].name + " (" + key + ")")

        heading.text(personalities[key].name + " (" + key + ")");
        image.attr("src", "images/small/" + personalities[key].img_url);

        var ul_list = $('<ul>');
        for (var trait in personalities[key].expansion) {
            var li_item = $('<li>');
            li_item.text(personalities[key].expansion[trait]);
            ul_list.append(li_item);
        }


        section.append(heading);
        section.append(image);
        section.append(ul_list);

        page.append(section);
    }
})

//Images from https://www.truity.com/page/16-personality-types-myers-briggs

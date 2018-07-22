// Handle the Friends data and processing

const QUESTION_LIST = [
    'My favorite food is cheese',
    'My favorite food is bacon',
    'I like to sleep most of the day',
    'I get impatient waiting for my human to take me for a walk',
    'I get very excited about meeting new friends',
    'I get tired on long walks',
    'I love to run',
    'Cats really annoy me',
    'My human thinks I have AD... SQUIRREL!',
    'I am really good at "Roll over"',
];

let friends = [
    {
        name  : "Sam",
        photo : "https://i.pinimg.com/564x/01/c9/2e/01c92ec631bc743f88adb3520792cf8b.jpg",
        scores: [5, 5, 2, 5, 4, 1, 5, 1, 5, 5]
    },
    {
        name  : "Gunther",
        photo : "https://i.pinimg.com/564x/8e/e6/ac/8ee6ac37e5ace42d63715470ca69ca8f.jpg",
        scores: [4, 5, 5, 1, 3, 2, 4, 3, 4, 1]
    },
    {
        name  : "Olivia",
        photo : "https://i.pinimg.com/564x/e8/22/b1/e822b122d49352f577a74186312b947b.jpg",
        scores: [4, 2, 4, 1, 1, 3, 5, 5, 3, 2]
    },
    {
        name  : "Diesel",
        photo : "https://i.pinimg.com/564x/f5/23/ac/f523acccd59ce28b8743158194b3487d.jpg",
        scores: [3, 5, 5, 3, 2, 1, 5, 2, 3, 3]
    },
    {
        name  : "Frank",
        photo : "https://i.pinimg.com/564x/25/81/26/25812629e8fb2c58dd4ca675d11852d2.jpg",
        scores: [4, 5, 4, 1, 3, 2, 4, 5, 4, 3]
    },
    {
        name  : "Fritz",
        photo : "https://i.pinimg.com/564x/61/96/44/619644c2728538bcf4086bf6e11c861e.jpg",
        scores: [5, 5, 3, 1, 3, 2, 4, 2, 4, 5]
    },
    {
        name  : "Scout",
        photo : "https://i.pinimg.com/564x/c7/6e/51/c76e5190f4ee443f43187d59097bedb3.jpg",
        scores: [5, 5, 5, 5, 3, 4, 1, 2, 1, 3]
    },
    {
        name  : "Winston",
        photo : "https://i.pinimg.com/564x/d2/25/b9/d225b9af7b1117ab857475673badfaed.jpg",
        scores: [5, 4, 3, 2, 5, 3, 4, 3, 5, 4]
    },
    {
        name  : "Fella",
        photo : "https://i.pinimg.com/564x/48/16/ab/4816ab0c9a7a74ec832782af9aa0dac6.jpg",
        scores: [3, 2, 4, 5, 2, 4, 1, 3, 4, 3]
    },
    {
        name  : "Allen",
        photo : "https://i.pinimg.com/564x/13/66/61/1366617a16e355c9353cd83ce30f605f.jpg",
        scores: [5, 4, 1, 3, 1, 1, 1, 3, 1, 1]
    },    
];

function Friends() {
    this.index = 0;
    // Return all of the friends in the database
    this.getFriends = function() {
        return(friends);
    };

    // Return list of questions
    this.getQuestions = function() {
        return(QUESTION_LIST);
    };

    // Find the best match in the friends list
    this.findBestMatch = function(friendData) {
        let bestIndex = 99;
        let bestScore = 99999;
        for (let i = 0; i < friends.length; i++) {
             // Skip over yourself
            if (friends[i].name === friendData.name)
                continue; 
            
            // Add up all the absolute differences
            // Pick the one with the least difference
            let thisScore = 0;
            for (let j = 0; j < 10; j++)
                thisScore += Math.abs(friendData.scores[j] - friends[i].scores[j]);
            if (thisScore < bestScore) {
                bestScore = thisScore;
                bestIndex = i;
            }
        }
        return (friends[bestIndex]);
    };

    // Process survey results
    this.processFriend = function(friendData) {
        friends.push(friendData);
        // return({name: "Kensington", photo: "../public/images/kensington.jpg"});
        if (this.index === 10)
            this.index = 0;
        return(this.findBestMatch(friendData));
    };
}

module.exports = Friends;
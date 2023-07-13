/*
    Every time program run. It generates a random horoscope and outputs it
*/

const zodiacArr = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capicorn', 'aquarius', 'pisces'];
const adjectiveArr = ['great', 'mid', 'happy', 'lucky', 'anxious', 'sad', 'lit', 'unfortunate', 'amazing', 'fantastic', 'beautiful', 'gray'];
const fortuneArr = ['trust no one', 'listen to your mom', 'shave your head', 'cry', 'go to therapy', 'get a cat', 'break up', 'do not call your ex', 'watch anime', 'marry them', 'watch P&P', 'touch some grass'];

function generator(){

    let zodiacNum =  Math.floor(Math.random() * 11); //returns number
    let adjNum = Math.floor(Math.random() * 11);
    let fortuneNum = Math.floor(Math.random() * 11);

    let zodiac = '';
    let adj = '';
    let fortune = '';

    switch(zodiacNum){
        case 0:
            zodiac = zodiacArr[0];
            break;
        case 1:
            zodiac = zodiacArr[1];
            break;
        case 2:
            zodiac = zodiacArr[2];
            break;
        case 3:
            zodiac = zodiacArr[3];
            break;
        case 4:
            zodiac = zodiacArr[4];
            break;
        case 5:
            zodiac = zodiacArr[5];
            break;
        case 6:
            zodiac = zodiacArr[6];
            break;
        case 7:
            zodiac = zodiacArr[7];
            break;
        case 8:
            zodiac = zodiacArr[8];
            break;
        case 9:
            zodiac = zodiacArr[9];
            break;
        case 10:
            zodiac = zodiacArr[10];
            break;
        case 11:
            zodiac = zodiacArr[11];
            break;
    }

    switch(adjNum){
        case 0:
            adj = adjectiveArr[0];
            break;
        case 1:
            adj = adjectiveArr[1];
            break;
        case 2:
            adj = adjectiveArr[2];
            break;
        case 3:
            adj = adjectiveArr[3];
            break;
        case 4:
            adj = adjectiveArr[4];
            break;
        case 5:
            adj = adjectiveArr[5];
            break;
        case 6:
            adj = adjectiveArr[6];
            break;
        case 7:
            adj = adjectiveArr[7];
            break;
        case 8:
            adj = adjectiveArr[8];
            break;
        case 9:
            adj = adjectiveArr[9];
            break;
        case 10:
            adj = adjectiveArr[10];
            break;
        case 11:
            adj = adjectiveArr[11];
            break;
    }

    switch(fortuneNum){
        case 0:
            fortune = fortuneArr[0];
            break;
        case 1:
            fortune = fortuneArr[1];
            break;
        case 2:
            fortune = fortuneArr[2];
            break;
        case 3:
            fortune = fortuneArr[3];
            break;
        case 4:
            fortune = fortuneArr[4];
            break;
        case 5:
            fortune = fortuneArr[5];
            break;
        case 6:
            fortune = fortuneArr[6];
            break;
        case 7:
            fortune = fortuneArr[7];
            break;
        case 8:
            fortune = fortuneArr[8];
            break;
        case 9:
            fortune = fortuneArr[9];
            break;
        case 10:
            fortune = fortuneArr[10];
            break;
        case 11:
            fortune = fortuneArr[11];
            break;
    }

    console.log(`Your sun sign is ${zodiac}.`);
    console.log(`You're having a ${adj} day.`);
    console.log(`You should ${fortune}.`);

}

generator();
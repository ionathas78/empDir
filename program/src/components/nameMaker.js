
//      **      Declarations

const _CONSONANTS_LIST = "b,ch,d,f,g,h,j,jh,k,kh,l,m,n,p,q,r,s,sh,t,th,v,w,x,y,z"
const _VOWELS_LIST = "a,e,i,o,u"

//      Word Settings
const _GIVENNAME_TWOSYLLABLES = 0.4;
const _GIVENNAME_FOURSYLLABLES = 0.25;
const _GIVENNAME_FIVESYLLABLES = 0.02;

const _SURNAME_TWOSYLLABLES = 0.3;
const _SURNAME_FOURSYLLABLES = 0.4;
const _SURNAME_FIVESYLLABLES = 0.05;

//      Syllable Settings
const _CHANCEFOR_INITIALVOWEL = 0.35;
const _CHANCEFOR_TERMINALVOWEL = 0.5;
const _CHANCEFOR_DIPHTHONG = 0.15;
const _CHANCEFOR_COMPOUNDCONSONANT = 0.25;


const nameMaker = {
    //      **      Primary Functions

    /**
     * Generates a random given name using makeSyllable() according to the specified parameters
     * @param {Number} chanceForTwoSyllables Percentage chance the name will only be two syllables long
     * @param {Number} chanceForFourSyllables Percentage chance (cumulative) the name will have four syllables
     * @param {Number} chanceForFiveSyllables Percentage chance (cumulative) the name will have five syllables
     */
    makeGivenName: function(
                chanceForTwoSyllables = _GIVENNAME_TWOSYLLABLES,
                chanceForFourSyllables = _GIVENNAME_FOURSYLLABLES,
                chanceForFiveSyllables = _GIVENNAME_FIVESYLLABLES) {

        return makeName(chanceForTwoSyllables, chanceForFourSyllables, chanceForFiveSyllables)
    },

    /**
     * Generates a random given name using makeSyllable() according to the specified parameters
     * @param {Number} chanceForTwoSyllables Percentage chance the name will only be two syllables long
     * @param {Number} chanceForFourSyllables Percentage chance (cumulative) the name will have four syllables
     * @param {Number} chanceForFiveSyllables Percentage chance (cumulative) the name will have five syllables
     */
    makeSurname: function(
                chanceForTwoSyllables = _SURNAME_TWOSYLLABLES,
                chanceForFourSyllables = _SURNAME_FOURSYLLABLES,
                chanceForFiveSyllables = _SURNAME_FIVESYLLABLES) {
                    
        return makeName(chanceForTwoSyllables, chanceForFourSyllables, chanceForFiveSyllables)
    }

}

//      **      Utility Functions


/**
 * Generates a random given name using makeSyllable() according to the specified parameters
 * @param {Number} chanceForTwoSyllables Percentage chance the name will only be two syllables long
 * @param {Number} chanceForFourSyllables Percentage chance (cumulative) the name will have four syllables
 * @param {Number} chanceForFiveSyllables Percentage chance (cumulative) the name will have five syllables
 */
function makeName(chanceForTwoSyllables, chanceForFourSyllables, chanceForFiveSyllables) {
    let returnString = "";
    let syllables = []; 
    let syllable0, syllable1;

    syllable0 = makeSyllable();
    syllables.push(syllable0);

    syllable1 = makeSyllable();
    syllables.push(syllable1);

    if (Math.random() > chanceForTwoSyllables) {
    let syllable2 = makeSyllable();
    syllables.push(syllable2);

    if (Math.random() <= chanceForFourSyllables) {
        let syllable3 = makeSyllable();
        syllables.push(syllable3);

        if (Math.random() <= chanceForFiveSyllables) {
            let syllable4 = makeSyllable();
            syllables.push(syllable4);
        }
    }
    }

    returnString = syllables.join("").toLowerCase();
    return returnString[0].toUpperCase() + returnString.substring(1);
}

/**
 * Generates a random syllable from _CONSONANTS_LIST and _VOWELS_LIST using the specified parameters
 * @param {Number} chanceForInitialVowel Percentage chance that the syllable will start with a vowel
 * @param {Number} chanceForTerminalVowel Percentage chance that the syllable will end with a vowel
 * @param {Number} chanceForDiphthong Percentage chance the vowel will be a diphthong
 * @param {Number} chanceForCompoundConsonant Percent chance either consonant will be a compound
 */
function makeSyllable(
            chanceForInitialVowel = _CHANCEFOR_INITIALVOWEL, 
            chanceForTerminalVowel = _CHANCEFOR_TERMINALVOWEL,
            chanceForDiphthong = _CHANCEFOR_DIPHTHONG,
            chanceForCompoundConsonant = _CHANCEFOR_COMPOUNDCONSONANT) {
    
    const consonants = _CONSONANTS_LIST.split(",");
    const vowels = _VOWELS_LIST.split(",");

    let phonemes = [];
    let middlePhoneme;

    if (Math.random() > chanceForInitialVowel) {
        let firstPhoneme = randomLetter(consonants);
        if (Math.random() <= chanceForCompoundConsonant) {
            firstPhoneme += randomLetter(consonants);
        }
        phonemes.push(firstPhoneme);
    }


    middlePhoneme = randomLetter(vowels);
    if (Math.random() <= chanceForDiphthong) {
        middlePhoneme += randomLetter(vowels);
    }
    phonemes.push(middlePhoneme);

    if (Math.random() > chanceForTerminalVowel) {
        let thirdPhoneme = randomLetter(consonants);
        if (Math.random() <= chanceForCompoundConsonant) {
            thirdPhoneme += randomLetter(consonants);
        }
        phonemes.push(thirdPhoneme);
    }

    return phonemes.join("");
}

/**
 * Selects a random element from given list
 * @param {Array} letterList Array of letters from which to choose
 */
function randomLetter(letterList) {
    return letterList[Math.floor(Math.random() * letterList.length)];
}

//

export default nameMaker;


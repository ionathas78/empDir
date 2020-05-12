
//      **      Declarations

const _CONSONANTS_COMMON_LIST = "b,ch,d,f,g,h,j,jh,k,l,m,n,p,qu,r,s,sh,t,th,y"
const _CONSONANTS_UNCOMMON_LIST = "kh,qu,v,w,wh,x,z";
const _CONSONANTS_INITIAL_RESTRICTIONS = "x";
const _CONSONANTS_TERMINAL_RESTRICTIONS = "qu,wh";
const _VOWELS_LIST = "a,e,i,o,u"
const _RESTRICTED_LETTER_COMBINATIONS = "whw,bd,uu,shkh,mv,lj,hh"

//      Word Settings
const _GIVENNAME_TWOSYLLABLES = 0.4;
const _GIVENNAME_FOURSYLLABLES = 0.15;
const _GIVENNAME_FIVESYLLABLES = 0.02;
const _MAX_GIVENNAME_LENGTH = 8;
const _MAX_SURNAME_LENGTH = 10;

const _SURNAME_TWOSYLLABLES = 0.3;
const _SURNAME_FOURSYLLABLES = 0.3;
const _SURNAME_FIVESYLLABLES = 0.04;

//      Syllable Settings
const _CHANCEFOR_UNCOMMON_CONSONANT = 0.25;
const _CHANCEFOR_INITIALVOWEL = 0.3;
const _CHANCEFOR_TERMINALVOWEL = 0.4;
const _CHANCEFOR_DIPHTHONG = 0.05;
const _CHANCEFOR_COMPOUNDCONSONANT = 0.15;


const nameMaker = {
    //      **      Primary Functions

    /**
     * Generates a random given name using makeSyllable() according to the specified parameters
     * @param {Number} chanceForTwoSyllables Percentage chance the name will only be two syllables long
     * @param {Number} chanceForFourSyllables Percentage chance (cumulative) the name will have four syllables
     * @param {Number} chanceForFiveSyllables Percentage chance (cumulative) the name will have five syllables
     * @param {Number} maxLength Maximum character count before truncating name
     */
    makeGivenName: function(
                chanceForTwoSyllables = _GIVENNAME_TWOSYLLABLES,
                chanceForFourSyllables = _GIVENNAME_FOURSYLLABLES,
                chanceForFiveSyllables = _GIVENNAME_FIVESYLLABLES,
                maxLength = _MAX_GIVENNAME_LENGTH) {

        return makeName(chanceForTwoSyllables, chanceForFourSyllables, chanceForFiveSyllables, maxLength);
    },

    /**
     * Generates a random given name using makeSyllable() according to the specified parameters
     * @param {Number} chanceForTwoSyllables Percentage chance the name will only be two syllables long
     * @param {Number} chanceForFourSyllables Percentage chance (cumulative) the name will have four syllables
     * @param {Number} chanceForFiveSyllables Percentage chance (cumulative) the name will have five syllables
     * @param {Number} maxLength Maximum character count before truncating name
     */
    makeSurname: function(
                chanceForTwoSyllables = _SURNAME_TWOSYLLABLES,
                chanceForFourSyllables = _SURNAME_FOURSYLLABLES,
                chanceForFiveSyllables = _SURNAME_FIVESYLLABLES,
                maxLength = _MAX_SURNAME_LENGTH) {
                    
        return makeName(chanceForTwoSyllables, chanceForFourSyllables, chanceForFiveSyllables, maxLength);
    }

}

//      **      Utility Functions


/**
 * Generates a random given name using makeSyllable() according to the specified parameters
 * @param {Number} chanceForTwoSyllables Percentage chance the name will only be two syllables long
 * @param {Number} chanceForFourSyllables Percentage chance (cumulative) the name will have four syllables
 * @param {Number} chanceForFiveSyllables Percentage chance (cumulative) the name will have five syllables
 * @param {Number} maxLength Maximum character count before truncating name
 */
function makeName(chanceForTwoSyllables, chanceForFourSyllables, chanceForFiveSyllables, maxLength) {
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
    if (returnString.length > maxLength) {
        returnString = returnString.substr(0, maxLength);
    }
    _RESTRICTED_LETTER_COMBINATIONS.replace(/ /g,"").split(",").forEach(item => {
        if (returnString.indexOf(item) > -1) {
            returnString = returnString.replace(RegExp(item, "gi"), item[0]);
        }
    });
    return returnString[0].toUpperCase() + returnString.substring(1);
}

/**
 * Generates a random syllable from _CONSONANTS_LIST and _VOWELS_LIST using the specified parameters
 * @param {Number} chanceForInitialVowel Percentage chance that the syllable will start with a vowel
 * @param {Number} chanceForTerminalVowel Percentage chance that the syllable will end with a vowel
 * @param {Number} chanceForDiphthong Percentage chance the vowel will be a diphthong
 * @param {Number} chanceForUncommonConsonant Percent chance for a random uncommon consonant
 * @param {Number} chanceForCompoundConsonant Percent chance either consonant will be a compound
 */
function makeSyllable(
            chanceForInitialVowel = _CHANCEFOR_INITIALVOWEL, 
            chanceForTerminalVowel = _CHANCEFOR_TERMINALVOWEL,
            chanceForDiphthong = _CHANCEFOR_DIPHTHONG,
            chanceForUncommonConsonant = _CHANCEFOR_UNCOMMON_CONSONANT,
            chanceForCompoundConsonant = _CHANCEFOR_COMPOUNDCONSONANT
            ) {
    //  Basic Syllable Theory:
    //      In English, a syllable is made up of (potentially) an initial consonant or compound consonant,
    //      a vowel or diphthong, and a terminal consonant or compound. This forms a single phonetic phrase
    //      that forms a single component in a word or name.
    //  
    //      We're going to construct our random syllable just like that.
                
    const commonConsonants = _CONSONANTS_COMMON_LIST.replace(/ /g,"").split(",");
    const uncommonConsonants = _CONSONANTS_UNCOMMON_LIST.replace(/ /g,"").split(",");
    const vowels = _VOWELS_LIST.replace(/ /g,"").split(",");

    let phonemes = [];
    let middlePhoneme;

    if (Math.random() > chanceForInitialVowel) {
        let firstPhoneme;
        do {
            firstPhoneme = randomConsonant(chanceForUncommonConsonant, commonConsonants, uncommonConsonants);
        } while (_CONSONANTS_INITIAL_RESTRICTIONS.indexOf(firstPhoneme) > -1);

        if (Math.random() <= chanceForCompoundConsonant && 
                commonConsonants.indexOf(firstPhoneme) > -1 &&
                firstPhoneme.length < 2) {
            //  Don't compound if the selected consonant shows up in the common list.
            //      This helps avoid dubbilexes unless we want them.
            //  Also, not if the selected consonant is already compound. Because 'achshthwhe' is hard to read.
            firstPhoneme += randomLetter(commonConsonants);
        }
        phonemes.push(firstPhoneme);
    }

    middlePhoneme = randomLetter(vowels);
    if (Math.random() <= chanceForDiphthong) {
        middlePhoneme += randomLetter(vowels);
    }
    phonemes.push(middlePhoneme);

    if (Math.random() > chanceForTerminalVowel) {
        let thirdPhoneme;
        do {
            thirdPhoneme = randomConsonant(chanceForUncommonConsonant, commonConsonants, uncommonConsonants);
        } while (_CONSONANTS_TERMINAL_RESTRICTIONS.indexOf(thirdPhoneme) > -1);

        if (Math.random() <= chanceForCompoundConsonant && 
                commonConsonants.indexOf(thirdPhoneme) > -1 &&
                thirdPhoneme.length < 2) {
            //  As above.
            thirdPhoneme += randomLetter(commonConsonants);
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

/**
 * Selects a random element from either a common list or an uncommon one, based on a random chance
 * @param {Number} chanceForUncommon Percentile Probability of drawing from uncommon array
 * @param {Array} commonList Standard pick array
 * @param {Array} uncommonList Uncommon Array to use on weighted chance
 */
function randomConsonant(chanceForUncommon, commonList, uncommonList) {
    let pickList = commonList;
    if (Math.random() <= chanceForUncommon) {
        pickList = uncommonList;
    }
    return pickList[Math.floor(Math.random() * pickList.length)];
}


//

export default nameMaker;


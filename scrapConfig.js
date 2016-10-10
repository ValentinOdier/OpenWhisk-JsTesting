'use strict';

var toScrap = {
    // BDD Not working now
    mongo: {
        url: '',
        collection: '',
    },
    elastic: {
        url: '',
        index: '',
        objectType: ''
    },
    // Url à scrap
    url: 'http://www.boursorama.com/cours.phtml?symbole=8xWBS',
    //Model  + logique d'extraction
    selectors: [{
        css: '#fiche_cours_details>div:eq(1)>form>table>tbody>tr>td:eq(1)>b>span:eq(0)',
        xpath: 'id("fiche_cours_details")/DIV[2]/FORM[1]/TABLE[1]/TBODY[1]/TR[1]/TD[2]/B[1]/SPAN[1]',
        name: 'value', // nom d'extraction
        regex: '([0-9.])'
    }, {
        css: '#fiche_cours_details>div:eq(1)>form>table>tbody>tr:eq(1)>td:eq(1)>span:eq(0)',
        xpath: 'id("fiche_cours_details")/DIV[2]/FORM[1]/TABLE[1]/TBODY[1]/TR[2]/TD[2]/SPAN[1]',
        name: 'variation'
    }, {
        css: '#fiche_cours_details>div:eq(1)>form>table>tbody>tr:eq(2)>td:eq(1)',
        xpath: 'id("fiche_cours_details")/DIV[2]/FORM[1]/TABLE[1]/TBODY[1]/TR[3]/TD[2]',
        name: 'lastTrade'
    }, {
        css: '#fiche_cours_details>div:eq(1)>form>table>tbody>tr:eq(3)>td:eq(1)',
        xpath: 'id("fiche_cours_details")/DIV[2]/FORM[1]/TABLE[1]/TBODY[1]/TR[4]/TD[2]',
        name: 'volume'
    }, {
        css: '#fiche_cours_details>div:eq(1)>form>table>tbody>tr:eq(4)>td:eq(1)>span:eq(0)',
        xpath: 'id("fiche_cours_details")/DIV[2]/FORM[1]/TABLE[1]/TBODY[1]/TR[5]/TD[2]/SPAN[1]',
        name: 'openValue'
    }, {
        css: '#fiche_cours_details>div:eq(1)>form>table>tbody>tr:eq(5)>td:eq(1)>span:eq(0)',
        xpath: 'id("fiche_cours_details")/DIV[2]/FORM[1]/TABLE[1]/TBODY[1]/TR[6]/TD[2]/SPAN[1]',
        name: 'maxValue'
    }, {
        css: '#fiche_cours_details>div:eq(1)>form>table>tbody>tr:eq(6)>td:eq(1)>span:eq(0)',
        xpath: 'id("fiche_cours_details")/DIV[2]/FORM[1]/TABLE[1]/TBODY[1]/TR[7]/TD[2]/SPAN[1]',
        name: 'minValue'
    }, {
        css: '#fiche_cours_details>div:eq(1)>form>table>tbody>tr:eq(7)>td:eq(1)>span:eq(0)',
        xpath: 'id("fiche_cours_details")/DIV[2]/FORM[1]/TABLE[1]/TBODY[1]/TR[8]/TD[2]/SPAN[1]',
        name: 'max12Value'
    }, {
        css: '#fiche_cours_details>div:eq(1)>form>table>tbody>tr:eq(8)>td:eq(1)>span:eq(0)',
        xpath: 'id("fiche_cours_details")/DIV[2]/FORM[1]/TABLE[1]/TBODY[1]/TR[9]/TD[2]/SPAN[1]',
        name: 'min12Value'
    }, {
        css: '#fiche_cours_details>div:eq(1)>form>table>tbody>tr:eq(9)>td:eq(1)>span:eq(0)',
        xpath: 'id("fiche_cours_details")/DIV[2]/FORM[1]/TABLE[1]/TBODY[1]/TR[10]/TD[2]/SPAN[1]',
        name: 'closeValue'
    }]
}

module.exports = toScrap;

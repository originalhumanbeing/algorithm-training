const { whoIsNonFinish } = require('./marathoner');

describe('whoIsNonFinish 테스트', () => {
    test('leo가 나온', () => {
        expect(whoIsNonFinish(['leo', 'kiki', 'eden'], ['eden', 'kiki'])).toEqual(['leo']);
    })
});



// [leo, kiki, eden]	                    [eden, kiki]	                    leo
// [marina, josipa, nikola, vinko, filipa]	[josipa, filipa, marina, nikola]	vinko
// [mislav, stanko, mislav, ana]	        [stanko, ana, mislav]	            mislav
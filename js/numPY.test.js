const {numPY} = require('./numPY');

describe('numPY 테스트', () => {
    test('PyY는 p와 y의 개수가 같지 않다', () => {
        expect(numPY("PyY")).toBe(false);
    });

    test('pPoooyY는 p와 y의 개수가 같다', () => {
        expect(numPY("pPoooyY")).toBe(true);
    });
});
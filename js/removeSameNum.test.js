const {removeSameNum} = require('./removeSameNum');

describe('removeSameNum 테스트', () => {
    test('[1, 1, 3, 3, 0, 1, 1]은 [1, 3, 0, 1]이 된다', () => {
        expect(removeSameNum([1, 1, 3, 3, 0, 1, 1])).toEqual([1, 3, 0, 1]);
    });

    test('[4, 4, 4, 3, 3]은 [4, 3]이 된다', () => {
        expect(removeSameNum([4, 4, 4, 3, 3])).toEqual([4, 3]);
    });
});
# 함수를 완성해서 매개변수 array의 평균값을 return하도록 만들어 보세요.
# 어떠한 크기의 array가 와도 평균값을 구할 수 있어야 합니다.


def average(array):
    # a = 0
    # for v in array:
    #     a += v
    # return a/len(array)
    if len(array) == 0:
        return 0
        # ZeroDivisionError를 피할 수 있음
    return (sum(array) / len(array))

# 아래는 테스트로 출력해 보기 위한 코드입니다.
array = [5,3,4]
print("평균값 : {}".format(average(array)));
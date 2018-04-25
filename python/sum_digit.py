# sum_digit 함수는 자연수를 전달 받아서 숫자의 각 자릿수의 합을 구해서 return합니다.
# 예를들어 number = 123이면 1 + 2 + 3 = 6을 return하면 됩니다.
# sum_digit함수를 완성해보세요.


def sum_digit(number):
    # result = 0
    # for v in str(number):
    #     result += int(v)
    # return result
    # return sum([int(v) for v in str(number)])
    return sum(map(int, str(number)))

print("결과 : {}".format(sum_digit(123)));
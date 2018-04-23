# 정수 n이 주어질때, 1부터 n까지의 정수를 순서대로 담은 배열을 리턴하도록 solution 함수를 작성했습니다.
# 이때, 코드가 올바르게 동작할 수 있도록 빈칸을 알맞게 채워주세요.

# 매개변수 설명
# 정수 n이 solution 함수의 매개변수로 주어집니다.
# n은 1 이상 100,000이하인 정수입니다.

# return 값 설명
# solution 함수는 1부터 n까지의 정수를 순서대로 담은 배열을 리턴합니다.
# 예시: 3 -> [1, 2, 3] return, 5 -> [1, 2, 3, 4, 5] return


def solution(n):
    answer = []
    for i in range(n):
        answer.append(i + 1)
    return answer


print(solution(3))

print(solution(5))

def water_melon(n):
    answer = ''
    for i in range(1, n+1):
        if i % 2 == 0:
            answer += '박'
        else:
            answer += '수'
    return answer


# 실행을 위한 테스트코드입니다.
print("n이 3인 경우: " + water_melon(3))
print("n이 4인 경우: " + water_melon(4))
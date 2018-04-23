# numPY함수는 대문자와 소문자가 섞여있는 문자열 s를 매개변수로 입력받습니다.
# s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 리턴하도록 함수를 완성하세요.
# 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다.
# 예를 들어 s가 pPoooyY면 True를 리턴하고 Pyy라면 False를 리턴합니다.

def numPY(s):
    # p_counter = 0
    # y_counter = 0
    # for v in s:
    #     if v == 'p' or v == 'P':
    #         p_counter += 1
    #     elif v == 'y' or v == 'Y':
    #         y_counter += 1
    # if p_counter == y_counter:
    #     return True
    # else:
    #     return False
    return s.lower().count('p') == s.lower().count('y')

# 아래는 테스트로 출력해 보기 위한 코드입니다.
print(numPY("pPoooyY"))
print(numPY("Pyy"))
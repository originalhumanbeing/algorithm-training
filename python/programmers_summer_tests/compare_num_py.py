# 문자열이 주어졌을 때, 문자열에서 'p'와 'y'의 개수를 비교하려고 합니다.
# 문자열 s가 매개변수로 주어졌을 때, 문자열에서 'p'의 개수와 'y'의 개수가 같으면 True,
# 다르면 False를 return 하는 함수를 작성했습니다. 그러나, 코드 일부분이 잘못 되어있기 때문에, 몇몇 입력에 대해서는 올바르게 동작하지 않습니다.
# 주어진 코드에서 한 줄만 변경해서 모든 입력에 대해 올바르게 동작하도록 수정하세요.

# 매개변수 설명
# 문자열 s가 solution 함수의 매개변수로 주어집니다.

# 제한사항
# 문자열 s의 길이: 50 이하의 자연수
# 문자열 s는 알파벳으로만 이루어져 있습니다.

# 입출력 예
# "pPoooyY" -> p와 y가 각각 2개로 개수가 동일하므로 true
# "Pyy" -> false

def solution(s):
    p_num, y_num = 0, 0
    for i in range(0, len(s)):
    # for i in range(0, len(s)-1):
        if s[i]=='p' or s[i]=='P':
            p_num+=1
        elif s[i]=='y' or s[i]=='Y':
            y_num+=1
    return p_num==y_num

print(solution("pPoooyY"))
print(solution("PyY"))
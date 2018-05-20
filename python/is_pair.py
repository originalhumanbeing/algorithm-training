# is_pair함수는 문자열 s를 매개변수로 입력받습니다.
# s에 괄호가 알맞게 짝지어져 있으면 True를 아니면 False를 리턴하는 함수를 완성하세요.
# 예를들어 s가 (hello)()면 True이고, )(이면 False입니다.
# s가 빈 문자열("")인 경우는 없습니다.


def is_pair(s):
    ch_stack = []

    for ch in s:
        if ch == '(':
            ch_stack.append(ch)
        elif ch == ')':
            try:
                ch_stack.pop()
            except IndexError:
                return False
    return len(ch_stack) == 0


print( is_pair("(hello)()"))
print( is_pair(")("))
print( is_pair("(())"))
print( is_pair(")())"))
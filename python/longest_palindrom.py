# 앞뒤를 뒤집어도 똑같은 문자열을 palindrome이라고 합니다.
# longest_palindrom함수는 문자열 s를 매개변수로 입력받습니다.
# s의 부분문자열중 가장 긴 palindrom의 길이를 리턴하는 함수를 완성하세요.
# 예를들어 s가 토마토맛토마토이면 7을 리턴하고 토마토맛있어이면 3을 리턴합니다.


def is_palindrom(s):
    return s == s[::-1]

assert (is_palindrom('토마토'))
assert (not is_palindrom('토마토마'))


def longest_palindrom(s):
    if not s:
        # 매개변수가 ""일 때?
        return 0

    if is_palindrom(s):
        return len(s)

    longest_val = 1

    for st_idx in range(0, len(s)):
        for end_idx in range(st_idx + 1, len(s)+1):
            word = s[st_idx: end_idx]
            if is_palindrom(word):
                longest_val = max(longest_val, len(word))

    return longest_val


print(longest_palindrom('토마토맛토마토'))
print(longest_palindrom('토마토맛있어'))
print(longest_palindrom("맛있어토마토"))
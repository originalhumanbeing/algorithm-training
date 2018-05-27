# 10이하의 수를 입력받아 모래시계 모양으로 출력하는 프로그램을 작성하시오
# 1. 1부터 10 사이의 숫자를 입력하지 않은 경우: 1부터 10 사이의 홀수를 입력하시오. 학번: ----- 을 출력.
# 2. 짝수를 입력한 경우: 홀수를 입력하시오. 이름: --- 을 출력.
# 3. 0이 입력되기 전까지 계속해서 ㅜㅅ자를 입력받아 모래시계모양으로 출력하고, 0이 입력되는 경우: 프로그램을 종료합니다. 학과: 컴퓨터과학과 를 출력

def print_sandglass():
    sandglass_input = True

    while int(sandglass_input):
        sandglass_input = input('1부터 10 사이의 홀수를 입력하시오. (0을 입력시 프로그램 종료)')

        if int(sandglass_input) == 0:
            print('프로그램을 종료합니다. 학과: 컴퓨터과학과')
            return

        elif int(sandglass_input) % 2 == 0:
            print('홀수를 입력하시오. 이름: 한현정')

        elif int(sandglass_input) > 10 or int(sandglass_input) < 1:
            print('1부터 10 사이의 홀수를 입력하시오. 학번: 201634-356012')

        else:
            line = []

            for idx in range(1, int(sandglass_input)+1):
                line.append(str(idx))

            reversed_line = line[::-1]
            whole_line = line + reversed_line

            middle_index = len(whole_line)/2

            whole_line.pop(int(middle_index))

            for idx in range(len(whole_line)):
                if idx <= len(whole_line)/2:
                    smaller_than_middle = ''.join(whole_line[idx:(len(whole_line) - idx)])
                    if len(smaller_than_middle) < len(whole_line):
                        gap = (len(whole_line) - len(smaller_than_middle)) - idx
                        smaller_than_middle = ' '*gap+smaller_than_middle
                    print(smaller_than_middle)

                else:
                    bigger_than_middle = ''.join(whole_line[-idx-1:idx+1])
                    if len(bigger_than_middle) < len(whole_line):
                        gap = len(whole_line) - idx - 1
                        bigger_than_middle = ' '*gap+bigger_than_middle
                    print(bigger_than_middle)


print_sandglass()

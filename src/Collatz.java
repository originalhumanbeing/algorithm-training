/**
 * Created by Hyunjung on 2017. 11. 6..
 */
public class Collatz {
    public int collatz(int num) {
        int answer = 0;
        long num2 = (long) num;

        for (answer=0; num2 > 1; answer+=1) {
            if (answer >= 500) {
                return -1;
            }

            if (num2 % 2 == 0) {
                num2 = num2 / 2;
            } else if (num2 % 2 != 0) {
                num2 = num2 * 3 + 1;
            }
        }
        return answer;
    }

    // 아래는 테스트로 출력해 보기 위한 코드입니다.
    public static void main(String[] args) {
        Collatz c = new Collatz();
        int ex = 6;
        System.out.println(c.collatz(ex));
    }
}

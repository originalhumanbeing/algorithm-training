import java.util.Arrays;
import java.util.List;

/**
 * https://programmers.co.kr/learn/challenge_codes/118
 * reverseInt 메소드는 int형 n을 매개변수로 입력받습니다.
 * n에 나타나는 숫자를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요.
 * 예를들어 n이 118372면 873211을 리턴하면 됩니다.
 * n은 양의 정수입니다.
 */

public class ReverseInt {
    public int reverseInt(int n){
        //숫자를 문자열로 변경하고 배열로 분해
        String[] arr = String.valueOf(n).split("");
        //정렬을 하기 위해서 리스트로 변경
        List<String> list = Arrays.asList(arr);
        // 정렬
        list.sort((left, right) -> -left.compareTo(right));
        // 리스트를 문자열로 조인하고, 그 문자열을 인트로 변환
        return Integer.parseInt(String.join("", list));
    }

    // 아래는 테스트로 출력해 보기 위한 코드입니다.
    public static void  main(String[] args){
        ReverseInt ri = new ReverseInt();
        System.out.println(ri.reverseInt(118372));
    }
}
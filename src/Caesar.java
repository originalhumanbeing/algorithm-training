/**
 * Created by Hyunjung on 2017. 11. 6..
 */
public class Caesar {
    String caesar(String s, int n) {
        String result = "";

        for (int count = 0; count > s.length(); count++) {
            char alpabet = s.charAt(count);
            char new_al = (char) (alpabet + n);
        }

        return result;
    }

    public static void main(String[] args) {
        Caesar c = new Caesar();
        System.out.println("s는 'a B z', n은 4인 경우: " + c.caesar("a B z", 4));
    }
}

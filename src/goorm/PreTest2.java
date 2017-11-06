package goorm;

import java.util.Scanner;

/**
 * Created by Hyunjung on 2017. 9. 23..
 */
public class PreTest2 {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String arg = scan.nextLine();
        command(arg);
    }

    public static void command(String cmd) {
        try {
            String[] words = cmd.split(" ");
            String command = words[0],
                secretKey = words[1],
                text = words[3];
            int rotateCount = Integer.parseInt(words[2]);

            if (command.equals("encrypt")) {
                System.out.println(
                        rotate(addSecretKey(text, secretKey), rotateCount)
                );
            } else if (command.equals("decrypt") ) {
                System.out.println(
                        minusSecretKey(reverseRotate(text, rotateCount), secretKey)
                );
            }
        } catch (Exception e) {
            throw new IllegalArgumentException();
        }
    }

    public static String addSecretKey(String text, String secretKey) {
        StringBuilder newText = new StringBuilder();

        for(int i=0, sklen = secretKey.length(), len = text.length(); i<len; i++) {
            char ch = text.charAt(i);
            int skIndex = i >= sklen ? i - sklen : i;
            char skCh = secretKey.charAt(skIndex);

            int result = ch + (skCh - 'a');
            if (result > 'z')
                result = result - 26;

            newText.append((char) result);
        }

        return newText.toString();
    }

    public static String rotate(String text, int count) {

        for(int i=0; i<count; i++) {

            String sub = text.substring(1);
            sub += text.charAt(0);
            text = sub;
        }
        return text;
    }

    public static String reverseRotate(String text, int count) {

        for(int i=0; i<count; i++) {
            String sub = text.substring(0, text.length()-1);
            sub = text.charAt(text.length()-1) + sub;
            text = sub;
        }
        return text;
    }

    public static String minusSecretKey(String text, String secretKey) {

        StringBuilder newText = new StringBuilder();

        for(int i=0, sklen = secretKey.length(), len = text.length(); i<len; i++) {
            char ch = text.charAt(i);
            int skIndex = i >= sklen ? i - sklen : i;
            char skCh = secretKey.charAt(skIndex);

            int result = ch - (skCh - 'a');
            if (result < 'a')
                result = result + 26;


            newText.append((char) result);
        }

        return newText.toString();
    }
}

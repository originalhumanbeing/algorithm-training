package goorm;

import java.util.Stack;

public class MatchingBracket2 {
    public static void main(String[] args){
        int limit = Integer.parseInt(args[0]);

        for(int i=1; i<=limit; i++){
            System.out.println(read(args[i]));
        }
    }

    private static String read(String input){
        Stack<Character> stack = new Stack<>();

        for(int i=0, length=input.length(); i<length; i++){
            char ch = input.charAt(i);

            if(isLeftBracket(ch)){
                stack.push(ch);
            }

            if(isRightBracket(ch)){
                char left = stack.pop();
                if(!isPair(left, ch))
                    return "No";
            }
        }

        // only when there's leftbrackets like (((
        if(!stack.empty()){
            return "No";
        }

        return "Yes";
    }

    private static boolean isLeftBracket(char ch) {
        return ch == '['
                || ch == '{'
                || ch == '(';
    }

    private static boolean isRightBracket(char ch) {
        return ch == ']'
                || ch == '}'
                || ch == ')';
    }

    private static boolean isPair(char left, char right){
        return left == '[' && right == ']'
                || left == '{' && right == '}'
                || left == '(' && right == ')';
    }
}
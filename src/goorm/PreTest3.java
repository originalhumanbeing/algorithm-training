package goorm;

import java.util.*;

import java.util.stream.Collectors;

public class PreTest3 {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String arg = scan.nextLine();

        List<Condition> cond = Arrays.stream(arg.split(" ")).map(num -> Condition.from(Integer.parseInt(num))).collect(Collectors.toList());

        arg = scan.nextLine();
        int limit = Integer.parseInt(arg);
        List<Person> persons = new ArrayList<>();
        for(int i=0; i<limit ; i++ ) {
            String text = scan.nextLine();
            persons.add(new Person(text));
        }

        persons.sort((left, right) -> compare(cond, left, right));

        for (Person p : persons)
            p.print();

    }


    public static int compare(List<Condition> conds, Person left, Person right) {
        for (Condition cond : conds) {
            if (cond == Condition.GENDER && left.gender != right.gender) {
                return left.gender == Gender.M ? -1 : 1;
            } else if (cond == Condition.AGE && left.age != right.age) {
                return left.age - right.age;
            } else if (cond == Condition.PRIORITY
                    && left.priority != null && right.priority != null
                    && left.priority != right.priority) {
                return left.priority.order - right.priority.order;
            }
        }
        return 0;
    }

    public static class Person {
        Gender gender;
        int age;
        Priority priority;

        Person(String text) {
            String[] arr = text.split(" ");
            if (arr.length < 2 ) {
                throw new IllegalArgumentException();
            }

            gender = Gender.valueOf(arr[0]);
            age = Integer.parseInt(arr[1]);

            if (arr.length == 3) {
                priority = Priority.valueOf(arr[2]);
                if (gender == Gender.M && priority == Priority.PW)
                    throw new IllegalArgumentException();
            }

        }

        void print() {
            System.out.println(gender + " " + age + " " + (priority != null ? priority : ""));
        }
    }

    public enum Gender {
        F, M
    }

    public enum Priority {
        PW(1), DP(2), P(3);

        int order;

        Priority(int order) {
            this.order = order;
        }
    }

    public enum Condition {
        GENDER(1), AGE(2), PRIORITY(3);

        int order;

        Condition(int order) {
            this.order = order;
        }

        static Condition from(int order) {
            for (Condition cond : Condition.values()) {
                if (cond.order == order)
                    return cond;
            }
            throw new IllegalArgumentException();
        }
    }
}

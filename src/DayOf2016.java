import java.util.Calendar;

/**
 * https://programmers.co.kr/learn/challenge_codes/176
 * 2016년 1월 1일의 요일이 금요일임을 알고
 * 2016년의 특정 날짜의 요일을 찾는 프로그램
 */
public class DayOf2016 {

    public String getDayName(int month, int day)
    {
        int year = 2016;
        Calendar calendar = Calendar.getInstance();
        int sum = 0;

        for (int i=0; i<month-1; i++) { //1월이 0이기 때문에
            calendar.set(year, i, 1);
            int dayOfMonth = calendar.getActualMaximum(Calendar.DAY_OF_MONTH);
            sum += dayOfMonth;
        }
        sum += day;

        int mod = sum % 7;

        switch(mod) {
            case 1 :
                return "FRI";
            case 2 :
                return "SAT";
            case 3 :
                return "SUN";
            case 4 :
                return "MON";
            case 5 :
                return "TUE";
            case 6 :
                return "WED";
            default:
                return "THU";
        }
    }
    public static void main(String[] args)
    {
        DayOf2016 test = new DayOf2016();
        System.out.println(test.getDayName(5,24));
        System.out.println(test.getDayName(5,26));
        System.out.println(test.getDayName(12,25));
    }
}

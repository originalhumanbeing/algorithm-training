import java.util.Calendar;

/**
 * Created by Hyunjung on 2017. 9. 2..
 */
public class DayOf2016 {

    public String getDayName(int month, int day)
    {

        int sum = 0;
        for (int i=0; i<month-1; i++) {
            Calendar calendar = Calendar.getInstance();
            int year = 2016;
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
        int a=5, b=24;
        System.out.println(test.getDayName(a,b));
    }
}

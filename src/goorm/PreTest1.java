package goorm;

import java.util.*;
import java.util.function.Consumer;

public class PreTest1 {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String arg = scan.nextLine();
        printItems(getRemovedItems(arg));
    }

    private static void printItems(List<String> list) {
        if(list.size() <= 0 ) {
            System.out.println("0");
            return;
        }

        for(String item : list) {
            System.out.println(item);
        }
    }

    private static List<String> getRemovedItems(String items)
    {
        List<String> itemQueue = new ArrayList<>();
        List<String> removedItems = new ArrayList<>();

        String[] arr = items.split(" ");
        for (String item : arr) {

            if (itemQueue.size() < 3) {
                itemQueue.add(item);
            } else {
                if (itemQueue.contains(item)) {
                    itemQueue.remove(item);
                    itemQueue.add(item);
                } else {
                    removedItems.add(itemQueue.get(0));
                    itemQueue.remove(0);
                    itemQueue.add(item);
                }
            }
        }

        return removedItems;
    }
}

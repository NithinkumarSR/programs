package java1;

import java.util.*;

public class findstring {
    public static void main(String args[]) {
        Scanner s = new Scanner(System.in);
        int n1 = s.nextInt() + 64;
        int n2 = s.nextInt() + 64;
        int c = 0;
        String st = "";
        ArrayList<Character> al = new ArrayList<>();
        for (int i = n1; i <= n2; i++) {
            al.add((char) i);
            st += (char) i;
        }
        for (int i = 0; i < al.size(); i++) {
            c++;
            for (int j = 0; j < al.size(); j++) {

            }
        }
    }
}

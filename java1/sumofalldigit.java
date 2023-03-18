package java1;

import java.util.*;

class sumofalldigit {
    static int sum(int x) {
        int y = 0;
        while (x > 0) {
            y += x % 10;
            x /= 10;

        }
        return y;
    }

    public static void main(String args[]) {
        Scanner s = new Scanner(System.in);
        int n = s.nextInt();
        int result = 0;
        for (int i = 1; i <= n; i++) {
            result += sum(i);
        }
        System.out.println(result);
        s.close();
    }
}
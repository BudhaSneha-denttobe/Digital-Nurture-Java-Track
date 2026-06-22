
public class Main {
    public static void main(String[] args) {
        Logger obj1 = Logger.getInstance();
        Logger obj2 = Logger.getInstance();

        if (obj1 == obj2) {
            System.out.println("SUCCESS: Both obj1 and obj2 are the EXACT same instance!");
        } else {
            System.out.println("FAILURE: They are different instances.");
        }

    }
}

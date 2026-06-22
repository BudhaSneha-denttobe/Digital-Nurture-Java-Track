public class SearchTest {

    public static void main(String[] args) {

        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Mobile", "Electronics"),
                new Product(103, "Shoes", "Fashion"),
                new Product(104, "Watch", "Accessories"),
                new Product(105, "Book", "Education")
        };

        int searchId = 104;

        System.out.println("LINEAR SEARCH");
        Product result1 = SearchUtils.linearSearch(products, 101);

        if (result1 != null) {
            result1.display();
        } else {
            System.out.println("Product not found");
        }

        System.out.println("BINARY SEARCH");
        Product result2 = SearchUtils.binarySearch(products, 103);

        if (result2 != null) {
            result2.display();
        } else {
            System.out.println("Product not found");
        }
    }
}

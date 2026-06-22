public class SearchUtils {

    // Linear Search
    public static Product linearSearch(Product[] products, int key) {

        for (int i = 0; i < products.length; i++) {
            if (products[i].productId == key) {
                return products[i];
            }
        }

        return null;
    }

    // Binary Search
    public static Product binarySearch(Product[] products, int key) {

        int low = 0;
        int high = products.length - 1;

        while (low <= high) {

            int mid = (low + high) / 2;

            if (products[mid].productId == key) {
                return products[mid];
            }

            if (products[mid].productId < key) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return null;
    }
}
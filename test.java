import java.io.IOException;

public class test {
    public static void main(String[] args) {
        System.out.println("Java program starting");

        try {
            String nodeCommand = "node";
            String scriptPath = "puppetterTuto/index.js"; // Assuming both files are in the same folder
            
            // Build the command
            ProcessBuilder processBuilder = new ProcessBuilder(nodeCommand, scriptPath);
            
            // Redirect error stream to output stream
            processBuilder.redirectErrorStream(true);
            
            // Start the process
            Process process = processBuilder.start();
            
            
            // Wait for the process to complete
            int exitCode = process.waitFor();
            System.out.println("Node.js script executed with exit code: " + exitCode);
            
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }
}

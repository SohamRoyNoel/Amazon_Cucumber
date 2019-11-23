package StepDefinations;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

public class HighlightElement extends Chrome_init {

	public static void highlightElement(WebElement element) {
        for (int i = 0; i <2; i++) {
            JavascriptExecutor js = (JavascriptExecutor) driver;
            js.executeScript("arguments[0].setAttribute('style', arguments[1]);", element, "color: yellow; border: 2px solid yellow;");
            js.executeScript("arguments[0].setAttribute('style', arguments[1]);", element, "");
            }
        }
	
}

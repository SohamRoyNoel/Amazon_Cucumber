package StepDefinations;

import cucumber.api.java.After;

public class Hooks extends Chrome_init {

	@After("@amazonBROWSER, @amazonURL, @amazonSELECTION, @amazonBOOKselection")
	public void closeBrowser() {
		driver.close();
	}
	
}

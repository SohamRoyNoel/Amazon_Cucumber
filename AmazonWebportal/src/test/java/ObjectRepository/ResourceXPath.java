package ObjectRepository;

public class ResourceXPath {

	public static String url = "https://www.amazon.in/";
	public static String dropdownALL = "//*[@id='searchDropdownBox']";
	public static String searchFIELD = "//*[@id='twotabsearchtextbox']";
	public static String searchBUTTON = "//*[@id='nav-search']/form/div[2]/div/input";
	public static String searchCOUNT = "//*[contains(text(),'results for')]";
	public static String bookNAME = "//*[@class='a-size-medium a-color-base a-text-normal' and contains(text(), '";
	
	public static String targetBookAuthorNAME = "/html/body/div[2]/div[2]/div[4]/div[5]/div[1]/div[2]/span/a";
	public static String targetBookPRICE = "//*[@id='soldByThirdParty']//child::span";
	public static String targetBookCLASS = "a-size-medium a-color-price inlineBlock-display offer-price a-text-normal price3P";	
	
	public static String prepareBookname(String bknm) {
		String prepstr = bookNAME+bknm+"')]";
		return prepstr;
	}
}
